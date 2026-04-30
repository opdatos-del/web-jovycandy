import type {
  CatalogCategory,
  CatalogCategoryModule,
  CatalogLogoGroup,
  CatalogModuleProduct,
  CatalogProduct,
} from '../../types/catalog.types';
import {
  buildCatalogBowlPath,
  buildCatalogCarouselPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '../../../../shared/assets/publicAssets.ts';
import { createVariant, type ProductTemplate } from './catalogVariant.shared.ts';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory.ts';

const buildCatalogAssetPath = (...segments: string[]) => buildCatalogCarouselPath(...segments);

const gummiesAssortedLogo = buildCatalogLogoPath(
  'sweet',
  'GUMMIES',
  'LOGOS',
  'FRUTASTIKA-BLUES.webp'
);

const grenetinaBowlPath = (filename: string) => buildCatalogBowlPath(`grenetina/${filename}`);





const ringsWatermelonTemplate: ProductTemplate = {
  id: 'rings-watermelon-template',
  familyId: 'rings-watermelon',
  name: 'Rings Watermelon',
  productFamily: 'Rings Watermelon',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description:
    'Deliciosas gomitas en forma de aro con un intenso y refrescante sabor a sandia.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'RINGS',
    'JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('rings-watermelon-assorted.webp'),
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content:
        'Azucar, jarabe de maiz, grenetina, acido citrico, saborizantes y colorantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  
};

const ringsNeonTemplate: ProductTemplate = {
  id: 'rings-neon-template',
  familyId: 'rings-neon',
  name: 'Rings Neon',
  productFamily: 'Rings Neon',
  subtitle: 'Gummy candy\nNeon Colors',
  description: 'Aros de gomita en tonos neon con perfil dulce y textura suave.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'RINGS',
    'JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('rings-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, pectina, concentrado de fruta y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 105. Azucares: 18g.',
    },
  ],
  
};

const ringsPeachTemplate: ProductTemplate = {
  id: 'rings-peach-template',
  familyId: 'rings-peach',
  name: 'Gummies Peach',
  productFamily: 'Gummies Peach',
  subtitle: 'Gummy candy\nFlavor: Peach',
  description: 'Aros de gomita con un dulce y jugoso sabor a durazno.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'RINGS',
    'JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('gummies-peach-assorted.webp'),
  certifications: ['SGS', 'OU Kosher'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content:
        'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de durazno.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  
};

const ringsGreenAppleTemplate: ProductTemplate = {
  id: 'rings-green-apple-template',
  familyId: 'rings-green-apple',
  name: 'Rings Green Apple',
  productFamily: 'Rings Green Apple',
  subtitle: 'Gummy candy\nFlavor: Green Apple',
  description: 'Aros de gomita con perfil frutal y un toque fresco de manzana verde.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'RINGS',
    'JOVY-SWEET-GUMMIES-Rings-Green-Apple-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('rings-green-apple-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content:
        'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de manzana.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  
};

const wormsOriginalTemplate: ProductTemplate = {
  id: 'worms-original-template',
  familyId: 'worms-original',
  name: 'Worms Original',
  productFamily: 'Worms Original',
  subtitle: 'Gummy candy\nFruit Mix',
  description: 'Gomitas tipo worm con una mezcla clasica de sabores frutales.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'WORMS',
    'JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('worms-original-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  
};

const wormsNeonTemplate: ProductTemplate = {
  id: 'worms-neon-template',
  familyId: 'worms-neon',
  name: 'Worms Neon',
  productFamily: 'Worms Neon',
  subtitle: 'Gummy candy\nNeon Fruit Mix',
  description: 'Gomitas tipo worm en combinaciones neon con perfil frutal mas intenso.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'WORMS',
    'JOVY-SWEET-GUMMIES-Worms-Neon-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('worms-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content:
        'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes frutales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.',
    },
  ],
  
};

const bearsClassicTemplate: ProductTemplate = {
  id: 'bears-classic-template',
  familyId: 'bears-classic',
  name: 'Bears Classic',
  productFamily: 'Bears Classic',
  subtitle: 'Gummy candy\n12 Flavors',
  description: 'Ositos de gomita con perfil dulce tradicional y colores surtidos.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'BEARS',
    'JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('bears-classic-assorted.webp'),
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content:
        'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes naturales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 106. Azucares: 18g.',
    },
  ],
  
};

const bearsNeonTemplate: ProductTemplate = {
  id: 'bears-neon-template',
  familyId: 'bears-neon',
  name: 'Bears Neon',
  productFamily: 'Bears Neon',
  subtitle: 'Gummy candy\nNeon Mix',
  description: 'Ositos de gomita en colores neon con perfil dulce y frutal.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'BEARS',
    'JOVY-SWEET-GUMMIES-Bears-Neon-5-lb-1-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('bears-neon-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.',
    },
  ],
  
};

const watermelonSlicesTemplate: ProductTemplate = {
  id: 'watermelon-slices-template',
  familyId: 'watermelon-slices',
  name: 'Watermelon Slices',
  productFamily: 'Watermelon Slices',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description: 'Rebanadas de sandia con textura suave y un perfil dulce refrescante.',
  image: buildCatalogProductPath(
    'sweet',
    'GUMMIES',
    'WATERMELON SLICES',
    'JOVY-SWEET-GUMMIES-Watermelon-Slices-5-lb-300x300.webp'
  ),
  bowlImage: grenetinaBowlPath('watermelon-slices-assorted.webp'),
  certifications: ['SGS', 'Halal'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.3 oz (8g)',
    piecesPerBag: 21,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  
};

const frutastikaTemplate: ProductTemplate = {
  id: 'frutastika-template',
  familyId: 'frutastika',
  name: 'Frutastika',
  productFamily: 'Frutastika',
  subtitle: 'Gummy candy\nFruit Mix',
  description:
    'Mezcla surtida de gomitas con enfoque frutal para presentaciones individuales.',
  image: buildCatalogAssetPath('100g', 'Mockup Frutastika MX 100g.webp'),
  bowlImage: grenetinaBowlPath('frutastika-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '100 g',
    bagsPerBox: 12,
    boxWeight: '1.2 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  
};

const blueSharksTemplate: ProductTemplate = {
  id: 'blue-sharks-template',
  familyId: 'blue-sharks',
  name: 'Blue Sharks',
  productFamily: 'Blue Sharks',
  subtitle: 'Gummy candy\nOcean Mix',
  description: 'Gomitas tipo tiburon con acabado brillante y perfil frutal.',
  image: buildCatalogAssetPath('100g', 'Mockup Blue Sharks Mx 100g.webp'),
  bowlImage: grenetinaBowlPath('blue-sharks-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '100 g',
    bagsPerBox: 12,
    boxWeight: '1.2 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.',
    },
  ],
  
};

const sharksMixTemplate: ProductTemplate = {
  id: 'sharks-mix-template',
  familyId: 'sharks-mix',
  name: 'Sharks Mix',
  productFamily: 'Sharks Mix',
  subtitle: 'Gummy candy\nAssorted Sharks',
  description: 'Surtido de tiburones de gomita en una presentacion de alto gramaje.',
  image: buildCatalogAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp'),
  bowlImage: grenetinaBowlPath('sharks-mix-assorted.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({
    weightPerPiece: 'Net Wt. 0.25 oz (7g)',
    piecesPerBag: 24,
    bagWeight: '1 kg',
    bagsPerBox: 10,
    boxWeight: '10 kg',
  }),
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  
};

export const gomitasGrenetinaProducts = [
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Rings Sandia MX 100g.webp'),
  }),
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Rings-Sandia-MX-141g.webp'
    ),
  }),
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Rings-Sandia-1-kg-MX-1kg-20.webp'
    ),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Rings Durazno MX 100g.webp'),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Rings-Durazno-MX-141g.webp'
    ),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Rings-Durazno-1-kg-MX-1kg-20.webp'
    ),
  }),
  createVariant(ringsNeonTemplate, {
    id: 'g-rings-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Rings Sour Neon-1kg-MX.webp'
    ),
  }),
  createVariant(ringsGreenAppleTemplate, {
    id: 'g-rings-green-apple-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Rings-Manzana-1kg-20.webp'
    ),
  }),
  createVariant(wormsOriginalTemplate, {
    id: 'g-worms-original-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Worms MX 100g.webp'),
  }),
  createVariant(wormsOriginalTemplate, {
    id: 'g-worms-original-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Worms-1kg-MX.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-50g',
    gramaje: '50 g',
    carouselImage: buildCatalogAssetPath('50g', 'Mockup Worms Neon MX 50g.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Worms Neon MX 100g.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Worms-Neon-MX-141g.webp'
    ),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Worms-Neon-1kg-MX.webp'
    ),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-50g',
    gramaje: '50 g',
    carouselImage: buildCatalogAssetPath('50g', 'Mockup Bears 12 Sabores MX 50g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Bears 12 Sabores MX 100g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath('141g', 'Mockup Bears 12 SABORES 141g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath('1kg', 'Mkup Bears 12 Sabores 1kg MX.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-50g',
    gramaje: '50 g',
    carouselImage: buildCatalogAssetPath('50g', 'Mockup Bears Neon MX 50g.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Bears Neon MX 100g.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Bears-Neon-1-kg-MX-1kg-20.webp'
    ),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-50g',
    gramaje: '50 g',
    carouselImage: buildCatalogAssetPath('50g', 'Mockup Watermelon Slices MX 50g.webp'),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Watermelon Slices MX 100g.webp'),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Watermelon-Slices-MX-141g.webp'
    ),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Watermelon-Slices-1-kg-Pouch Bag.webp'
    ),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-50g',
    gramaje: '50 g',
    carouselImage: buildCatalogAssetPath('50g', 'Mockup Frutastika MX 50g.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Frutastika MX 100g.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-141g',
    gramaje: '141 g',
    carouselImage: buildCatalogAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Frutastika-MX-141g.webp'
    ),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Frutastika-Gummies-1kg.webp'
    ),
  }),
  createVariant(blueSharksTemplate, {
    id: 'g-blue-sharks-100g',
    gramaje: '100 g',
    carouselImage: buildCatalogAssetPath('100g', 'Mockup Blue Sharks Mx 100g.webp'),
  }),
  createVariant(blueSharksTemplate, {
    id: 'g-blue-sharks-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Blue Sharks -Sabores-1kg-MX.webp'
    ),
  }),
  createVariant(sharksMixTemplate, {
    id: 'g-sharks-mix-1kg',
    gramaje: '1 kg',
    carouselImage: buildCatalogAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp'),
  }),
] as CatalogModuleProduct[];

export const gomitasGrenetinaLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'Rings-300x300.webp'),
    alt: 'Gomitas Rings',
    families: ['rings-watermelon', 'rings-neon', 'rings-peach', 'rings-green-apple'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'Worms-300x300.webp'),
    alt: 'Gomitas Worms',
    families: ['worms-original'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'Worms-Neon-300x300.webp'),
    alt: 'Gomitas Worms Neon',
    families: ['worms-neon'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'Bears-300x300.webp'),
    alt: 'Gomitas Bears',
    families: ['bears-classic'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'Bears-Neon-300x300.webp'),
    alt: 'Gomitas Bears Neon',
    families: ['bears-neon'],
  },
  {
    src: buildCatalogLogoPath('sweet', 'GUMMIES', 'LOGOS', 'watermelon_slices-300x300.webp'),
    alt: 'Gomitas Watermelon Slices',
    families: ['watermelon-slices'],
  },
  {
    src: gummiesAssortedLogo,
    alt: 'Gomitas surtidas',
    families: ['frutastika', 'blue-sharks', 'sharks-mix'],
  },
];

export const gomitasGrenetinaModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'gomitas_grenetina',
    title: 'Gomitas Grenetina',
    accent: '#00AFAA',
    products: gomitasGrenetinaProducts,
  },
  logos: gomitasGrenetinaLogoGroups,
};

export function buildGomitasGrenetina(): CatalogCategory {
  return gomitasGrenetinaModule.category;
}
