/**
 * gomitas_grenetina/products.ts
 *
 * All products belonging to the Gomitas Grenetina category (gelatin-based gummies).
 *
 * To add a new product:
 *   1. Define a ProductTemplate if it is a new family.
 *   2. Call createVariant(template, { id, gramaje, carouselImage }) for each weight/size.
 *   3. Place the carousel image under public/assets/catalog/carousels/{size}/.
 *   4. Place the bowl image under public/assets/catalog/bowls/grenetina/.
 */

import type { CatalogModuleProduct } from '../../../types/catalog.types';
import {
  buildCatalogBowlPath,
  buildCatalogCarouselPath,
  buildCatalogProductPath,
} from '../../../../../shared/assets/publicAssets';
import { createVariant, type ProductTemplate } from '../catalogVariant.shared';
import { createStandardSpecs } from '../../helpers/catalogSpecsFactory';

// ---------------------------------------------------------------------------
// Path helpers
// ---------------------------------------------------------------------------

const bowl = (filename: string) => buildCatalogBowlPath(`grenetina/${filename}`);
const carousel = (size: string, filename: string) => buildCatalogCarouselPath(size, filename);

// ---------------------------------------------------------------------------
// Shared specs (most grenetina products share the same base specs per size)
// ---------------------------------------------------------------------------

const specsBase = {
  weightPerPiece: 'Net Wt. 0.3 oz (8g)',
  piecesPerBag: 21,
  bagWeight: '170 g',
  bagsPerBox: 24,
  boxWeight: '8 lb 13 oz (4.08 kg)',
} as const;

const specsBase1kg = {
  weightPerPiece: 'Net Wt. 0.3 oz (8g)',
  piecesPerBag: 21,
  bagWeight: '1 kg',
  bagsPerBox: 10,
  boxWeight: '10 kg',
} as const;

const specsBears = {
  weightPerPiece: 'Net Wt. 0.25 oz (7g)',
  piecesPerBag: 24,
  bagWeight: '170 g',
  bagsPerBox: 24,
  boxWeight: '8 lb 13 oz (4.08 kg)',
} as const;

const specsBears1kg = {
  weightPerPiece: 'Net Wt. 0.25 oz (7g)',
  piecesPerBag: 24,
  bagWeight: '1 kg',
  bagsPerBox: 10,
  boxWeight: '10 kg',
} as const;

// ---------------------------------------------------------------------------
// Product templates
// ---------------------------------------------------------------------------

const ringsWatermelon: ProductTemplate = {
  id: 'rings-watermelon-template',
  familyId: 'rings-watermelon',
  productFamily: 'Rings Watermelon',
  name: 'Rings Watermelon',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description: 'Deliciosas gomitas en forma de aro con un intenso y refrescante sabor a sandia.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp'),
  bowlImage: bowl('rings-watermelon-assorted.webp'),
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico, saborizantes y colorantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.' },
  ],
};

const ringsNeon: ProductTemplate = {
  id: 'rings-neon-template',
  familyId: 'rings-neon',
  productFamily: 'Rings Neon',
  name: 'Rings Neon',
  subtitle: 'Gummy candy\nNeon Colors',
  description: 'Aros de gomita en tonos neon con perfil dulce y textura suave.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp'),
  bowlImage: bowl('rings-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, pectina, concentrado de fruta y acido citrico.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 105. Azucares: 18g.' },
  ],
};

const ringsPeach: ProductTemplate = {
  id: 'rings-peach-template',
  familyId: 'rings-peach',
  productFamily: 'Gummies Peach',
  name: 'Gummies Peach',
  subtitle: 'Gummy candy\nFlavor: Peach',
  description: 'Aros de gomita con un dulce y jugoso sabor a durazno.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp'),
  bowlImage: bowl('gummies-peach-assorted.webp'),
  certifications: ['SGS', 'OU Kosher'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de durazno.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.' },
  ],
};

const ringsGreenApple: ProductTemplate = {
  id: 'rings-green-apple-template',
  familyId: 'rings-green-apple',
  productFamily: 'Rings Green Apple',
  name: 'Rings Green Apple',
  subtitle: 'Gummy candy\nFlavor: Green Apple',
  description: 'Aros de gomita con perfil frutal y un toque fresco de manzana verde.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Green-Apple-5-lb-1-300x300.webp'),
  bowlImage: bowl('rings-green-apple-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de manzana.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const wormsOriginal: ProductTemplate = {
  id: 'worms-original-template',
  familyId: 'worms-original',
  productFamily: 'Worms Original',
  name: 'Worms Original',
  subtitle: 'Gummy candy\nFruit Mix',
  description: 'Gomitas tipo worm con una mezcla clasica de sabores frutales.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp'),
  bowlImage: bowl('worms-original-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const wormsNeon: ProductTemplate = {
  id: 'worms-neon-template',
  familyId: 'worms-neon',
  productFamily: 'Worms Neon',
  name: 'Worms Neon',
  subtitle: 'Gummy candy\nNeon Fruit Mix',
  description: 'Gomitas tipo worm en combinaciones neon con perfil frutal mas intenso.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-Neon-5-lb-1-300x300.webp'),
  bowlImage: bowl('worms-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes frutales.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.' },
  ],
};

const bearsClassic: ProductTemplate = {
  id: 'bears-classic-template',
  familyId: 'bears-classic',
  productFamily: 'Bears Classic',
  name: 'Bears Classic',
  subtitle: 'Gummy candy\n12 Flavors',
  description: 'Ositos de gomita con perfil dulce tradicional y colores surtidos.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp'),
  bowlImage: bowl('bears-classic-assorted.webp'),
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: createStandardSpecs(specsBears),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes naturales.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 106. Azucares: 18g.' },
  ],
};

const bearsNeon: ProductTemplate = {
  id: 'bears-neon-template',
  familyId: 'bears-neon',
  productFamily: 'Bears Neon',
  name: 'Bears Neon',
  subtitle: 'Gummy candy\nNeon Mix',
  description: 'Ositos de gomita en colores neon con perfil dulce y frutal.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-Neon-5-lb-1-300x300.webp'),
  bowlImage: bowl('bears-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs(specsBears),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.' },
  ],
};

const watermelonSlices: ProductTemplate = {
  id: 'watermelon-slices-template',
  familyId: 'watermelon-slices',
  productFamily: 'Watermelon Slices',
  name: 'Watermelon Slices',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description: 'Rebanadas de sandia con textura suave y un perfil dulce refrescante.',
  image: buildCatalogProductPath('sweet', 'GUMMIES', 'WATERMELON SLICES', 'JOVY-SWEET-GUMMIES-Watermelon-Slices-5-lb-300x300.webp'),
  bowlImage: bowl('watermelon-slices-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs(specsBase),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const frutastika: ProductTemplate = {
  id: 'frutastika-template',
  familyId: 'frutastika',
  productFamily: 'Frutastika',
  name: 'Frutastika',
  subtitle: 'Gummy candy\nFruit Mix',
  description: 'Mezcla surtida de gomitas con enfoque frutal para presentaciones individuales.',
  image: carousel('100g', 'Mockup Frutastika MX 100g.webp'),
  bowlImage: bowl('frutastika-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '100 g', bagsPerBox: 12, boxWeight: '1.2 kg' }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const blueSharks: ProductTemplate = {
  id: 'blue-sharks-template',
  familyId: 'blue-sharks',
  productFamily: 'Blue Sharks',
  name: 'Blue Sharks',
  subtitle: 'Gummy candy\nOcean Mix',
  description: 'Gomitas tipo tiburon con acabado brillante y perfil frutal.',
  image: carousel('100g', 'Mockup Blue Sharks Mx 100g.webp'),
  bowlImage: bowl('blue-sharks-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '100 g', bagsPerBox: 12, boxWeight: '1.2 kg' }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.' },
  ],
};

const sharksMix: ProductTemplate = {
  id: 'sharks-mix-template',
  familyId: 'sharks-mix',
  productFamily: 'Sharks Mix',
  name: 'Sharks Mix',
  subtitle: 'Gummy candy\nAssorted Sharks',
  description: 'Surtido de tiburones de gomita en una presentacion de alto gramaje.',
  image: carousel('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp'),
  bowlImage: bowl('sharks-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '1 kg', bagsPerBox: 10, boxWeight: '10 kg' }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

// ---------------------------------------------------------------------------
// Products array — add new products here
// ---------------------------------------------------------------------------

export const gomitasGrenetinaProducts: CatalogModuleProduct[] = [
  // --- Rings Watermelon ---
  createVariant(ringsWatermelon, { id: 'g-rings-watermelon-100g',  gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Rings Sandia MX 100g.webp') }),
  createVariant(ringsWatermelon, { id: 'g-rings-watermelon-141g',  gramaje: '141 g', carouselImage: carousel('141g', 'Jovy-Gomitas-Grenetina-Rings-Sandia-MX-141g.webp') }),
  createVariant(ringsWatermelon, { id: 'g-rings-watermelon-1kg',   gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Rings-Sandia-1-kg-MX-1kg-20.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Rings Peach ---
  createVariant(ringsPeach, { id: 'g-rings-peach-100g',  gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Rings Durazno MX 100g.webp') }),
  createVariant(ringsPeach, { id: 'g-rings-peach-141g',  gramaje: '141 g', carouselImage: carousel('141g', 'Jovy-Gomitas-Grenetina-Rings-Durazno-MX-141g.webp') }),
  createVariant(ringsPeach, { id: 'g-rings-peach-1kg',   gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Rings-Durazno-1-kg-MX-1kg-20.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Rings Neon ---
  createVariant(ringsNeon, { id: 'g-rings-neon-1kg', gramaje: '1 kg', carouselImage: carousel('1kg', 'Jovy-Gomitas-Grenetina-Rings Sour Neon-1kg-MX.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Rings Green Apple ---
  createVariant(ringsGreenApple, { id: 'g-rings-green-apple-1kg', gramaje: '1 kg', carouselImage: carousel('1kg', 'Jovy-Gomitas-Grenetina-Rings-Manzana-1kg-20.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Worms Original ---
  createVariant(wormsOriginal, { id: 'g-worms-original-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Worms MX 100g.webp') }),
  createVariant(wormsOriginal, { id: 'g-worms-original-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Worms-1kg-MX.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Worms Neon ---
  createVariant(wormsNeon, { id: 'g-worms-neon-50g',  gramaje: '50 g',  carouselImage: carousel('50g',  'Mockup Worms Neon MX 50g.webp') }),
  createVariant(wormsNeon, { id: 'g-worms-neon-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Worms Neon MX 100g.webp') }),
  createVariant(wormsNeon, { id: 'g-worms-neon-141g', gramaje: '141 g', carouselImage: carousel('141g', 'Jovy-Gomitas-Grenetina-Worms-Neon-MX-141g.webp') }),
  createVariant(wormsNeon, { id: 'g-worms-neon-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Worms-Neon-1kg-MX.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Bears Classic ---
  createVariant(bearsClassic, { id: 'g-bears-classic-50g',  gramaje: '50 g',  carouselImage: carousel('50g',  'Mockup Bears 12 Sabores MX 50g.webp') }),
  createVariant(bearsClassic, { id: 'g-bears-classic-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Bears 12 Sabores MX 100g.webp') }),
  createVariant(bearsClassic, { id: 'g-bears-classic-141g', gramaje: '141 g', carouselImage: carousel('141g', 'Mockup Bears 12 SABORES 141g.webp') }),
  createVariant(bearsClassic, { id: 'g-bears-classic-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Mkup Bears 12 Sabores 1kg MX.webp'), specs: createStandardSpecs(specsBears1kg) }),

  // --- Bears Neon ---
  createVariant(bearsNeon, { id: 'g-bears-neon-50g',  gramaje: '50 g',  carouselImage: carousel('50g',  'Mockup Bears Neon MX 50g.webp') }),
  createVariant(bearsNeon, { id: 'g-bears-neon-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Bears Neon MX 100g.webp') }),
  createVariant(bearsNeon, { id: 'g-bears-neon-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Bears-Neon-1-kg-MX-1kg-20.webp'), specs: createStandardSpecs(specsBears1kg) }),

  // --- Watermelon Slices ---
  createVariant(watermelonSlices, { id: 'g-watermelon-slices-50g',  gramaje: '50 g',  carouselImage: carousel('50g',  'Mockup Watermelon Slices MX 50g.webp') }),
  createVariant(watermelonSlices, { id: 'g-watermelon-slices-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Watermelon Slices MX 100g.webp') }),
  createVariant(watermelonSlices, { id: 'g-watermelon-slices-141g', gramaje: '141 g', carouselImage: carousel('141g', 'Jovy-Gomitas-Grenetina-Watermelon-Slices-MX-141g.webp') }),
  createVariant(watermelonSlices, { id: 'g-watermelon-slices-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Watermelon-Slices-1-kg-Pouch Bag.webp'), specs: createStandardSpecs(specsBase1kg) }),

  // --- Frutastika ---
  createVariant(frutastika, { id: 'g-frutastika-50g',  gramaje: '50 g',  carouselImage: carousel('50g',  'Mockup Frutastika MX 50g.webp') }),
  createVariant(frutastika, { id: 'g-frutastika-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Frutastika MX 100g.webp') }),
  createVariant(frutastika, { id: 'g-frutastika-141g', gramaje: '141 g', carouselImage: carousel('141g', 'Jovy-Gomitas-Grenetina-Frutastika-MX-141g.webp') }),
  createVariant(frutastika, { id: 'g-frutastika-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Frutastika-Gummies-1kg.webp'), specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '1 kg', bagsPerBox: 10, boxWeight: '10 kg' }) }),

  // --- Blue Sharks ---
  createVariant(blueSharks, { id: 'g-blue-sharks-100g', gramaje: '100 g', carouselImage: carousel('100g', 'Mockup Blue Sharks Mx 100g.webp') }),
  createVariant(blueSharks, { id: 'g-blue-sharks-1kg',  gramaje: '1 kg',  carouselImage: carousel('1kg',  'Jovy-Gomitas-Grenetina-Blue Sharks -Sabores-1kg-MX.webp'), specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '1 kg', bagsPerBox: 10, boxWeight: '10 kg' }) }),

  // --- Sharks Mix ---
  createVariant(sharksMix, { id: 'g-sharks-mix-1kg', gramaje: '1 kg', carouselImage: carousel('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp') }),
] as CatalogModuleProduct[];
