"use client";

import React from "react";
import LineChart from "./LineChart";
import { ChartData, ChartOptions } from "chart.js";
import Chart from "./ChartWrapper";

// Example data and options
const data: ChartData<"line"> = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Dataset 1",
      data: [200, 180, 150, 190, 160, 130, 220], // Updated values
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.45,
    },
    {
      label: "Dataset 2",
      data: [170, 190, 160, 180, 150, 140, 210], // Updated values
      fill: false,
      borderColor: "rgb(255, 99, 132)",
      tension: 0.45,
    },
    {
      label: "Dataset 3",
      data: [180, 160, 140, 170, 155, 125, 200], // Updated values
      fill: false,
      borderColor: "rgb(54, 162, 235)",
      tension: 0.45,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Value: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

const ChartWrapper = () => {
  return <LineChart data={data} options={options} />;
};

export default ChartWrapper;
