import React from 'react';
import './style.css';
import { IoMdMail } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-icons">
        <i className="icon-bell"><IoMdMail /></i>
        <i className="icon-envelope"><IoSettingsOutline /></i>
        <i className="icon-envelope"><FaBell /></i>
        <div className="profile-pic">
          <img src="p1.jpg" alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;
