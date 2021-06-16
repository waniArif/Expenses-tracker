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

  const filteredItems = props.items.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={handleFilterYearChange}
        />
        {filteredItems.map((item) => {
          const { id, title, amount, date } = item;
          return (
            <li key={id}>
              <ExpenseItem
                /* {...item} */ title={title}
                amount={amount}
                date={date}
              />
            </li>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
