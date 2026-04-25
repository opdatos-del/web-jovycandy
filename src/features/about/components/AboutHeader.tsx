import { motion, type Variants } from 'motion/react';
import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
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
    } satisfies Variants}
  >
    {content.eyebrow && (
      <motion.div className="mb-4 flex items-center gap-3 sm:gap-4" variants={textVariants}>
        <span className="h-px w-8 bg-stone-300 sm:w-10 lg:w-12" />
        <p className="text-xs font-mono uppercase tracking-[0.28em] text-stone-400 sm:text-sm sm:tracking-[0.5em]">
          {content.eyebrow}
        </p>
      </motion.div>
    )}

    <motion.h2
      className="mb-4 text-4xl font-black leading-[0.95] tracking-tight text-stone-900 sm:mb-5 sm:text-5xl lg:mb-6 lg:text-[3.65rem]"
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
      className="max-w-[19rem] text-sm leading-relaxed text-stone-700 sm:text-[0.95rem]"
      variants={textVariants}
    >
      {content.description}
    </motion.p>
  </motion.div>
);
