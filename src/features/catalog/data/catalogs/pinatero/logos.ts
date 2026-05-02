/**
 * pinatero/logos.ts
 *
 * Logo groups for the Piñatero category.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath } from '../../../../../shared/assets/publicAssets';

const pinateroLogo = (filename: string) =>
  buildCatalogLogoPath('spicy', 'PINATERO', filename);

export const pinateroLogos: CatalogLogoGroup[] = [
  {
    src: pinateroLogo('happy-mix-300x300.webp'),
    alt: 'Pinatero Happy Mix',
    families: ['happy-mix'],
  },
  {
    src: pinateroLogo('revolcados-mix-300x300.webp'),
    alt: 'Pinatero Revolcados Mix',
    families: ['revolcados-mix'],
  },
  {
    src: pinateroLogo('premium-mix-01.webp'),
    alt: 'Pinatero Premium Mix',
    families: ['premium-mix'],
  },
];
