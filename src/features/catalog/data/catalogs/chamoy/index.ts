/**
 * chamoy/index.ts
 *
 * Assembles the Chamoy catalog module from its parts.
 * This is the only file that registry.ts needs to import from this folder.
 */

import type { CatalogCategoryModule, CatalogModuleProduct } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { chamoyProducts } from './products';
import { chamoyLogos } from './logos';

export const chamoyModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'chamoy',
    title: CATALOG_CATEGORY_CONFIG.chamoy.title,
    accent: CATALOG_CATEGORY_CONFIG.chamoy.accent,
    products: chamoyProducts,
  },
  logos: chamoyLogos,
};
