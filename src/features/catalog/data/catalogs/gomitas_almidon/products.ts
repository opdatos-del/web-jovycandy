/**
 * gomitas_almidon/products.ts
 *
 * All products belonging to the Gomitas Almidón category (starch-based jellies).
 *
 * To add a new product:
 *   1. Add a new entry to the products array below.
 *   2. Place the image under public/assets/catalog/products/sweet/jellies/{family}/.
 *   3. If it shares a logo with existing families, reference the same familyId.
 */

import type { CatalogModuleProduct } from '../../../types/catalog.types';
import { buildCatalogProductPath } from '../../../../../shared/assets/publicAssets';
import { createStandardSpecs } from '../../helpers/catalogSpecsFactory';

/** Convenience: jellies that have no dedicated carousel — use the product image for both. */
const jelly = (
  product: Omit<CatalogModuleProduct, 'carouselImage' | 'bowlImage'>
): CatalogModuleProduct => ({
  ...product,
  carouselImage: product.image,
  bowlImage: product.image,
});

const jellyPath = (...segments: string[]) =>
  buildCatalogProductPath('sweet', 'JELLIES', ...segments);

const defaultSpecs = createStandardSpecs({
  weightPerPiece: 'Net Wt. 0.5 oz (14g)',
  piecesPerBag: 12,
  bagWeight: '6 oz (170g)',
  bagsPerBox: 24,
  boxWeight: '8 lb 13 oz (4.08 kg)',
});

export const gomitasAlmidonProducts: CatalogModuleProduct[] = [
  jelly({
    id: 'j1',
    familyId: 'cherry-slices',
    productFamily: 'CHERRY SLICES 5LB',
    name: 'CHERRY SLICES 5LB',
    subtitle: 'Strawberry Jelly\nSmooth & Sweet',
    description: 'Gelatina de fresa con textura suave y sabor intenso.',
    image: jellyPath('cherry-slices', 'jovy-sweet-jellies-cherry-slices-5-lb-300x300.webp'),
    certifications: ['SGS', 'OU Kosher', 'Halal'],
    specs: defaultSpecs,
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de fresa.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.' },
    ],
    gramaje: '170 g',
  }),
  jelly({
    id: 'j2',
    familyId: 'orange-slices',
    productFamily: 'ORANGE SLICES',
    name: 'ORANGE SLICES',
    subtitle: 'Orange Jelly\nCitrus & Sweet',
    description: 'Gelatina de naranja con sabor citrico intenso.',
    image: jellyPath('orange-slices', 'jovy-sweet-jellies-orange-slices-5-lb-300x300.webp'),
    certifications: ['SGS', 'Halal'],
    specs: defaultSpecs,
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y aceite esencial de naranja.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '170 g',
  }),
  jelly({
    id: 'j3',
    familyId: 'fruit-assorted-slices',
    productFamily: 'FRUIT ASSORTED SLICES',
    name: 'FRUIT ASSORTED SLICES',
    subtitle: 'Fruit Jelly\nAssorted Slices',
    description: 'Gelatina surtida de frutas con un perfil suave y clasico.',
    image: jellyPath('fruit-assorted-slices', 'jovy-sweet-jellies-fruit-slices-5-lb-300x300.webp'),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 lb (2.26kg)', bagsPerBox: 24, boxWeight: '8 lb 13 oz (4.08 kg)' }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizantes frutales.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '5 lb',
  }),
  jelly({
    id: 'j4',
    familyId: 'gum-drops',
    productFamily: 'GUM DROPS',
    name: 'GUM DROPS',
    subtitle: 'Gum Drops\nSweet Jelly Mix',
    description: 'Clasicos gum drops de textura suave y sabor dulce.',
    image: jellyPath('gum-drops', 'jovy-sweet-jellies-gum-drops-5-lb-300x300.webp'),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 lb (2.26kg)', bagsPerBox: 24, boxWeight: '8 lb 13 oz (4.08 kg)' }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y colorantes.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '5 lb',
  }),
  jelly({
    id: 'j5',
    familyId: 'spice-drops',
    productFamily: 'SPICE DROPS',
    name: 'SPICE DROPS',
    subtitle: 'Spice Drops\nSweet Heat Jelly',
    description: 'Gomitas tipo jelly con acabado especiado y toque dulce.',
    image: jellyPath('spice-drops', 'jovy-sweet-jellies-spice-drops-5-lb-300x300.webp'),
    certifications: ['SGS'],
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 lb (2.26kg)', bagsPerBox: 24, boxWeight: '8 lb 13 oz (4.08 kg)' }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizantes.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '5 lb',
  }),
  jelly({
    id: 'j6',
    familyId: 'spearmint-leaves',
    productFamily: 'SPEARMINT LEAVES',
    name: 'SPEARMINT LEAVES',
    subtitle: 'Spearmint Leaves\nFresh Jelly',
    description: 'Hojas de menta dulce con perfil fresco y clasico.',
    image: jellyPath('spearmint-leaves', 'jovy-sweet-jellies-spearmint-leaves-5-lb-300x300.webp'),
    certifications: ['SGS'],
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 lb (2.26kg)', bagsPerBox: 24, boxWeight: '8 lb 13 oz (4.08 kg)' }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de menta.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '5 lb',
  }),
  jelly({
    id: 'j7',
    familyId: 'cherry-jelly-sour',
    productFamily: 'CHERRY JELLY SOUR',
    name: 'CHERRY JELLY SOUR',
    subtitle: 'Cherry Jelly\nSour Candy',
    description: 'Gelatina de cereza con perfil agrio y dulce.',
    image: jellyPath('cherry-jelly-sour', 'jovy-sweet-jellies-cherry-jelly-sour-5-lb-300x300.webp'),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 lb (2.26kg)', bagsPerBox: 24, boxWeight: '8 lb 13 oz (4.08 kg)' }),
    collapsibleInfo: [
      { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de cereza.' },
      { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
    ],
    gramaje: '5 lb',
  }),
];
