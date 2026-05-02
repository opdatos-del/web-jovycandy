/**
 * chamoy/logos.ts
 *
 * Logo groups for the Chamoy category.
 * Each logo maps to one or more product families via the `families` array.
 *
 * To add a new logo:
 *   1. Add a new entry to the array below.
 *   2. Set `families` to the familyId(s) of the products it represents.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath } from '../../../../../shared/assets/publicAssets';

export const chamoyLogos: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp'),
    alt: 'Dulces Chilirokas',
    families: ['chilirokas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp'),
    alt: 'Dulces Revolcaditas',
    families: ['revolcaditas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp'),
    alt: 'Dulces Tamaros',
    families: ['tamaros'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp'),
    alt: 'Dulces Vallenito',
    families: ['vallenito'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'),
    alt: 'Chamoy Enchilokas',
    families: ['enchilokas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp'),
    alt: 'Chamoy Rings',
    families: ['chamoyringswatermelon', 'chamoyringspeach'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp'),
    alt: 'Chamoy Worms',
    families: ['chamoyworms'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp'),
    alt: 'Chamoy Bears',
    families: ['chamoybears'],
  },
];
