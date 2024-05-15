import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@mui/material/Checkbox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import "./TaskForm.css";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(Date());
  const [isImp, setIsImp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title,
      pDate: startDate.toString().split(" "),
      date: startDate,
      isImp,
    };
    if (title !== "") addTask(newTask);

    setTitle("");
    setStartDate(startDate);
    setIsImp(false);
  };

  const handleDateChange = (date) => {
    setStartDate(new Date(date));
  };

  const handleCheckChange = (e) => {
    setIsImp(e.target.checked);
  };

  return (
    <div className="task-form">
      <input
        className="input"
        type="text"
        placeholder="Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="dt-fav-add">
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={handleDateChange}
        />
        <Checkbox
          className="checkbox"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 29.5 } }}
          icon={<GradeOutlinedIcon color="primary" />}
          checkedIcon={<GradeRoundedIcon />}
          onChange={handleCheckChange}
        />
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={handleSubmit}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
