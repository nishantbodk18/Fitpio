import { Routes } from "react-router";

import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import { Col, Row } from "antd";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [showSidebar ,setShowSidebar]=useState(false);
  const handleSideBarShow=()=>{
    setShowSidebar(!showSidebar);
  }
  return (
    <>
      <div className="root">
        <div>
          <Sidebar showSidebar={showSidebar} />
        </div>
        <div >
          <Header handleSideBarShow={handleSideBarShow} />
          <Layout />
        </div>
      </div>
    </>
  );
}

export default App;
