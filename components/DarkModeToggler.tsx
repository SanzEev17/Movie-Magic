"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useAnimationControls } from "framer-motion";

const DarkModeToggler = () => {
  const controls = useAnimationControls();
  const { setTheme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    controls.start(resolvedTheme === "light" ? "dark" : "light");
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return (
    <div
      onClick={handleToggle}
      className="flex group items-center space-x-2 cursor-pointer"
    >
      <div className="icon bg-icon-background">
        {resolvedTheme === "light" && <Sun size={15} />}
        {resolvedTheme === "dark" && <Moon size={15} />}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="md:hidden text-muted whitespace-nowrap font-semibold group-hover:text-inherit"
      >
        Light/Dark
      </motion.p>
    </div>
  );
};

export default DarkModeToggler;
