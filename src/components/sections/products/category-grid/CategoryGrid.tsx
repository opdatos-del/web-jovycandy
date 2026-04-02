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
          <h2 className="category-grid-title font-mono text-xs uppercase text-stone-400 opacity-90">
            {CATEGORY_GRID_SECTION_TITLE}
          </h2>
        </ScrollReveal>

        <div className="category-grid-layout flex flex-col">
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
