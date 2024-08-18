"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <Avatar
          sx={{
            width: "65px",
            height: "65px",
            mr: "15px",
          }}
          alt="Remy Sharp"
          src="/images/avatar.jpg"
        />
      </div>
      <div className="flex flex-col justify-center items-start mr-[26px]">
        <span className="leading-normal font-[400] text-[16px] tracking-[0.1px]">
          Edward Lie
        </span>
        <span className="leading-normal font-[400] text-[16px] tracking-[0.1px] text-[#D26060]">
          Example@gmail.com
        </span>
      </div>
      <div>
        <img
          src="/images/icons/dropdown.png"
          alt="arrow-down"
          className="w-[25px] h-[25px] cursor-pointer"
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default AccountDropdown;
