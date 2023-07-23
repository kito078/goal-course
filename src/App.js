import { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseInput";
import CourseGoalList from "./components/GourseList/CourseGoalList";

function App() {
  const [courseGoals, setCourseCoals] = useState([
    { text: "do all exercice", id: "g1" },
    { text: "Finish the course", id: "g2" },
  ]);
  //console.log(courseGoals);

  const addGoalHandler = (enteredText) => {
    setCourseCoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseCoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p>No goal at the moment</p>;

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="App">
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
