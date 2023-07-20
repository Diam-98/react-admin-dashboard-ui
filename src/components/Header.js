import { MenuOpen, Notifications, Search, Settings } from "@mui/icons-material";
import avatar from "../images/avatar.png";
import { useState } from "react";
import { Drawer } from "antd";
import { menuItems } from "../data/menuItems";
import MenuItem from "./MenuItem";

const Header = ({ isReduced, setIsReduced }) => {
  const [open, setOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleMenuItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const reduceSidebar = () => {
    setIsReduced(!isReduced);
  };

  return (
    <>
      <div className="header d-flex-align-justify">
        <div className="header-left-part">
          <div className="logo">
            <h4>
              <span>DamilTech</span>Lab
            </h4>
          </div>
          <MenuOpen onClick={reduceSidebar} className="sidebar-reduce-icon" />
        </div>
        <ul className="d-flex-align">
          <li>
            <Search className="menu-icon" />
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
        <MenuOpen className="sidebar-open-icon" onClick={openDrawer} />
        <Drawer open={open} onClose={() => setOpen(false)} placement="left">
          <ul>
            {menuItems.map((menuItem) => {
              return (
                <MenuItem
                  key={menuItem.id}
                  menuItem={menuItem}
                  isSelected={menuItem.id === selectedItemId}
                  onSelect={handleMenuItemSelect}
                />
              );
            })}
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
