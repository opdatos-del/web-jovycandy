import React, { useState } from 'react';
import { CATEGORY_GRID_SECTION_TITLE, DEFAULT_ACCENT_COLOR } from './constants/catalog.constants';
import { CategoryCard } from './components/CategoryCard';
import { ProductCarouselModal } from './components/ProductCarouselModal';
import { ScrollReveal } from '../../../ui/ScrollReveal';
import { catalogData } from './data/catalogData';
import { categoryNavigation } from './data/categoryNavigation';
import type { CatalogCategoryId, CatalogData, CatalogProduct } from './types/catalog.types';

interface PanelState {
  isOpen: boolean;
  categoryId: CatalogCategoryId | null;
  categoryTitle: string;
  products: CatalogProduct[];
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
}

export const CategoryGrid = () => {
  const [panelState, setPanelState] = useState<PanelState>({
    isOpen: false,
    categoryId: null,
    categoryTitle: '',
    products: [],
    accentColor: DEFAULT_ACCENT_COLOR,
    logoSrc: '',
    logoAlt: '',
  });

  const handleCategoryClick = (categoryId: CatalogCategoryId) => {
    const category = catalogData[categoryId];
    const defaultLogo = categoryNavigation[categoryId]?.subcategories?.[0]?.logo;

    setPanelState((prev) => ({
      isOpen: prev.categoryId !== categoryId || !prev.isOpen,
      categoryId,
      categoryTitle: category.title,
      products: category.products,
      accentColor: category.accent || DEFAULT_ACCENT_COLOR,
      logoSrc: defaultLogo?.src ?? '',
      logoAlt: defaultLogo?.alt ?? `${category.title} logo`,
    }));
  };

  const handleClosePanel = () => {
    setPanelState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const categories = Object.entries(catalogData).map(([id, category]) => ({
    id,
    title: category.title,
    accent: category.accent || DEFAULT_ACCENT_COLOR,
    productCount: category.products.length,
    image: category.products[0]?.sampleImage || category.products[0]?.image || '',
  }));

  return (
    <section className="relative z-10 flex flex-col bg-[#efefef] pb-0 pt-5 text-stone-900 sm:pt-7 lg:pt-9">
      <div className="flex w-full flex-grow flex-col">
        <div className="page-shell-wide">
          <ScrollReveal delay={0.04}>
            <h2 className="category-grid-title mb-4 font-mono text-xs uppercase text-stone-400 opacity-90 sm:mb-6 sm:text-sm">
              {CATEGORY_GRID_SECTION_TITLE}
            </h2>
          </ScrollReveal>
        </div>

        {/* Categories + Inline Panel */}
        <ScrollReveal delay={0.08}>
          <div className="overflow-hidden bg-stone-200/90">
            <div className="grid grid-cols-2 gap-px bg-stone-200 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  onClick={() => handleCategoryClick(category.id as CatalogCategoryId)}
                />
              ))}
            </div>

            <ProductCarouselModal
              isOpen={panelState.isOpen}
              categoryTitle={panelState.categoryTitle}
              products={panelState.products}
              accentColor={panelState.accentColor}
              logoSrc={panelState.logoSrc}
              logoAlt={panelState.logoAlt}
              onClose={handleClosePanel}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
