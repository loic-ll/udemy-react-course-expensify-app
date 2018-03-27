console.log('Redux extensify playground');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    notes = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

// Expenses Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };

    case 'SORT_BY_DATE':
      return { ...state, sortBy: action.sortBy };

    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: action.sortBy };

    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }

    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }

    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch = !Number.isInteger(startDate) || expense.createdAt >= startDate;
      const endDateMatch = !Number.isInteger(endDate) || expense.createdAt <= endDate;
      const textMatch = !text || expense.description && expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};


// Store creation
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100000, createdAt: -21000 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
//store.dispatch(removeExpense({ id: expense1.expense.id }));
//store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
//store.dispatch(setTextFilter('cof'));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//tore.dispatch(setStartDate(-1000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));
//
const demoState = {
  expenses: [{
    id: '',
    description: '',
    note: '',
    amount: 1000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};
