export const profileMenuAni = {
  initial: {
    opacity: 0,
    x: "30vh",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.2,
    type: "spring",
    stiffness: 50,
  },
  exit: {
    duration: 0,
    x: "30vh",
  },
};

export const menuAni = {
  initial: {
    height: 0,
  },
  animate: {
    height: "36vh",
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
