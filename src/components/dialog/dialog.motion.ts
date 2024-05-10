export const variants = {
  hidden: {
    opacity: 0,
    y: '8px'
  },
  visible: {
    opacity: 1,
    y: '4px'
  }
};

export const transition = {
  type: 'spring',
  stiffness: 1000,
  damping: 100,
  mass: 1,
  delay: 0.125
};
