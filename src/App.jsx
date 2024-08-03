import { Routes } from "react-router";

import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import { Col, Row } from "antd";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="root">
        <div>
          <Sidebar />
        </div>
        <div >
          <Header />
          <Layout />
        </div>
      </div>
    </>
  );
}

export default App;
