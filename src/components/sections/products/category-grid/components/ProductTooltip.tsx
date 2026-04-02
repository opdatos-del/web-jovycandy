import { AnimatePresence, motion } from 'motion/react';

import { TOOLTIP_OFFSET } from '../constants/catalog.constants';
import type { CatalogProduct, TooltipPosition } from '../types/catalog.types';

type ProductTooltipProps = {
  hoveredProduct: CatalogProduct | null;
  mousePosition: TooltipPosition;
};

export const ProductTooltip = ({ hoveredProduct, mousePosition }: ProductTooltipProps) => {
  const viewportWidth = typeof window === 'undefined' ? 0 : window.innerWidth;
  const viewportHeight = typeof window === 'undefined' ? 0 : window.innerHeight;
  const tooltipWidth = 266;
  const tooltipHeight = 140;
  const left =
    viewportWidth > 0
      ? Math.max(12, Math.min(mousePosition.x + TOOLTIP_OFFSET, viewportWidth - tooltipWidth))
      : mousePosition.x + TOOLTIP_OFFSET;
  const top =
    viewportHeight > 0
      ? Math.max(12, Math.min(mousePosition.y + TOOLTIP_OFFSET, viewportHeight - tooltipHeight))
      : mousePosition.y + TOOLTIP_OFFSET;

  return (
    <AnimatePresence>
      {hoveredProduct && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed z-50 max-w-[250px] rounded-lg border border-stone-200 bg-white p-4 text-stone-900 shadow-2xl"
          style={{
            left,
            top,
          }}
        >
          <h4 className="mb-1 text-base font-bold">{hoveredProduct.name}</h4>
          <p className="text-xs leading-relaxed text-stone-600">{hoveredProduct.description}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
