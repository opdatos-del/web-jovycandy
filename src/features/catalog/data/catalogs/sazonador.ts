import type {
  CatalogCategory,
  CatalogCategoryModule,
  CatalogLogoGroup,
  CatalogModuleProduct,
} from '../../types/catalog.types';
import { buildCatalogLogoPath, buildCatalogProductPath } from '../../../../shared/assets/publicAssets.ts';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory.ts';

const createImageBackedProduct = (product: Omit<CatalogModuleProduct, 'carouselImage' | 'bowlImage'>) => ({
  ...product,
  carouselImage: product.image,
  bowlImage: product.image,
});

export const sazonadorProducts = [
  createImageBackedProduct({
    id: 'p1',
    familyId: 'acirrico',
    name: 'Acirrico',
    productFamily: 'Acirrico',
    subtitle: 'Tamarind Powder\nSour & Sweet',
    description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
    image: buildCatalogProductPath('spicy', 'POWDERS', 'Acirrico.webp'),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.05 oz (1.5g)',
      piecesPerBag: 40,
      bagWeight: '2 oz (56g)',
      bagsPerBox: 24,
      boxWeight: '3 lb 8 oz (1.6 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, tamarindo deshidratado, sal yodada, acido citrico y chile.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 5g. Calorias: 20. Azucares: 4g.',
      },
    ],
    gramaje: '56 g',
  }),
  createImageBackedProduct({
    id: 'p2',
    familyId: 'limonazo',
    name: 'Limonazo',
    productFamily: 'Limonazo',
    subtitle: 'Chamoy Powder\nSweet & Tangy',
    description: 'Polvo con aroma y sabor a chamoy, perfecto para cubrir frutas.',
    image: buildCatalogProductPath('spicy', 'POWDERS', 'Limonazo.webp'),
    certifications: ['SGS'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.05 oz (1.5g)',
      piecesPerBag: 40,
      bagWeight: '2 oz (56g)',
      bagsPerBox: 24,
      boxWeight: '3 lb 8 oz (1.6 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, extracto de chamoy, sal, acido citrico y colorantes.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 5g. Calorias: 18. Azucares: 4g.',
      },
    ],
    gramaje: '56 g',
  }),
] as CatalogModuleProduct[];

export const sazonadorLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'),
    alt: 'Polvos Sazonador',
    families: ['acirrico', 'limonazo'],
  },
];

export const sazonadorModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'sazonador',
    title: 'Sazonador',
    accent: '#FF6B9D',
    products: sazonadorProducts,
  },
  logos: sazonadorLogoGroups,
};

export function buildSazonador(): CatalogCategory {
  return sazonadorModule.category;
}
