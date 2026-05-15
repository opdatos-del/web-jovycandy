/**
 * chamoy/index.ts
 *
 * Assembles the Chamoy catalog module from its parts.
 * This is the only file that registry.ts needs to import from this folder.
 */

import type { CatalogCategoryModule, CatalogModuleProduct, CatalogLogoGroup } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { chamoyProducts } from './products';

// Los logos ahora se cargan dinámicamente desde la API del admin
// Los logos hardcodeados están comentados en logos.ts
// Los logos dinámicos se obtienen desde /api/logos y reemplazan estos en runtime

export const chamoyModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'chamoy',
    title: CATALOG_CATEGORY_CONFIG.chamoy.title,
    accent: CATALOG_CATEGORY_CONFIG.chamoy.accent,
    products: chamoyProducts,
  },
  logos: [] as CatalogLogoGroup[],
};
