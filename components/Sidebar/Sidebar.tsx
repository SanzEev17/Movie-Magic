"use client";
import React, { useEffect } from "react";
import { Clapperboard, HomeIcon, Tv2 } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { sidebarVariants } from "@/variants/variants";
import SidebarLinks from "./SidebarLinks";
import SidebarTitle from "./SidebarTitle";
import DarkModeToggler from "../DarkModeToggler";

const sidebarItems = [
  { name: "Explore", icon: HomeIcon, slug: "/" },
  { name: "Movies", icon: Clapperboard, slug: "/movies/popular/" },
  { name: "TV-shows", icon: Tv2, slug: "/tv-shows/popular/" },
];

const Sidebar = ({
  isSidebarOpen,
  isExpanded,
  expandSidebar,
}: {
  isSidebarOpen: boolean;
  isExpanded: boolean;
  expandSidebar: () => void;
}) => {
  const sidebarControls = useAnimationControls();
  const arrowButtonControls = useAnimationControls();
  
  useEffect(() => {
    if (isExpanded) {
      sidebarControls.start("opened");
      arrowButtonControls.start("opened");
    } else {
      sidebarControls.start("closed");
      arrowButtonControls.start("closed");
    }
  }, [isExpanded]);

  return (
    <motion.nav
      variants={sidebarVariants}
      initial="closed"
      animate={sidebarControls}
      className={`bg-sidebar backdrop-blur-lg flex flex-col z-20 md:block fixed h-dvh shadow-lg text-sm py-3 px-5
      ${isSidebarOpen ? "fixed" : "hidden"}
      `}
    >
      <SidebarTitle
        toggleSidebar={expandSidebar}
        arrowButtonControls={arrowButtonControls}
      />

      {/* Sidebar content */}
      <div className="flex flex-col py-8 space-y-5 border-b border-border">
        {sidebarItems.map((item, index) => (
          <SidebarLinks
            key={index}
            isExpanded={isExpanded}
            name={item.name}
            slug={item.slug}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex flex-col md:hidden py-8 space-y-5 border-b border-border">
        <DarkModeToggler />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
