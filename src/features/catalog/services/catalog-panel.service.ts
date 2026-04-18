import { DEFAULT_ACCENT_COLOR } from '../constants/catalog.constants';
import { catalogData, categoryLogoProductsMap, categoryLogosMap } from '../data/catalogData';
import type {
  CatalogCategoryCard,
  CatalogCategoryId,
  CatalogFilterType,
  CatalogLogoOption,
  CatalogPanelState,
  CatalogProduct,
} from '../types/catalog.types';

const FALLBACK_LOGO_SRC = '/logo.png';

const getLogoFilename = (logoSrc: string) => logoSrc.split('/').pop() ?? '';

export const getCatalogCategories = (): CatalogCategoryCard[] =>
  Object.entries(catalogData).map(([id, category]) => ({
    id: id as CatalogCategoryId,
    title: category.title,
    accent: category.accent || DEFAULT_ACCENT_COLOR,
    productCount: category.products.length,
    image: category.products[0]?.sampleImage || category.products[0]?.image || '',
  }));

export const getCategoryProducts = (
  categoryId: CatalogCategoryId,
  filterType?: CatalogFilterType
): CatalogProduct[] => {
  const category = catalogData[categoryId];

  if (!filterType) {
    return category.products;
  }

  return category.products.filter((product) => product.type === filterType);
};

export const getCategoryLogos = (
  categoryId: CatalogCategoryId,
  categoryTitle: string
): CatalogLogoOption[] =>
  categoryLogosMap[categoryId] || [{ src: FALLBACK_LOGO_SRC, alt: categoryTitle }];

export const getProductsByLogo = (
  categoryId: CatalogCategoryId,
  products: CatalogProduct[],
  logoSrc: string
): CatalogProduct[] => {
  const categoryLogoProducts = categoryLogoProductsMap[categoryId];
  const productNames = categoryLogoProducts?.[getLogoFilename(logoSrc)] || [];
  const filteredProducts = products.filter((product) => productNames.includes(product.name));

  return filteredProducts.length > 0 ? filteredProducts : products;
};

export const buildCatalogPanelState = (
  currentState: CatalogPanelState,
  categoryId: CatalogCategoryId,
  filterType?: CatalogFilterType
): CatalogPanelState => {
  const category = catalogData[categoryId];
  const originalProducts = getCategoryProducts(categoryId, filterType);
  const availableLogos = getCategoryLogos(categoryId, category.title);
  const firstLogo = availableLogos[0];

  return {
    isOpen: currentState.categoryId !== categoryId || !currentState.isOpen,
    categoryId,
    categoryTitle: category.title,
    products: getProductsByLogo(categoryId, originalProducts, firstLogo.src),
    originalProducts,
    accentColor: category.accent || DEFAULT_ACCENT_COLOR,
    logoSrc: firstLogo.src,
    logoAlt: firstLogo.alt,
    currentLogoIndex: 0,
    availableLogos,
    filterType,
  };
};

export const getNextLogoState = (
  currentState: CatalogPanelState,
  direction: 'prev' | 'next'
): Pick<CatalogPanelState, 'logoSrc' | 'logoAlt' | 'currentLogoIndex' | 'products'> | null => {
  if (!currentState.availableLogos.length || !currentState.categoryId) {
    return null;
  }

  const totalLogos = currentState.availableLogos.length;
  const nextIndex =
    direction === 'next'
      ? (currentState.currentLogoIndex + 1) % totalLogos
      : (currentState.currentLogoIndex - 1 + totalLogos) % totalLogos;
  const nextLogo = currentState.availableLogos[nextIndex];

  return {
    logoSrc: nextLogo.src,
    logoAlt: nextLogo.alt,
    currentLogoIndex: nextIndex,
    products: getProductsByLogo(currentState.categoryId, currentState.originalProducts, nextLogo.src),
  };
};
