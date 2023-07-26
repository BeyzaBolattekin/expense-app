import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expenseItem">
      <div className="expenseDate">{props.date.toISOString()}</div>
      <div className="expenseTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="expensePrice">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
