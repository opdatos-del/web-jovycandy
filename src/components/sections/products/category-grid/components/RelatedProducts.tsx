import { motion } from 'motion/react';

import { DEFAULT_MUTED_COLOR, CATEGORY_GRID_VIEW_DETAILS_LABEL } from '../constants/catalog.constants';
import { formatRelatedProductsTitle } from '../utils/catalogFormatters';
import type { CatalogBranch, CatalogProduct } from '../types/catalog.types';

type RelatedProductsProps = {
  branch: CatalogBranch | null;
  products: CatalogProduct[];
  accentColor: string;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const RelatedProducts = ({ branch, products, accentColor, onProductSelect }: RelatedProductsProps) => {
  if (products.length === 0 || !branch) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 md:mt-12"
    >
      <h3 className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-6 font-mono">
        {formatRelatedProductsTitle(branch)}
      </h3>
      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide snap-x">
        {products.map((product) => (
          <button
            key={`${branch.key}-${product.id}`}
            onClick={() => onProductSelect(product.id, branch.key)}
            className="min-w-[160px] md:min-w-[200px] bg-white border border-stone-200 rounded-xl p-4 md:p-6 flex flex-col items-center hover:border-stone-300 hover:shadow-md transition-all duration-500 group text-left snap-start shrink-0"
          >
            <div className="h-24 md:h-32 w-full flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-stone-900 font-bold text-sm w-full truncate">{product.name}</span>
            <span className="text-xs w-full mt-1 truncate transition-colors group-hover:text-stone-700" style={{ color: accentColor || DEFAULT_MUTED_COLOR }}>
              {CATEGORY_GRID_VIEW_DETAILS_LABEL}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
