/**
 * dulces_paletas/products.ts
 *
 * All products belonging to the Dulces y Paletas category.
 *
 * To add a new product:
 *   1. Add a new entry to the products array below.
 *   2. Place the image under public/assets/catalog/products/sweet/ or spicy/lollipops/.
 */

import type { CatalogModuleProduct } from '../../../types/catalog.types';
import { buildCatalogProductPath } from '../../../../../shared/assets/publicAssets';
import { createStandardSpecs } from '../../helpers/catalogSpecsFactory';

/** Products with no dedicated carousel/bowl use the product image for both. */
const dulce = (
  product: Omit<CatalogModuleProduct, 'carouselImage' | 'bowlImage'>
): CatalogModuleProduct => ({
  ...product,
  carouselImage: product.image,
  bowlImage: product.image,
});

export const dulcesPaletasProducts: CatalogModuleProduct[] = [
  dulce({
    id: 'm0',
    familyId: 'lollipop-cherry',
    productFamily: 'Lollipop Cherry',
    name: 'Lollipop Cherry',
    subtitle: 'Cherry Lollipop\nClassic Hard Candy',
    description: 'Caramelos macizos con sabor intenso a cereza.',
    image: buildCatalogProductPath('sweet', 'HARD CANDY', 'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'),
    certifications: ['SGS', 'OU Kosher'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.15 oz (4g)',
      piecesPerBag: 40,
      bagWeight: '6 oz (170g)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido malico y saborizante de cereza.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
    ],
    gramaje: '170 g',
  }),
  dulce({
    id: 'm1',
    familyId: 'mango-revolcado',
    productFamily: 'Mango revolcado',
    name: 'Mango revolcado',
    subtitle: 'Mango revolcado\nPaleta',
    description: 'Paleta con chamoy y chile.',
    image: buildCatalogProductPath('spicy', 'LOLLIPOPS', 'MANGO REVOLCADO', 'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'),
    certifications: ['SGS'],
    specs: [],
    collapsibleInfo: [],
    gramaje: '5.29 oz',
  }),
];
