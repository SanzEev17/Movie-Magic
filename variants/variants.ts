export const cardVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.08,
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
    rotate: 0,
  },
  opened: {
    rotate: -180,
  },
};

export const headerVariant = {
  visible: {
    backgroundColor: "var(--header)",
    backdropFilter: "blur(16px) saturate(180%)",
  },
  hidden: {
    backdropFilter: "unset",
  },
};