/**
 * dulces_paletas/index.ts
 *
 * Assembles the Dulces y Paletas catalog module from its parts.
 */

import type { CatalogCategoryModule, CatalogModuleProduct } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { dulcesPaletasProducts } from './products';
import { dulcesPaletasLogos } from './logos';

export const dulcesPaletasModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'dulces_paletas',
    title: CATALOG_CATEGORY_CONFIG.dulces_paletas.title,
    accent: CATALOG_CATEGORY_CONFIG.dulces_paletas.accent,
    products: dulcesPaletasProducts,
  },
  logos: dulcesPaletasLogos,
};
