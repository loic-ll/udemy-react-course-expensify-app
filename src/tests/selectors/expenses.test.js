import moment from 'moment'
import selector from '../../selectors/expenses'
import expenses from '../fixtures/expenses.js'

test('should filter by text', () => {
  const filters = {
    text: 'd',
    sortBy: 'date',
    startDate: null,
    endDate: null
  };
  
  const result = selector(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: null,
    sortBy: 'date',
    startDate: moment(0),
    endDate: null
  };
  
  const result = selector(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: null,
    sortBy: 'date',
    startDate: null,
    endDate: moment(0)
  };
  
  const result = selector(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by Date', () => {
  const filters = {
    text: null,
    sortBy: 'date',
    startDate: null,
    endDate: null
  };
  
  const result = selector(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by Amount', () => {
  const filters = {
    text: null,
    sortBy: 'amount',
    startDate: null,
    endDate: null
  };
  
  const result = selector(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
