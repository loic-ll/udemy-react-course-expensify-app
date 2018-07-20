import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    let state = (this.state = {
      description: '',
      note: '',
      amount: '',
      error: '',
      createdAt: moment(),
      calendarFocused: false,
    });

    if (props.expense) {
      const expense = props.expense;
      state.description = expense.description;
      state.note = expense.note;
      state.amount = (expense.amount / 100).toString();
      state.createdAt = moment(expense.createdAt);
    }
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({createdAt}));
    }
  };
  onFocusChange = ({focused: calendarFocused}) => {
    this.setState(() => ({calendarFocused}));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide all informations'}));
    } else {
      this.setState(() => ({error: undefined}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          autoFocus
          className="text-input"
          name="description"
          onChange={this.onDescriptionChange}
          placeholder="Description"
          type="text"
          value={this.state.description}
        />
        <input
          className="text-input"
          name="amount"
          onChange={this.onAmountChange}
          placeholder="Amount"
          step="0.01"
          type="number"
          value={this.state.amount}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          focused={this.state.calendarFocused}
          isOutsideRange={() => false}
          numberOfMonths={1}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
        />
        <textarea
          className="textarea"
          name="note"
          onChange={this.onNoteChange}
          placeholder="Add a note (optional)"
          value={this.state.note}
        />
        <div>
          <button className="button">Save</button>
        </div>
      </form>
    );
  }
}
