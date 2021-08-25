import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  //we can <.... /> use it when we have no content between opening and closing tag
  const [filteredYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*filtering with message for empty item*/}
        {/*3*/}
        <ExpensesList items={filterExpenses} />

        {/*2*/}
        {/*{filterExpenses.length === 0 && <p>No expenses found.</p>}*/}
        {/*{filterExpenses.length > 0 &&*/}
        {/*  filterExpenses.map((expense) => (*/}
        {/*    <ExpenseItem*/}
        {/*      key={expense.id}*/}
        {/*      title={expense.title}*/}
        {/*      amount={expense.amount}*/}
        {/*      date={expense.date}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*1.*/}
        {/*{filterExpenses.length === 0 ? <p>No expenses Found.</p>:*/}
        {/*  filterExpenses.map((expense) => (*/}
        {/*  <ExpenseItem*/}
        {/*    key={expense.id}*/}
        {/*    title={expense.title}*/}
        {/*    amount={expense.amount}*/}
        {/*    date={expense.date}*/}
        {/*  />*/}
        {/*))*/}
        {/*}*/}

        {/*/filtering without message for empty item/*/}
        {/*{filterExpenses.map((expense) => (*/}
        {/*  <ExpenseItem*/}
        {/*    key={expense.id}*/}
        {/*    title={expense.title}*/}
        {/*    amount={expense.amount}*/}
        {/*    date={expense.date}*/}
        {/*  />*/}
        {/*))}*/}

        {/*/Initial method/*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[0].title}*/}
        {/*  amount={props.items[0].amount}*/}
        {/*  date={props.items[0].data}*/}
        {/*/>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[1].title}*/}
        {/*  amount={props.items[1].amount}*/}
        {/*  date={props.items[1].data}*/}
        {/*></ExpenseItem>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[2].title}*/}
        {/*  amount={props.items[2].amount}*/}
        {/*  date={props.items[2].data}*/}
        {/*></ExpenseItem>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[3].title}*/}
        {/*  amount={props.items[3].amount}*/}
        {/*  date={props.items[3].data}*/}
        {/*></ExpenseItem>*/}
      </Card>
    </div>
  );
}

export default Expenses;
