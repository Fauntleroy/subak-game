export const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: '8px'
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: '0px'
  }
};

export const transition = {
  type: 'spring',
  stiffness: 1000,
  damping: 60,
  mass: 1,
  delay: 0.125
};
