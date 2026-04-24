import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaPepperHot } from 'react-icons/fa6';
import { LuCandy } from 'react-icons/lu';

import { ImageHoverTransition } from './ImageHoverTransition';
import type { CatalogFilterType } from '../types/catalog.types';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  hoverImage?: string;
  accentColor: string;
  productCount: number;
  isActive?: boolean;
  onClick: (filterType?: CatalogFilterType, anchorElement?: HTMLElement | null) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  hoverImage,
  accentColor,
  productCount,
  isActive = false,
  onClick,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      onClick={(event) => onClick(undefined, event.currentTarget)}
      data-category-id={id}
      className={`category-card group relative w-full cursor-pointer overflow-hidden transition-all ${
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

        <div className="category-card-actions flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick('Picante', e.currentTarget.closest<HTMLElement>('[data-category-id]'));
            }}
            className="category-card-action flex items-center justify-center rounded-full border border-white/25 bg-black/15 p-2.5 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-black/25 sm:p-3"
            title="Filtrar por Picante"
          >
            <FaPepperHot className="text-lg text-white sm:text-xl" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick('Dulce', e.currentTarget.closest<HTMLElement>('[data-category-id]'));
            }}
            className="category-card-action flex items-center justify-center rounded-full border border-white/25 bg-black/15 p-2.5 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-black/25 sm:p-3"
            title="Filtrar por Dulce"
          >
            <LuCandy className="text-lg text-white sm:text-xl" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
