import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, 
  sortByDate, 
  sortByAmount, 
  setStartDate, 
  setEndDate,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
  const value = altFilters.text; 
  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(setTextFilter).toHaveBeenCalledWith(altFilters.text);
});

test('should sort by date', () => {
  const value = filters.sortBy; 
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = altFilters.sortBy; 
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: filters.startDate,
    endDate: filters.endDate,
  });

  expect(setStartDate).toHaveBeenCalledWith(filters.startDate);
  expect(setEndDate).toHaveBeenCalledWith(filters.endDate);
});

test('should handle date focus', () => {
  let focused = "startDate";
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(focused);

  focused = "endDate";
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(focused);
});


