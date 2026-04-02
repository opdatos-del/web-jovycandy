import { CATEGORY_GRID_SECTION_TITLE, DEFAULT_ACCENT_COLOR } from './constants/catalog.constants';
import { CatalogSidebar } from './components/CatalogSidebar';
import { EmptyState } from './components/EmptyState';
import { ProductDetail } from './components/ProductDetail';
import { ProductTooltip } from './components/ProductTooltip';
import { useCatalogState } from './hooks/useCatalogState';
import { useTooltipPosition } from './hooks/useTooltipPosition';

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
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white min-h-screen flex flex-col relative z-10 text-stone-900">
      <div className="max-w-[1600px] mx-auto w-full flex-grow flex flex-col">
        <h2 className="text-stone-400 text-xs uppercase tracking-[0.5em] mb-12 font-mono opacity-90 text-center md:text-left">
          {CATEGORY_GRID_SECTION_TITLE}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-grow">
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
