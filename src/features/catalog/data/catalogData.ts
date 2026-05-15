/**
 * catalogData.ts
 *
 * Derives the flat catalog data structures consumed by catalog-panel.service
 * directly from the central registry. No manual entries needed here.
 *
 * To add a new category, update registry.ts — this file stays untouched.
 */

import type { CatalogCategoryId, CatalogCategoryModule, CatalogData, CatalogProduct } from '../types/catalog.types';
import { CATALOG_MODULE_REGISTRY } from './registry';

export type CatalogSource = {
  categoryModulesMap: Record<CatalogCategoryId, CatalogCategoryModule<CatalogProduct>>;
  catalogData: CatalogData;
};

export const buildCatalogSource = (
  registry: Record<CatalogCategoryId, CatalogCategoryModule<CatalogProduct>>
): CatalogSource => ({
  categoryModulesMap: registry,
  catalogData: Object.fromEntries(
    Object.entries(registry).map(([id, module]) => [id, module.category])
  ) as CatalogData,
});

export const STATIC_CATALOG_SOURCE = buildCatalogSource(
  CATALOG_MODULE_REGISTRY as Record<CatalogCategoryId, CatalogCategoryModule<CatalogProduct>>
);

/** Map of categoryId → full module (products + logos). Used by the panel service. */
export const categoryModulesMap: Record<CatalogCategoryId, CatalogCategoryModule<CatalogProduct>> =
  STATIC_CATALOG_SOURCE.categoryModulesMap;

/** Map of categoryId → category (id, title, accent, products). Used by the panel service. */
export const catalogData: CatalogData = STATIC_CATALOG_SOURCE.catalogData;
