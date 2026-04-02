import { motion } from 'motion/react';

import { DEFAULT_ACCENT_COLOR } from '../constants/catalog.constants';
import type { CatalogBranch, CatalogProduct, TooltipHandlers } from '../types/catalog.types';

type ProductListButtonProps = TooltipHandlers & {
  product: CatalogProduct;
  branch: CatalogBranch;
  isSelected: boolean;
  accentColor?: string;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const ProductListButton = ({
  product,
  branch,
  isSelected,
  accentColor = DEFAULT_ACCENT_COLOR,
  onProductSelect,
  onProductHoverStart,
  onProductHoverEnd,
  onTooltipMouseMove,
}: ProductListButtonProps) => (
  <button
    onClick={() => onProductSelect(product.id, branch.key)}
    onMouseEnter={() => onProductHoverStart(product)}
    onMouseLeave={onProductHoverEnd}
    onMouseMove={onTooltipMouseMove}
    className={`flex w-full min-w-0 flex-col rounded px-4 py-3 text-left transition-all duration-300 ${
      isSelected ? 'bg-white shadow-sm' : 'hover:bg-white/70'
    }`}
  >
    <div className="flex w-full items-center justify-between">
      <span
        className={`min-w-0 pr-2 text-sm leading-snug ${isSelected ? 'font-medium text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
      >
        {product.name}
      </span>
      {isSelected && (
        <motion.div
          layoutId="active-indicator"
          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      )}
    </div>
  </button>
);
