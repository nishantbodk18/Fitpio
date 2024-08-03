import React from "react";

import Sidebar from "../Sidebar";
import { Col, Row } from "antd";
import "./layout.css";
import Widget from "../Widget";
import ActivityChart from "../ActivityChart";
import RecentOrders from "../RecentOrders";
import CustomerFeedback from "../CustomerFeedback";
import NetProfit from "../NetProfit";
import Goals from "../Goals";
import { BsCartCheckFill } from "react-icons/bs";
import { IoCartSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";

function Layout() {
  return (
    <>
      <div className="dashboard">
      
        <div>
        
          <div className="main-content">
            <div className="middleSection">
              <p>Dashboard</p>
              <div className="widgets">
                <Widget
                  icon={<IoBag />}
                  title="Total Orders"
                  count={75}
                  positive={3}
                  color="#4535C1"
                  bgColor="#478CCF"
                />
                <Widget
                  icon={<IoBagCheck />}
                  title="Total Delivered"
                  count={70}
                  negative={-3}
                  color="#1A5319"
                  bgColor="#80AF81"
                />
                <Widget
                  icon={<BsBagXFill />}
                  title="Total Cancelled"
                  count={5}
                  positive={3}
                  color="#FF7777"
                  bgColor="#FFAAAA"
                />
                <Widget
                  icon={<BsCartCheckFill />}
                  title="Total Revenue"
                  amount="$12K"
                  negative={-70}
                  color="#F19ED2"
                  bgColor="#E8C5E5"
                />
              </div>
              <ActivityChart />
              <div className="recentOrder">
                <RecentOrders />
              </div>
            </div>
            <div className="rightSection">
              <div className="netProfit">
                <NetProfit />
              </div>
              <div className="goals">
                <Goals />
              </div>
              <div className="customerFeedback">
                <CustomerFeedback />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
