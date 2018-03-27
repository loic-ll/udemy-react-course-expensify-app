import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses.js'

test('should set default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expense if id doesnt exist', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);

});

test('should add an expense ', () => {
  const expense = {
    id: '99',
    description: '99',
    note: '99',
    amount: 99,
    createdAt: 99
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);

});

test('should edit an expense', () => {
  const updates = {
    id: expenses[0].id,
    description: '99',
    note: '99',
    amount: 99,
    createdAt: 99
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: updates.id,
    updates 
  };
  const state = expensesReducers(expenses, action);
  expect(state[0]).toEqual(updates);
});

test('should not edit any expense if if doesnt exist', () => {
  const updates = {
    id: '-1',
    description: '99',
    note: '99',
    amount: 99,
    createdAt: 99
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: updates.id,
    updates 
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);

});
