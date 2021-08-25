import Card from "../UI/Card";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Card className="expenses-filter__control">
      <div>
        <label htmlFor="">Filter By Year</label>
      </div>
      <div>
        <select
          value={props.selected}
          name="dropdown"
          id=""
          onChange={dropdownChangeHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
