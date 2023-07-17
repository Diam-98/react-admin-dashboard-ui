import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  const [isReduced, setIsReduced] = useState(false);

  console.log(isReduced);

  return (
    <div className="main">
      <Header isReduced={isReduced} setIsReduced={setIsReduced} />
      <div className="body">
        <Sidebar isReduced={isReduced} />
        <Home />
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
