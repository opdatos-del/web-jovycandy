import React from 'react';
import { motion } from 'motion/react';

interface ImageHoverTransitionProps {
  primaryImage: string;
  hoverImage: string;
  alt: string;
  className?: string;
  isHovered?: boolean;
}

/**
 * Componente que muestra una transición entre dos imágenes al hacer hover.
 * La imagen primaria se muestra por defecto, y la imagen secundaria reemplaza completamente al pasar el cursor.
 */
export const ImageHoverTransition: React.FC<ImageHoverTransitionProps> = ({
  primaryImage,
  hoverImage,
  alt,
  className = '',
  isHovered = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
    >
      {/* Primary Image */}
      <motion.img
        src={primaryImage}
        alt={alt}
        className="relative z-10 h-full w-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        draggable={false}
      />

      {/* Hover Image - replaces primary image */}
      <motion.img
        src={hoverImage}
        alt={`${alt} - Variant`}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        draggable={false}
      />
    </div>
  );
};
