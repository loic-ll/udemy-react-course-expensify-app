import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', { 
    preventDefault: () => {} 
  });

  expect(wrapper.state('error').length).not.toBe(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set "description" on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new value';

  wrapper.find('[name="description"]').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set "note" on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new value';

  wrapper.find('[name="note"]').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set "amount" if valid on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '99.99';

  wrapper.find('[name="amount"]').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set "amount" if invalid on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '99.999';

  wrapper.find('[name="amount"]').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call omSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  let {id, ...expense} = expenses[0];
  expect(onSubmitSpy).toHaveBeenCalledWith(expense);
});

test('should set new date en date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();

  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;

  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});

