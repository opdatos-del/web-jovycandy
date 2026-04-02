import { DEFAULT_ACCENT_COLOR } from '../constants/catalog.constants';
import type { CatalogCategoryNode, TooltipHandlers } from '../types/catalog.types';
import { ScrollReveal } from '../../../../ui/ScrollReveal';
import { CategoryAccordion } from './CategoryAccordion';

type CatalogSidebarProps = TooltipHandlers & {
  catalogTree: CatalogCategoryNode[];
  openCategoryId: string | null;
  openSubcategories: Record<string, boolean>;
  selectedBranchKey: string | null;
  selectedProductId: string | null;
  accentColor?: string;
  onCategoryToggle: (categoryId: CatalogCategoryNode['id']) => void;
  onSubcategoryToggle: (branchKey: string) => void;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const CatalogSidebar = ({
  catalogTree,
  openCategoryId,
  openSubcategories,
  selectedBranchKey,
  selectedProductId,
  accentColor = DEFAULT_ACCENT_COLOR,
  onCategoryToggle,
  onSubcategoryToggle,
  onProductSelect,
  onProductHoverStart,
  onProductHoverEnd,
  onTooltipMouseMove,
}: CatalogSidebarProps) => (
  <ScrollReveal className="w-full lg:w-1/5" direction="left" distance={32} delay={0.08}>
    <div className="flex flex-col space-y-2 border-b border-stone-200 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
      {catalogTree.map((category) => (
        <CategoryAccordion
          key={category.id}
          category={category}
          isOpen={openCategoryId === category.id}
          openSubcategories={openSubcategories}
          selectedBranchKey={selectedBranchKey}
          selectedProductId={selectedProductId}
          accentColor={accentColor}
          onCategoryToggle={onCategoryToggle}
          onSubcategoryToggle={onSubcategoryToggle}
          onProductSelect={onProductSelect}
          onProductHoverStart={onProductHoverStart}
          onProductHoverEnd={onProductHoverEnd}
          onTooltipMouseMove={onTooltipMouseMove}
        />
      ))}
    </div>
  </ScrollReveal>
);
