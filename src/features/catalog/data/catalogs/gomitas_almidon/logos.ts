/**
 * gomitas_almidon/logos.ts
 *
 * Logo groups for the Gomitas Almidón category.
 *
 * To add a new logo:
 *   1. Add a new entry to the array below.
 *   2. Set `families` to the familyId(s) of the products it represents.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath } from '../../../../../shared/assets/publicAssets';

const jellyLogo = (...segments: string[]) =>
  buildCatalogLogoPath('sweet', 'JELLIES', ...segments);

export const gomitasAlmidonLogos: CatalogLogoGroup[] = [
  {
    src: jellyLogo('Cherry_Slices-300x300.webp'),
    alt: 'Jellies Cherry',
    families: ['cherry-slices'],
  },
  {
    src: jellyLogo('Orange_slices-300x300.webp'),
    alt: 'Jellies Orange',
    families: ['orange-slices'],
  },
  {
    src: jellyLogo('bot-web-jovy-usa-sweet-jellies-assorted-slices-300x300.webp'),
    alt: 'Fruit Assorted Slices',
    families: ['fruit-assorted-slices'],
  },
  {
    src: jellyLogo('bot-web-jovy-usa-sweet-jellies-gumdroops-300x300.webp'),
    alt: 'Gum Drops',
    families: ['gum-drops'],
  },
  {
    src: jellyLogo('bot-web-jovy-usa_sweet-jellies-spice-droop-300x300.webp'),
    alt: 'Spice Drops',
    families: ['spice-drops'],
  },
  {
    src: jellyLogo('spearmint_leaves-300x300.webp'),
    alt: 'Spearmint Leaves',
    families: ['spearmint-leaves'],
  },
  {
    src: jellyLogo('cherry-jelly-300x300.webp'),
    alt: 'Cherry Jelly Sour',
    families: ['cherry-jelly-sour'],
  },
];
