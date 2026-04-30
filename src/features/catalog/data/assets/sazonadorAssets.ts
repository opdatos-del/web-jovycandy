import { buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const sazonadorProductImageMap: Record<string, string> = {
  Acirrico: buildCatalogProductPath('spicy', 'POWDERS', 'Acirrico.webp'),
  Limonazo: buildCatalogProductPath('spicy', 'POWDERS', 'Limonazo.webp'),
};

export const sazonadorLogos = [
  { src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'), alt: 'Polvos Acirrico' },
];

export const sazonadorLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp')]: ['Acirrico', 'Limonazo'],
};
