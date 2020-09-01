import React from "react";
import TaskCard from "./TaskCard";

const OverdueContainer = (props) => {
  const { tasks } = props;
  const now = new Date();
  const cards = tasks.map((task) =>
    !task.completed && Number(now) > Number(new Date(task.deadline)) ? (
      <TaskCard task={task} key={task.id} />
    ) : (
      false
    )
  );
  return (
    <div className="overdue">
      <h3>Overdue Tasks</h3>
      {cards}
    </div>
  );
};

export default OverdueContainer;
