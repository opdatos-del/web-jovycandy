/**
 * chamoy/products.ts
 *
 * All products belonging to the Chamoy category.
 *
 * To add a new product:
 *   1. Add a new entry in the products array below.
 *   2. If it is a new family, define a ProductTemplate first, then use createVariant().
 *   3. Place the product image under public/assets/catalog/products/spicy/{subfolder}/.
 *   4. If the product shares bowl/carousel images with others in the same family,
 *      reference the same bowl/carousel paths already declared.
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
// Bowl image helpers — one per visual family
// ---------------------------------------------------------------------------

const bowl = (filename: string) => buildCatalogBowlPath(`chamoy/${filename}`);

const bowls = {
  chilorokasAssorted:   bowl('Chilirokas-Assorted.png'),
  chililokasMango:      bowl('chilirokas-mango-assorted.webp'),
  chilorokasTamarindo:  bowl('chilirokas-tamarindo-assorted.webp'),
  chilorokasWatermelon: bowl('chilirokas-watermelon-assorted.webp'),
  enchilokas:           bowl('enchilokas-assorted.webp'),
  chamoyBears:          bowl('chamoy-bears-assorted.webp'),
  chamoyRingsPeach:     bowl('chamoy-rings-peach-assorted.webp'),
  chamoyRingsWatermelon:bowl('chamoy-rings-watermelon-assorted.webp'),
  chamoyWorms:          bowl('chamoy-worms-assorted.webp'),
  revolcaditas:         bowl('revolcaditas-assorted.webp'),
  tamaros:              bowl('tamaros-assorted.webp'),
  valleniteMango:       bowl('vallenito-mango-assorted.webp'),
  vallenito:            bowl('vallenito-assorted.webp'),
  vallenitoWatermelon:  bowl('vallenito-watermelon-assorted.webp'),
};

// ---------------------------------------------------------------------------
// Product templates — base definition shared across weight variants
// ---------------------------------------------------------------------------

const enchilokas: ProductTemplate = {
  id: 'enchilokas-template',
  familyId: 'enchilokas',
  productFamily: 'Enchilokas',
  name: 'Enchilokas',
  subtitle: 'Jelly enchilado\nSpicy & Fruity',
  description: 'Jelly enchilado con cubierta picante.',
  image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-5.29-oz-300x300.webp'),
  bowlImage: bowls.enchilokas,
  certifications: ['SGS'],
  specs: [{ label: 'Weight per bag', value: 'Net Wt. 5.29 oz (150g)' }],
  collapsibleInfo: [
    { title: 'Presentacion', content: 'Bolsa enchilada.' },
  ],
};

const chamoyBears: ProductTemplate = {
  id: 'chamoy-bears-template',
  familyId: 'chamoybears',
  productFamily: 'Chamoy Bears',
  name: 'Chamoy Bears',
  subtitle: 'Chamoy Bears\nSpicy & Fruity',
  description: 'Ositos de gomita con chamoy y chile.',
  image: buildCatalogProductPath('spicy', 'GUMMIES', 'BEARS REVOLCADOS', 'JOVY-GUMMIES-Bears-Revolcado-5-lb-300x300.webp'),
  bowlImage: bowls.chamoyBears,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '100 g',
    bagsPerBox: 12,
    boxWeight: '1.2 kg',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y acido citrico.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const chamoyWorms: ProductTemplate = {
  id: 'chamoy-worms-template',
  familyId: 'chamoyworms',
  productFamily: 'Chamoy Worms',
  name: 'Chamoy Worms',
  subtitle: 'Chamoy Worms\nSpicy & Fruity',
  description: 'Gomitas tipo worm con recubrimiento de chamoy y chile.',
  image: buildCatalogProductPath('spicy', 'GUMMIES', 'WORMS REVOLCADOS', 'JOVY-GUMMIES-Worms-Revolcado-5-lb-300x300.webp'),
  bowlImage: bowls.chamoyWorms,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '100 g',
    bagsPerBox: 12,
    boxWeight: '1.2 kg',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y saborizantes.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.' },
  ],
};

const chamoyRingsWatermelon: ProductTemplate = {
  id: 'chamoy-rings-watermelon-template',
  familyId: 'chamoyringswatermelon',
  productFamily: 'Chamoy Rings Watermelon',
  name: 'Chamoy Rings Watermelon',
  subtitle: 'Chamoy Rings\nWatermelon',
  description: 'Aros de gomita sabor sandia con chamoy y chile.',
  image: buildCatalogProductPath('spicy', 'GUMMIES', 'RINGS REVOLCADO', 'JOVY-GUMMIES-Rings-Watermelon-Revolcado-5-lb-300x300.webp'),
  bowlImage: bowls.chamoyRingsWatermelon,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '1 kg',
    bagsPerBox: 10,
    boxWeight: '10 kg',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y sabor sandia.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const chamoyRingsPeach: ProductTemplate = {
  id: 'chamoy-rings-peach-template',
  familyId: 'chamoyringspeach',
  productFamily: 'Chamoy Rings Peach',
  name: 'Chamoy Rings Peach',
  subtitle: 'Chamoy Rings\nPeach',
  description: 'Aros de gomita sabor durazno con chamoy y chile.',
  image: buildCatalogProductPath('spicy', 'GUMMIES', 'RINGS REVOLCADO', 'JOVY-GUMMIES-Rings-Peach-Revolcado-5-lb-300x300.webp'),
  bowlImage: bowls.chamoyRingsPeach,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '1 kg',
    bagsPerBox: 10,
    boxWeight: '10 kg',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y sabor durazno.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.' },
  ],
};

const chilirokas: ProductTemplate = {
  id: 'chilirokas-template',
  familyId: 'chilirokas',
  productFamily: 'Chilirokas',
  name: 'Chilirokas',
  subtitle: 'Assorted Hard Candy\nSpicy & Fruity',
  description: 'Caramelo duro enchilado en presentacion surtida.',
  image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp'),
  bowlImage: bowls.chilorokasAssorted,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.15 oz (4g)',
    piecesPerBag: 40,
    bagWeight: '6 oz (170g)',
    bagsPerBox: 24,
    boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal y chile en polvo.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
  ],
};

const revolcaditas: ProductTemplate = {
  id: 'revolcaditas-template',
  familyId: 'revolcaditas',
  productFamily: 'Revolcaditas',
  name: 'Revolcaditas',
  subtitle: 'Assorted Hard Candy\nSpicy & Fruity',
  description: 'Revolcaditas surtidas.',
  image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp'),
  bowlImage: bowls.revolcaditas,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.15 oz (4g)',
    piecesPerBag: 40,
    bagWeight: '6 oz (170g)',
    bagsPerBox: 24,
    boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
  ],
};

const tamaros: ProductTemplate = {
  id: 'tamaros-template',
  familyId: 'tamaros',
  productFamily: 'Tamaros',
  name: 'Tamaros',
  subtitle: 'Tamarind Hard Candy',
  description: 'Caramelo duro de tamarindo.',
  image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp'),
  bowlImage: bowls.tamaros,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.15 oz (4g)',
    piecesPerBag: 40,
    bagWeight: '6 oz (170g)',
    bagsPerBox: 24,
    boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
  ],
};

const vallenito: ProductTemplate = {
  id: 'vallenito-template',
  familyId: 'vallenito',
  productFamily: 'Vallenito',
  name: 'Vallenito',
  subtitle: 'Assorted Hard Candy',
  description: 'Vallenito surtido.',
  image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp'),
  bowlImage: bowls.vallenito,
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.15 oz (4g)',
    piecesPerBag: 40,
    bagWeight: '6 oz (170g)',
    bagsPerBox: 24,
    boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
  ],
};

// ---------------------------------------------------------------------------
// Carousel path helper
// ---------------------------------------------------------------------------

const carousel = (subfolder: string, filename: string) =>
  buildCatalogCarouselPath(subfolder, filename);

// ---------------------------------------------------------------------------
// Products array — add new products here
// ---------------------------------------------------------------------------

export const chamoyProducts: CatalogModuleProduct[] = [
  // --- Enchilokas ---
  createVariant(enchilokas, {
    id: 'd1',
    gramaje: '150 g',
    bagWeight: '5.29 oz (150g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-5.29-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-5.29-oz-300x300.webp'),
  }),
  createVariant(enchilokas, {
    id: 'd2',
    gramaje: '482 g',
    bagWeight: '1 lb 1 oz (482g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-1-lb-1-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-1-lb-1-oz-300x300.webp'),
  }),
  createVariant({ ...enchilokas, subtitle: 'Pineapple Jelly\nSpicy & Tangy', description: 'Jelly enchilado sabor pina con perfil acidito y picante.' }, {
    id: 'd3',
    gramaje: '150 g',
    bagWeight: '5.29 oz (150g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-5.29-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-5.29-oz-300x300.webp'),
  }),
  createVariant({ ...enchilokas, subtitle: 'Pineapple Jelly\nSpicy & Tangy', description: 'Jelly enchilado sabor pina en presentacion grande.' }, {
    id: 'd4',
    gramaje: '482 g',
    bagWeight: '1 lb 1 oz (482g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-1-lb-1-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-1-lb-1-oz-300x300.webp'),
  }),
  createVariant({ ...enchilokas, subtitle: 'Mango Jelly\nSpicy & Tropical', description: 'Jelly enchilado sabor mango con acabado picante.' }, {
    id: 'd5',
    gramaje: '150 g',
    bagWeight: '5.29 oz (150g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-5.29-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-5.29-oz-300x300.webp'),
  }),
  createVariant({ ...enchilokas, subtitle: 'Mango Jelly\nSpicy & Tropical', description: 'Jelly enchilado sabor mango en presentacion grande.' }, {
    id: 'd6',
    gramaje: '482 g',
    bagWeight: '1 lb 1 oz (482g)',
    image: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-1-lb-1-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-1-lb-1-oz-300x300.webp'),
  }),

  // --- Chamoy Bears ---
  createVariant(chamoyBears, {
    id: 'g-chamoy-bears-100g',
    gramaje: '100 g',
    carouselImage: carousel('100g', 'Mockup Chamoy Bears MX 100g.webp'),
  }),
  createVariant(chamoyBears, {
    id: 'g-chamoy-bears-1kg',
    gramaje: '1 kg',
    bagWeight: '1 kg',
    carouselImage: carousel('1kg', 'Mckup Chamoy Bears MX 1 kg_Mayo 24.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.25 oz (7g)', piecesPerBag: 24, bagWeight: '1 kg', bagsPerBox: 10, boxWeight: '10 kg' }),
  }),

  // --- Chamoy Worms ---
  createVariant(chamoyWorms, {
    id: 'g-chamoy-worms-100g',
    gramaje: '100 g',
    carouselImage: carousel('100g', 'Mockup Chamoy Worms MX 100g.webp'),
  }),
  createVariant(chamoyWorms, {
    id: 'g-chamoy-worms-1kg',
    gramaje: '1 kg',
    bagWeight: '1 kg',
    carouselImage: carousel('1kg', 'Mckup Chamoy worms MX 1 kg_Mayo 24.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.3 oz (8g)', piecesPerBag: 21, bagWeight: '1 kg', bagsPerBox: 10, boxWeight: '10 kg' }),
  }),

  // --- Chamoy Rings Watermelon ---
  createVariant(chamoyRingsWatermelon, {
    id: 'g-chamoy-rings-watermelon-1kg',
    gramaje: '1 kg',
    carouselImage: carousel('1kg', 'Mckup Chamoy Rings Sandia MX 1 kg_Mayo 24.webp'),
  }),

  // --- Chamoy Rings Peach ---
  createVariant(chamoyRingsPeach, {
    id: 'g-chamoy-rings-peach-1kg',
    gramaje: '1 kg',
    carouselImage: carousel('1kg', 'Mckup Chamoy Rings Durazno MX 1 kg_Mayo 24.webp'),
  }),

  // --- Chilirokas ---
  createVariant(chilirokas, {
    id: 'd7',
    gramaje: '1 lb 3 oz',
    bagWeight: '1 lb 3 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 80, bagWeight: '1 lb 3 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 18 lb' }),
  }),
  createVariant(chilirokas, {
    id: 'd8',
    gramaje: '5.29 oz',
    bagWeight: '5.29 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 35, bagWeight: '5.29 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 7 lb 15 oz' }),
  }),
  createVariant(chilirokas, { id: 'd9', gramaje: '170 g', carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp') }),
  createVariant({ ...chilirokas, subtitle: 'Mango Hard Candy', description: 'Chilirokas sabor mango.', bowlImage: bowls.chililokasMango }, {
    id: 'd10',
    gramaje: '1 lb 3 oz',
    bagWeight: '1 lb 3 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 80, bagWeight: '1 lb 3 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 18 lb' }),
  }),
  createVariant({ ...chilirokas, subtitle: 'Mango Hard Candy', description: 'Chilirokas sabor mango.', bowlImage: bowls.chililokasMango }, {
    id: 'd11',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
  }),
  createVariant({ ...chilirokas, subtitle: 'Tamarind Hard Candy', description: 'Chilirokas sabor tamarindo.', bowlImage: bowls.chilorokasTamarindo }, {
    id: 'd12',
    gramaje: '1 lb 3 oz',
    bagWeight: '1 lb 3 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 80, bagWeight: '1 lb 3 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 18 lb' }),
  }),
  createVariant({ ...chilirokas, subtitle: 'Tamarind Hard Candy', description: 'Chilirokas sabor tamarindo.', bowlImage: bowls.chilorokasTamarindo }, {
    id: 'd13',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
  }),
  createVariant({ ...chilirokas, subtitle: 'Watermelon Hard Candy', description: 'Chilirokas sabor sandia.', bowlImage: bowls.chilorokasWatermelon }, {
    id: 'd14',
    gramaje: '1 lb 3 oz',
    bagWeight: '1 lb 3 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 80, bagWeight: '1 lb 3 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 18 lb' }),
  }),
  createVariant({ ...chilirokas, subtitle: 'Watermelon Hard Candy', description: 'Chilirokas sabor sandia.', bowlImage: bowls.chilorokasWatermelon }, {
    id: 'd15',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
  }),

  // --- Revolcaditas ---
  createVariant(revolcaditas, { id: 'd16', gramaje: '170 g', carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp') }),
  createVariant({ ...revolcaditas, subtitle: 'Mango Hard Candy', description: 'Revolcaditas sabor mango.' }, {
    id: 'd17',
    gramaje: '1 lb 5 16 oz',
    bagWeight: '1 lb 5 16 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 96, bagWeight: '1 lb 5 16 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 21 lb' }),
  }),
  createVariant({ ...revolcaditas, subtitle: 'Mango Hard Candy', description: 'Revolcaditas sabor mango.' }, {
    id: 'd18',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
  }),
  createVariant({ ...revolcaditas, subtitle: 'Watermelon Hard Candy', description: 'Revolcaditas sabor sandia.' }, {
    id: 'd19',
    gramaje: '1 lb 5 16 oz',
    bagWeight: '1 lb 5 16 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 96, bagWeight: '1 lb 5 16 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 21 lb' }),
  }),
  createVariant({ ...revolcaditas, subtitle: 'Watermelon Hard Candy', description: 'Revolcaditas sabor sandia.' }, {
    id: 'd20',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
  }),

  // --- Tamaros ---
  createVariant(tamaros, {
    id: 'd21',
    gramaje: '1 lb 7 oz',
    bagWeight: '1 lb 7 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 100, bagWeight: '1 lb 7 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 22 lb 8 oz' }),
  }),
  createVariant(tamaros, {
    id: 'd22',
    gramaje: '4.9 oz',
    bagWeight: '4.9 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 32, bagWeight: '4.9 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 7 lb 6 oz' }),
  }),
  createVariant(tamaros, { id: 'd23', gramaje: '170 g', carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp') }),

  // --- Vallenito ---
  createVariant(vallenito, {
    id: 'd24',
    gramaje: '1 lb 7 oz',
    bagWeight: '1 lb 7 oz',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
    specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.15 oz (4g)', piecesPerBag: 100, bagWeight: '1 lb 7 oz', bagsPerBox: 24, boxWeight: 'Net Wt. 22 lb 8 oz' }),
  }),
  createVariant(vallenito, { id: 'd25', gramaje: '170 g', carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp') }),
  createVariant({ ...vallenito, subtitle: 'Mango Hard Candy', description: 'Vallenito sabor mango.', bowlImage: bowls.valleniteMango }, {
    id: 'd26',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
  }),
  createVariant({ ...vallenito, subtitle: 'Watermelon Hard Candy', description: 'Vallenito sabor sandia.', bowlImage: bowls.vallenitoWatermelon }, {
    id: 'd27',
    gramaje: '170 g',
    image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
    carouselImage: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
  }),
] as CatalogModuleProduct[];
