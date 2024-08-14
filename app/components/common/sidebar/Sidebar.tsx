"use client";

import React from "react";
import { navItems } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="w-[15%] h-full pt-[45px] ps-[45px] shadow-lg shadow-slate-900/20 shadow-b-2 -shadow-spread-2">
      <div className="w-[80%]">
        <img src="/images/logo.png" alt="logo" className="w-full" />
      </div>

      <div className="w-full flex flex-col items-end mt-[55px] gap-y-[45px]">
        {navItems?.map((item) => (
          <Link
            href={item?.link}
            key={item?.title}
            className={`w-full py-[11px] ps-[40px] ${
              pathName === item?.link
                ? "bg-custom-gradient"
                : "border-solid border-l-[1px] border-t-[1px] border-b-[1px] border-[#230E0E]"
            } radius-left-10`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
