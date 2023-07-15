import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
