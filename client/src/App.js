import React, { Component } from "react";
import "reset-css";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskContainer from "./components/TaskContainer";
import CompleteContainer from "./components/CompleteContainer";
import OverdueContainer from "./components/OverdueContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      formError: false,
      now: new Date(),
    };
  }

  fetchTasks = async () => {
    console.log("Fetching tasks");
    const res = await fetch("http://localhost:5000/tasks");
    const tasks = await res.json();
    // console.log(tasks);
    this.setState({
      tasks: [...tasks],
    });
    this.countDown();
  };

  newTaskSubmit = async (event) => {
    event.preventDefault();
    if (event.target.task.value === "" || event.target.deadline.value === "") {
      this.setState({
        formError: true,
      });
    } else {
      const data = {
        name: event.target.task.value,
        deadline: new Date(event.target.deadline.value).toJSON(),
        timeStart: new Date(0).toJSON(),
        completed: false,
      };
      event.target.reset();
      const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch("http://localhost:5000/tasks", reqObj);
      const newTask = await res.json();
      this.setState({
        tasks: [...this.state.tasks, newTask],
        formError: false,
      });
    }
  };

  countDown = () => {
    this.interval = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  };

  removeInterval = () => {
    clearInterval(this.interval);
  };

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do App</h1>
        </header>
        <div className="container">
          <TaskForm
            submitHandler={this.newTaskSubmit}
            formError={this.state.formError}
          />
          <TaskContainer tasks={this.state.tasks} now={this.state.now} />
        </div>
        <div className="container">
          <CompleteContainer tasks={this.state.tasks} now={this.state.now} />
          <OverdueContainer tasks={this.state.tasks} now={this.state.now} />
        </div>
      </div>
    );
  }
}

export default App;
