import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.expense.date} />
      <div className="expenseTitle">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expensePrice">${props.expense.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
