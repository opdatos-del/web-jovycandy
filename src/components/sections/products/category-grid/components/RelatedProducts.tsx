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
      <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
        {formatRelatedProductsTitle(branch)}
      </h3>
      <div className="mobile-scroll flex gap-4 overflow-x-auto pb-4 snap-x md:gap-6">
        {products.map((product) => (
          <button
            key={`${branch.key}-${product.id}`}
            onClick={() => onProductSelect(product.id, branch.key)}
            className="group flex min-w-[11rem] shrink-0 snap-start flex-col items-center rounded-xl border border-stone-200 bg-white p-4 text-left transition-all duration-500 hover:border-stone-300 hover:shadow-md sm:min-w-[12rem] md:min-w-[13rem] md:p-6"
          >
            <div className="mb-4 flex h-24 w-full items-center justify-center md:h-32">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-stone-900 font-bold text-sm w-full truncate">{product.name}</span>
            <span className="mt-1 w-full truncate text-xs transition-colors group-hover:text-stone-700" style={{ color: accentColor || DEFAULT_MUTED_COLOR }}>
              {CATEGORY_GRID_VIEW_DETAILS_LABEL}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
