import { motion } from 'motion/react';

import { useScrollProgress } from '../../hooks/useScrollProgress';

export const AppScrollProgress = () => {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-stone-900"
      style={{ scaleX }}
    />
  );
};
