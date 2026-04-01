import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import type { CatalogBranch, TooltipHandlers } from '../types/catalog.types';
import { ProductListButton } from './ProductListButton';

type SubcategoryAccordionProps = TooltipHandlers & {
  branch: CatalogBranch;
  isOpen: boolean;
  isActive: boolean;
  selectedBranchKey: string | null;
  selectedProductId: string | null;
  accentColor: string;
  onToggle: (branchKey: string) => void;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const SubcategoryAccordion = ({
  branch,
  isOpen,
  isActive,
  selectedBranchKey,
  selectedProductId,
  accentColor,
  onToggle,
  onProductSelect,
  onProductHoverStart,
  onProductHoverEnd,
  onTooltipMouseMove,
}: SubcategoryAccordionProps) => (
  <div className="border border-white/15 rounded-lg overflow-hidden bg-white/10">
    <button onClick={() => onToggle(branch.key)} className="w-full px-4 py-3 flex items-center justify-between text-left group">
      <span
        className={`text-xs uppercase tracking-[0.28em] font-mono transition-colors ${
          isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
        }`}
      >
        {branch.title}
      </span>
      <ChevronDown
        size={14}
        className={`text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="px-2 pb-2 flex flex-col space-y-1">
            {branch.products.map((product) => (
              <ProductListButton
                key={`${branch.key}-${product.id}`}
                product={product}
                branch={branch}
                isSelected={selectedProductId === product.id && selectedBranchKey === branch.key}
                accentColor={accentColor}
                onProductSelect={onProductSelect}
                onProductHoverStart={onProductHoverStart}
                onProductHoverEnd={onProductHoverEnd}
                onTooltipMouseMove={onTooltipMouseMove}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
