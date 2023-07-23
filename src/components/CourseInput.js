import React, { useState } from "react";
import "./CourseInput.css";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  //console.log(enteredValue);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input onChange={goalInputChangeHandler} type="text" />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default CourseInput;
