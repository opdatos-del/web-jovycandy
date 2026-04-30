import { buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const pinateroProductImageMap: Record<string, string> = {};

export const pinateroLogos = [
  { src: buildCatalogLogoPath('spicy', 'PIÑATERO', 'LOGOS', 'Happy-Mix-300x300.webp'), alt: 'Pinatero Happy Mix' },
  { src: buildCatalogLogoPath('spicy', 'PIÑATERO', 'LOGOS', 'Revolcados-Mix-300x300.webp'), alt: 'Pinatero Revolcados Mix' },
];

export const pinateroLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('spicy', 'PIÑATERO', 'LOGOS', 'Happy-Mix-300x300.webp')]: ['Happy Mix'],
  [buildCatalogLogoPath('spicy', 'PIÑATERO', 'LOGOS', 'Revolcados-Mix-300x300.webp')]: ['Revolcados Mix'],
};
