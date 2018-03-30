import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should return 0 if no expense', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test('should sum a single expense', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(10);
});

test('should sum multiple expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(332);
});

