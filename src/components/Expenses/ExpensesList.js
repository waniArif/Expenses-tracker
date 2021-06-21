import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({ filteredItems }) => {
  if (filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredItems.map((item) => {
        const { id, title, amount, date } = item;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
