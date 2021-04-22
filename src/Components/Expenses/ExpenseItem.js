import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  var componentDate = props.date;
  var componentTitle = props.title;
  var componentAmount = props.amount;

  //Calling useState to update the state
  const [title, setTitle] = useState(componentTitle);

  const clickHandler = () => {
    //Changing the title by changing the State
    setTitle("Title Updated");
    console.log("Updated!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={componentDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{componentAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
