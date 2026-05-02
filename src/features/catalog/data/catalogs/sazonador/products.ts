/**
 * sazonador/products.ts
 *
 * All products belonging to the Sazonador category (flavoring powders).
 *
 * To add a new product:
 *   1. Add a new entry to the products array below.
 *   2. Place the image under public/assets/catalog/products/spicy/powders/.
 */

import type { CatalogModuleProduct } from '../../../types/catalog.types';
import { buildCatalogProductPath } from '../../../../../shared/assets/publicAssets';
import { createStandardSpecs } from '../../helpers/catalogSpecsFactory';

/** Powders have no dedicated carousel or bowl — both fall back to the product image. */
const powder = (
  product: Omit<CatalogModuleProduct, 'carouselImage' | 'bowlImage'>
): CatalogModuleProduct => ({
  ...product,
  carouselImage: product.image,
  bowlImage: product.image,
});

const defaultSpecs = createStandardSpecs({
  weightPerPiece: 'Net Wt. 0.05 oz (1.5g)',
  piecesPerBag: 40,
  bagWeight: '2 oz (56g)',
  bagsPerBox: 24,
  boxWeight: '3 lb 8 oz (1.6 kg)',
});

export const sazonadorProducts: CatalogModuleProduct[] = [
  powder({
    id: 'p1',
    familyId: 'acirrico',
    productFamily: 'Acirrico',
    name: 'Acirrico',
    subtitle: 'Tamarind Powder\nSour & Sweet',
    description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
    image: buildCatalogProductPath('spicy', 'POWDERS', 'Acirrico.webp'),
    certifications: ['SGS', 'Halal'],
    specs: defaultSpecs,
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, tamarindo deshidratado, sal yodada, acido citrico y chile.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 5g. Calorias: 20. Azucares: 4g.' },
    ],
    gramaje: '56 g',
  }),
  powder({
    id: 'p2',
    familyId: 'limonazo',
    productFamily: 'Limonazo',
    name: 'Limonazo',
    subtitle: 'Chamoy Powder\nSweet & Tangy',
    description: 'Polvo con aroma y sabor a chamoy, perfecto para cubrir frutas.',
    image: buildCatalogProductPath('spicy', 'POWDERS', 'Limonazo.webp'),
    certifications: ['SGS'],
    specs: defaultSpecs,
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, extracto de chamoy, sal, acido citrico y colorantes.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 5g. Calorias: 18. Azucares: 4g.' },
    ],
    gramaje: '56 g',
  }),
];
