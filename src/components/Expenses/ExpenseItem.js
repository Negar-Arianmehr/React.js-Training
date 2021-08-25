// import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date()
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 258.24

  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title)

  // const clickHandler = () => {
  //     setTitle("updating")
  //     console.log(title)
  // }

  return (
    //replace div with card
    <li>
      <Card className="expense-item">
        {/*//you can write self-closing <ExpenseDate />*/}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
