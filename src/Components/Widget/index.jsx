import React from "react";
import "./widget.css";
import { BsCartCheckFill } from "react-icons/bs";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";

function Widget({
  icon,
  title,
  count,
  positive,
  amount,
  negative,
  color,
  bgColor,
}) {
  return (
    <div className="widget">
      <div className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {icon}
      </div>
      <h4>{title}</h4>
      <div className="count">
        <p className="countNumber" style={{fontSize:"25px"}}>{count ? count : amount}</p>
        {positive && (
          <p style={{ color: "#88D66C" }}>
            <spa>
              <AiOutlineCaretUp />
            </spa>
            {positive}%
          </p>
        )}
        {negative && (
          <p style={{ color: "#FF7777" }}>
            <span>
              <AiOutlineCaretDown />
            </span>
            {negative}%
          </p>
        )}
      </div>
    </div>
  );
}

export default Widget;
