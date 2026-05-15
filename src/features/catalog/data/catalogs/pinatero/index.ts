/**
 * pinatero/index.ts
 *
 * Assembles the Piñatero catalog module from its parts.
 */

import type { CatalogCategoryModule, CatalogModuleProduct, CatalogLogoGroup } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { pinateroProducts } from './products';

// Los logos ahora se cargan dinámicamente desde la API del admin

export const pinateroModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'pinatero',
    title: CATALOG_CATEGORY_CONFIG.pinatero.title,
    accent: CATALOG_CATEGORY_CONFIG.pinatero.accent,
    products: pinateroProducts,
  },
  logos: [] as CatalogLogoGroup[],
};
