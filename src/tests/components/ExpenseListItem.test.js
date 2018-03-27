import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem  from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('ExpenseListItem should render without any props', () => {
  const wrapper = shallow(<ExpenseListItem />);
  expect(wrapper).toMatchSnapshot();
});

test('ExpenseListItem should render with props', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
