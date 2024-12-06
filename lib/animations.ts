export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const cardHover = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
}; 