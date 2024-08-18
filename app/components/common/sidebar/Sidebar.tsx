import React from "react";
import { navItems } from "@/constants/constant";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-min lg:w-fit h-full pt-[45px] pl-[45px] shadow-lg shadow-slate-900/20 shadow-b-2 -shadow-spread-2">
      <div className="w-full pr-[30px]">
        <img src="/images/logo.png" alt="logo" className="w-full md:w-[80%]" />
      </div>

      <div className="w-full flex flex-col items-end mt-[55px] gap-y-[45px]">
        {navItems?.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
