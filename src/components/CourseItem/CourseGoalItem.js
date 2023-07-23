import React from "react";

function CourseGoalItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <li onClick={deleteHandler} className="goal-item">
        {props.children}
      </li>
    </div>
  );
}

export default CourseGoalItem;
