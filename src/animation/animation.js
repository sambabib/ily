export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: .6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .7,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 1.8
    },
  },
};

export const overlayAnimation = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: '-100%',
    transition: {
      duration: .8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
