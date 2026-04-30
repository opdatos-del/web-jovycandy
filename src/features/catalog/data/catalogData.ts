import type { CatalogCategoryId, CatalogCategoryModule, CatalogData } from '../types/catalog.types';
import { chamoyModule } from './catalogs/chamoy.ts';
import { dulcesPaletasModule } from './catalogs/dulces_paletas.ts';
import { gomitasAlmidonModule } from './catalogs/gomitas_almidon.ts';
import { gomitasGrenetinaModule } from './catalogs/gomitas_grenetina.ts';
import { pinateroModule } from './catalogs/pinatero.ts';
import { sazonadorModule } from './catalogs/sazonador.ts';

export const categoryModulesMap: Record<CatalogCategoryId, CatalogCategoryModule> = {
  sazonador: sazonadorModule,
  gomitas_almidon: gomitasAlmidonModule,
  chamoy: chamoyModule,
  dulces_paletas: dulcesPaletasModule,
  pinatero: pinateroModule,
  gomitas_grenetina: gomitasGrenetinaModule,
};

export const catalogData: CatalogData = {
  sazonador: categoryModulesMap.sazonador.category,
  gomitas_almidon: categoryModulesMap.gomitas_almidon.category,
  chamoy: categoryModulesMap.chamoy.category,
  dulces_paletas: categoryModulesMap.dulces_paletas.category,
  pinatero: categoryModulesMap.pinatero.category,
  gomitas_grenetina: categoryModulesMap.gomitas_grenetina.category,
};
