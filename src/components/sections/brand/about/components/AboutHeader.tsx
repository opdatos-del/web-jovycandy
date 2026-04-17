import { motion } from 'motion/react';
import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {content.eyebrow && (
      <motion.div className="flex items-center gap-3 sm:gap-4 mb-4" variants={textVariants}>
        <span className="h-px w-8 bg-stone-300 sm:w-10 lg:w-12" />
        <p className="text-xs font-mono uppercase tracking-[0.28em] text-stone-400 sm:text-sm sm:tracking-[0.5em]">
          {content.eyebrow}
        </p>
      </motion.div>
    )}

    <motion.h2
      className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-stone-900 mb-4 sm:mb-5 lg:mb-6"
      variants={headingVariants}
    >
      {content.titleLines[0]}
      {content.titleLines[1] && (
        <>
          <br />
          {content.titleLines[1]}
        </>
      )}
    </motion.h2>

    <motion.p
      className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-sm"
      variants={textVariants}
    >
      {content.description}
    </motion.p>

    <motion.div
      className="mt-8 sm:mt-10 lg:mt-12 rounded-lg overflow-hidden shadow-lg"
      variants={imageVariants}
    >
      <img
        src="/casa-cale.jpg"
        alt="Casa Cale - Nuestra Esencia"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </motion.div>
);
