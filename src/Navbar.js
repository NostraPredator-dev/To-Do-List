import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import "./Navbar.css";

const Navbar = ({ setFilter }) => {
  return (
    <div className="navbar">
      <List className="items">
        <h1>To-do List</h1>
        <ListItem disablePadding alignItems="flex-start">
          <ListItemButton
            className="list-button"
            onClick={() => setFilter("all")}
          >
            <CalendarTodayRoundedIcon sx={{ fontSize: 27 }} className="icon" />
            <ListItemText primary="All Tasks" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding alignItems="flex-start">
          <ListItemButton
            className="list-button"
            onClick={() => setFilter("today")}
          >
            <TodayRoundedIcon sx={{ fontSize: 27 }} className="icon" />
            <ListItemText primary="Today" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding alignItems="flex-start">
          <ListItemButton
            className="list-button"
            onClick={() => setFilter("next7days")}
          >
            <CalendarMonthRoundedIcon sx={{ fontSize: 27 }} className="icon" />
            <ListItemText primary="Next 7 Days" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding alignItems="flex-start">
          <ListItemButton
            className="list-button"
            onClick={() => setFilter("important")}
          >
            <StarRateRoundedIcon sx={{ fontSize: 30 }} className="icon" />
            <ListItemText primary="Important" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Navbar;
