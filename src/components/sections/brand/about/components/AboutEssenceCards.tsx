import { motion } from 'motion/react';
import type { AboutLayer } from '../types/about.types';
import { Target, Rocket, Heart, Sparkles } from 'lucide-react';
import { useEssenceParallax } from '../hooks/useEssenceParallax';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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
      className="space-y-8 lg:space-y-12"
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
            className="flex gap-6 lg:gap-8 items-start group"
            variants={itemVariants}
          >
            {/* Circular Icon with Parallax */}
            <motion.div
              className={`${colors.bg} shrink-0 rounded-full p-5 sm:p-6 lg:p-7 flex items-center justify-center shadow-lg cursor-pointer`}
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
              <IconComponent size={32} className="text-white sm:w-10 sm:h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
            </motion.div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <motion.p
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {item.kicker}
              </motion.p>
              
              <motion.h3
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p
                className="text-sm sm:text-base text-stone-600 leading-relaxed"
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

