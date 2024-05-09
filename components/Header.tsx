"use client";
import { ChevronLeft, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { useSearchParams } from "next/navigation";

type HeaderProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="px-4 md:px-8 py-5 sticky top-0 z-10 h-16 md:h-20 flex justify-between items-center bg-white/[0.75] backdrop-blur-lg backdrop-saturate-[180%]">
      <div className="md:hidden pe-2">
        {isSearchOpen ? (
          <ChevronLeft size={20} strokeWidth={3} onClick={toggleSearch} />
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
        } w-full md:block md:max-w-80`}
      >
        <SearchInput
          baseUrl="/search"
          defaultValue={searchQuery}
          searchType="query"
        />
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
