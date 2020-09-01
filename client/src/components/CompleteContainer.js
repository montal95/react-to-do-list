import React from "react";
import TaskCard from "./TaskCard";

const CompleteContainer = (props) => {
  const { tasks } = props;
  const cards = tasks.map((task) =>
    task.completed ? <TaskCard task={task} key={task.id} /> : false
  );

  return (
    <div className="completed">
      <h3>Completed Tasks</h3>
      {cards}
    </div>
  );
};

export default CompleteContainer;
