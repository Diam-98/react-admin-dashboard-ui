import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  const [isReduced, setIsReduced] = useState(false);

  return (
    <div className='main'>
      <Header isReduced={isReduced} setIsReduced={setIsReduced} />
      <div className='body'>
        <Sidebar isReduced={isReduced} />
        <Outlet />
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
