/**
 * catalogData.ts
 *
 * Derives the flat catalog data structures consumed by catalog-panel.service
 * directly from the central registry. No manual entries needed here.
 *
 * To add a new category, update registry.ts — this file stays untouched.
 */

import type { CatalogCategoryId, CatalogCategoryModule, CatalogData } from '../types/catalog.types';
import { CATALOG_MODULE_REGISTRY } from './registry';

/** Map of categoryId → full module (products + logos). Used by the panel service. */
export const categoryModulesMap: Record<CatalogCategoryId, CatalogCategoryModule> =
  CATALOG_MODULE_REGISTRY;

/** Map of categoryId → category (id, title, accent, products). Used by the panel service. */
export const catalogData: CatalogData = Object.fromEntries(
  Object.entries(CATALOG_MODULE_REGISTRY).map(([id, module]) => [id, module.category])
) as CatalogData;
