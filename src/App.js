import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Navbar from "./Navbar";
import filterTasks from "./taskfilters";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    setTasks(() => {
      const updatedTasks = [...tasks, newTask];
      updatedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (remTask) => {
    setTasks(() => {
      const updatedTasks = tasks.filter((task) => remTask.id !== task.id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
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
