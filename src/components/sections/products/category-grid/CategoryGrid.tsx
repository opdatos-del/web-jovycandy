import React, { useState } from 'react';
import { CATEGORY_GRID_SECTION_TITLE, DEFAULT_ACCENT_COLOR } from './constants/catalog.constants';
import { CategoryCard } from './components/CategoryCard';
import { ProductCarouselCentered } from './components/ProductCarouselCentered';
import { ScrollReveal } from '../../../ui/ScrollReveal';
import { catalogData } from './data/catalogData';
import type { CatalogCategoryId, CatalogProduct } from './types/catalog.types';

interface PanelState {
  isOpen: boolean;
  categoryId: CatalogCategoryId | null;
  categoryTitle: string;
  products: CatalogProduct[];
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
  currentLogoIndex: number;
  availableLogos: Array<{ src: string; alt: string }>;
  filterType?: string;
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
    currentLogoIndex: 0,
    availableLogos: [],
    filterType: undefined,
  });

  const handleCategoryClick = (categoryId: CatalogCategoryId, filterType?: string) => {
    const category = catalogData[categoryId];
    
    // Map category IDs to folder names for the WEBP PRODUCTOS structure
    const categoryFolderMap: Record<CatalogCategoryId, string> = {
      polvos: 'POWDERS',
      jellies: 'JELLIES',
      dulces: 'HARD CANDY',
      paletas: 'LOLLIPOPS',
      pinatero: 'PIÑATERO',
      gomitas: 'GUMMIES',
    };

    // Get products filtered by type if provided
    let products = category.products;
    const selectedType = filterType || category.products[0]?.type;
    
    if (filterType) {
      products = category.products.filter((product) => product.type === filterType);
    }

    // Generate logo path based on category and type
    const typeFolder = selectedType === 'Picante' ? 'SPICY' : 'SWEET';
    const categoryFolder = categoryFolderMap[categoryId];
    const logoPath = `/WEBP PRODUCTOS/${typeFolder}/${categoryFolder}/LOGOS`;
    
    // Use a generic logo name that likely exists or fallback
    const defaultLogo = { 
      src: `${logoPath}/category-logo.webp`, 
      alt: `${category.title} logo` 
    };

    setPanelState((prev) => ({
      isOpen: prev.categoryId !== categoryId || !prev.isOpen,
      categoryId,
      categoryTitle: category.title,
      products,
      accentColor: category.accent || DEFAULT_ACCENT_COLOR,
      logoSrc: defaultLogo.src,
      logoAlt: defaultLogo.alt,
      currentLogoIndex: 0,
      availableLogos: [defaultLogo],
      filterType,
    }));
  };

  const handleLogoNavigation = (direction: 'prev' | 'next') => {
    if (!panelState.availableLogos.length) return;

    const newIndex =
      direction === 'next'
        ? (panelState.currentLogoIndex + 1) % panelState.availableLogos.length
        : (panelState.currentLogoIndex - 1 + panelState.availableLogos.length) %
          panelState.availableLogos.length;

    const newLogo = panelState.availableLogos[newIndex];

    setPanelState((prev) => ({
      ...prev,
      logoSrc: newLogo.src,
      logoAlt: newLogo.alt,
      currentLogoIndex: newIndex,
    }));
  };

  const handleClosePanel = () => {
    setPanelState((prev) => ({
      ...prev,
      isOpen: false,
      filterType: undefined,
    }));
  };

  const categories = Object.entries(catalogData).map(([id, category]) => ({
    id,
    title: category.title,
    accent: category.accent || DEFAULT_ACCENT_COLOR,
    productCount: category.products.length,
    image: category.products[0]?.sampleImage || category.products[0]?.image || '',
  }));

  // Dividir categorías en dos filas (3 arriba, 3 abajo)
  const topCategories = categories.slice(0, 3);
  const bottomCategories = categories.slice(3, 6);

  return (
    <section className="relative z-10 flex flex-col bg-[#ffffff] pb-0 pt-5 text-stone-900 sm:pt-7 lg:pt-9">
      <div className="flex w-full flex-grow flex-col">
        <div className="page-shell-wide">
          <ScrollReveal delay={0.04}>
            <h2 className="category-grid-title mb-4 font-mono text-xs uppercase text-stone-400 opacity-90 sm:mb-6 sm:text-sm">
              {CATEGORY_GRID_SECTION_TITLE}
            </h2>
          </ScrollReveal>
        </div>

        {/* Main Grid Layout with Categories and Central Carousel */}
        <ScrollReveal delay={0.08}>
          <div className="overflow-hidden bg-stone-200/90">
            {/* Top Categories - 3 columns */}
            <div className="grid grid-cols-3 gap-px bg-stone-200">
              {topCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  onClick={(filterType) => handleCategoryClick(category.id as CatalogCategoryId, filterType)}
                />
              ))}
            </div>

            {/* Central Carousel - always visible when open */}
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

            {/* Bottom Categories - 3 columns */}
            <div className="grid grid-cols-3 gap-px bg-stone-200">
              {bottomCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                  accentColor={category.accent}
                  productCount={category.productCount}
                  isActive={panelState.isOpen && panelState.categoryId === category.id}
                  onClick={(filterType) => handleCategoryClick(category.id as CatalogCategoryId, filterType)}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
