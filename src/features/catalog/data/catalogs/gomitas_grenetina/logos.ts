/**
 * gomitas_grenetina/logos.ts
 *
 * Logo groups for the Gomitas Grenetina category.
 */

import type { CatalogLogoGroup } from '../../../types/catalog.types';
import { buildCatalogLogoPath, buildCatalogProductPath } from '../../../../../shared/assets/publicAssets';

const gummyLogo = (...segments: string[]) =>
  buildCatalogLogoPath('sweet', 'GUMMIES', ...segments);

export const gomitasGrenetinaLogos: CatalogLogoGroup[] = [
  {
    src: gummyLogo('Rings-300x300.webp'),
    alt: 'Gomitas Rings',
    families: ['rings-watermelon', 'rings-neon', 'rings-peach', 'rings-green-apple'],
  },
  {
    src: gummyLogo('Worms-300x300.webp'),
    alt: 'Gomitas Worms',
    families: ['worms-original'],
  },
  {
    src: gummyLogo('Worms-Neon-300x300.webp'),
    alt: 'Gomitas Worms Neon',
    families: ['worms-neon'],
  },
  {
    src: gummyLogo('Bears-300x300.webp'),
    alt: 'Gomitas Bears',
    families: ['bears-classic'],
  },
  {
    src: gummyLogo('Bears-Neon-300x300.webp'),
    alt: 'Gomitas Bears Neon',
    families: ['bears-neon'],
  },
  {
    src: gummyLogo('watermelon_slices-300x300.webp'),
    alt: 'Gomitas Watermelon Slices',
    families: ['watermelon-slices'],
  },
  {
    // Shared logo for Frutastika, Blue Sharks, and Sharks Mix
    src: buildCatalogProductPath('sweet', 'GUMMIES', 'logos', 'frutastika-blues.webp'),
    alt: 'Gomitas surtidas',
    families: ['frutastika', 'blue-sharks', 'sharks-mix'],
  },
];
