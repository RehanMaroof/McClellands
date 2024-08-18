import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define types for chart data and options
interface LineChartProps {
  data: ChartData<"line">;
  options: ChartOptions<"line">;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  return (
    <div>
      <h2 className="text-[44px] font-[600] leading-[71px] text-[#05004E] mb-[30px]">
        Weekly Leads
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
