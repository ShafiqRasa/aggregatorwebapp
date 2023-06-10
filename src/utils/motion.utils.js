export const profileMenuAni = {
  initial: {
    opacity: 0,
    x: "40vh",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 1,
    type: "spring",
    stiffness: 50,
  },
  exit: {
    duration: 0,
    x: "40vh",
  },
};

export const menuAni = {
  initial: {
    height: 0,
  },
  animate: {
    height: "40vh",
  },
  transition: {
    duration: 0.5,
    type: "ease",
    stiffness: 25,
  },
  exit: {
    height: 0,
  },
};
