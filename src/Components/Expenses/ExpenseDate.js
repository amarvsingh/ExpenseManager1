import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const componentMonth = props.date.toLocaleString("en-US", { month: "long" });
  const componentDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const componentYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{componentMonth}</div>
      <div className="expense-date__day">{componentDay}</div>
      <div className="expense-date__year">{componentYear}</div>
    </div>
  );
};

export default ExpenseDate;
