import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isAdd, setIsAdd] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsAdd(false);
  }

  function btnAddHandler() {
    setIsAdd(true);
  }

  function btnCancelAddHandler() {
    setIsAdd(false);
  }

  return (
    <div className="new-expense">
      {!isAdd ? (
        <button onClick={btnAddHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={btnCancelAddHandler}
        />
      )}
      {/* <button onClick={btnAddHanler}>Add New Expense</button>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
}

export default NewExpense;
