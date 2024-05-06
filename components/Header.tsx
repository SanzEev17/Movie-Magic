"use client";
import { ChevronLeft, Menu, Search } from "lucide-react";
import React, { useState } from "react";

const Header = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="px-4 md:px-8 py-5 sticky top-0 z-10 h-16 md:h-20 flex justify-between items-center bg-white/[0.75] backdrop-blur-lg backdrop-saturate-[180%]">
      <div className="md:hidden pe-2">
        {isSearchOpen ? (
          <ChevronLeft size={20} strokeWidth={3} onClick={toggleSidebar} />
        ) : (
          <Menu
            size={20}
            onClick={toggleSidebar}
            className={`${isSidebarOpen ? "hidden" : ""}`}
          />
        )}
      </div>
      <div
        className={`${
          isSearchOpen ? "block" : "hidden"
        } md:block w-full md:max-w-80 relative text-sm`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-zinc-100 ps-4 pe-8 py-2 rounded-md placeholder:text-zinc-800 placeholder:font-semibold"
        />
        <div className="absolute right-0 top-0 p-2 ">
          <Search size={20} />
        </div>
      </div>
      <div
        className={`${isSearchOpen ? "hidden" : ""} md:hidden cursor-pointer`}
        onClick={toggleSearch}
      >
        <Search size={20} />
      </div>
    </header>
  );
};

export default Header;
