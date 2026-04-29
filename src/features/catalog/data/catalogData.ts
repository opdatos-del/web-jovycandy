import type { CatalogData } from '../types/catalog.types';
import {
  BRAND_LOGO_PATH,
  buildCatalogBowlPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '@/shared/assets/publicAssets';
import {
  chamoyCategoryLogoProductsMap,
  chamoyCategoryLogos,
  chamoyProductImageMap,
  chamoybearsBowlImage,
  chamoyringspeachBowlImage,
  chamoyringswatermelonBowlImage,
  chamoywormsBowlImage,
} from './chamoyAssets';
import {
  gomitasGrenetinaAltDefLogoProductsMap,
  gomitasGrenetinaAltDefLogos,
  gomitasGrenetinaAltDefProducts,
  pinateroAltDefLogoProductsMap,
  pinateroAltDefLogos,
  pinateroAltDefProducts,
} from './altDefCatalogData';
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
  dulces_paletas: {
    'Mango revolcado':
      buildCatalogProductPath('spicy', 'LOLLIPOPS', 'MANGO REVOLCADO', 'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'),
  },
};
const chilirokasBowlImage = buildCatalogBowlPath('chamoy/Chilirokas-Assorted.png');
const chilirokasmangoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-mango-assorted.webp');
const chilirokastamarindoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-tamarindo-assorted.webp');
const chilirokawatermelonBowlImage = buildCatalogBowlPath('chamoy/chilirokas-watermelon-assorted.webp');
const enchilokasBowlImage = buildCatalogBowlPath('chamoy/enchilokas-assorted.webp');
const revolcaditasBowlImage = buildCatalogBowlPath('chamoy/revolcaditas-assorted.webp');
const tamarosBowlImage = buildCatalogBowlPath('chamoy/tamaros-assorted.webp');
const vallenitomangoBowlImage = buildCatalogBowlPath('chamoy/vallenito-mango-assorted.webp');
const vallenitoBowlImage = buildCatalogBowlPath('chamoy/vallenito-assorted.webp');
const vallenitowatermelonBowlImage = buildCatalogBowlPath('chamoy/vallenito-watermelon-assorted.webp');

export const categoryLogosMap: Record<string, Array<{ src: string; alt: string }>> = {
  gomitas_grenetina: gomitasGrenetinaAltDefLogos,
  sazonador: [{ src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'), alt: 'Polvos Acirrico' }],
  gomitas_almidon: [
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp'), alt: 'Jellies Cherry' },
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp'), alt: 'Jellies Orange' },
    { src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'), alt: 'Jellies Enchilokas' },
  ],
  chamoy: chamoyCategoryLogos,
  dulces_paletas: [{ src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'), alt: 'Paletas Mango' }],
  pinatero: pinateroAltDefLogos,
};

export const categoryLogoProductsMap: Record<string, Record<string, string[]>> = {
  gomitas_grenetina: gomitasGrenetinaAltDefLogoProductsMap,
  sazonador: {
    [buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp')]: ['Acirrico', 'Limonazo'],
  },
  gomitas_almidon: {
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp')]: ['CHERRY SLICES 5LB'],
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp')]: ['ORANGE SLICES'],
    [buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp')]: ['Enchilokas'],
  },
  chamoy: chamoyCategoryLogoProductsMap,
  dulces_paletas: {
    [buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp')]: ['Mango revolcado'],
  },
  pinatero: pinateroAltDefLogoProductsMap,
};

function getProductImagePath(
  type: 'Picante' | 'Dulce',
  categoryId: string,
  productName: string
): string {
  const categoryImages = productImageMap[categoryId];

  if (categoryImages && categoryImages[productName]) {
    return categoryImages[productName];
  }

  const typeFolder = type === 'Picante' ? 'SPICY' : 'SWEET';
  const categoryFolderMap: Record<string, string> = {
    sazonador: 'POWDERS',
    gomitas_almidon: 'JELLIES',
    chamoy: 'HARD CANDY',
    dulces_paletas: 'LOLLIPOPS',
    gomitas_grenetina: 'GUMMIES',
  };
  const categoryFolder = categoryFolderMap[categoryId] || categoryId.toUpperCase();
  const productSubfolder = productName.split(' ')[0].toUpperCase();

  return BRAND_LOGO_PATH;
}

const gomitas_almidon = buildGomitasAlmidon(getProductImagePath);
const gomitas_grenetina = buildGomitasGrenetina();
const pinatero = buildPinatero();
const sazonador = buildSazonador(getProductImagePath);
const dulces_paletas = buildDulcesPaletas(getProductImagePath);
const chamoy = buildChamoy(getProductImagePath);

export const catalogData: CatalogData = {
  sazonador,
  gomitas_almidon,
  chamoy,
  dulces_paletas,
  pinatero,
  gomitas_grenetina,
};
