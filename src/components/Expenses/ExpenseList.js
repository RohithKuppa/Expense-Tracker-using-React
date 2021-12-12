import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  
  if(props.item.length===0){
      return <h2 className="expenses-list__fallback">NO EXPENSES FOUND IN {props.year}</h2>
  }
  
    return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
}

export default ExpenseList;
