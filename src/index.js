import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SettingComp from "./pages/SettingsComp";
import PostComp from "./pages/PostComtp";
import CommentComp from "./pages/CommentComp";
import CategoryComp from "./pages/CategoryComp";
import SubCategorieComp from "./pages/SubCategorieComp";
import UsersComp from "./pages/UsersComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<PostComp />} />
          <Route path='/commentaires' element={<CommentComp />} />
          <Route path='/categories' element={<CategoryComp />} />
          <Route path='/sous-categories' element={<SubCategorieComp />} />
          <Route path='/users' element={<UsersComp />} />
          <Route path='/paramettres' element={<SettingComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
