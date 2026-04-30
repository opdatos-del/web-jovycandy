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

export const gomitasAlmidonProducts = [
  createImageBackedProduct({
    id: 'j1',
    familyId: 'cherry-slices',
    name: 'CHERRY SLICES 5LB',
    productFamily: 'CHERRY SLICES 5LB',
    subtitle: 'Strawberry Jelly\nSmooth & Sweet',
    description: 'Gelatina de fresa con textura suave y sabor intenso.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'cherry-slices',
      'jovy-sweet-jellies-cherry-slices-5-lb-300x300.webp'
    ),
    certifications: ['SGS', 'OU Kosher', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '6 oz (170g)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de fresa.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
      },
    ],
    gramaje: '170 g',
  }),
  createImageBackedProduct({
    id: 'j2',
    familyId: 'orange-slices',
    name: 'ORANGE SLICES',
    productFamily: 'ORANGE SLICES',
    subtitle: 'Orange Jelly\nCitrus & Sweet',
    description: 'Gelatina de naranja con sabor citrico intenso.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'orange-slices',
      'jovy-sweet-jellies-orange-slices-5-lb-300x300.webp'
    ),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '6 oz (170g)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y aceite esencial de naranja.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '170 g',
  }),
  createImageBackedProduct({
    id: 'j3',
    familyId: 'fruit-assorted-slices',
    name: 'FRUIT ASSORTED SLICES',
    productFamily: 'FRUIT ASSORTED SLICES',
    subtitle: 'Fruit Jelly\nAssorted Slices',
    description: 'Gelatina surtida de frutas con un perfil suave y clasico.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'fruit-assorted-slices',
      'jovy-sweet-jellies-fruit-slices-5-lb-300x300.webp'
    ),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '5 lb (2.26kg)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizantes frutales.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '5 lb',
  }),
  createImageBackedProduct({
    id: 'j4',
    familyId: 'gum-drops',
    name: 'GUM DROPS',
    productFamily: 'GUM DROPS',
    subtitle: 'Gum Drops\nSweet Jelly Mix',
    description: 'Clasicos gum drops de textura suave y sabor dulce.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'gum-drops',
      'jovy-sweet-jellies-gum-drops-5-lb-300x300.webp'
    ),
    sampleImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'gum-drops',
      'jovy-sweet-jellies-gum-drops-5-lb-300x300.webp'
    ),
    secondaryImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'gum-drops',
      'jovy-sweet-jellies-gum-drops-5-lb-300x300.webp'
    ),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '5 lb (2.26kg)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y colorantes.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '5 lb',
  }),
  createImageBackedProduct({
    id: 'j5',
    familyId: 'spice-drops',
    name: 'SPICE DROPS',
    productFamily: 'SPICE DROPS',
    subtitle: 'Spice Drops\nSweet Heat Jelly',
    description: 'Gomitas tipo jelly con acabado especiado y toque dulce.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spice-drops',
      'jovy-sweet-jellies-spice-drops-5-lb-300x300.webp'
    ),
    sampleImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spice-drops',
      'jovy-sweet-jellies-spice-drops-5-lb-300x300.webp'
    ),
    secondaryImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spice-drops',
      'jovy-sweet-jellies-spice-drops-5-lb-300x300.webp'
    ),
    certifications: ['SGS'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '5 lb (2.26kg)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizantes.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '5 lb',
  }),
  createImageBackedProduct({
    id: 'j6',
    familyId: 'spearmint-leaves',
    name: 'SPEARMINT LEAVES',
    productFamily: 'SPEARMINT LEAVES',
    subtitle: 'Spearmint Leaves\nFresh Jelly',
    description: 'Hojas de menta dulce con perfil fresco y clasico.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spearmint-leaves',
      'jovy-sweet-jellies-spearmint-leaves-5-lb-300x300.webp'
    ),
    sampleImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spearmint-leaves',
      'jovy-sweet-jellies-spearmint-leaves-5-lb-300x300.webp'
    ),
    secondaryImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'spearmint-leaves',
      'jovy-sweet-jellies-spearmint-leaves-5-lb-300x300.webp'
    ),
    certifications: ['SGS'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '5 lb (2.26kg)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de menta.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '5 lb',
  }),
  createImageBackedProduct({
    id: 'j7',
    familyId: 'cherry-jelly-sour',
    name: 'CHERRY JELLY SOUR',
    productFamily: 'CHERRY JELLY SOUR',
    subtitle: 'Cherry Jelly\nSour Candy',
    description: 'Gelatina de cereza con perfil agrio y dulce.',
    image: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'cherry-jelly-sour',
      'jovy-sweet-jellies-cherry-jelly-sour-5-lb-300x300.webp'
    ),
    sampleImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'cherry-jelly-sour',
      'jovy-sweet-jellies-cherry-jelly-sour-5-lb-300x300.webp'
    ),
    secondaryImage: buildCatalogProductPath(
      'sweet',
      'JELLIES',
      'cherry-jelly-sour',
      'jovy-sweet-jellies-cherry-jelly-sour-5-lb-300x300.webp'
    ),
    certifications: ['SGS', 'Halal'],
    specs: createStandardSpecs({
      weightPerPiece: 'Net Wt. 0.5 oz (14g)',
      piecesPerBag: 12,
      bagWeight: '5 lb (2.26kg)',
      bagsPerBox: 24,
      boxWeight: '8 lb 13 oz (4.08 kg)',
    }),
    collapsibleInfo: [
      {
        title: 'Ingredientes',
        content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de cereza.',
      },
      {
        title: 'Informacion Nutrimental',
        content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
      },
    ],
    gramaje: '5 lb',
  }),
] as CatalogModuleProduct[];

export const gomitasAlmidonLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp'),
    alt: 'Jellies Cherry',
    families: ['cherry-slices'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp'),
    alt: 'Jellies Orange',
    families: ['orange-slices'],
  },
  {
    src: buildCatalogLogoPath(
      'sweet',
      'JELLIES',
      'LOGOS',
      'bot-web-jovy-usa-sweet-jellies-assorted-slices-300x300.webp'
    ),
    alt: 'Fruit Assorted Slices',
    families: ['fruit-assorted-slices'],
  },
  {
    src: buildCatalogLogoPath(
      'sweet',
      'JELLIES',
      'LOGOS',
      'bot-web-jovy-usa-sweet-jellies-gumdroops-300x300.webp'
    ),
    alt: 'Gum Drops',
    families: ['gum-drops'],
  },
  {
    src: buildCatalogLogoPath(
      'sweet',
      'JELLIES',
      'LOGOS',
      'bot-web-jovy-usa-sweet-jellies-spice-droops-300x300.webp'
    ),
    alt: 'Spice Drops',
    families: ['spice-drops'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'spearmint-leaves-300x300.webp'),
    alt: 'Spearmint Leaves',
    families: ['spearmint-leaves'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'cherry-jelly-300x300.webp'),
    alt: 'Cherry Jelly Sour',
    families: ['cherry-jelly-sour'],
  },
];

export const gomitasAlmidonModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'gomitas_almidon',
    title: 'Gomitas Almidon',
    accent: '#FF4757',
    products: gomitasAlmidonProducts,
  },
  logos: gomitasAlmidonLogoGroups,
};

export function buildGomitasAlmidon(): CatalogCategory {
  return gomitasAlmidonModule.category;
}
