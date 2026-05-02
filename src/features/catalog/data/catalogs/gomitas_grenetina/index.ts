/**
 * gomitas_grenetina/index.ts
 *
 * Assembles the Gomitas Grenetina catalog module from its parts.
 */

import type { CatalogCategoryModule, CatalogModuleProduct } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { gomitasGrenetinaProducts } from './products';
import { gomitasGrenetinaLogos } from './logos';

export const gomitasGrenetinaModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'gomitas_grenetina',
    title: CATALOG_CATEGORY_CONFIG.gomitas_grenetina.title,
    accent: CATALOG_CATEGORY_CONFIG.gomitas_grenetina.accent,
    products: gomitasGrenetinaProducts,
  },
  logos: gomitasGrenetinaLogos,
};
