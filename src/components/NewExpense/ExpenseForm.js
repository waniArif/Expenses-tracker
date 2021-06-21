import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  };

  const handleCancel = () => {
    props.clickButton();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={handleAmountChange}
            type="number"
            name="number"
            id="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={handleDateChange}
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      <div className="new-expense__actions_cancel">
        <button onClick={handleCancel} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
