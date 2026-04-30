import type {
  CatalogCategory,
  CatalogLogoOption,
  CatalogProduct,
} from '../../types/catalog.types';
import {
  buildBrandMarkPath,
  buildCatalogCarouselPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '@/shared/assets/publicAssets';
import { createVariant, type ProductTemplate } from './catalogVariant.shared';

const buildCatalogAssetPath = (...segments: string[]) => buildCatalogCarouselPath(...segments);

const premiumMixLogo = buildBrandMarkPath('BRAND JOVY.png');

const happyMixTemplate: ProductTemplate = {
  id: 'happy-mix-template',
  name: 'Happy Mix',
  productFamily: 'Happy Mix',
  subtitle: 'Assorted Mix\nMulti Flavor',
  description:
    'Surtido de dulces variados con las nuevas presentaciones de alta definicion.',
  image: buildCatalogProductPath(
    'spicy',
    'PI\u00d1ATERO',
    'HAPPY MIX',
    'JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp'
  ),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 2.26 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
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
  type: 'Dulce',
};

const revolcadosMixTemplate: ProductTemplate = {
  id: 'revolcados-mix-template',
  name: 'Revolcados Mix',
  productFamily: 'Revolcados Mix',
  subtitle: 'Sweet & Spicy Mix\nBalanced Heat',
  description: 'Mix especial de dulces y picantes para pinateros tradicionales.',
  image: buildCatalogProductPath(
    'spicy',
    'PI\u00d1ATERO',
    'REVOLCADOS MIX',
    'JOVY-PINATEROS-Revolcados-Mix-5-lb-300x300.webp'
  ),
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 2.26 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
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
  type: 'Picante',
};

const premiumMixTemplate: ProductTemplate = {
  id: 'premium-mix-template',
  name: 'Premium Mix',
  productFamily: 'Premium Mix',
  subtitle: 'Assorted Mix\nPremium Selection',
  description: 'Presentacion premium de pinatero para surtido de alto gramaje.',
  image: buildCatalogAssetPath('Pi\u00f1ateros', 'Jovy-Pi\u00f1ateros-Premium-5-kg-MX.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 5 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
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
  type: 'Dulce',
};

export const pinateroProducts: CatalogProduct[] = [
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildCatalogAssetPath(
      'Pi\u00f1ateros',
      'Jovy-Pi\u00f1ateros-Happy Mix-2.26-kg-MX.webp'
    ),
  }),
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildCatalogAssetPath(
      'Pi\u00f1ateros',
      'Jovy-Pi\u00f1ateros-Happy Mix-5-kg-MX.webp'
    ),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildCatalogAssetPath(
      'Pi\u00f1ateros',
      'Jovy-Pi\u00f1ateros-Revolcados Mix-2.26-kg-MX.webp'
    ),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildCatalogAssetPath(
      'Pi\u00f1ateros',
      'Jovy-Pi\u00f1ateros-Revolcados Mix-5-kg-MX.webp'
    ),
  }),
  createVariant(premiumMixTemplate, {
    id: 'pi-premium-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildCatalogAssetPath(
      'Pi\u00f1ateros',
      'Jovy-Pi\u00f1ateros-Premium-5-kg-MX.webp'
    ),
  }),
];

export const pinateroLogos: CatalogLogoOption[] = [
  {
    src: buildCatalogLogoPath('spicy', 'PI\u00d1ATERO', 'LOGOS', 'happy-mix-300x300.webp'),
    alt: 'Pinatero Happy Mix',
  },
  {
    src: buildCatalogLogoPath(
      'spicy',
      'PI\u00d1ATERO',
      'LOGOS',
      'Revolcados-mix-300x300.webp'
    ),
    alt: 'Pinatero Revolcados',
  },
  { src: premiumMixLogo, alt: 'Pinatero Premium' },
];

export const pinateroLogoProductsMap: Record<string, string[]> = {
  [buildCatalogLogoPath('spicy', 'PI\u00d1ATERO', 'LOGOS', 'happy-mix-300x300.webp')]: [
    'Happy Mix',
  ],
  [buildCatalogLogoPath('spicy', 'PI\u00d1ATERO', 'LOGOS', 'Revolcados-mix-300x300.webp')]: [
    'Revolcados Mix',
  ],
  [premiumMixLogo]: ['Premium Mix'],
};

export function buildPinatero(): CatalogCategory {
  return {
    id: 'pinatero',
    title: 'Pi\u00f1atero',
    accent: '#FD3B1F',
    products: pinateroProducts,
  };
}
