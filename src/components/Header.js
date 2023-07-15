import {
  CropFree,
  GridView,
  MenuOpen,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";
import avatar from "../images/avatar.png";

const Header = () => {
  return (
    <>
      <div className="header d-flex-align-justify">
        <div className="logo">
          <h1>
            <span>DamilTech</span>Lab
          </h1>
        </div>
        <ul className="d-flex-align">
          <li>
            <Search className="menu-icon" />
          </li>
          <li>
            <GridView className="menu-icon" />
          </li>
          <li>
            <CropFree className="menu-icon" />
          </li>
          <li>
            <div className="icon-badge">
              <Notifications className="menu-icon" />
              <span>3</span>
            </div>
          </li>
          <li>
            <div className="user-profile d-flex-align">
              <img src={avatar} alt="user profile" />
              <span>Diam</span>
            </div>
          </li>
          <li>
            <Settings className="menu-icon" />
          </li>
        </ul>
        <MenuOpen className="sidebar-open-icon" />
      </div>
    </>
  );
};

export default Header;
