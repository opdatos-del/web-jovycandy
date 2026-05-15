/**
 * CategoryGrid — Category selection grid with embedded ProductCarousel.
 *
 * Renders a 6-category grid (2 rows of 3 on desktop, 1 row of 6 on mobile).
 * Clicking a category opens an inline product carousel below/beside the grid.
 * Selected product opens a technical sheet drawer.
 *
 * Performance notes:
 * - `mobileCategories` sorted and sliced via useMemo (avoids O(n) sort on every render)
 * - `topCategories` and `bottomCategories` sliced via useMemo with categories as dep
 * - `renderCarousel` wrapped in useCallback — returns new JSX element on every panelState change
 * - `handleCategoryCardClick` wrapped in useCallback with handleCategoryClick as dep
 *
 * Mobile scroll anchor fix:
 * - On mobile, clicking a category causes the page to shift when the carousel expands below it.
 * - pendingAnchorRef stores the card's scroll position before the panel opens.
 * - useLayoutEffect then re-adjusts scroll to compensate for the layout shift.
 *
 * Key dependencies tracked:
 * - panelState changes trigger re-renders of renderCarousel (logo, products, accentColor, etc.)
 * - handleCategoryClick from useCatalogFacade must be stable (stable identity via facade pattern)
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { ScrollReveal } from '@/shared/ui/ScrollReveal';

import { useCatalogFacade } from './facades/useCatalogFacade';
import { CATEGORY_GRID_SECTION_TITLE } from './constants/catalog.constants';
import { CategoryCard } from './components/CategoryCard';
import { ProductCarouselCentered } from './components/ProductCarouselCentered';
import { ProductTechnicalSheetDrawer } from './components/ProductTechnicalSheetDrawer';
import type { CatalogCategoryId, CatalogProduct } from './types/catalog.types';

export const CategoryGrid = () => {
  const { categories, panelState, handleCategoryClick, handleLogoNavigation } = useCatalogFacade();

  /** Currently selected product for the technical sheet drawer */
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);

  /**
   * Mobile scroll anchor — stores the card's pixel position before the panel opens.
   * After the carousel renders and causes layout shift, this is used to restore scroll.
   * useRef because we don't need to trigger re-renders when this value changes.
   */
  const pendingAnchorRef = useRef<{ categoryId: string; top: number } | null>(null);

  /**
   * Fixed sort order for mobile (top-to-bottom, left-to-right):
   * Mobile renders 6 cards in a single row, sorted in display order.
   */
  const mobileOrder: Record<CatalogCategoryId, number> = {
    sazonador: 0,
    chamoy: 1,
    gomitas_almidon: 2,
    dulces_paletas: 3,
    pinatero: 4,
    gomitas_grenetina: 5,
  };

  /**
   * Mobile categories — sorted by mobileOrder to match visual left-to-right, top-to-bottom layout.
   * Desktop uses topCategories/bottomCategories instead (pre-sorted in registry).
   */
  const mobileCategories = useMemo(() => {
    return categories
      .slice(0, 6)
      .sort((leftCategory, rightCategory) => {
        return mobileOrder[leftCategory.id] - mobileOrder[rightCategory.id];
      });
  }, [categories]);

  /** Desktop top row — first 3 categories */
  const topCategories = useMemo(() => categories.slice(0, 3), [categories]);
  /** Desktop bottom row — last 3 categories */
  const bottomCategories = useMemo(() => categories.slice(3, 6), [categories]);

  /**
   * Carousel renderer — returns <ProductCarouselCentered> with current panel state.
   * Wrapped in useCallback so it only re-runs when panelState fields change.
   * renderCarousel is called inside the JSX template (not memoized as JSX itself).
   */
  const renderCarousel = useCallback(() => (
    <ProductCarouselCentered
      logoSrc={panelState.logoSrc}
      logoAlt={panelState.logoAlt}
      categoryTitle={panelState.categoryTitle}
      products={panelState.products}
      accentColor={panelState.accentColor}
      onLogoChange={handleLogoNavigation}
      onProductSelect={setSelectedProduct}
    />
  ), [panelState.logoSrc, panelState.logoAlt, panelState.categoryTitle, panelState.products, panelState.accentColor, handleLogoNavigation]);

  /**
   * Sync selectedProduct with panel state.
   * - Closes drawer when panel closes
   * - Clears selection if the selected product no longer exists in the updated product list
   *   (can happen when switching categories)
   */
  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    if (!panelState.isOpen) {
      setSelectedProduct(null);
      return;
    }

    const productStillExists = panelState.originalProducts.some((product) => product.id === selectedProduct.id);

    if (!productStillExists) {
      setSelectedProduct(null);
    }
  }, [panelState.isOpen, panelState.originalProducts, selectedProduct]);

  /**
   * Mobile scroll anchor adjustment via useLayoutEffect.
   *
   * Problem: On mobile, the grid row sits at a certain scroll position. When a category is
   * clicked, the carousel expands below that row, pushing content down. The browser auto-scrolls
   * to keep the clicked card in view, but that often scrolls too much or in the wrong direction.
   *
   * Fix: Before the carousel renders, we capture the card's bounding rect top (pendingAnchorRef).
   * After layout commits, we measure the new position and calculate the delta.
   * If delta > 1px, we scroll by that delta to cancel out the shift.
   *
   * useLayoutEffect runs synchronously after DOM mutations but before paint,
   * so the adjustment happens before the user sees any jump.
   */
  useLayoutEffect(() => {
    if (!pendingAnchorRef.current) {
      return;
    }

    // Skip on desktop — mobile-only fix
    if (window.matchMedia('(min-width: 768px)').matches) {
      pendingAnchorRef.current = null;
      return;
    }

    const { categoryId, top: previousTop } = pendingAnchorRef.current;
    const anchor = document.querySelector<HTMLElement>(`[data-category-id="${categoryId}"]`);

    if (!anchor) {
      pendingAnchorRef.current = null;
      return;
    }

    const nextTop = anchor.getBoundingClientRect().top;
    const delta = nextTop - previousTop;

    // Only adjust if shift is significant (> 1px)
    if (Math.abs(delta) > 1) {
      window.scrollBy({ top: delta, left: 0, behavior: 'auto' });
    }

    pendingAnchorRef.current = null;
  }, [panelState.categoryId, panelState.isOpen]);

  /**
   * Handles category card click — sets scroll anchor on mobile, then opens panel.
   *
   * @param categoryId - ID of the category being clicked
   * @param anchorElement - The card element (used on mobile to capture scroll position)
   */
  const handleCategoryCardClick = useCallback((categoryId: CatalogCategoryId, anchorElement?: HTMLElement | null) => {
    // Only on mobile: capture the card's current scroll position before panel opens
    if (!window.matchMedia('(min-width: 768px)').matches && anchorElement) {
      pendingAnchorRef.current = {
        categoryId,
        top: anchorElement.getBoundingClientRect().top,
      };
    } else {
      pendingAnchorRef.current = null;
    }

    handleCategoryClick(categoryId);
  }, [handleCategoryClick]);

  return (
    <section className="category-grid-section relative z-10 flex flex-col bg-[#ffffff] pb-0 text-stone-900">
      <div className="flex w-full flex-grow flex-col">
        {/* Section title */}
        <div className="category-grid-heading flex justify-center">
          <ScrollReveal delay={0.04}>
            <h2 className="category-grid-title font-mono text-xs uppercase text-stone-400 opacity-90 sm:text-sm">
              {CATEGORY_GRID_SECTION_TITLE}
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <div className="category-grid-shell bg-stone-200/90">
            {/* Mobile grid — 6 cards in a single row */}
            <div className="category-grid-row grid gap-px bg-stone-200 md:hidden">
              {mobileCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  hoverImage={category.hoverImage}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  disabled={category.disabled}
                  badge={category.badge}
                  onClick={(anchorElement) => handleCategoryCardClick(category.id, anchorElement)}
                />
              ))}
            </div>

            {/* Mobile carousel — rendered inline below the card row when a category is open */}
            {panelState.isOpen && (
              <div className="md:hidden">
                {renderCarousel()}
              </div>
            )}

            {/* Desktop layout — top row, carousel (if open), bottom row */}
            <div className="hidden md:block">
              <div className="category-grid-row grid gap-px bg-stone-200">
                {topCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    hoverImage={category.hoverImage}
                    accentColor={category.accent}
                    productCount={category.productCount}
                    isActive={panelState.isOpen && panelState.categoryId === category.id}
                    disabled={category.disabled}
                    badge={category.badge}
                    onClick={(anchorElement) => handleCategoryCardClick(category.id, anchorElement)}
                  />
                ))}
              </div>

              {panelState.isOpen && renderCarousel()}

              <div className="category-grid-row grid gap-px bg-stone-200">
                {bottomCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    hoverImage={category.hoverImage}
                    accentColor={category.accent}
                    productCount={category.productCount}
                    isActive={panelState.isOpen && panelState.categoryId === category.id}
                    disabled={category.disabled}
                    badge={category.badge}
                    onClick={(anchorElement) => handleCategoryCardClick(category.id, anchorElement)}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Technical sheet drawer — appears when a product is selected */}
      <ProductTechnicalSheetDrawer
        product={selectedProduct}
        accentColor={panelState.accentColor || '#111111'}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
