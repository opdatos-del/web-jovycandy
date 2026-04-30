import { buildCatalogBowlPath, buildCatalogLogoPath, buildCatalogProductPath } from '@/shared/assets/publicAssets';

export const chamoybearsBowlImage = buildCatalogBowlPath('chamoy/chamoy-bears-assorted.webp');
export const chamoyringspeachBowlImage = buildCatalogBowlPath(
  'chamoy/chamoy-rings-peach-assorted.webp'
);
export const chamoyringswatermelonBowlImage = buildCatalogBowlPath(
  'chamoy/chamoy-rings-watermelon-assorted.webp'
);
export const chamoywormsBowlImage = buildCatalogBowlPath('chamoy/chamoy-worms-assorted.webp');

export const chamoyProductImageMap: Record<string, string> = {
  'Lollipop Cherry': buildCatalogProductPath('sweet', 'HARD CANDY', 'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'),
};

export const chamoyCategoryLogos = [
  { src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'), alt: 'Dulces Fruit' },
  { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp'), alt: 'Dulces Chilirokas' },
  { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp'), alt: 'Dulces Revolcaditas' },
  { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp'), alt: 'Dulces Tamaros' },
  { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp'), alt: 'Dulces Vallenito' },
  { src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'), alt: 'Chamoy Enchilokas' },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp'),
    alt: 'Chamoy Rings',
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp'),
    alt: 'Chamoy Worms',
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp'),
    alt: 'Chamoy Bears',
  },
];

export const chamoyCategoryLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp')]: ['Lollipop Cherry'],
  [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp')]: ['Chilirokas'],
  [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp')]: ['Revolcaditas'],
  [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp')]: ['Tamaros'],
  [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp')]: ['Vallenito'],
  [buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp')]: ['Enchilokas'],
  [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp')]: ['Chamoy Rings Watermelon', 'Chamoy Rings Peach'],
  [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp')]: ['Chamoy Worms'],
  [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp')]: ['Chamoy Bears'],
};
