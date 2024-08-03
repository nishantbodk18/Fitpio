import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./style.css";
// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ActivityChart() {
  const data = {
    labels: [
      "5",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
    ], // X-axis labels
    datasets: [
      {
        label: "Activity",
        data: [
          4000, 4500, 4700, 4800, 5000, 5300, 7000, 6800, 8000, 7500, 12000,
          11500, 9000, 10000, 15000, 13000, 10000, 3000, 8000, 12000, 15000,
          13000, 12000,
        ], // Data corresponding to labels
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
        borderWidth: 1,
        borderRadius: 10, // Round the corners
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to be resized
    scales: {
      x: {
        ticks: {
          callback: function (value, index) {
            // Show only specific labels
            const labelsToShow = [
              "5",
              "9",
              "11",
              "13",
              "15",
              "17",
              "19",
              "21",
              "23",
              "25",
              "27",
            ];
            return labelsToShow.includes(this.getLabelForValue(value))
              ? this.getLabelForValue(value)
              : "";
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="graph">
      <Bar data={data} options={options} />
    </div>
  );
}

export default ActivityChart;
