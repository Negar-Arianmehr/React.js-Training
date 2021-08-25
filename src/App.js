//it works behind the seance
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//here we add an array for using
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 1294.12,
    date: new Date(2020, 5, 1),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 256.85,
    date: new Date(2020, 4, 25),
  },
  {
    id: "e4",
    title: "Cell Phone",
    amount: 528.23,
    date: new Date(2021, 4, 5),
  },
];
//we can write function with arrow function for all components
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //in the old version of react.js by import "React" from react in all components and write code like
  //return React.createElement(
  //  "div", {}, React.createElement("h2", {}, "HELLO")
  // )
  //AND it is JSX solution
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
