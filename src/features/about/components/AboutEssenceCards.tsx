import { useState } from 'react';
import { Target, Rocket, Heart, Sparkles, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';

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
    border: 'border-blue-200/80',
    accentText: 'text-blue-600',
  },
  rocket: {
    bg: 'bg-orange-500',
    border: 'border-orange-200/80',
    accentText: 'text-orange-600',
  },
  heart: {
    bg: 'bg-red-500',
    border: 'border-red-200/80',
    accentText: 'text-red-500',
  },
  sparkles: {
    bg: 'bg-slate-500',
    border: 'border-slate-200/80',
    accentText: 'text-slate-600',
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
  const [activeValueByLayer, setActiveValueByLayer] = useState<Record<string, number | null>>(() =>
    layers.reduce<Record<string, number | null>>((accumulator, layer) => {
      accumulator[layer.id] = null;
      return accumulator;
    }, {}),
  );

  const handleValueToggle = (layerId: string, valueIndex: number) => {
    setActiveValueByLayer((current) => ({
      ...current,
      [layerId]: current[layerId] === valueIndex ? null : valueIndex,
    }));
  };

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
              
              {!item.values?.length && (
                <motion.h3
                  className="mb-2 text-lg font-semibold leading-snug text-stone-900 transition-colors group-hover:text-stone-700 sm:text-[1.7rem]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
              )}
                
              {item.values && item.values.length > 0 ? (
                <div className={`border-t ${colors.border} pt-5 sm:pt-6`}>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {item.values.map((value, idx) => (
                      <div key={idx} className="border-b border-stone-200/80 pb-4 sm:pb-5">
                        <button
                          type="button"
                          onClick={() => handleValueToggle(item.id, idx)}
                          className="flex w-full items-start gap-3 text-left"
                        >
                          <Check size={16} className={`${colors.accentText} mt-1 shrink-0`} strokeWidth={2.3} />
                          <div className="min-w-0 flex-1">
                            <p className="text-base font-medium leading-snug text-stone-900">
                              {value.title}
                            </p>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`mt-1 shrink-0 text-stone-400 transition-transform duration-300 ${
                              activeValueByLayer[item.id] === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {activeValueByLayer[item.id] === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, y: -6 }}
                              animate={{ height: 'auto', opacity: 1, y: 0 }}
                              exit={{ height: 0, opacity: 0, y: -6 }}
                              transition={{
                                height: { duration: 0.32, ease: EASE_OUT },
                                opacity: { duration: 0.22, ease: 'easeOut' },
                                y: { duration: 0.22, ease: 'easeOut' },
                              }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 pl-7 text-sm leading-relaxed text-stone-600 sm:text-[0.92rem]">
                                {value.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.p
                  className="text-sm leading-relaxed text-stone-600 sm:text-[0.92rem]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.body}
                </motion.p>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

