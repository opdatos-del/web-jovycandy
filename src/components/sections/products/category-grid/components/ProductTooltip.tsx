import { AnimatePresence, motion } from 'motion/react';

import { TOOLTIP_OFFSET } from '../constants/catalog.constants';
import type { CatalogProduct, TooltipPosition } from '../types/catalog.types';

type ProductTooltipProps = {
  hoveredProduct: CatalogProduct | null;
  mousePosition: TooltipPosition;
};

export const ProductTooltip = ({ hoveredProduct, mousePosition }: ProductTooltipProps) => (
  <AnimatePresence>
    {hoveredProduct && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="fixed z-50 pointer-events-none bg-white border border-stone-200 text-stone-900 p-4 rounded-lg shadow-2xl max-w-[250px]"
        style={{
          left: mousePosition.x + TOOLTIP_OFFSET,
          top: mousePosition.y + TOOLTIP_OFFSET,
        }}
      >
        <h4 className="font-bold text-base mb-1">{hoveredProduct.name}</h4>
        <p className="text-xs text-stone-600 leading-relaxed">{hoveredProduct.description}</p>
      </motion.div>
    )}
  </AnimatePresence>
);
