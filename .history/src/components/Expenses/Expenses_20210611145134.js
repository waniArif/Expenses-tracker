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
            <ul>
              <li key={id}>
                <ExpenseItem
                  key={id}
                  title={title}
                  amount={amount}
                  date={date}
                />
              </li>
            </ul>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
