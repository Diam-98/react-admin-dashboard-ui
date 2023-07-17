import { Notifications, Settings } from "@mui/icons-material";
import React from "react";
import avatar from "../images/avatar.png";

const BottomNavigation = () => {
  return (
    <>
      <div className="bottom-nav">
        <ul>
          <li>
            <Settings className="menu-icon" />
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
        </ul>
      </div>
    </>
  );
};

export default BottomNavigation;
