import React from 'react';
import { motion } from 'motion/react';
import { FaPepperHot } from 'react-icons/fa6';
import { LuCandy } from 'react-icons/lu';

import type { CatalogFilterType } from '../types/catalog.types';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  accentColor: string;
  productCount: number;
  isActive?: boolean;
  onClick: (filterType?: CatalogFilterType, anchorElement?: HTMLElement | null) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  accentColor,
  productCount,
  isActive = false,
  onClick,
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      onClick={(event) => onClick(undefined, event.currentTarget)}
      data-category-id={id}
      className={`category-card group relative w-full cursor-pointer overflow-hidden transition-all ${
        isActive ? 'ring-2 ring-white/65' : ''
      }`}
      style={{ backgroundColor: accentColor }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="category-card-content relative flex h-full flex-col items-center justify-center">
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
