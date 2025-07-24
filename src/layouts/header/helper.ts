export const motionDropdown = {
  variants: {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  transition: {
    ease: "easeInOut",
    duration: 0.3,
  },
};
