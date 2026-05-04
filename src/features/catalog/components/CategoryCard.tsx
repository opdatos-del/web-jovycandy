/**
 * CategoryCard — Individual category tile in the CategoryGrid.
 *
 * Renders a category card with:
 * - Background image (with hover transition if hoverImage provided)
 * - Semi-transparent color overlay using the category's accent color (OVERLAY_OPACITY = 0.42)
 * - Title and optional badge (e.g., "Próximamente")
 * - Active ring indicator when the category is currently selected/open
 *
 * State:
 * - isCardHovered — local state controlling the hover image transition.
 *   This is fine since it's a simple boolean with no derived computation.
 *
 * Note: productCount prop is accepted but no longer used — badge shows
 * availability instead. Kept optional to avoid breaking existing callers.
 */
import { useState } from 'react';
import { motion } from 'motion/react';

import { ImageHoverTransition } from './ImageHoverTransition';
import { OVERLAY_OPACITY } from '../constants/catalog.constants';

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  hoverImage?: string;
  accentColor: string;
  /** Deprecated — kept for type compat but no longer rendered */
  productCount?: number;
  isActive?: boolean;
  disabled?: boolean;
  badge?: string;
  /** Called on click with the card element (for mobile scroll anchor tracking) */
  onClick: (anchorElement?: HTMLElement | null) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  hoverImage,
  accentColor,
  isActive = false,
  disabled = false,
  badge,
  onClick,
}) => {
  /** Tracks hover state for the image transition effect */
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      /** Scale down slightly on tap when not disabled */
      whileTap={disabled ? undefined : { scale: 0.99 }}
      onClick={(event) => {
        if (disabled) {
          return;
        }

        /** Passes the card element up to CategoryGrid for mobile scroll anchor tracking */
        onClick(event.currentTarget);
      }}
      /** data-category-id is used by CategoryGrid's useLayoutEffect to find the anchor element */
      data-category-id={id}
      className={`category-card group relative w-full overflow-hidden transition-all ${
        disabled ? 'cursor-default opacity-80' : 'cursor-pointer'
      } ${
        isActive ? 'ring-2 ring-white/65' : ''
      }`}
      /** accentColor becomes both the card background and the overlay tint */
      style={{ backgroundColor: accentColor }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/*
       * Background image layer (z-0).
       * If hoverImage is provided, uses ImageHoverTransition for crossfade.
       * Otherwise renders a static <img>.
       */}
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

      {/*
       * Color overlay (z-10) — tints the background image with the category's accent color.
       * Uses OVERLAY_OPACITY constant (0.42) for consistent visual weight across categories.
       * pointer-events-none so clicks pass through to the card surface.
       */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: accentColor,
          opacity: OVERLAY_OPACITY,
        }}
      />

      {/*
       * Gradient overlay (z-20) — subtle top-to-bottom darkening for text legibility.
       * pointer-events-none so this layer doesn't block interactions.
       */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/22 to-transparent pointer-events-none" />

      {/*
       * Content layer (z-30) — title and badge, always above overlays.
       */}
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
