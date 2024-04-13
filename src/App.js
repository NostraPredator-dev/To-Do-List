import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Navbar from "./Navbar";
import filterTasks from "./taskfilters";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    updatedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task, index) => index !== taskId));
  };

  return (
    <div className="app dark-mode">
      <Navbar setFilter={setFilter} />
      <div className="content">
        {filter === "all" && <TaskForm addTask={addTask} />}
        <TaskList
          tasks={filterTasks(tasks, filter)}
          onDelete={deleteTask}
          time={filter}
        />
      </div>
    </div>
  );
};

export default App;
