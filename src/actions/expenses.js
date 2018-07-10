import {database} from '../firebase/firebase';

const getExpensesRef = uid => database.ref(`users/${uid}/expenses`);

const getUserId = state => state.auth.uid;

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

export const editExpense = (id, values) => ({
  type: 'EDIT_EXPENSE',
  id,
  values,
});

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startAddExpense = (expense = defaultValues) => {
  return (dispatch, getState) => {
    return getExpensesRef(getUserId(getState()))
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          }),
        );
      });
  };
};

export const startEditExpense = (id, values) => {
  return (dispatch, getState) => {
    return getExpensesRef(getUserId(getState()))
      .child(id)
      .update(values)
      .then(() => {
        dispatch(editExpense(id, values));
      });
  };
};

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    return getExpensesRef(getUserId(getState()))
      .child(id)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    return getExpensesRef(getUserId(getState()))
      .once('value')
      .then(snapshot => {
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
