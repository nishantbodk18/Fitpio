import React from "react";
import "./style.css";
import { SlTarget } from "react-icons/sl";
import { ImTarget } from "react-icons/im";
import { FaHamburger } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
import { AiOutlineRightCircle } from "react-icons/ai";
function Goals() {
  return (
    <>
      <div className="goalBox">
        <div className="goal">
          <div className="roundLogoForGoals">
            {" "}
            <span>
              <ImTarget />
            </span>
          </div>
          <p>Goals</p>
          <div className="arrow"><AiOutlineRightCircle/></div>
        </div>
        <div className="dishes">
          <div className="roundLogoForDishes">
            {" "}
            <span>
              <FaHamburger />
            </span>
          </div>
          <p>Popular dishes</p>
          <div className="arrow"><AiOutlineRightCircle/></div>
        </div>
        <div className="dishes">
          <div className="roundLogoForMenus">
            {" "}
            <span>
              <GiOpenedFoodCan />
            </span>
          </div>
          <p>Menus</p>
          <div className="arrow"><AiOutlineRightCircle/></div>
        </div>
      </div>
    </>
  );
}

export default Goals;
