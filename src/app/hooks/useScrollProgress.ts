import { useScroll, useSpring } from 'motion/react';

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
};
