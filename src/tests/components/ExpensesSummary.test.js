import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render No Expenses', () => {
  const wrapper = shallow(<ExpensesSummary total={0} count={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render 2 expenses totalling €94.34', () => {
  const wrapper = shallow(<ExpensesSummary total={9434} count={2} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render 1 expense of value €94.34', () => {
  const wrapper = shallow(<ExpensesSummary total={9434} count={1} />);
    expect(wrapper).toMatchSnapshot();
});
