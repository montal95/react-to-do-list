import React from "react";

const TaskCard = (props) => {
  const { task } = props;
  let now = new Date();
  let timeStart = new Date(task.timeStart);
  let deadLine = new Date(task.deadline);
  const days = Math.floor((deadLine - now) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    ((deadLine - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    ((deadLine - now) % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(((deadLine - now) % (1000 * 60)) / 1000);
  let timeLeft = `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  return (
    <div className="card">
      <div className="card-container">
        <h4>{task.name}</h4>
        <p>
          Date Started: {timeStart.toDateString()},{" "}
          {timeStart.toLocaleTimeString("en-US")}
        </p>
        <p>
          Deadline: {deadLine.toDateString()},{" "}
          {deadLine.toLocaleTimeString("en-US")}
        </p>
        <p>Time left: {seconds >= 0 ? timeLeft : `---`}</p>
      </div>
    </div>
  );
};

export default TaskCard;
