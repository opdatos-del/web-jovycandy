import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-24 py-20 ${className}`}
    >
      {children}
    </section>
  );
};

export const TextReveal: React.FC<{ children: string; className?: string }> = ({ children, className }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.p
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.p>
    </div>
  );
};
