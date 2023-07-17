import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ menuItem, isSelected, onSelect }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    onSelect(menuItem.id);
    navigate(menuItem.path);
  };

  const menuItemClassName = isSelected ? "selected" : "";
  return (
    <li className={menuItemClassName} onClick={handleClick}>
      {menuItem.component}
      <span>{menuItem.title}</span>
    </li>
  );
};

export default MenuItem;
