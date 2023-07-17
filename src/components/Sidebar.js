import {
  CalendarMonth,
  Home,
  KeyboardAlt,
  PermIdentity,
  Settings,
  TableView,
  Task,
} from "@mui/icons-material";
import { useState } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    title: "Tables",
    component: <TableView />,
    path: "/tables",
  },
  {
    id: 3,
    title: "Profile",
    component: <PermIdentity />,
    path: "/profile",
  },
  {
    id: 4,
    title: "Calendrier",
    component: <CalendarMonth />,
    path: "/calendrier",
  },
  {
    id: 5,
    title: "Taches",
    component: <Task />,
    path: "/taches",
  },
  {
    id: 6,
    title: "Charts",
    component: <KeyboardAlt />,
    path: "/charts",
  },
  {
    id: 7,
    title: "Paramettres",
    component: <Settings />,
    path: "/paramettres",
  },
];

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
