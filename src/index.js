import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tables" element={<App />} />
        <Route path="/profile" element={<App />} />
        <Route path="/calendrier" element={<App />} />
        <Route path="/taches" element={<App />} />
        <Route path="/charts" element={<App />} />
        <Route path="/paramettres" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
