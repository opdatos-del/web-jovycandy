import { DEFAULT_ACCENT_COLOR } from '../constants/catalog.constants';
import { catalogData, categoryModulesMap } from '../data/catalogData';
import {
  BRAND_LOGO_PATH,
  CATEGORY_BACKGROUND_PATHS,
  CATEGORY_CARD_IMAGE_PATHS,
} from '@/shared/assets/publicAssets';
import type {
  CatalogCategoryCard,
  CatalogCategoryId,
  CatalogLogoOption,
  CatalogPanelState,
  CatalogProduct,
} from '../types/catalog.types';

const FALLBACK_LOGO_SRC = BRAND_LOGO_PATH;
const COMING_SOON_BADGE = 'Proximamente...';
const UPCOMING_CATEGORY_IDS = new Set<CatalogCategoryId>(['sazonador', 'dulces_paletas']);

const CATEGORY_TITLE_MAP: Record<CatalogCategoryId, string> = {
  sazonador: 'Sazonador',
  chamoy: 'Chamoy',
  gomitas_almidon: 'Gomitas Almidón',
  dulces_paletas: 'Dulces y Paletas',
  pinatero: 'Piñatero',
  gomitas_grenetina: 'Gomitas Grenetina',
};

const CATEGORY_DISPLAY_ORDER: CatalogCategoryId[] = [
  'sazonador',
  'chamoy',
  'gomitas_almidon',
  'dulces_paletas',
  'pinatero',
  'gomitas_grenetina',
];

const getCategoryModule = (categoryId: CatalogCategoryId) => categoryModulesMap[categoryId];
const getProductFamilyKey = (product: CatalogProduct) =>
  product.familyId ?? product.productFamily ?? product.name;
const isUpcomingCategory = (categoryId: CatalogCategoryId) => UPCOMING_CATEGORY_IDS.has(categoryId);

const getCategoryDisplayTitle = (categoryId: CatalogCategoryId) =>
  CATEGORY_TITLE_MAP[categoryId] ?? catalogData[categoryId].title;

const getCategoryProducts = (categoryId: CatalogCategoryId): CatalogProduct[] => {
  return catalogData[categoryId].products;
};

const getLogoProductMatchers = (categoryId: CatalogCategoryId, logoSrc: string) => {
  return getCategoryModule(categoryId).logos.find((logo) => logo.src === logoSrc)?.families ?? [];
};

export const getCatalogCategories = (): CatalogCategoryCard[] =>
  CATEGORY_DISPLAY_ORDER.map((categoryId) => {
    const category = catalogData[categoryId];
    const fondos = CATEGORY_BACKGROUND_PATHS[categoryId];
    const categoryImage = CATEGORY_CARD_IMAGE_PATHS[categoryId];

    return {
      id: categoryId,
      title: getCategoryDisplayTitle(categoryId),
      accent: category.accent || DEFAULT_ACCENT_COLOR,
      productCount: getCategoryProducts(categoryId).length,
      image: categoryImage || fondos?.primary || category.products[0]?.image || '',
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
  const categoryLogos = getCategoryModule(categoryId).logos ?? [
    { src: FALLBACK_LOGO_SRC, alt: categoryTitle },
  ];
  const availableMatchers = new Set(products.map(getProductFamilyKey));
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
  const filteredProducts = products.filter((product) =>
    productMatchers.includes(getProductFamilyKey(product))
  );

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
