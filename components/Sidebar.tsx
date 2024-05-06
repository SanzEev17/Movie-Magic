"use client";
import React, { useState } from "react";
import { ChevronLeft, Clapperboard, HomeIcon, Menu, Tv2 } from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { title: "Explore", icon: HomeIcon, slug:"/" },
  { title: "Movies", icon: Clapperboard, slug:"/movies/popular/" },
  { title: "TV-shows", icon: Tv2, slug:"/tv-shows/popular/" },
];

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav
      className={`z-20 fixed md:block md:relative h-dvh flex-shrink-0 bg-zinc-100 border-r transition-all duration-200 ease-in-out ${
        isExpanded ? "w-56" : "w-24"
      }
      ${isSidebarOpen ? "" : "hidden"}
      `}
    >
      <div className="h-full w-full flex flex-col items-center text-sm py-3 px-5">
        {isExpanded ? (
          <div className="absolute right-0 px-3">
            <button onClick={toggleSidebar}>
              <ChevronLeft size={20} />
            </button>
          </div>
        ) : (
          <div className="p-4">
            <button onClick={toggleSidebar}>
              <Menu size={25} />
            </button>
          </div>
        )}
        {isExpanded && (
          <h1 className="mt-8 font-semibold text-base">MovieMagic</h1>
        )}
        {/* Sidebar content */}
        <div
          className={`${
            !isExpanded ? "items-center" : ""
          } w-full flex flex-col py-8 space-y-5 border-b-2`}
        >
          {isExpanded && (
            <h1 className="uppercase font-semibold text-gray-600">Menu</h1>
          )}
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.slug} className="flex items-center space-x-2">
                <div className="icon rounded-xl bg-white hover:bg-gray-900 hover:text-white">
                  <Icon size={15} />
                </div>
                {isExpanded && <h1 className="font-semibold">{item.title}</h1>}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
