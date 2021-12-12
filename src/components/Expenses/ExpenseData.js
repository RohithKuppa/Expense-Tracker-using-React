import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter.js";
import "./ExpenseData.css";
import Card from "../UI/Card.js";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from "./ExpensesChart.js";

function ExpenseData(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectedYear = (year) => {
    setFilteredYear(year);
  };

  const filteredData = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSelectedYear={selectedYear}
        />
        <ExpensesChart dataFiltered={filteredData} />
        <ExpenseList item={filteredData} year={filteredYear} />
      </Card>
    </div>
  );
}

export default ExpenseData;
