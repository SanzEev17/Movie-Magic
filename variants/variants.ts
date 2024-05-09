export const cardVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.1,
  },
  click: {
    scale: 0.9,
  },
};

export const sidebarVariants = {
  closed: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.3,
    },
  },
  opened: {
    width: "14rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.3,
    },
  },
};

export const sidebarSvgVariants = {
  closed: {
    rotate: 360,
  },
  opened: {
    rotate: 180,
  },
};
