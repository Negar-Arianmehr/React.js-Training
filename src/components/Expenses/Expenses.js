import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props) {
//we can <.... /> use it when we have no content between opening and closing tag
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].data} />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].data}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].data}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].data}>
            </ExpenseItem>
        </Card>
    )
}

export default Expenses