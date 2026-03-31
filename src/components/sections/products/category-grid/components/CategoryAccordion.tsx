import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import { CATEGORY_GRID_GENERAL_LABEL } from '../constants/catalog.constants';
import type { CatalogCategoryNode, TooltipHandlers } from '../types/catalog.types';
import { ProductListButton } from './ProductListButton';
import { SubcategoryAccordion } from './SubcategoryAccordion';

type CategoryAccordionProps = TooltipHandlers & {
  category: CatalogCategoryNode;
  isOpen: boolean;
  openSubcategories: Record<string, boolean>;
  selectedBranchKey: string | null;
  selectedProductId: string | null;
  accentColor: string;
  onCategoryToggle: (categoryId: CatalogCategoryNode['id']) => void;
  onSubcategoryToggle: (branchKey: string) => void;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const CategoryAccordion = ({
  category,
  isOpen,
  openSubcategories,
  selectedBranchKey,
  selectedProductId,
  accentColor,
  onCategoryToggle,
  onSubcategoryToggle,
  onProductSelect,
  onProductHoverStart,
  onProductHoverEnd,
  onTooltipMouseMove,
}: CategoryAccordionProps) => {
  const hasSubcategories = category.branches.some((branch) => branch.subcategoryId);

  return (
    <div className="border-b border-stone-100 last:border-0">
      <button onClick={() => onCategoryToggle(category.id)} className="w-full py-4 flex justify-between items-center text-left group">
        <span
          className={`text-lg font-bold uppercase tracking-wide transition-colors ${
            isOpen ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-700'
          }`}
        >
          {category.title}
        </span>
        <ChevronDown size={16} className={`text-stone-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 flex flex-col space-y-3">
              {category.branches.map((branch) => {
                if (!branch.subcategoryId) {
                  return (
                    <div key={branch.key} className="flex flex-col space-y-1">
                      {hasSubcategories && (
                        <p className="px-4 pt-2 text-[10px] uppercase tracking-[0.35em] text-stone-400 font-mono">
                          {CATEGORY_GRID_GENERAL_LABEL}
                        </p>
                      )}
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
                  );
                }

                return (
                  <SubcategoryAccordion
                    key={branch.key}
                    branch={branch}
                    isOpen={Boolean(openSubcategories[branch.key])}
                    isActive={selectedBranchKey === branch.key}
                    selectedBranchKey={selectedBranchKey}
                    selectedProductId={selectedProductId}
                    accentColor={accentColor}
                    onToggle={onSubcategoryToggle}
                    onProductSelect={onProductSelect}
                    onProductHoverStart={onProductHoverStart}
                    onProductHoverEnd={onProductHoverEnd}
                    onTooltipMouseMove={onTooltipMouseMove}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
