/**
 * gomitas_almidon/index.ts
 *
 * Assembles the Gomitas Almidón catalog module from its parts.
 */

import type { CatalogCategoryModule, CatalogModuleProduct, CatalogLogoGroup } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { gomitasAlmidonProducts } from './products';

// Los logos ahora se cargan dinámicamente desde la API del admin

export const gomitasAlmidonModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'gomitas_almidon',
    title: CATALOG_CATEGORY_CONFIG.gomitas_almidon.title,
    accent: CATALOG_CATEGORY_CONFIG.gomitas_almidon.accent,
    products: gomitasAlmidonProducts,
  },
  logos: [] as CatalogLogoGroup[],
};
