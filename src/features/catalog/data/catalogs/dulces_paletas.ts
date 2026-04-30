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

export const dulcesPaletasProducts = [
  createImageBackedProduct({
    id: 'm0',
    familyId: 'lollipop-cherry',
    name: 'Lollipop Cherry',
    productFamily: 'Lollipop Cherry',
    subtitle: 'Cherry Lollipop\nClassic Hard Candy',
    description: 'Caramelos macizos con sabor intenso a cereza.',
    image: buildCatalogProductPath(
      'sweet',
      'HARD CANDY',
      'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'
    ),
    certifications: ['SGS', 'OU Kosher'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.15 oz (4g)',
      piecesPerBag: 40,
      bagWeight: '6 oz (170g)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, acido malico y saborizante de cereza.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
      },
    ],
    gramaje: '170 g',
  }),
  createImageBackedProduct({
    id: 'm1',
    familyId: 'mango-revolcado',
    name: 'Mango revolcado',
    productFamily: 'Mango revolcado',
    subtitle: 'Mango revolcado\nPaleta',
    description: 'Paleta con chamoy y chile.',
    image: buildCatalogProductPath(
      'spicy',
      'LOLLIPOPS',
      'MANGO REVOLCADO',
      'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'
    ),
    certifications: ['SGS'],
    specs: [],
    collapsibleInfo: [],
    gramaje: '5.29 oz',
  }),
] as CatalogModuleProduct[];

export const dulcesPaletasLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'),
    alt: 'Dulces Fruit',
    families: ['lollipop-cherry'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'),
    alt: 'Paletas Mango',
    families: ['mango-revolcado'],
  },
];

export const dulcesPaletasModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'dulces_paletas',
    title: 'Dulces y Paletas',
    accent: '#FFB84D',
    products: dulcesPaletasProducts,
  },
  logos: dulcesPaletasLogoGroups,
};

export function buildDulcesPaletas(): CatalogCategory {
  return dulcesPaletasModule.category;
}
