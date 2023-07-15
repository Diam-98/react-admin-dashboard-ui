import {
  CalendarMonth,
  Equalizer,
  Home,
  KeyboardAlt,
  PermIdentity,
  Settings,
  TableView,
  Task,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Home />
            <span>Dashboard</span>
          </li>
          <li>
            <TableView />
            <span>Tables</span>
          </li>
          <li>
            <CalendarMonth />
            <span>Calendrier</span>
          </li>
          <li>
            <Task />
            <span>Taches</span>
          </li>
          <li>
            <KeyboardAlt />
            <span>Formulaire</span>
          </li>
          <li>
            <Equalizer />
            <span>Charts</span>
          </li>
          <li>
            <PermIdentity />
            <span>Profile</span>
          </li>
          <li>
            <Settings />
            <span>Paramettre</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
