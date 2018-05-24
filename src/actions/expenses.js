import {database} from '../firebase/firebase';

const expensesRef = database.ref('expenses');

const defaultValues = {
  amount: 0,
  createdAt: 0,
  description: '',
  note: '',
};

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expense = defaultValues) => {
  return dispatch => {
    return expensesRef.push(expense).then(ref => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        }),
      );
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, values) => ({
  type: 'EDIT_EXPENSE',
  id,
  values,
});

export const startEditExpense = (id, values) => {
  return dispatch => {
    return expensesRef
      .child(id)
      .update(values)
      .then(() => {
        dispatch(editExpense(id, values));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = id => {
  return dispatch => {
    return expensesRef
      .child(id)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

// SET_EXPENSES

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return dispatch => {
    return expensesRef.once('value').then(snapshot => {
      const expenses = [];
      snapshot.forEach(childsnap => {
        expenses.push({
          id: childsnap.key,
          ...childsnap.val(),
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
