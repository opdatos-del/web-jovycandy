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
const getProductMatcher = (product: CatalogProduct) => product.productFamily ?? product.name;
const getLogoProductMatchers = (categoryId: CatalogCategoryId, logoSrc: string) => {
  const categoryLogoProducts = categoryLogoProductsMap[categoryId];

  if (!categoryLogoProducts) {
    return [];
  }

  return categoryLogoProducts[logoSrc] || categoryLogoProducts[getLogoFilename(logoSrc)] || [];
};

export const getCatalogCategories = (): CatalogCategoryCard[] =>
  Object.entries(catalogData).map(([id, category]) => ({
    id: id as CatalogCategoryId,
    title: category.title,
    accent: category.accent || DEFAULT_ACCENT_COLOR,
    productCount: category.products.length,
    image: id === 'polvos' 
      ? '/fondos-productos/FONDOS PRODUCTOS/POLVOS FONDOS-800X800.webp'
      : category.products[0]?.sampleImage || category.products[0]?.image || '',
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
  categoryTitle: string,
  products: CatalogProduct[]
): CatalogLogoOption[] => {
  const categoryLogos = categoryLogosMap[categoryId] || [{ src: FALLBACK_LOGO_SRC, alt: categoryTitle }];
  const availableMatchers = new Set(products.map(getProductMatcher));
  const filteredLogos = categoryLogos.filter((logo) => {
    const logoMatchers = getLogoProductMatchers(categoryId, logo.src);

    return logoMatchers.length === 0 || logoMatchers.some((matcher) => availableMatchers.has(matcher));
  });

  return filteredLogos.length > 0 ? filteredLogos : categoryLogos;
};

export const getProductsByLogo = (
  categoryId: CatalogCategoryId,
  products: CatalogProduct[],
  logoSrc: string
): CatalogProduct[] => {
  const productMatchers = getLogoProductMatchers(categoryId, logoSrc);
  const filteredProducts = products.filter((product) => productMatchers.includes(getProductMatcher(product)));

  return filteredProducts.length > 0 ? filteredProducts : products;
};

export const buildCatalogPanelState = (
  currentState: CatalogPanelState,
  categoryId: CatalogCategoryId,
  filterType?: CatalogFilterType
): CatalogPanelState => {
  const category = catalogData[categoryId];
  const originalProducts = getCategoryProducts(categoryId, filterType);
  const availableLogos = getCategoryLogos(categoryId, category.title, originalProducts);
  const isSameCategory = currentState.categoryId === categoryId;
  const isSameFilter = currentState.filterType === filterType;
  const shouldClosePanel = isSameCategory && currentState.isOpen && isSameFilter;
  const retainedLogo =
    isSameCategory && currentState.logoSrc
      ? availableLogos.find((logo) => logo.src === currentState.logoSrc)
      : undefined;
  const selectedLogo = retainedLogo ?? availableLogos[0];
  const selectedLogoIndex = availableLogos.findIndex((logo) => logo.src === selectedLogo.src);

  return {
    isOpen: !shouldClosePanel,
    categoryId,
    categoryTitle: category.title,
    products: getProductsByLogo(categoryId, originalProducts, selectedLogo.src),
    originalProducts,
    accentColor: category.accent || DEFAULT_ACCENT_COLOR,
    logoSrc: selectedLogo.src,
    logoAlt: selectedLogo.alt,
    currentLogoIndex: selectedLogoIndex >= 0 ? selectedLogoIndex : 0,
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
