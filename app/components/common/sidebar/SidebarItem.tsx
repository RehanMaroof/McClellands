"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  item: {
    title: string;
    link: string;
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={item?.link}
      key={item?.title}
      className={`w-full py-[11px] ps-[40px] ${
        pathName === item?.link
          ? "bg-custom-gradient"
          : "border-solid border-l-[1px] border-t-[1px] border-b-[1px] border-[#230E0E]"
      } radius-left-10 whitespace-nowrap pr-[40px]`}
    >
      {item.title}
    </Link>
  );
};

export default SidebarItem;
