import {
  CalendarMonth,
  Home,
  KeyboardAlt,
  PermIdentity,
  Settings,
  TableView,
  Task,
} from "@mui/icons-material";
import React from "react";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    title: "Posts",
    component: <TableView />,
    path: "/posts",
  },
  {
    id: 3,
    title: "Commentaires",
    component: <PermIdentity />,
    path: "/commentaires",
  },
  {
    id: 4,
    title: "Categories",
    component: <CalendarMonth />,
    path: "/categories",
  },
  {
    id: 5,
    title: "Sous-Categories",
    component: <Task />,
    path: "/sous-categories",
  },
  {
    id: 6,
    title: "Utilisateurs",
    component: <KeyboardAlt />,
    path: "/users",
  },
  {
    id: 7,
    title: "Paramettres",
    component: <Settings />,
    path: "/paramettres",
  },
];

export const data_1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const data_2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
