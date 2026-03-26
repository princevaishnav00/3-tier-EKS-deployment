import React from "react";
import Tasks from "./Tasks";
import {
  Paper,
  TextField,
  Checkbox,
  Button,
  Typography
} from "@material-ui/core";
import "./App.css";

class App extends Tasks {
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks, currentTask } = this.state;
    const completedCount = tasks.filter(t => t.completed).length;

    return (
      <div className="App">
        <Paper elevation={3} className="container">

          {/* Heading */}
          <Typography variant="h3" component="h1" className="heading">
            DevOps Task Manager
          </Typography>

          {/* Add Task Form */}
          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ marginBottom: "15px" }}
          >
            <TextField
              variant="outlined"
              size="small"
              value={currentTask}
              required
              onChange={this.handleChange}
              placeholder="Add a new task..."
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Add Task
            </Button>
          </form>

          {/* Task Counter */}
          <Typography style={{ marginBottom: "10px", color: "#666" }}>
            {tasks.length === 0
              ? "No tasks yet "
              : `${completedCount} of ${tasks.length} completed`}
          </Typography>

          {/* Task List */}
          <div>
            {tasks.map((task) => (
              <Paper key={task._id} className="task_container">

                <Checkbox
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                  size="medium"
                />

                <Typography
                  className={task.completed ? "task line_through" : "task"}
                >
                  {task.task}
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => this.handleDelete(task._id)}
                >
                  Delete
                </Button>

              </Paper>
            ))}
          </div>

        </Paper>
      </div>
    );
  }
}

export default App;