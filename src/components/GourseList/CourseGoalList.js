import React from "react";
import CourseGoalItem from "../CourseItem/CourseGoalItem";

function CourseGoalList(props) {
  return (
    <ul className="goat-list">
      {props.items.map((goal) => {
        return (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
