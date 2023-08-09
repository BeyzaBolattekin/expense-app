import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./CreateExpenses.css";

function CreateExpenses(props) {
  const expenseItems = props.expenses.map((expense, idx) => (
    <ExpenseItem key={idx} expense={expense}></ExpenseItem>
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default CreateExpenses;
