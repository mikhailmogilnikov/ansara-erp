export const ModalVariants = {
  variants: {
    enter: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0, 1, 0, 1],
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      filter: 'blur(24px)',
    },
  },
};
