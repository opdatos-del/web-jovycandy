import type { CatalogData } from '../types/catalog.types';
import {
  BRAND_LOGO_PATH,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '@/shared/assets/publicAssets';
import {
  chamoyCategoryLogoProductsMap,
  chamoyCategoryLogos,
} from './chamoyAssets';
import { resolveCatalogDataBowls } from './catalogs/catalogBowls.shared';
import {
  gomitasGrenetinaLogoProductsMap,
  gomitasGrenetinaLogos,
} from './catalogs/gomitas_grenetina';
import {
  pinateroLogoProductsMap,
  pinateroLogos,
} from './catalogs/pinatero';
import { buildGomitasAlmidon } from './catalogs/gomitas_almidon';
import { buildGomitasGrenetina } from './catalogs/gomitas_grenetina';
import { buildPinatero } from './catalogs/pinatero';
import { buildSazonador } from './catalogs/sazonador';
import { buildDulcesPaletas } from './catalogs/dulces_paletas';
import { buildChamoy } from './catalogs/chamoy';

const productImageMap: Record<string, Record<string, string>> = {
  gomitas_grenetina: {
    'Rings Watermelon':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp'),
    'Rings Neon':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp'),
    'Gummies Peach':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp'),
    'Gummies Cherry':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Cherry-5-lb-1-300x300.webp'),
    'Worms Original':
      buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp'),
    'Bears Classic':
      buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp'),
  },
  sazonador: {
    Acirrico: buildCatalogProductPath('spicy', 'POWDERS', 'Acirrico.webp'),
    Limonazo: buildCatalogProductPath('spicy', 'POWDERS', 'Limonazo.webp'),
  },
  gomitas_almidon: {
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
  },
  dulces_paletas: {
    'Lollipop Cherry': buildCatalogProductPath(
      'sweet',
      'HARD CANDY',
      'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'
    ),
    'Mango revolcado': buildCatalogProductPath(
      'spicy',
      'LOLLIPOPS',
      'MANGO REVOLCADO',
      'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'
    ),
  },
};
export const categoryLogosMap: Record<string, Array<{ src: string; alt: string }>> = {
  gomitas_grenetina: gomitasGrenetinaLogos,
  sazonador: [{ src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'), alt: 'Polvos Acirrico' }],
  gomitas_almidon: [
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp'), alt: 'Jellies Cherry' },
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp'), alt: 'Jellies Orange' },
  ],
  chamoy: chamoyCategoryLogos,
  dulces_paletas: [
    { src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'), alt: 'Dulces Fruit' },
    { src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'), alt: 'Paletas Mango' },
  ],
  pinatero: pinateroLogos,
};

export const categoryLogoProductsMap: Record<string, Record<string, string[]>> = {
  gomitas_grenetina: gomitasGrenetinaLogoProductsMap,
  sazonador: {
    [buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp')]: ['Acirrico', 'Limonazo'],
  },
  gomitas_almidon: {
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp')]: ['CHERRY SLICES 5LB'],
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp')]: ['ORANGE SLICES'],
  },
  chamoy: chamoyCategoryLogoProductsMap,
  dulces_paletas: {
    [buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp')]: ['Lollipop Cherry'],
    [buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp')]: ['Mango revolcado'],
  },
  pinatero: pinateroLogoProductsMap,
};

function getProductImagePath(categoryId: string, productName: string): string {
  const categoryImages = productImageMap[categoryId];

  if (categoryImages && categoryImages[productName]) {
    return categoryImages[productName];
  }

  return BRAND_LOGO_PATH;
}

const gomitas_almidon = buildGomitasAlmidon(getProductImagePath);
const gomitas_grenetina = buildGomitasGrenetina();
const pinatero = buildPinatero();
const sazonador = buildSazonador(getProductImagePath);
const dulces_paletas = buildDulcesPaletas(getProductImagePath);
const chamoy = buildChamoy();

export const rawCatalogData: CatalogData = {
  sazonador,
  gomitas_almidon,
  chamoy,
  dulces_paletas,
  pinatero,
  gomitas_grenetina,
};

export const catalogData: CatalogData = resolveCatalogDataBowls(rawCatalogData);
