import { DEFAULT_ACCENT_COLOR } from '../constants/catalog.constants';
import { catalogData, categoryLogoProductsMap, categoryLogosMap } from '../data/catalogData';
import type {
  CatalogCategoryCard,
  CatalogCategoryId,
  CatalogLogoOption,
  CatalogPanelState,
  CatalogProduct,
} from '../types/catalog.types';

const FALLBACK_LOGO_SRC = '/logo.png';
const COMING_SOON_BADGE = 'Proximamente...';
const UPCOMING_CATEGORY_IDS = new Set<CatalogCategoryId>(['polvos', 'paletas']);
const CATEGORY_TITLE_MAP: Record<CatalogCategoryId, string> = {
  polvos: 'Sazonador',
  jellies: 'Gomitas Almidón',
  dulces: 'Chamoy',
  paletas: 'Dulces y Paletas',
  pinatero: 'Piñatero',
  gomitas: 'Gomitas Grenetina',
};

const CATEGORY_CARD_IMAGE_MAP: Record<CatalogCategoryId, string> = {
  polvos: '/ISOTIPOS/ISOTIPOS-N-01.webp',
  jellies: '/ISOTIPOS/ISOTIPOS-N-05.webp',
  dulces: '/ISOTIPOS/ISOTIPOS-N-02.webp',
  paletas: '/ISOTIPOS/ISOTIPOS-N-04.webp',
  pinatero: '/ISOTIPOS/ISOTIPOS-N-03.webp',
  gomitas: '/ISOTIPOS/ISOTIPOS-N-06.webp',
};

const CATEGORY_FONDOS_MAP: Record<CatalogCategoryId, { primary: string; hover: string }> = {
  polvos: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_POLVOS 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_POLVOS 2.webp',
  },
  jellies: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_JELLIES 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_JELLIES 2.webp',
  },
  dulces: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_DULCES 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_DULCES 2.webp',
  },
  paletas: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_PALETAS 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_PALETAS 2.webp',
  },
  pinatero: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_ PIÑATERO 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_PIÑATERO 2.webp',
  },
  gomitas: {
    primary: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_GOMAS 1.webp',
    hover: '/fondos-productos/FONDOS/PLANTILLA FONDO PRODUCTO_GOMAS 2.webp',
  },
};

const getLogoFilename = (logoSrc: string) => logoSrc.split('/').pop() ?? '';
const getProductMatcher = (product: CatalogProduct) => product.productFamily ?? product.name;
const isSpicyProduct = (product: CatalogProduct) => product.type === 'Picante';
const isUpcomingCategory = (categoryId: CatalogCategoryId) => UPCOMING_CATEGORY_IDS.has(categoryId);
const getCategoryDisplayTitle = (categoryId: CatalogCategoryId) => CATEGORY_TITLE_MAP[categoryId] ?? catalogData[categoryId].title;

const getCategoryProducts = (categoryId: CatalogCategoryId): CatalogProduct[] => {
  switch (categoryId) {
    case 'dulces':
      return [
        ...catalogData.dulces.products.filter(isSpicyProduct),
        ...catalogData.jellies.products.filter(isSpicyProduct),
        ...catalogData.gomitas.products.filter(isSpicyProduct),
      ];
    case 'jellies':
      return catalogData.jellies.products.filter((product) => !isSpicyProduct(product));
    case 'gomitas':
      return catalogData.gomitas.products.filter((product) => !isSpicyProduct(product));
    default:
      return catalogData[categoryId].products;
  }
};

const getLogoProductMatchers = (categoryId: CatalogCategoryId, logoSrc: string) => {
  const categoryLogoProducts = categoryLogoProductsMap[categoryId];

  if (!categoryLogoProducts) {
    return [];
  }

  return categoryLogoProducts[logoSrc] || categoryLogoProducts[getLogoFilename(logoSrc)] || [];
};

export const getCatalogCategories = (): CatalogCategoryCard[] =>
  Object.entries(catalogData).map(([id, category]) => {
    const categoryId = id as CatalogCategoryId;
    const fondos = CATEGORY_FONDOS_MAP[categoryId];
    const categoryImage = CATEGORY_CARD_IMAGE_MAP[categoryId];
    
    return {
      id: categoryId,
      title: getCategoryDisplayTitle(categoryId),
      accent: category.accent || DEFAULT_ACCENT_COLOR,
      productCount: getCategoryProducts(categoryId).length,
      image: categoryImage || fondos?.primary || category.products[0]?.sampleImage || category.products[0]?.image || '',
      hoverImage: fondos?.hover,
      disabled: isUpcomingCategory(categoryId),
      badge: isUpcomingCategory(categoryId) ? COMING_SOON_BADGE : undefined,
    };
  });

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
  categoryId: CatalogCategoryId
): CatalogPanelState => {
  if (isUpcomingCategory(categoryId)) {
    return currentState;
  }

  const category = catalogData[categoryId];
  const categoryTitle = getCategoryDisplayTitle(categoryId);
  const originalProducts = getCategoryProducts(categoryId);
  const availableLogos = getCategoryLogos(categoryId, categoryTitle, originalProducts);
  const isSameCategory = currentState.categoryId === categoryId;
  const shouldClosePanel = isSameCategory && currentState.isOpen;
  const retainedLogo =
    isSameCategory && currentState.logoSrc
      ? availableLogos.find((logo) => logo.src === currentState.logoSrc)
      : undefined;
  const selectedLogo = retainedLogo ?? availableLogos[0];
  const selectedLogoIndex = availableLogos.findIndex((logo) => logo.src === selectedLogo.src);

  return {
    isOpen: !shouldClosePanel,
    categoryId,
    categoryTitle,
    products: getProductsByLogo(categoryId, originalProducts, selectedLogo.src),
    originalProducts,
    accentColor: category.accent || DEFAULT_ACCENT_COLOR,
    logoSrc: selectedLogo.src,
    logoAlt: selectedLogo.alt,
    currentLogoIndex: selectedLogoIndex >= 0 ? selectedLogoIndex : 0,
    availableLogos,
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
