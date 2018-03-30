import getExpensesTotal from '../../selectors/expenses-total'

const expenses = [
  { id: 0, amount: 10 },
  { id: 1, amount: 22 },
  { id: 2, amount: 300 },
];


test('should return 0 if no expense', () => {
  const result = getExpensesTotal([]);
  console.log(result);
  expect(true).toBe(false);
  expect(result).toBe(null);
});

test('should sum a single expense', () => { });
test('should sum multiple expenses', () => { });

