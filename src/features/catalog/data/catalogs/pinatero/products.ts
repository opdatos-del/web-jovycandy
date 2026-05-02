/**
 * pinatero/products.ts
 *
 * All products belonging to the Piñatero category.
 *
 * To add a new product:
 *   1. Define a ProductTemplate for the family if it does not exist.
 *   2. Call createVariant(template, { id, gramaje, carouselImage }) for each size.
 *   3. Place the carousel image under public/assets/catalog/carousels/pinateros/.
 */

import type { CatalogModuleProduct } from '../../../types/catalog.types';
import {
  buildCatalogBowlPath,
  buildCatalogCarouselPath,
  buildCatalogProductPath,
} from '../../../../../shared/assets/publicAssets';
import { createVariant, type ProductTemplate } from '../catalogVariant.shared';
import { createStandardSpecs } from '../../helpers/catalogSpecsFactory';

const bowl = (filename: string) => buildCatalogBowlPath(`pinatero/${filename}`);
const carousel = (filename: string) => buildCatalogCarouselPath('pinateros', filename);

const sharedSpecs = createStandardSpecs({
  weightPerPiece: 'Net Wt. 0.5 oz (14g)',
  piecesPerBag: 12,
  bagWeight: '2.26 kg',
  bagsPerBox: 1,
  boxWeight: '5 kg',
});

// ---------------------------------------------------------------------------
// Product templates
// ---------------------------------------------------------------------------

const happyMix: ProductTemplate = {
  id: 'happy-mix-template',
  familyId: 'happy-mix',
  productFamily: 'Happy Mix',
  name: 'Happy Mix',
  subtitle: 'Assorted Mix\nMulti Flavor',
  description: 'Surtido de dulces variados con las nuevas presentaciones de alta definicion.',
  image: buildCatalogProductPath('spicy', 'PINATERO', 'HAPPY MIX', 'JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp'),
  bowlImage: bowl('happy-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: sharedSpecs,
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Mezcla de caramelos con azucar, jarabe de maiz y saborizantes variados.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 115. Azucares: 21g.' },
  ],
};

const revolcadosMix: ProductTemplate = {
  id: 'revolcados-mix-template',
  familyId: 'revolcados-mix',
  productFamily: 'Revolcados Mix',
  name: 'Revolcados Mix',
  subtitle: 'Sweet & Spicy Mix\nBalanced Heat',
  description: 'Mix especial de dulces y picantes para pinateros tradicionales.',
  image: buildCatalogProductPath('spicy', 'PINATERO', 'REVOLCADOS MIX', 'JOVY-PINATEROS-Revolcados-Mix-5-lb-300x300.webp'),
  bowlImage: bowl('revolcados-mix-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: sharedSpecs,
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Mezcla de caramelos dulces y picantes con saborizantes naturales.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.' },
  ],
};

const premiumMix: ProductTemplate = {
  id: 'premium-mix-template',
  familyId: 'premium-mix',
  productFamily: 'Premium Mix',
  name: 'Premium Mix',
  subtitle: 'Assorted Mix\nPremium Selection',
  description: 'Presentacion premium de pinatero para surtido de alto gramaje.',
  image: buildCatalogProductPath('spicy', 'PINATERO', 'LOGOS', 'premium-mix-01.webp'),
  bowlImage: bowl('premium-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({ weightPerPiece: 'Net Wt. 0.5 oz (14g)', piecesPerBag: 12, bagWeight: '5 kg', bagsPerBox: 1, boxWeight: '5 kg' }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: 'Mezcla surtida de dulces con saborizantes y colores variados.' },
    { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 30g. Calorias: 112. Azucares: 20g.' },
  ],
};

// ---------------------------------------------------------------------------
// Products array — add new products here
// ---------------------------------------------------------------------------

export const pinateroProducts: CatalogModuleProduct[] = [
  createVariant(happyMix, { id: 'pi-happy-mix-2-26kg', gramaje: '2.26 kg', carouselImage: carousel('Jovy-Pinateros-Happy Mix-2.26-kg-MX.webp') }),
  createVariant(happyMix, { id: 'pi-happy-mix-5kg',    gramaje: '5 kg',    carouselImage: carousel('Jovy-Pinateros-Happy Mix-5-kg-MX.webp') }),

  createVariant(revolcadosMix, { id: 'pi-revolcados-mix-2-26kg', gramaje: '2.26 kg', carouselImage: carousel('Jovy-Pinateros-Revolcados Mix-2.26-kg-MX.webp') }),
  createVariant(revolcadosMix, { id: 'pi-revolcados-mix-5kg',    gramaje: '5 kg',    carouselImage: carousel('Jovy-Pinateros-Revolcados Mix-5-kg-MX.webp') }),

  createVariant(premiumMix, { id: 'pi-premium-mix-5kg', gramaje: '5 kg', carouselImage: carousel('Jovy-Pinateros-Premium-5-kg-MX.webp') }),
] as CatalogModuleProduct[];
