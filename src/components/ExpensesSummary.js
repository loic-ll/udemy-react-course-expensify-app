import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getTotal from '../selectors/expenses-total'

const ExpensesSummary = ({count, total}) => {
  const formattedTotal = numeral(total / 100).format('0,0.00 $');
  return (
    <div>
      {
        (count === 0) ? (<h2>No expenses</h2>) : (
          (count === 1) ? (<h2>1 expense: {formattedTotal}</h2>) :
          (<h2>{count} expenses totalling: {formattedTotal}</h2>) )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);

  return {
    count: expenses.length,
    total: getTotal(expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
export { ExpensesSummary }
