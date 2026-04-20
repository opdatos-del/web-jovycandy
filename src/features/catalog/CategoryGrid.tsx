import React from 'react';

import { ScrollReveal } from '@/shared/ui/ScrollReveal';

import { useCatalogFacade } from './facades/useCatalogFacade';
import { CATEGORY_GRID_SECTION_TITLE } from './constants/catalog.constants';
import { CategoryCard } from './components/CategoryCard';
import { ProductCarouselCentered } from './components/ProductCarouselCentered';

export const CategoryGrid = () => {
  const { categories, panelState, handleCategoryClick, handleLogoNavigation } = useCatalogFacade();

  const topCategories = categories.slice(0, 3);
  const bottomCategories = categories.slice(3, 6);

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
            <div className="category-grid-row grid gap-px bg-stone-200">
              {topCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  onClick={(filterType) => handleCategoryClick(category.id, filterType)}
                />
              ))}
            </div>

            {panelState.isOpen && (
              <ProductCarouselCentered
                logoSrc={panelState.logoSrc}
                logoAlt={panelState.logoAlt}
                categoryTitle={panelState.categoryTitle}
                products={panelState.products}
                accentColor={panelState.accentColor}
                onLogoChange={handleLogoNavigation}
              />
            )}

            <div className="category-grid-row grid gap-px bg-stone-200">
              {bottomCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  onClick={(filterType) => handleCategoryClick(category.id, filterType)}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
