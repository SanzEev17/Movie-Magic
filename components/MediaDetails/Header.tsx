"use client";
import React from "react";
import SearchInput from "@/components/SearchInput";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const headerVariant = {
  visible: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(16px) saturate(180%)",
  },
  hidden: {
    // backgroundColor:"transparent",
    backdropFilter: "unset",
  },
};

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 300 ? setShowBackground(true) : setShowBackground(false);
  });

  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <motion.header
      variants={headerVariant}
      animate={showBackground ? "visible" : "hidden"}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="w-full px-4 md:px-8 py-5 fixed top-0 z-10 h-16 md:h-20 flex justify-between md:justify-start items-center gap-10"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className={`${
          showBackground ? "text-inherit" : "text-white"
        } cursor-pointer`}
      >
        {isSearchOpen ? (
          <ChevronLeft size={25} onClick={toggleSearch} />
        ) : (
          <ChevronLeft size={25} onClick={() => router.back()} />
        )}
      </motion.div>
      <div
        className={`${
          isSearchOpen ? "block" : "hidden"
        } w-full md:block md:max-w-80`}
      >
        <SearchInput baseUrl="/search" searchType="query" />
      </div>
      <div
        className={`${isSearchOpen ? "hidden" : ""} md:hidden cursor-pointer`}
        onClick={toggleSearch}
      >
        <Search size={20} />
      </div>
    </motion.header>
  );
};

export default Header;
