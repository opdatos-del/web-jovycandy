import type { CatalogData } from '../types/catalog.types';
import {
  BRAND_LOGO_PATH,
  buildCatalogBowlPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '@/shared/assets/publicAssets';
import {
  gomitasGrenetinaAltDefLogoProductsMap,
  gomitasGrenetinaAltDefLogos,
  gomitasGrenetinaAltDefProducts,
  pinateroAltDefLogoProductsMap,
  pinateroAltDefLogos,
  pinateroAltDefProducts,
} from './altDefCatalogData';

const productImageMap: Record<string, Record<string, string>> = {
  gomitas_grenetina: {
    'Rings Watermelon':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp'),
    'Rings Neon':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp'),
    'Gummies Peach':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp'),
    'Gummies Cherry':
      buildCatalogProductPath('sweet', 'GUMMIES', 'RINGS', 'JOVY-SWEET-GUMMIES-Rings-Cherry-5-lb-1-300x300.webp'),
    'Worms Original':
      buildCatalogProductPath('sweet', 'GUMMIES', 'WORMS', 'JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp'),
    'Bears Classic':
      buildCatalogProductPath('sweet', 'GUMMIES', 'BEARS', 'JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp'),
  },
  sazonador: {
    Acirrico: buildCatalogProductPath('spicy', 'POWDERS', 'Acirrico.webp'),
    Limonazo: buildCatalogProductPath('spicy', 'POWDERS', 'Limonazo.webp'),
  },
  gomitas_almidon: {
    'CHERRY SLICES 5LB':
      buildCatalogProductPath('sweet', 'JELLIES', 'CHERRY SLICES', 'JOVY-SWEET-JELLIES-CHERRY-SLICES-5-lb-300x300.webp'),
    'ORANGE SLICES':
      buildCatalogProductPath('sweet', 'JELLIES', 'ORANGE SLICES', 'JOVY-SWEET-JELLIES-Orange-Slices-5-lb-300x300.webp'),
    'ENCHILOKAS WATERMELON 150G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-5.29-oz-300x300.webp'),
    'ENCHILOKAS WATERMELON 482G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Watermelon-1-lb-1-oz-300x300.webp'),
    'ENCHILOKAS PINEAPPLE 150G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-5.29-oz-300x300.webp'),
    'ENCHILOKAS PINEAPPLE 482G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Pineapple-1-lb-1-oz-300x300.webp'),
    'ENCHILOKAS MANGO 150G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-5.29-oz-300x300.webp'),
    'ENCHILOKAS MANGO 482G':
      buildCatalogProductPath('spicy', 'JELLIES', 'JOVY-JELLIES-Enchilokas-Mango-1-lb-1-oz-300x300.webp'),
  },
  chamoy: {
    'Lollipop Cherry':
      buildCatalogProductPath('sweet', 'HARD CANDY', 'JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp'),
  },
  dulces_paletas: {
    'Mango revolcado':
      buildCatalogProductPath('spicy', 'LOLLIPOPS', 'MANGO REVOLCADO', 'JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp'),
  },
};
const chamoybearsBowlImage = buildCatalogBowlPath('chamoy-bears-assorted.webp');
const chamoyringspeachBowlImage = buildCatalogBowlPath('chamoy-rings-peach-assorted.webp');
const chamoyringswatermelonBowlImage = buildCatalogBowlPath('chamoy-rings-watermelon-assorted.webp');
const chamoywormsBowlImage = buildCatalogBowlPath('chamoy-worms-assorted.webp');
const chilirokasBowlImage = buildCatalogBowlPath('chamoy/Chilirokas-Assorted.png');
const chilirokasmangoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-mango-assorted.webp');
const chilirokastamarindoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-tamarindo-assorted.webp');
const chilirokawatermelonBowlImage = buildCatalogBowlPath('chamoy/chilirokas-watermelon-assorted.webp');
const enchilokasBowlImage = buildCatalogBowlPath('chamoy/enchilokas-assorted.webp');
const revolcaditasBowlImage = buildCatalogBowlPath('chamoy/revolcaditas-assorted.webp');
const tamarosBowlImage = buildCatalogBowlPath('chamoy/tamaros-assorted.webp');
const vallenitomangoBowlImage = buildCatalogBowlPath('chamoy/vallenito-mango-assorted.webp');
const vallenitoBowlImage = buildCatalogBowlPath('chamoy/vallenito-assorted.webp');
const vallenitowatermelonBowlImage = buildCatalogBowlPath('chamoy/vallenito-watermelon-assorted.webp');


export const categoryLogosMap: Record<string, Array<{ src: string; alt: string }>> = {
  gomitas_grenetina: gomitasGrenetinaAltDefLogos,
  sazonador: [{ src: buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp'), alt: 'Polvos Acirrico' }],
  gomitas_almidon: [
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp'), alt: 'Jellies Cherry' },
    { src: buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp'), alt: 'Jellies Orange' },
    { src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'), alt: 'Jellies Enchilokas' },
  ],
  chamoy: [
    { src: buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp'), alt: 'Dulces Fruit' },
    { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp'), alt: 'Dulces Chilirokas' },
    { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp'), alt: 'Dulces Revolcaditas' },
    { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp'), alt: 'Dulces Tamaros' },
    { src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp'), alt: 'Dulces Vallenito' },
    { src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'), alt: 'Chamoy Enchilokas' },
    {
      src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp'),
      alt: 'Chamoy Rings',
    },
    {
      src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp'),
      alt: 'Chamoy Worms',
    },
    {
      src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp'),
      alt: 'Chamoy Bears',
    },
  ],
  dulces_paletas: [{ src: buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp'), alt: 'Paletas Mango' }],
  pinatero: pinateroAltDefLogos,
};

export const categoryLogoProductsMap: Record<string, Record<string, string[]>> = {
  gomitas_grenetina: gomitasGrenetinaAltDefLogoProductsMap,
  sazonador: {
    [buildCatalogLogoPath('spicy', 'POWDERS', 'LOGOS', 'Acirrico-300x300.webp')]: ['Acirrico', 'Limonazo'],
  },
  gomitas_almidon: {
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Cherry_Slices-300x300.webp')]: ['CHERRY SLICES 5LB'],
    [buildCatalogLogoPath('sweet', 'JELLIES', 'LOGOS', 'Orange_slices-300x300.webp')]: ['ORANGE SLICES'],
    [buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp')]: ['Enchilokas'],
  },
  chamoy: {
    [buildCatalogLogoPath('sweet', 'HARD CANDY', 'LOGOS', 'Jovy_Fruit-300x300.webp')]: ['Lollipop Cherry'],
    [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp')]: ['Chilirokas'],
    [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp')]: ['Revolcaditas'],
    [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp')]: ['Tamaros'],
    [buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp')]: ['Vallenito'],
    [buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp')]: ['Enchilokas'],
    [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp')]: ['Chamoy Rings Watermelon', 'Chamoy Rings Peach'],
    [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp')]: ['Chamoy Worms'],
    [buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp')]: ['Chamoy Bears'],
  },
  dulces_paletas: {
    [buildCatalogLogoPath('spicy', 'LOLLIPOPS', 'LOGOS', 'Mango_Revolcado-300x300.webp')]: ['Mango revolcado'],
  },
  pinatero: pinateroAltDefLogoProductsMap,
};

function getProductImagePath(
  type: 'Picante' | 'Dulce',
  categoryId: string,
  productName: string
): string {
  const categoryImages = productImageMap[categoryId];

  if (categoryImages && categoryImages[productName]) {
    return categoryImages[productName];
  }

  const typeFolder = type === 'Picante' ? 'SPICY' : 'SWEET';
  const categoryFolderMap: Record<string, string> = {
    sazonador: 'POWDERS',
    gomitas_almidon: 'JELLIES',
    chamoy: 'HARD CANDY',
    dulces_paletas: 'LOLLIPOPS',
    gomitas_grenetina: 'GUMMIES',
  };
  const categoryFolder = categoryFolderMap[categoryId] || categoryId.toUpperCase();
  const productSubfolder = productName.split(' ')[0].toUpperCase();

  return BRAND_LOGO_PATH;
}

export const catalogData: CatalogData = {
  sazonador: {
    id: 'sazonador',
    title: 'Sazonador',
    accent: '#FF6B9D',
    products: [
      {
        id: 'p1',
        name: 'Acirrico',
        subtitle: 'Tamarind Powder\nSour & Sweet',
        description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
        image: getProductImagePath('Picante', 'sazonador', 'Acirrico'),
        sampleImage: getProductImagePath('Picante', 'sazonador', 'Acirrico'),
        secondaryImage: getProductImagePath('Picante', 'sazonador', 'Acirrico'),
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.05 oz (1.5g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 2 oz (56g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 3 lb 8 oz (1.6 kg)' },
        ],
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
        type: 'Picante',
      },
      {
        id: 'p2',
        name: 'Limonazo',
        subtitle: 'Chamoy Powder\nSweet & Tangy',
        description: 'Polvo con aroma y sabor a chamoy, perfecto para cubrir frutas.',
        image: getProductImagePath('Dulce', 'sazonador', 'Limonazo'),
        sampleImage: getProductImagePath('Dulce', 'sazonador', 'Limonazo'),
        secondaryImage: getProductImagePath('Dulce', 'sazonador', 'Limonazo'),
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.05 oz (1.5g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 2 oz (56g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 3 lb 8 oz (1.6 kg)' },
        ],
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
        type: 'Dulce',
      },
    ],
  },
  gomitas_almidon: {
    id: 'gomitas_almidon',
    title: 'Gomitas Almidón',
    accent: '#FF4757',
    products: [
      {
        id: 'j1',
        name: 'CHERRY SLICES 5LB',
        subtitle: 'Strawberry Jelly\nSmooth & Sweet',
        description: 'Gelatina de fresa con textura suave y sabor intenso.',
        image: getProductImagePath('Dulce', 'gomitas_almidon', 'CHERRY SLICES 5LB'),
        sampleImage: getProductImagePath('Dulce', 'gomitas_almidon', 'CHERRY SLICES 5LB'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas_almidon', 'CHERRY SLICES 5LB'),
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
          { label: 'Pieces per bag', value: '12 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
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
        type: 'Dulce',
      },
      {
        id: 'j2',
        name: 'ORANGE SLICES',
        subtitle: 'Orange Jelly\nCitrus & Sweet',
        description: 'Gelatina de naranja con sabor citrico intenso.',
        image: getProductImagePath('Dulce', 'gomitas_almidon', 'ORANGE SLICES'),
        sampleImage: getProductImagePath('Dulce', 'gomitas_almidon', 'ORANGE SLICES'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas_almidon', 'ORANGE SLICES'),
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
          { label: 'Pieces per bag', value: '12 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
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
        type: 'Dulce',
      },
      {
        id: 'j3',
        name: 'ENCHILOKAS WATERMELON 150G',
        subtitle: 'Watermelon Jelly\nSpicy & Fruity',
        description: 'Jelly enchilado sabor sandia con cubierta picante.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 150G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 150G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 150G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 5.29 oz (150g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor sandia.',
          },
        ],
        gramaje: '150 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
      {
        id: 'j4',
        name: 'ENCHILOKAS WATERMELON 482G',
        subtitle: 'Watermelon Jelly\nSpicy & Fruity',
        description: 'Jelly enchilado sabor sandia en presentacion grande.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 482G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 482G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS WATERMELON 482G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 1 lb 1 oz (482g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor sandia.',
          },
        ],
        gramaje: '482 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
      {
        id: 'j5',
        name: 'ENCHILOKAS PINEAPPLE 150G',
        subtitle: 'Pineapple Jelly\nSpicy & Tangy',
        description: 'Jelly enchilado sabor pina con perfil acidito y picante.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 150G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 150G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 150G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 5.29 oz (150g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor pina.',
          },
        ],
        gramaje: '150 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
      {
        id: 'j6',
        name: 'ENCHILOKAS PINEAPPLE 482G',
        subtitle: 'Pineapple Jelly\nSpicy & Tangy',
        description: 'Jelly enchilado sabor pina en presentacion grande.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 482G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 482G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS PINEAPPLE 482G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 1 lb 1 oz (482g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor pina.',
          },
        ],
        gramaje: '482 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
      {
        id: 'j7',
        name: 'ENCHILOKAS MANGO 150G',
        subtitle: 'Mango Jelly\nSpicy & Tropical',
        description: 'Jelly enchilado sabor mango con acabado picante.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 150G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 150G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 150G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 5.29 oz (150g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor mango.',
          },
        ],
        gramaje: '150 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
      {
        id: 'j8',
        name: 'ENCHILOKAS MANGO 482G',
        subtitle: 'Mango Jelly\nSpicy & Tropical',
        description: 'Jelly enchilado sabor mango en presentacion grande.',
        image: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 482G'),
        sampleImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 482G'),
        secondaryImage: getProductImagePath('Picante', 'gomitas_almidon', 'ENCHILOKAS MANGO 482G'),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 1 lb 1 oz (482g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor mango.',
          },
        ],
        gramaje: '482 g',
        productFamily: 'Enchilokas',
        type: 'Picante',
      },
    ],
  },
  chamoy: {
    id: 'chamoy',
    title: 'Chamoy',
    accent: '#C8102E',
    products: [
      {
        id: 'd1',
        name: 'Lollipop Cherry',
        subtitle: 'Cherry Lollipop\nClassic Hard Candy',
        description: 'Caramelos macizos con sabor intenso a cereza.',
        image: getProductImagePath('Dulce', 'chamoy', 'Lollipop Cherry'),
        sampleImage: getProductImagePath('Dulce', 'chamoy', 'Lollipop Cherry'),
        secondaryImage: getProductImagePath('Dulce', 'chamoy', 'Lollipop Cherry'),
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
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
        type: 'Dulce',
      },
      {
        id: 'd2',
        name: 'Chilirokas Assorted 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n1 lb 3 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '80 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 3 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 18 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal y chile en polvo.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 3 oz',
        type: 'Picante',
      },
      {
        id: 'd3',
        name: 'Chilirokas Assorted 5.29 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n5.29 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 5.29 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '35 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 5.29 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 7 lb 15 oz' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal y chile en polvo.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '5.29 oz',
        type: 'Picante',
      },
      {
        id: 'd4',
        name: 'Chilirokas Assorted 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd5',
        name: 'Chilirokas Mango 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Mango Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor mango en presentacion de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokasmangoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '80 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 3 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 18 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 3 oz',
        type: 'Picante',
      },
      {
        id: 'd6',
        name: 'Chilirokas Mango 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Chilirokas sabor mango en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
        bowlImage: chilirokasmangoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd7',
        name: 'Chilirokas Tamarind 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Tamarind Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor tamarindo en presentacion de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokastamarindoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '80 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 3 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 18 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 3 oz',
        type: 'Picante',
      },
      {
        id: 'd8',
        name: 'Chilirokas Tamarind 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Tamarind Hard Candy\n6 oz',
        description: 'Chilirokas sabor tamarindo en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
        bowlImage: chilirokastamarindoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd9',
        name: 'Chilirokas Watermelon 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Watermelon Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor sandia en presentacion de 1 lb 3 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokawatermelonBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '80 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 3 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 18 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 3 oz',
        type: 'Picante',
      },
      {
        id: 'd10',
        name: 'Chilirokas Watermelon 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Chilirokas sabor sandia en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
        bowlImage: chilirokawatermelonBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd11',
        name: 'Revolcaditas Assorted 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Revolcaditas surtidas en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd12',
        name: 'Revolcaditas Mango 1 lb 5 16 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Mango Hard Candy\n1 lb 5 16 oz',
        description: 'Revolcaditas sabor mango en presentacion de 1 lb 5 16 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '96 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 5 16 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 21 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 5 16 oz',
        type: 'Picante',
      },
      {
        id: 'd13',
        name: 'Revolcaditas Mango 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Revolcaditas sabor mango en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd14',
        name: 'Revolcaditas Watermelon 1 lb 5 16 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Watermelon Hard Candy\n1 lb 5 16 oz',
        description: 'Revolcaditas sabor sandia en presentacion de 1 lb 5 16 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '96 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 5 16 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 21 lb' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 5 16 oz',
        type: 'Picante',
      },
      {
        id: 'd15',
        name: 'Revolcaditas Watermelon 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Revolcaditas sabor sandia en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd16',
        name: 'Tamaros 1 lb 7 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n1 lb 7 oz',
        description: 'Tamaros en presentacion de 1 lb 7 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
          bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '100 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 7 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 22 lb 8 oz' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 7 oz',
        type: 'Picante',
      },
      {
        id: 'd17',
        name: 'Tamaros 4.9 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n4.9 oz',
        description: 'Tamaros en presentacion de 4.9 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
            bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '32 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 4.9 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 7 lb 6 oz' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '4.9 oz',
        type: 'Picante',
      },
      {
        id: 'd18',
        name: 'Tamaros 6 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n6 oz',
        description: 'Tamaros en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp'),
          bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd19',
        name: 'Vallenito Assorted 1 lb 7 oz',
        productFamily: 'Vallenito',
        subtitle: 'Assorted Hard Candy\n1 lb 7 oz',
        description: 'Vallenito surtido en presentacion de 1 lb 7 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
        bowlImage: vallenitoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '100 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 1 lb 7 oz' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 22 lb 8 oz' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '1 lb 7 oz',
        type: 'Picante',
      },
      {
        id: 'd20',
        name: 'Vallenito Assorted 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Vallenito surtido en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp'),
        bowlImage: vallenitoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd21',
        name: 'Vallenito Mango 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Vallenito sabor mango en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
        bowlImage: vallenitomangoBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
      {
        id: 'd22',
        name: 'Vallenito Watermelon 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Vallenito sabor sandia en presentacion de 6 oz.',
        image:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
        sampleImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
        secondaryImage:
          buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
        bowlImage: vallenitowatermelonBowlImage,
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.',
          },
        ],
        gramaje: '170 g',
        type: 'Picante',
      },
    ],
  },
  dulces_paletas: {
    id: 'dulces_paletas',
    title: 'Dulces y Paletas',
    accent: '#FFB500',
    products: [
      {
        id: 'pa1',
        name: 'Mango revolcado',
        subtitle: 'Watermelon Popsicle\nFresh & Sweet',
        description: 'Paleta refrescante con sabor a sandia natural.',
        image: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        sampleImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        secondaryImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 1 oz (28g)' },
          { label: 'Pieces per bag', value: '6 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, pectina, acido citrico y saborizante de sandia.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
          },
        ],
        gramaje: '170 g',
        type: 'Dulce',
      },
      {
        id: 'pa2',
        name: 'Mango revolcado',
        subtitle: 'Mango Popsicle\nTropical Flavor',
        description: 'Paleta de mango con toque tropical y sabor autentico.',
        image: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        sampleImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        secondaryImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 1 oz (28g)' },
          { label: 'Pieces per bag', value: '6 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, pectina, acido citrico y concentrado de mango.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 112. Azucares: 21g.',
          },
        ],
        gramaje: '170 g',
        type: 'Dulce',
      },
    ],
  },
  pinatero: {
    id: 'pinatero',
    title: 'Piñatero',
    accent: '#FD3B1F',
    products: pinateroAltDefProducts,
  },
  gomitas_grenetina: {
    id: 'gomitas_grenetina',
    title: 'Gomitas Grenetina',
    accent: '#00AFAA',
    products: gomitasGrenetinaAltDefProducts,
  },
};
