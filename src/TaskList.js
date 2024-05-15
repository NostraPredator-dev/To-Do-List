import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, onDelete, time }) {
  if (time === "next7days") {
    const next7days = [];
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(currentDate);
      currentDay.setDate(currentDay.getDate() + i);
      const currentDayTasks = tasks.filter((task) => {
        const taskDate = new Date(task.date);
        return (
          taskDate.getDate() === currentDay.getDate() &&
          taskDate.getMonth() === currentDay.getMonth() &&
          taskDate.getFullYear() === currentDay.getFullYear()
        );
      });
      next7days.push({ date: currentDay, tasks: currentDayTasks });
    }
    return (
      <div className="task-list">
        {next7days.map((day, index) => (
          <div key={index}>
            <h3>{formatDate(day.date)}</h3>
            {day.tasks.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

function formatDate(date) {
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat(undefined, options).format(date);
}
