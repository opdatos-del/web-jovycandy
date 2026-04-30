import { buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const gomitasAlmidonProductImageMap: Record<string, string> = {
  'CHERRY SLICES 5LB': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'JOVY-SWEET-JELLIES-Cherry-Slices-5-lb-300x300.webp'
  ),
  'ORANGE SLICES': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'JOVY-SWEET-JELLIES-Orange-Slices-5-lb-300x300.webp'
  ),
  'FRUIT ASSORTED SLICES': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'fruit-assorted-slices',
    'jovy-sweet-jellies-fruit-slices-5-lb-300x300.webp'
  ),
  'GUM DROPS': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'gum-drops',
    'jovy-sweet-jellies-gum-drops-5-lb-300x300.webp'
  ),
  'SPICE DROPS': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'spice-drops',
    'jovy-sweet-jellies-spice-drops-5-lb-300x300.webp'
  ),
  'SPEARMINT LEAVES': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'spearmint-leaves',
    'jovy-sweet-jellies-spearmint-leaves-5-lb-300x300.webp'
  ),
  'CHERRY JELLY SOUR': buildCatalogProductPath(
    'sweet',
    'JELLIES',
    'cherry-jelly-sour',
    'jovy-sweet-jellies-cherry-jelly-sour-5-lb-300x300.webp'
  ),
};

export const gomitasAlmidonLogos = [
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp'), alt: 'Jellies Cherry' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp'), alt: 'Jellies Orange' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-assorted-slices-300x300.webp'), alt: 'Fruit Assorted Slices' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-gumdroops-300x300.webp'), alt: 'Gum Drops' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-spice-droops-300x300.webp'), alt: 'Spice Drops' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'spearmint-leaves-300x300.webp'), alt: 'Spearmint Leaves' },
  { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'cherry-jelly-300x300.webp'), alt: 'Cherry Jelly Sour' },
];

export const gomitasAlmidonLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp')]: ['CHERRY SLICES 5LB'],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp')]: ['ORANGE SLICES'],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-assorted-slices-300x300.webp')]: [
    'FRUIT ASSORTED SLICES',
  ],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-gumdroops-300x300.webp')]: [
    'GUM DROPS',
  ],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'bot-web-jovy-usa-sweet-jellies-spice-droops-300x300.webp')]: [
    'SPICE DROPS',
  ],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'spearmint-leaves-300x300.webp')]: [
    'SPEARMINT LEAVES',
  ],
  [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'cherry-jelly-300x300.webp')]: [
    'CHERRY JELLY SOUR',
  ],
};
