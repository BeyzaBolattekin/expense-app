import ExpenseItem from "./ExpenseItem.js";
import "./CreateExpenses.css";

function CreateExpenses(props) {
  const expenseItems = props.expenses.map((expense, idx) => (
    <ExpenseItem key={idx} expense={expense}></ExpenseItem>
  ));
  return <div className="expenses">{expenseItems}</div>;
}

export default CreateExpenses;
