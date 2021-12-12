import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onSaveUserExpense(expense);
  };

  const editingHandler = () => {
    setIsEditing(true);
  };

  const cancelButtonHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveData={saveDataHandler}
          onCancelHandler={cancelButtonHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
