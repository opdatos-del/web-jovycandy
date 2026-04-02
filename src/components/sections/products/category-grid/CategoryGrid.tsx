import { CATEGORY_GRID_SECTION_TITLE, DEFAULT_ACCENT_COLOR } from './constants/catalog.constants';
import { CatalogSidebar } from './components/CatalogSidebar';
import { EmptyState } from './components/EmptyState';
import { ProductDetail } from './components/ProductDetail';
import { ProductTooltip } from './components/ProductTooltip';
import { useCatalogState } from './hooks/useCatalogState';
import { useTooltipPosition } from './hooks/useTooltipPosition';
import { ScrollReveal } from '../../../ui/ScrollReveal';

export const CategoryGrid = () => {
  const {
    catalogTree,
    state,
    selectedBranch,
    selectedProduct,
    currentCategory,
    currentPathLabel,
    relatedProducts,
    handleCategoryToggle,
    handleSubcategoryToggle,
    handleProductSelect,
    handleInfoToggle,
  } = useCatalogState();

  const {
    hoveredProduct,
    mousePosition,
    handleProductHoverStart,
    handleProductHoverEnd,
    handleTooltipMouseMove,
  } = useTooltipPosition();

  const activeAccentColor = currentCategory?.accent ?? DEFAULT_ACCENT_COLOR;

  return (
    <section className="section-space relative z-10 flex min-h-screen flex-col bg-white text-stone-900">
      <div className="page-shell-wide flex w-full flex-grow flex-col">
        <ScrollReveal delay={0.04}>
          <h2 className="mb-8 text-center font-mono text-xs uppercase tracking-[0.4em] text-stone-400 opacity-90 sm:mb-10 md:text-left md:tracking-[0.5em]">
            {CATEGORY_GRID_SECTION_TITLE}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
          <CatalogSidebar
            catalogTree={catalogTree}
            openCategoryId={state.openCategoryId}
            openSubcategories={state.openSubcategories}
            selectedBranchKey={state.selectedBranchKey}
            selectedProductId={state.selectedProductId}
            accentColor={activeAccentColor}
            onCategoryToggle={handleCategoryToggle}
            onSubcategoryToggle={handleSubcategoryToggle}
            onProductSelect={handleProductSelect}
            onProductHoverStart={handleProductHoverStart}
            onProductHoverEnd={handleProductHoverEnd}
            onTooltipMouseMove={handleTooltipMouseMove}
          />

          {selectedProduct && selectedBranch && currentCategory ? (
            <ProductDetail
              product={selectedProduct}
              branch={selectedBranch}
              category={currentCategory}
              currentPathLabel={currentPathLabel}
              activeInfoIndex={state.activeInfoIndex}
              relatedProducts={relatedProducts}
              onInfoToggle={handleInfoToggle}
              onProductSelect={handleProductSelect}
            />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      <ProductTooltip hoveredProduct={hoveredProduct} mousePosition={mousePosition} />
    </section>
  );
};
