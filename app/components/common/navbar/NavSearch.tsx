"use client";

import React, { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement>
  ) => {
    e.preventDefault();
    console.log("search is ", search);
  };
  return (
    <div className="w-full flex justify-start items-center gap-x-[10px]">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[100%] h-[45px] py-[9px] px-[20px] bg-[#FFF] border-none rounded-full nav-search-shadow placeholder-[#CD5D5D]"
        />
      </form>
      <img
        src="/images/icons/nav-search.png"
        alt="search"
        className="w-[45px] h-[45px] cursor-pointer"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default NavSearch;
