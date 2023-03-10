import { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);
  const showFormHandler = () => {
    setAddingExpense(!addingExpense);
  };
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };
  const cancelHandler = () => {
    setAddingExpense(false);
  };
  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
