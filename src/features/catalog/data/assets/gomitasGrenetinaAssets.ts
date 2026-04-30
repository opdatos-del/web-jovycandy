import { buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const gomitasGrenetinaProductImageMap: Record<string, string> = {
  'Rings Watermelon': buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp'),
  'Rings Neon': buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp'),
  'Gummies Peach': buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp'),
  'Rings Green Apple': buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Green-Apple-5-lb-1-300x300.webp'),
  'Worms Original': buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp'),
  'Worms Neon': buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-Neon-5-lb-1-300x300.webp'),
  'Bears Classic': buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp'),
  'Bears Neon': buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-Neon-5-lb-1-300x300.webp'),
};

/**
 * Gummies Grenetina has 3 product families, each with dedicated logo:
 * - Rings: Watermelon, Neon, Gummies Peach, Green Apple variants
 * - Worms: Original, Neon variants
 * - Bears: Classic, Neon variants
 */
export const gomitasGrenetinaLogos = [
  { src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'rings-300x300.webp'), alt: 'Gummies Rings' },
  { src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'worms-300x300.webp'), alt: 'Gummies Worms' },
  { src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'bears-300x300.webp'), alt: 'Gummies Bears' },
];

export const gomitasGrenetinaLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'rings-300x300.webp')]: [
    'Rings Watermelon',
    'Rings Neon',
    'Gummies Peach',
    'Rings Green Apple',
  ],
  [buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'worms-300x300.webp')]: [
    'Worms Original',
    'Worms Neon',
  ],
  [buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'bears-300x300.webp')]: [
    'Bears Classic',
    'Bears Neon',
  ],
};
