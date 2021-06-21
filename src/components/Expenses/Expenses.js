import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList filteredItems={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
