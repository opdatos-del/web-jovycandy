/**
 * sazonador/logos.ts
 *
 * Logo groups for the Sazonador category.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath } from '../../../../../shared/assets/publicAssets';

export const sazonadorLogos: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'),
    alt: 'Polvos Sazonador',
    families: ['acirrico', 'limonazo'],
  },
];
