import React from "react";
import Item from "./Item";
import {
  DownloadIconBlue,
  DownloadIconGreen,
  DownloadIconOrange,
  DownloadIconRed,
} from "./DownloadIcon";
import ChartWrapper from "./ChartWrapper";

const items = [
  {
    icon: "/images/dashboard/bar.png",
    count: 7585,
    info: "Total Leads",
    infoColor: "#CD5D5D",
    infoIcon: <DownloadIconRed />,
  },
  {
    icon: "/images/dashboard/bag.png",
    count: 2656,
    info: "Total Jobs",
    infoColor: "#33A83F",
    infoIcon: <DownloadIconGreen />,
  },
  {
    icon: "/images/dashboard/arrow.png",
    count: 3568,
    info: "Submit Jobs",
    infoColor: "#CD5D5D",
    infoIcon: <DownloadIconBlue />,
  },
  {
    icon: "/images/dashboard/cancel.png",
    count: 0o326,
    info: "Cancel Jobs",
    infoColor: "#CD5D5D",
    infoIcon: <DownloadIconOrange />,
  },
];

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center flex-wrap gap-[25px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[20%] lg:w-[31%] 2xl:w-[23.4%]"
          >
            <Item item={item} />
          </div>
        ))}
      </div>
      <div className="dashboard-item-shadow mt-[55px] py-[53px] px-[46px] rounded-3xl mb-[50px]">
        <ChartWrapper />
      </div>
    </div>
  );
};

export default Dashboard;
