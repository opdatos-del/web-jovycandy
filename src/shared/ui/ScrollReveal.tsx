import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  direction?: 'up' | 'left' | 'right';
};

const getInitialPosition = (direction: NonNullable<ScrollRevealProps['direction']>, distance: number) => {
  if (direction === 'left') {
    return { x: -distance, y: 0 };
  }

  if (direction === 'right') {
    return { x: distance, y: 0 };
  }

  return { x: 0, y: distance };
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  distance = 28,
  duration = 0.72,
  direction = 'up',
}: ScrollRevealProps) => {
  const initialPosition = getInitialPosition(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
