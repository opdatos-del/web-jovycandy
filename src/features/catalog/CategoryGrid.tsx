import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ScrollReveal } from '@/shared/ui/ScrollReveal';

import { useCatalogFacade } from './facades/useCatalogFacade';
import { CATEGORY_GRID_SECTION_TITLE } from './constants/catalog.constants';
import { CategoryCard } from './components/CategoryCard';
import { ProductCarouselCentered } from './components/ProductCarouselCentered';
import { ProductTechnicalSheetDrawer } from './components/ProductTechnicalSheetDrawer';
import type { CatalogCategoryId, CatalogProduct } from './types/catalog.types';

export const CategoryGrid = () => {
  const { categories, panelState, handleCategoryClick, handleLogoNavigation } = useCatalogFacade();
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const pendingAnchorRef = useRef<{ categoryId: string; top: number } | null>(null);

  const mobileCategories = categories
    .slice(0, 6)
    .sort((leftCategory, rightCategory) => {
      const mobileOrder: Record<CatalogCategoryId, number> = {
        sazonador: 0,
        chamoy: 1,
        gomitas_almidon: 2,
        dulces_paletas: 3,
        pinatero: 4,
        gomitas_grenetina: 5,
      };

      return mobileOrder[leftCategory.id] - mobileOrder[rightCategory.id];
    });

  const topCategories = categories.slice(0, 3);
  const bottomCategories = categories.slice(3, 6);

  const renderCarousel = () => (
    <ProductCarouselCentered
      logoSrc={panelState.logoSrc}
      logoAlt={panelState.logoAlt}
      categoryTitle={panelState.categoryTitle}
      products={panelState.products}
      accentColor={panelState.accentColor}
      onLogoChange={handleLogoNavigation}
      onProductSelect={setSelectedProduct}
    />
  );

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

  useLayoutEffect(() => {
    if (!pendingAnchorRef.current) {
      return;
    }

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

    if (Math.abs(delta) > 1) {
      window.scrollBy({ top: delta, left: 0, behavior: 'auto' });
    }

    pendingAnchorRef.current = null;
  }, [panelState.categoryId, panelState.isOpen]);

  const handleCategoryCardClick = (categoryId: CatalogCategoryId, anchorElement?: HTMLElement | null) => {
    if (!window.matchMedia('(min-width: 768px)').matches && anchorElement) {
      pendingAnchorRef.current = {
        categoryId,
        top: anchorElement.getBoundingClientRect().top,
      };
    } else {
      pendingAnchorRef.current = null;
    }

    handleCategoryClick(categoryId);
  };

  return (
    <section className="category-grid-section relative z-10 flex flex-col bg-[#ffffff] pb-0 text-stone-900">
      <div className="flex w-full flex-grow flex-col">
        <div className="category-grid-heading flex justify-center">
          <ScrollReveal delay={0.04}>
            <h2 className="category-grid-title font-mono text-xs uppercase text-stone-400 opacity-90 sm:text-sm">
              {CATEGORY_GRID_SECTION_TITLE}
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <div className="category-grid-shell bg-stone-200/90">
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

            {panelState.isOpen && (
              <div className="md:hidden">
                {renderCarousel()}
              </div>
            )}

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

      <ProductTechnicalSheetDrawer
        product={selectedProduct}
        accentColor={panelState.accentColor || '#111111'}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
