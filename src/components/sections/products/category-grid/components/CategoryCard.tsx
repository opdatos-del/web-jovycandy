import React from 'react';
import { motion } from 'motion/react';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  accentColor: string;
  productCount: number;
  isActive?: boolean;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  accentColor,
  productCount,
  isActive = false,
  onClick,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`group relative h-48 w-full overflow-hidden transition-all sm:h-64 lg:h-72 ${
        isActive ? 'ring-2 ring-white/65' : ''
      }`}
      style={{ backgroundColor: accentColor }}
    >
      {/* Image Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center gap-2 p-4 sm:gap-3 sm:p-6">
        <h3 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h3>
        <p className="text-sm font-semibold text-white/85 sm:text-base">
          {productCount} {productCount === 1 ? 'producto' : 'productos'}
        </p>

        {/* Hover Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-full border border-white/25 bg-black/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur-sm sm:mt-4 sm:px-4 sm:py-2 sm:text-xs"
        >
          Ver Productos
        </motion.div>
      </div>
    </motion.button>
  );
};
