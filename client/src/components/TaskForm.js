import React, { Component } from "react";

class TaskForm extends Component {
    render() {
        const {submitHandler, formError} = this.props;
        const errorMessage = formError ? <span id="error">Please fill out the entire form</span> : ""
    return (
      <div>
        <h3>New Task</h3>
        <form onSubmit={submitHandler}>
          <label>
            Task:
            <br />
            <input type="text" name="task" />
            <br />
          </label>
          <label>
            Deadline: <br />
            <input type="datetime-local" name="deadline" />
            <br />
          </label>
          <input id="submitButton" type="submit" value="Submit" />
        </form>
        {errorMessage}
      </div>
    );
  }
}

export default TaskForm;
