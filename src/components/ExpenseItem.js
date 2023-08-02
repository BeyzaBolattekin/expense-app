import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expenseItem">
      <ExpenseDate date={props.expense.date} />
      <div className="expenseTitle">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expensePrice">${props.expense.amount}</div>
    </div>
  );
}

export default ExpenseItem;
