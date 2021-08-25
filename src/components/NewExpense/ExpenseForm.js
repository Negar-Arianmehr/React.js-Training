import React, { useState } from "react";
import "./ExpensForm.css";

const ExpenseForm = (props) => {
  //1. multi-state approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // //we put it in string even though it is number ,because setState return a string always
  const [enteredDate, setEnteredDate] = useState("");

  //2.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandle = (event) => {
    console.log(event.target);
    //in this event in the input, target , you can see new value that you write so
    // console.log(event.target.value);
    //1.
    setEnteredTitle(event.target.value);

    //2.first approach
    // setUserInput({
    //   //you would basically dump the Abra keys because when you update your state react will not merge this with the old state.
    //   //it will simply replace the old state with the new one.And if your new one is a object with one key value pair here
    //   //the old state will be replaced and therefore The other are two key value pairs for amounted to date would be lost.
    //   //So we use the spread operator to overwrite entire title. So the other values arent thrown away.
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //if you depend on the previous state,
    //2. second approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandle = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  //But we can make a object for sorting the data
  const submitHandler = (event) => {
    //we stop the loading page that is default behavior of form when it will be submitted
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandle}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          {
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
          }
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
