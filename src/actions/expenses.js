import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (data = {}) => {
  return (dispatch) => {
    const { 
      description = '', 
      note = '',
      amount = 0,
      createdAt = 0 } = data;

    const expense = {
      description,
      note,
      amount,
      createdAt
    };

    return database.ref('expenses').push(expense).then(ref => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (id) => {
  return dispatch => {
    return database.ref(`expenses/${id}`).remove()
      .then(() => { dispatch(removeExpense(id)) });
  };
};

// SET_EXPENSES

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    return database.ref('expenses').once('value').then(snapshot => {
      const expenses = [];
      snapshot.forEach(childsnap => {
        expenses.push({
          id: childsnap.key,
          ...childsnap.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};

