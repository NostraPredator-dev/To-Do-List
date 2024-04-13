import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import Checkbox from "@mui/material/Checkbox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import "./TaskItem.css";

function TaskItem({ id, task, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDate, setEditedDate] = useState(task.date);
  const [isImp, setIsImp] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    task.title = editedTitle;
    task.date = editedDate;
    task.pDate = editedDate.toString().split(" ");
    task.isImp = isImp;
    setIsEditing(false);
  };

  const handleDateChange = (date) => {
    setEditedDate(new Date(date));
  };

  const handleCheckChange = (e) => {
    setIsImp(e.target.checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={"task-item" + (task.isImp ? "-important" : "")}>
      <div className="task-details">
        {isEditing ? (
          <div className="edit-form">
            <TextField
              defaultValue={editedTitle}
              variant="standard"
              onChange={(e) => setEditedTitle(e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  color: "#fff",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#fff",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#fff",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#fff",
                },
              }}
            />
            <DatePicker
              className="date-pickr"
              selected={editedDate}
              onChange={handleDateChange}
            />
          </div>
        ) : (
          <>
            <h3>{task.title}</h3>
            <p>
              {task.pDate[2]} {task.pDate[1]} {task.pDate[3]} {task.pDate[0]}{" "}
            </p>
          </>
        )}
      </div>
      <div className="fabs">
        {isEditing ? (
          <div className="check-save">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 37 } }}
              icon={<GradeOutlinedIcon color="primary" />}
              checked={isImp}
              checkedIcon={<GradeRoundedIcon />}
              onChange={handleCheckChange}
            />
            <Fab color="primary" size="large" onClick={handleSave}>
              <SaveRoundedIcon />
            </Fab>
          </div>
        ) : (
          <div className="fabs">
            <Fab color="info" size="large" onClick={handleEdit}>
              <EditIcon />
            </Fab>
            <Fab
              color="error"
              aria-label="delete"
              size="large"
              onClick={handleDelete}
            >
              <DeleteOutlineRoundedIcon />
            </Fab>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
