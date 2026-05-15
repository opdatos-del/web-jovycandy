/**
 * catalog-panel.service.ts — Pure functions for building and querying catalog panel state.
 *
 * This module is stateless. All functions are pure (no side effects, no React hooks).
 * They accept data and return derived data — no mutation.
 *
 * Key concepts:
 * - Category: one of the 6 product categories (sazonador, chamoy, etc.)
 * - Logo: brand logo shown in the carousel; may map to one or more product families
 * - Product family: a grouping key (familyId/productFamily/name) that links products to logos
 * - Panel state: the full state object driving the ProductCarouselCentered component
 *
 * Data flow:
 *   registry.ts → catalogData.ts → catalog-panel.service.ts → useCatalogFacade → CategoryGrid
 *
 * Usage:
 *   const categories = getCatalogCategories();
 *   const panelState = buildCatalogPanelState(currentState, 'chamoy');
 */
import { DEFAULT_ACCENT_COLOR, COMING_SOON_BADGE } from '../constants/catalog.constants';
import { STATIC_CATALOG_SOURCE, type CatalogSource } from '../data/catalogData';
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

/** Fallback logo when a category has no logos defined */
const FALLBACK_LOGO_SRC = BRAND_LOGO_PATH;

/** Categories not yet available — clicking them has no effect */
const UPCOMING_CATEGORY_IDS = new Set<CatalogCategoryId>(['sazonador', 'dulces_paletas']);

/** Human-readable titles for each category ID (overrides data title if needed) */
const CATEGORY_TITLE_MAP: Record<CatalogCategoryId, string> = {
  sazonador: 'Sazonador',
  chamoy: 'Chamoy',
  gomitas_almidon: 'Gomitas Almidón',
  dulces_paletas: 'Dulces y Paletas',
  pinatero: 'Piñatero',
  gomitas_grenetina: 'Gomitas Grenetina',
};

/** Canonical display order — defines the visual arrangement of categories */
const CATEGORY_DISPLAY_ORDER: CatalogCategoryId[] = [
  'sazonador',
  'chamoy',
  'gomitas_almidon',
  'dulces_paletas',
  'pinatero',
  'gomitas_grenetina',
];

/** Returns the module (products + logos) for a given category ID */
const getCategoryModule = (source: CatalogSource, categoryId: CatalogCategoryId) => source.categoryModulesMap[categoryId];

/**
 * Derives the product family key for a product.
 * Uses familyId if present, falls back to productFamily, then to name.
 * This key is used to match products against logo families.
 */
const getProductFamilyKey = (product: CatalogProduct) =>
  product.familyId ?? product.productFamily ?? product.name;

const normalizeMatcherKey = (value: string | null | undefined) =>
  value?.trim().toLowerCase().replace(/[^a-z0-9]+/g, '') ?? '';

/** Returns true if the category is upcoming/not yet clickable */
const isUpcomingCategory = (categoryId: CatalogCategoryId) => UPCOMING_CATEGORY_IDS.has(categoryId);

/** Returns display title for a category — uses map, falls back to data title */
const getCategoryDisplayTitle = (categoryId: CatalogCategoryId) =>
  CATEGORY_TITLE_MAP[categoryId];

/** Returns the product list for a category */
const getCategoryProducts = (source: CatalogSource, categoryId: CatalogCategoryId): CatalogProduct[] => {
  return source.catalogData[categoryId].products;
};

/**
 * Returns the list of product family keys associated with a specific logo.
 * Used to filter products when a logo is selected in the carousel.
 */
const getLogoProductMatchers = (source: CatalogSource, categoryId: CatalogCategoryId, logoSrc: string) => {
  return getCategoryModule(source, categoryId).logos.find((logo) => logo.src === logoSrc)?.families ?? [];
};

/**
 * Builds the full list of category cards for the grid.
 * Each card includes id, title, accent color, image, hoverImage, badge, and disabled flag.
 *
 * Image resolution order:
 * 1. CATEGORY_CARD_IMAGE_PATHS (explicit per-category card image)
 * 2. CATEGORY_BACKGROUND_PATHS.primary (fallback background image)
 * 3. category.products[0].image (first product image as last resort)
 */
export const getCatalogCategories = (source: CatalogSource = STATIC_CATALOG_SOURCE): CatalogCategoryCard[] =>
  CATEGORY_DISPLAY_ORDER.map((categoryId) => {
    const category = source.catalogData[categoryId];
    const fondos = CATEGORY_BACKGROUND_PATHS[categoryId];
    const categoryImage = CATEGORY_CARD_IMAGE_PATHS[categoryId];

    return {
      id: categoryId,
      title: getCategoryDisplayTitle(categoryId),
      accent: category.accent || DEFAULT_ACCENT_COLOR,
      productCount: getCategoryProducts(source, categoryId).length,
      image: categoryImage || fondos?.primary || category.products[0]?.image || '',
      hoverImage: fondos?.hover,
      disabled: isUpcomingCategory(categoryId),
      badge: isUpcomingCategory(categoryId) ? COMING_SOON_BADGE : undefined,
    };
  });

/**
 * Returns available logos for a category, filtered to only those with matching products.
 *
 * Logo filtering logic:
 * - A logo is included if it has no family restrictions (families = [])
 * - OR if at least one of its families matches an available product's family key
 *
 * If no logos remain after filtering, returns the full logo list (graceful degradation).
 *
 * @param categoryId - Category being viewed
 * @param categoryTitle - Used as alt text for the fallback logo
 * @param products - Full product list for the category
 */
export const getCategoryLogos = (
  categoryId: CatalogCategoryId,
  categoryTitle: string,
  products: CatalogProduct[],
  source: CatalogSource = STATIC_CATALOG_SOURCE
): CatalogLogoOption[] => {
  const categoryLogos = getCategoryModule(source, categoryId).logos ?? [
    { src: FALLBACK_LOGO_SRC, alt: categoryTitle },
  ];
  const availableMatchers = new Set(
    products
      .map((product) => normalizeMatcherKey(getProductFamilyKey(product)))
      .filter(Boolean)
  );
  const filteredLogos = categoryLogos.filter((logo) => {
    const logoMatchers = getLogoProductMatchers(source, categoryId, logo.src);

    return logoMatchers.length === 0
      || logoMatchers.some((matcher) => availableMatchers.has(normalizeMatcherKey(matcher)));
  });

  return filteredLogos.length > 0 ? filteredLogos : categoryLogos;
};

/**
 * Returns products that match a given logo's family restrictions.
 * If no families are restricted on the logo, returns all products.
 *
 * @param categoryId - Category being viewed
 * @param products - Full product list for the category
 * @param logoSrc - Logo src to filter by
 */
export const getProductsByLogo = (
  categoryId: CatalogCategoryId,
  products: CatalogProduct[],
  logoSrc: string,
  source: CatalogSource = STATIC_CATALOG_SOURCE
): CatalogProduct[] => {
  const productMatchers = getLogoProductMatchers(source, categoryId, logoSrc);
  const normalizedMatchers = new Set(productMatchers.map((matcher) => normalizeMatcherKey(matcher)).filter(Boolean));
  const filteredProducts = products.filter((product) =>
    normalizedMatchers.has(normalizeMatcherKey(getProductFamilyKey(product)))
  );

  return filteredProducts.length > 0 ? filteredProducts : products;
};

/**
 * Builds the next panel state from the current state + a category click.
 *
 * Behavior:
 * - If category is upcoming: returns currentState unchanged (no-op)
 * - If clicking the same category that's already open: closes the panel (toggle)
 * - If clicking a different category: opens that category's panel, selects first logo
 * - Logo is retained if the new category has the same logo (smooth transition)
 *
 * @param currentState - Current panel state
 * @param categoryId - Category being clicked
 */
export const buildCatalogPanelState = (
  currentState: CatalogPanelState,
  categoryId: CatalogCategoryId,
  source: CatalogSource = STATIC_CATALOG_SOURCE
): CatalogPanelState => {
  if (isUpcomingCategory(categoryId)) {
    return currentState;
  }

  const category = source.catalogData[categoryId];
  const categoryTitle = getCategoryDisplayTitle(categoryId);
  const originalProducts = getCategoryProducts(source, categoryId);
  const availableLogos = getCategoryLogos(categoryId, categoryTitle, originalProducts, source);
  const isSameCategory = currentState.categoryId === categoryId;
  const shouldClosePanel = isSameCategory && currentState.isOpen;

  // Si no hay logos disponibles, devolver estado sin logo
  if (availableLogos.length === 0) {
    return {
      isOpen: !shouldClosePanel,
      categoryId,
      categoryTitle,
      products: originalProducts,
      originalProducts,
      accentColor: category.accent || DEFAULT_ACCENT_COLOR,
      logoSrc: '',
      logoAlt: '',
      currentLogoIndex: 0,
      availableLogos: [],
    };
  }

  /**
   * Retains the current logo if switching to the same category (preserves scroll position
   * and filter state during open/close toggle).
   * Otherwise selects the first available logo.
   */
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
    products: getProductsByLogo(categoryId, originalProducts, selectedLogo.src, source),
    originalProducts,
    accentColor: category.accent || DEFAULT_ACCENT_COLOR,
    logoSrc: selectedLogo.src,
    logoAlt: selectedLogo.alt,
    currentLogoIndex: selectedLogoIndex >= 0 ? selectedLogoIndex : 0,
    availableLogos,
  };
};

/**
 * Returns the next logo state for prev/next navigation.
 * Wraps around (last → first and first → last).
 *
 * @param currentState - Current panel state (must have availableLogos)
 * @param direction - Navigation direction
 * @returns Partial state object with new logo info and filtered product list, or null if no logos
 */
export const getNextLogoState = (
  currentState: CatalogPanelState,
  direction: 'prev' | 'next',
  source: CatalogSource = STATIC_CATALOG_SOURCE
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
    products: getProductsByLogo(currentState.categoryId, currentState.originalProducts, nextLogo.src, source),
  };
};
