/**
 * dulces_paletas/logos.ts
 *
 * Logo groups for the Dulces y Paletas category.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath } from '../../../../../shared/assets/publicAssets';

export const dulcesPaletasLogos: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'),
    alt: 'Dulces Fruit',
    families: ['lollipop-cherry'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'),
    alt: 'Paletas Mango',
    families: ['mango-revolcado'],
  },
];
