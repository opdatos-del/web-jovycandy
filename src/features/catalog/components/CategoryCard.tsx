import React, { useState } from 'react';
import { motion } from 'motion/react';

import { ImageHoverTransition } from './ImageHoverTransition';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  hoverImage?: string;
  accentColor: string;
  productCount: number;
  isActive?: boolean;
  disabled?: boolean;
  badge?: string;
  onClick: (anchorElement?: HTMLElement | null) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  hoverImage,
  accentColor,
  productCount,
  isActive = false,
  disabled = false,
  badge,
  onClick,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      whileTap={disabled ? undefined : { scale: 0.99 }}
      onClick={(event) => {
        if (disabled) {
          return;
        }

        onClick(event.currentTarget);
      }}
      data-category-id={id}
      className={`category-card group relative w-full overflow-hidden transition-all ${
        disabled ? 'cursor-default opacity-80' : 'cursor-pointer'
      } ${
        isActive ? 'ring-2 ring-white/65' : ''
      }`}
      style={{ backgroundColor: accentColor }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Background image with hover transition */}
      <div className="absolute inset-0 z-0">
        {hoverImage ? (
          <ImageHoverTransition
            primaryImage={image}
            hoverImage={hoverImage}
            alt={title}
            className="h-full w-full"
            isHovered={isCardHovered}
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Color overlay - maintains category color over images */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ 
          backgroundColor: accentColor,
          opacity: 0.65
        }} 
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      <div className="category-card-content relative z-30 flex h-full flex-col items-center justify-center">
        <h3 className="category-card-title text-center font-extrabold tracking-tight text-white">
          {title}
        </h3>

        {badge ? (
          <span className="mt-3 rounded-full border border-white/25 bg-black/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
      </div>
    </motion.div>
  );
};
