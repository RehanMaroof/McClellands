import React from "react";
import NavSearch from "./NavSearch";
import AccountDropdown from "./AccountDropdown";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center nav-shadow px-[33px] py-[28px]">
      <div className="w-[40%]">
        <NavSearch />
      </div>
      <div>
        <AccountDropdown />
      </div>
    </div>
  );
};

export default Navbar;
