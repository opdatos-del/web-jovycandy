import { useState } from 'react';
import { ChevronDown, Target, Rocket, Heart, Sparkles } from 'lucide-react';

import type { AboutLayer } from '../types/about.types';

type AboutLayerCardProps = {
  item: AboutLayer;
};

const iconMap = {
  target: Target,
  rocket: Rocket,
  heart: Heart,
  sparkles: Sparkles,
};

const borderColorMap = {
  target: 'border-amber-200',
  rocket: 'border-rose-200',
  heart: 'border-pink-200',
  sparkles: 'border-purple-200',
};

const bgColorMap = {
  target: 'group-hover:bg-amber-50/30',
  rocket: 'group-hover:bg-rose-50/30',
  heart: 'group-hover:bg-pink-50/30',
  sparkles: 'group-hover:bg-purple-50/30',
};

export const AboutLayerCard = ({ item }: AboutLayerCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[item.iconType];
  const borderColor = borderColorMap[item.iconType];
  const bgHoverColor = bgColorMap[item.iconType];

  return (
    <article
      data-about-layer-card
      className={`group relative overflow-hidden rounded-md border-2 ${borderColor} bg-white/90 transition-all duration-300 sm:rounded-lg lg:rounded-[1.3rem]`}
    >
      {/* Gradient Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 lg:h-24">
        <div
          className="mx-auto h-full w-[75%] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${item.tone} 0%, rgba(255,255,255,0) 72%)`,
          }}
        />
      </div>

      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        className={`relative w-full p-2.5 sm:p-3 lg:p-4 text-left shadow-[0_24px_60px_-50px_rgba(28,25,23,0.22)] transition-all duration-300 hover:bg-stone-50/40 ${bgHoverColor}`}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-2.5">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] sm:tracking-[0.24em] text-stone-400">
              {item.kicker}
            </p>
            <h3 className="mt-0.5 sm:mt-1 text-sm sm:text-base lg:text-lg xl:text-2xl font-light leading-snug tracking-tight text-stone-900">
              {item.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <IconComponent size={16} className="text-stone-400 transition-colors duration-300 group-hover:text-stone-600 sm:w-5 sm:h-5" strokeWidth={1.5} />
            <div className={`h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full border border-stone-200 bg-stone-50 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown size={14} className="text-stone-600 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div 
          className="relative border-t-2 border-stone-200/30 p-2.5 sm:p-3 lg:p-4 bg-gradient-to-b from-white/50 to-white/20"
          style={{
            animation: 'fadeInDown 0.3s ease-out',
          }}
        >
          <style>{`
            @keyframes fadeInDown {
              from {
                opacity: 0;
                transform: translateY(-12px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <p className="max-w-lg text-[11px] sm:text-xs lg:text-sm xl:text-base font-light leading-relaxed text-stone-600 mb-2">
            {item.body}
          </p>

          <div className="flex items-start gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-500">
            <span className="h-px w-4 sm:w-5 shrink-0 bg-stone-300" style={{ marginTop: '2px' }} />
            <span className="break-words leading-tight">{item.detail}</span>
          </div>
        </div>
      )}
    </article>
  );
};
