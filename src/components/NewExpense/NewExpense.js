import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getMilliseconds().toString(),
    };
    props.onAddExpense(expenseData);
    setIsButtonClicked(false);
  };
  const handleClick = () => {
    setIsButtonClicked(true);
  };
  const handleStop = () => {
    setIsButtonClicked(false);
  };
  return (
    <div className="new-expense">
      {!isButtonClicked ? (
        <button onClick={handleClick}>Add new Expense</button>
      ) : (
        <ExpenseForm
          clickButton={handleStop}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
