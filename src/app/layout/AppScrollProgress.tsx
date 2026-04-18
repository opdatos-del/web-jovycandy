import { motion } from 'motion/react';

import { useScrollProgress } from '../hooks/useScrollProgress';

export const AppScrollProgress = () => {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-[#ff8a72] via-[#ff5e90] to-[#00afaa] shadow-lg"
      style={{ scaleX }}
    />
  );
};
