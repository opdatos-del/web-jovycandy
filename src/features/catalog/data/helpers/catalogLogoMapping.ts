import type { CatalogCategoryId } from '../../types/catalog.types';

/**
 * Unified view of logo mappings
 * Combines logos with their associated products into a single structure
 * This is a derived/computed view - not the source of truth
 */
export type UnifiedLogoMapping = Array<{
  src: string;
  alt: string;
  products: string[];
}>;

/**
 * Create unified logo mapping from separate logo and product maps
 * Combines categoryLogosMap and categoryLogoProductsMap into single structure
 * This ensures single source of truth for logo-product relationships
 */
export const createUnifiedLogoMapping = (
  logos: Array<{ src: string; alt: string }>,
  logoProducts: Record<string, string[]>
): UnifiedLogoMapping => {
  return logos.map(({ src, alt }) => ({
    src,
    alt,
    products: logoProducts[src] || [],
  }));
};

/**
 * Derive categoryLogosMap from unified mapping
 * Extracts just the logo info (src/alt) without products
 */
export const deriveLogosFromUnified = (
  unified: UnifiedLogoMapping
): Array<{ src: string; alt: string }> => {
  return unified.map(({ src, alt }) => ({ src, alt }));
};

/**
 * Derive categoryLogoProductsMap from unified mapping
 * Extracts just the product info (src -> products) 
 */
export const deriveProductsMapFromUnified = (
  unified: UnifiedLogoMapping
): Record<string, string[]> => {
  const result: Record<string, string[]> = {};
  unified.forEach(({ src, products }) => {
    result[src] = products;
  });
  return result;
};
