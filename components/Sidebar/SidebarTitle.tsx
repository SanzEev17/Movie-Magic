import React from "react";
import { AnimationControls, motion } from "framer-motion";
import { sidebarSvgVariants } from "@/variants/variants";
import { ArrowRight } from "lucide-react";

const SidebarTitle = ({
  toggleSidebar,
  arrowButtonControls,
}: {
  toggleSidebar: () => void;
  arrowButtonControls: AnimationControls;
}) => {
  return (
    <div className="py-4 px-3 w-full flex justify-between items-center">
      <h1 className="overflow-hidden font-semibold text-lg">MovieMagic</h1>
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
  );
};

export default SidebarTitle;
