import React from "react";
import TaskCard from "./TaskCard";

const TaskContainer = (props) => {
  const { tasks } = props;
  const now = new Date();
  const cards = tasks.map((task) =>
    !task.completed && Number(now) < Number(new Date(task.deadline)) ? (
      <TaskCard task={task} key={task.id} />
    ) : (
      false
    )
  );

  return (
    <div>
      <h3>Current Tasks</h3>
      {cards}
    </div>
  );
};

export default TaskContainer;
