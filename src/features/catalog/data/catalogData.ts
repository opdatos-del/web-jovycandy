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
import {
  gomitasAlmidonLogoProductsMap,
  gomitasAlmidonLogos,
  gomitasAlmidonProductImageMap,
} from './gomitasAlmidonAssets';
import {
  gomitasGrenetinaLogoProductsMap,
  gomitasGrenetinaLogos,
  gomitasGrenetinaProductImageMap,
} from './assets/gomitasGrenetinaAssets';
import {
  sazonadorLogoProductsMap,
  sazonadorLogos,
  sazonadorProductImageMap,
} from './assets/sazonadorAssets';
import {
  dulcespaletasLogoProductsMap,
  dulcespaletasLogos,
  dulcespaletasProductImageMap,
} from './assets/dulcespaletasAssets';
import {
  pinateroLogoProductsMap,
  pinateroLogos,
} from './assets/pinateroAssets';
import { resolveCatalogDataBowls } from './catalogs/catalogBowls.shared';
import { buildGomitasAlmidon } from './catalogs/gomitas_almidon';
import { buildGomitasGrenetina } from './catalogs/gomitas_grenetina';
import { buildPinatero } from './catalogs/pinatero';
import { buildSazonador } from './catalogs/sazonador';
import { buildDulcesPaletas } from './catalogs/dulces_paletas';
import { buildChamoy } from './catalogs/chamoy';

const productImageMap: Record<string, Record<string, string>> = {
  gomitas_grenetina: gomitasGrenetinaProductImageMap,
  sazonador: sazonadorProductImageMap,
  gomitas_almidon: gomitasAlmidonProductImageMap,
  dulces_paletas: dulcespaletasProductImageMap,
};
export const categoryLogosMap: Record<string, Array<{ src: string; alt: string }>> = {
  gomitas_grenetina: gomitasGrenetinaLogos,
  sazonador: sazonadorLogos,
  gomitas_almidon: gomitasAlmidonLogos,
  chamoy: chamoyCategoryLogos,
  dulces_paletas: dulcespaletasLogos,
  pinatero: pinateroLogos,
};

export const categoryLogoProductsMap: Record<string, Record<string, string[]>> = {
  gomitas_grenetina: gomitasGrenetinaLogoProductsMap,
  sazonador: sazonadorLogoProductsMap,
  gomitas_almidon: gomitasAlmidonLogoProductsMap,
  chamoy: chamoyCategoryLogoProductsMap,
  dulces_paletas: dulcespaletasLogoProductsMap,
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
