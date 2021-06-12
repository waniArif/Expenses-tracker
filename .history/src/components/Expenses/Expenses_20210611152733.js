import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const handleFilterYearChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={handleFilterYearChange}
        />
        {props.items.map((item) => {
          const { id, title, amount, date } = item;
          return (
            <li key={id}>
              <ExpenseItem {...item} />
            </li>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
