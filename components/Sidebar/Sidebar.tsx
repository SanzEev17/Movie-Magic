"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Clapperboard, HomeIcon, Tv2 } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { sidebarSvgVariants, sidebarVariants } from "@/variants/variants";
import SidebarLinks from "./SidebarLinks";

const sidebarItems = [
  { name: "Explore", icon: HomeIcon, slug: "/" },
  { name: "Movies", icon: Clapperboard, slug: "/movies/popular/" },
  { name: "TV-shows", icon: Tv2, slug: "/tv-shows/popular/" },
];

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.nav
      variants={sidebarVariants}
      initial="closed"
      animate={sidebarControls}
      className={`flex flex-col z-20 md:block fixed h-dvh bg-zinc-100 border-r text-sm py-3 px-5
      ${isSidebarOpen ? "fixed" : "hidden"}
      `}
    >
      <div className="py-4 px-3 w-full flex justify-between items-center">
        <h1 className="overflow-clip font-semibold text-lg">MovieMagic</h1>
        <button className="" onClick={toggleSidebar}>
          <motion.div
            variants={sidebarSvgVariants}
            animate={arrowButtonControls}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </button>
      </div>

      {/* Sidebar content */}
      <div className={`flex flex-col py-8 space-y-5 border-b-2`}>
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
    </motion.nav>
  );
};

export default Sidebar;
