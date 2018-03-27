import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action obj', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});


test('should setup edit expense action obj', () => {
  const action = editExpense('123', { note: 'new note!' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'new note!' }
  });
});

test('should setup add expense action obj with provided values', () => {
  const data = {
    description: 'desc',
    amount: 123,
    createdAt: 1000,
    notes: 'notenote'
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action obj with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0,
    }
  });
});
