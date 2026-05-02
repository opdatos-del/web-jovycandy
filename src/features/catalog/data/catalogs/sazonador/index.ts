/**
 * sazonador/index.ts
 *
 * Assembles the Sazonador catalog module from its parts.
 */

import type { CatalogCategoryModule, CatalogModuleProduct } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { sazonadorProducts } from './products';
import { sazonadorLogos } from './logos';

export const sazonadorModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'sazonador',
    title: CATALOG_CATEGORY_CONFIG.sazonador.title,
    accent: CATALOG_CATEGORY_CONFIG.sazonador.accent,
    products: sazonadorProducts,
  },
  logos: sazonadorLogos,
};
