import { useState } from "react";
import MenuItem from "./MenuItem";
import { menuItems } from "../data/menuItems";

const Sidebar = ({ isReduced }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleMenuItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <>
      <div className={isReduced ? "reduceSidebar" : "sidebar"}>
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
      </div>
    </>
  );
};

export default Sidebar;
