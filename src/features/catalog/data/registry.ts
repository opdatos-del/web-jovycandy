/**
 * registry.ts
 *
 * Central registry of all catalog category modules.
 *
 * This is the ONLY file that needs to change when adding a new category:
 *   1. Add the category to CATALOG_CATEGORY_CONFIG in config/catalog.config.ts.
 *   2. Create the folder data/catalogs/{id}/ with products.ts, logos.ts, index.ts.
 *   3. Import the module here and add it to CATALOG_MODULE_REGISTRY below.
 *
 * All consumers (catalogData, catalog-panel.service, etc.) import from here
 * instead of importing each module individually.
 */

import type { CatalogCategoryId } from '../types/catalog.types';
import type { CatalogCategoryModule, CatalogModuleProduct } from '../types/catalog.types';

import { chamoyModule }          from './catalogs/chamoy';
import { gomitasAlmidonModule }  from './catalogs/gomitas_almidon';
import { gomitasGrenetinaModule } from './catalogs/gomitas_grenetina';
import { pinateroModule }        from './catalogs/pinatero';
import { sazonadorModule }       from './catalogs/sazonador';
import { dulcesPaletasModule }   from './catalogs/dulces_paletas';

/**
 * All registered category modules.
 * Key = CatalogCategoryId, Value = the assembled module for that category.
 */
export const CATALOG_MODULE_REGISTRY: Record<CatalogCategoryId, CatalogCategoryModule<CatalogModuleProduct>> = {
  chamoy:            chamoyModule,
  gomitas_almidon:   gomitasAlmidonModule,
  gomitas_grenetina: gomitasGrenetinaModule,
  pinatero:          pinateroModule,
  sazonador:         sazonadorModule,
  dulces_paletas:    dulcesPaletasModule,
};
