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
    className={`text-left py-3 px-4 rounded transition-all duration-300 flex flex-col w-full ${
      isSelected ? 'bg-white/25' : 'hover:bg-white/15'
    }`}
  >
    <div className="flex items-center justify-between w-full">
      <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-white/75 hover:text-white'}`}>
        {product.name}
      </span>
      {isSelected && (
        <motion.div
          layoutId="active-indicator"
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: accentColor }}
        />
      )}
    </div>
  </button>
);
