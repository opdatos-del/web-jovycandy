import { Target, Rocket, Heart, Sparkles } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

import { useEssenceParallax } from '../hooks/useEssenceParallax';
import type { AboutLayer } from '../types/about.types';

type AboutEssenceCardsProps = {
  layers: AboutLayer[];
};

const iconMap = {
  target: Target,
  rocket: Rocket,
  heart: Heart,
  sparkles: Sparkles,
};

const colorMap = {
  target: {
    bg: 'bg-blue-500',
    light: 'bg-blue-50',
  },
  rocket: {
    bg: 'bg-orange-500',
    light: 'bg-orange-50',
  },
  heart: {
    bg: 'bg-red-500',
    light: 'bg-red-50',
  },
  sparkles: {
    bg: 'bg-slate-500',
    light: 'bg-slate-50',
  },
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.12,
    transition: { duration: 0.3 },
  },
};

export const AboutEssenceCards = ({ layers }: AboutEssenceCardsProps) => {
  const { containerRef, scrollY } = useEssenceParallax();

  return (
    <motion.div
      ref={containerRef}
      className="space-y-7 lg:space-y-9"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {layers.map((item, index) => {
        const IconComponent = iconMap[item.iconType];
        const colors = colorMap[item.iconType];
        
        // Parallax offset based on index and scroll progress
        const parallaxOffset = (index % 2 === 0 ? 1 : -1) * scrollY * 15;

        return (
          <motion.div
            key={item.id}
            data-about-layer-card
            className="group flex items-start gap-4 sm:gap-5 lg:gap-6"
            variants={itemVariants}
          >
            <motion.div
              className={`${colors.bg} flex shrink-0 cursor-pointer items-center justify-center rounded-full p-3.5 shadow-[0_10px_20px_rgba(28,25,23,0.16)] sm:p-4.5`}
              variants={iconVariants}
              whileHover="hover"
              style={{
                y: parallaxOffset,
              }}
              transition={{
                y: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                },
              }}
            >
              <IconComponent size={24} className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.7} />
            </motion.div>

            <div className="flex-1 pt-0.5">
              <motion.p
                className="mb-1 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-[0.68rem]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {item.kicker}
              </motion.p>
              
              <motion.h3
                className="mb-2 text-lg font-semibold leading-snug text-stone-900 transition-colors group-hover:text-stone-700 sm:text-[1.7rem]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p
                className="text-sm leading-relaxed text-stone-600 sm:text-[0.92rem]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {item.body}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

