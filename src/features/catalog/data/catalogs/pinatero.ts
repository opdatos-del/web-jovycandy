import type {
  CatalogCategory,
  CatalogCategoryModule,
  CatalogLogoGroup,
  CatalogModuleProduct,
} from '../../types/catalog.types';
import {
  buildBrandMarkPath,
  buildCatalogBowlPath,
  buildCatalogCarouselPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '../../../../shared/assets/publicAssets.ts';
import { createVariant, type ProductTemplate } from './catalogVariant.shared.ts';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory.ts';

const buildPinateroCarouselPath = (filename: string) =>
  buildCatalogCarouselPath('pinateros', filename);


const happyMixTemplate: ProductTemplate = {
  id: 'happy-mix-template',
  familyId: 'happy-mix',
  name: 'Happy Mix',
  productFamily: 'Happy Mix',
  subtitle: 'Assorted Mix\nMulti Flavor',
  description: 'Surtido de dulces variados con las nuevas presentaciones de alta definicion.',
  image: buildCatalogProductPath(
    'spicy',
    'PINATERO',
    'HAPPY MIX',
    'JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp'
  ),
  bowlImage: buildCatalogBowlPath('pinatero/happy-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.5 oz (14g)',
    piecesPerBag: 12,
    bagWeight: '2.26 kg',
    bagsPerBox: 1,
    boxWeight: '5 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla de caramelos con azucar, jarabe de maiz y saborizantes variados.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 115. Azucares: 21g.',
    },
  ],
};

const revolcadosMixTemplate: ProductTemplate = {
  id: 'revolcados-mix-template',
  familyId: 'revolcados-mix',
  name: 'Revolcados Mix',
  productFamily: 'Revolcados Mix',
  subtitle: 'Sweet & Spicy Mix\nBalanced Heat',
  description: 'Mix especial de dulces y picantes para pinateros tradicionales.',
  image: buildCatalogProductPath(
    'spicy',
    'PINATERO',
    'REVOLCADOS MIX',
    'JOVY-PINATEROS-Revolcados-Mix-5-lb-300x300.webp'
  ),
  bowlImage: buildCatalogBowlPath('pinatero/revolcados-mix-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.5 oz (14g)',
    piecesPerBag: 12,
    bagWeight: '2.26 kg',
    bagsPerBox: 1,
    boxWeight: '5 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla de caramelos dulces y picantes con saborizantes naturales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
};

const premiumMixTemplate: ProductTemplate = {
  id: 'premium-mix-template',
  familyId: 'premium-mix',
  name: 'Premium Mix',
  productFamily: 'Premium Mix',
  subtitle: 'Assorted Mix\nPremium Selection',
  description: 'Presentacion premium de pinatero para surtido de alto gramaje.',
  image:buildCatalogProductPath('spicy', 'PINATERO', 'LOGOS', 'premium-mix-01.webp'),
  bowlImage: buildCatalogBowlPath('pinatero/premium-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.5 oz (14g)',
    piecesPerBag: 12,
    bagWeight: '5 kg',
    bagsPerBox: 1,
    boxWeight: '5 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla surtida de dulces con saborizantes y colores variados.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 112. Azucares: 20g.',
    },
  ],
};

export const pinateroProducts = [
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildPinateroCarouselPath('Jovy-Pinateros-Happy Mix-2.26-kg-MX.webp'),
  }),
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildPinateroCarouselPath('Jovy-Pinateros-Happy Mix-5-kg-MX.webp'),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildPinateroCarouselPath('Jovy-Pinateros-Revolcados Mix-2.26-kg-MX.webp'),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildPinateroCarouselPath('Jovy-Pinateros-Revolcados Mix-5-kg-MX.webp'),
  }),
  createVariant(premiumMixTemplate, {
    id: 'pi-premium-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildPinateroCarouselPath('Jovy-Pinateros-Premium-5-kg-MX.webp'),
  }),
] as CatalogModuleProduct[];

export const pinateroLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('spicy', 'PINATERO', 'LOGOS', 'happy-mix-300x300.webp'),
    alt: 'Pinatero Happy Mix',
    families: ['happy-mix'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'PINATERO', 'LOGOS', 'revolcados-mix-300x300.webp'),
    alt: 'Pinatero Revolcados Mix',
    families: ['revolcados-mix'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'PINATERO', 'LOGOS', 'premium-mix-01.webp'),
    alt: 'Pinatero Premium Mix',
    families: ['premium-mix'],
  },
];

export const pinateroModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'pinatero',
    title: 'Pinatero',
    accent: '#FD3B1F',
    products: pinateroProducts,
  },
  logos: pinateroLogoGroups,
};

export function buildPinatero(): CatalogCategory {
  return pinateroModule.category;
}
