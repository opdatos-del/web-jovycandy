import { buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const dulcespaletasProductImageMap: Record<string, string> = {
  'Lollipop Cherry': buildCatalogProductPath('sweet', 'HARD CANDY', 'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'),
  'Mango revolcado': buildCatalogProductPath('spicy', 'LOLLIPOPS', 'MANGO REVOLCADO', 'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'),
};

export const dulcespaletasLogos = [
  { src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'), alt: 'Dulces Fruit' },
  { src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'), alt: 'Paletas Mango' },
];

export const dulcespaletasLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp')]: ['Lollipop Cherry'],
  [buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp')]: ['Mango revolcado'],
};
