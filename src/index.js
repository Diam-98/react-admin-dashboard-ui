import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TableComp from "./pages/Table";
import CalendarComp from "./pages/CalendarComp";
import TaskList from "./pages/TaskList";
import ChartComp from "./pages/ChartComp";
import ProfileComp from "./pages/ProfileComp";
import SettingComp from "./pages/SettingsComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<TableComp />} />
          <Route path="/profile" element={<ProfileComp />} />
          <Route path="/calendrier" element={<CalendarComp />} />
          <Route path="/taches" element={<TaskList />} />
          <Route path="/charts" element={<ChartComp />} />
          <Route path="/paramettres" element={<SettingComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
