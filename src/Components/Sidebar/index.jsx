import React from "react";
import "./style.css";
import { IoMdHome } from "react-icons/io";
import { MdOutlineInsertChart } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { AiFillCalendar } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { FaBasketball } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <FaBasketball />
      </div>
      <ul className="menu">
        <li className="menu-item active">
          <span>
            <IoMdHome />
          </span>
        </li>
        <li className="menu-item">
          <i className="icon-orders"></i>
          <span>
            <MdOutlineInsertChart />
          </span>
        </li>
        <li className="menu-item">
          <i className="icon-activity"></i>
          <span>
            <FaClipboardCheck />
          </span>
        </li>
        <li className="menu-item">
          <i className="icon-goals"></i>
          <span>
            <AiFillCalendar />
          </span>
        </li>
        <li className="menu-item">
          <i className="icon-dishes"></i>
          <span>
            <BsCartCheckFill />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
