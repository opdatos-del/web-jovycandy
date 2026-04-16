import React from 'react';
import { motion } from 'motion/react';
import { FaPepperHot } from 'react-icons/fa6';
import { LuCandy } from 'react-icons/lu';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  accentColor: string;
  productCount: number;
  isActive?: boolean;
  onClick: (filterType?: string) => void;
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
    <motion.div
      whileTap={{ scale: 0.99 }}
      onClick={() => onClick()}
      className={`group relative h-48 w-full overflow-hidden transition-all sm:h-64 lg:h-72 cursor-pointer ${
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

        {/* Filter Icons */}
        <div className="flex gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick('Picante');
            }}
            className="flex items-center justify-center rounded-full border border-white/25 bg-black/15 p-2.5 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-black/25 sm:p-3"
            title="Filtrar por Picante"
          >
            <FaPepperHot className="text-lg text-white sm:text-xl" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick('Dulce');
            }}
            className="flex items-center justify-center rounded-full border border-white/25 bg-black/15 p-2.5 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-black/25 sm:p-3"
            title="Filtrar por Dulce"
          >
            <LuCandy className="text-lg text-white sm:text-xl" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
