import React from "react";
import "./style.css";
import { AiFillCaretUp } from "react-icons/ai";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
function NetProfit() {
  const profit = {
    amount: "$6769.25",
    percentage: "3%",
  };

  const data = {
    labels: ["Profit", "Remaining"],
    datasets: [
      {
        data: [70, 30], // 70% net profit as per your image
        backgroundColor: ["#4CAF50", "#CCCCCC"],
        hoverBackgroundColor: ["#66BB6A", "#E0E0E0"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <>
      <div className="net-profit">
        <div>
          <h3>Net Profit</h3>
          <div className="profit-info">
            <p className="amount">{profit.amount}</p>
            <p className="percentage">
              <span>
                <AiFillCaretUp />
              </span>
              {profit.percentage}
            </p>
          </div>
        </div>
        <div className="net-profit-chart">
        <Doughnut data={data} options={options} />
        <div className="chart-center">
          <h2>70%</h2>
          <p>Goal completed</p>
        </div>
      </div>
      </div>
    
    </>
  );
}

export default NetProfit;
