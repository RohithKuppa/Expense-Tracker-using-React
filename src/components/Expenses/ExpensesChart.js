import React from "react";
import Chart from "../Chart/Chart.js";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expenseAmt of props.dataFiltered) {
    const expenseMonth = expenseAmt.date.getMonth(); // getMonth() returns value from 0 => jan = 0
    chartDataPoints[expenseMonth].value += expenseAmt.amount;
  }

  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
}

export default ExpensesChart;
