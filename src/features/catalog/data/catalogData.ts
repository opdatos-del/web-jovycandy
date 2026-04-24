import type { CatalogData } from '../types/catalog.types';
import {
  gomitasAltDefLogoProductsMap,
  gomitasAltDefLogos,
  gomitasAltDefProducts,
  pinateroAltDefLogoProductsMap,
  pinateroAltDefLogos,
  pinateroAltDefProducts,
} from './altDefCatalogData';

const productImageMap: Record<string, Record<string, string>> = {
  gomitas: {
    'Rings Watermelon':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp',
    'Rings Neon':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp',
    'Gummies Peach':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp',
    'Gummies Cherry':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Cherry-5-lb-1-300x300.webp',
    'Worms Original':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/WORMS/JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp',
    'Bears Classic':
      '/WEBP PRODUCTOS/SWEET/GUMMIES/BEARS/JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp',
  },
  polvos: {
    Acirrico: '/WEBP PRODUCTOS/SPICY/POWDERS/Acirrico.webp',
    Limonazo: '/WEBP PRODUCTOS/SPICY/POWDERS/Limonazo.webp',
  },
  jellies: {
    'CHERRY SLICES 5LB':
      '/WEBP PRODUCTOS/SWEET/JELLIES/CHERRY SLICES/JOVY-SWEET-JELLIES-CHERRY-SLICES-5-lb-300x300.webp',
    'ORANGE SLICES':
      '/WEBP PRODUCTOS/SWEET/JELLIES/ORANGE SLICES/JOVY-SWEET-JELLIES-Orange-Slices-5-lb-300x300.webp',
  },
  dulces: {
    'Lollipop Cherry':
      '/WEBP PRODUCTOS/SWEET/HARD CANDY/JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp',
  },
  paletas: {
    'Mango revolcado':
      '/WEBP PRODUCTOS/SPICY/LOLLIPOPS/MANGO REVOLCADO/JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp',
  },
};

export const categoryLogosMap: Record<string, Array<{ src: string; alt: string }>> = {
  gomitas: gomitasAltDefLogos,
  polvos: [{ src: '/WEBP PRODUCTOS/SPICY/POWDERS/LOGOS/Acirrico-300x300.webp', alt: 'Polvos Acirrico' }],
  jellies: [
    { src: '/WEBP PRODUCTOS/SWEET/JELLIES/LOGOS/Cherry_Slices-300x300.webp', alt: 'Jellies Cherry' },
    { src: '/WEBP PRODUCTOS/SWEET/JELLIES/LOGOS/Orange_slices-300x300.webp', alt: 'Jellies Orange' },
  ],
  dulces: [
    { src: '/WEBP PRODUCTOS/SWEET/HARD CANDY/LOGOS/Jovy_Fruit-300x300.webp', alt: 'Dulces Fruit' },
    { src: '/WEBP PRODUCTOS/SPICY/HARD CANDY/LOGOS/chillirokas-300x300.webp', alt: 'Dulces Chilirokas' },
    { src: '/WEBP PRODUCTOS/SPICY/HARD CANDY/LOGOS/Revolcaditas-300x300.webp', alt: 'Dulces Revolcaditas' },
    { src: '/WEBP PRODUCTOS/SPICY/HARD CANDY/LOGOS/Tamaros-300x300.webp', alt: 'Dulces Tamaros' },
    { src: '/WEBP PRODUCTOS/SPICY/HARD CANDY/LOGOS/Vallenito-300x300.webp', alt: 'Dulces Vallenito' },
  ],
  paletas: [{ src: '/WEBP PRODUCTOS/SPICY/LOLLIPOPS/LOGOS/Mango_Revolcado-300x300.webp', alt: 'Paletas Mango' }],
  pinatero: pinateroAltDefLogos,
};

export const categoryLogoProductsMap: Record<string, Record<string, string[]>> = {
  gomitas: gomitasAltDefLogoProductsMap,
  polvos: {
    'Acirrico-300x300.webp': ['Acirrico', 'Limonazo'],
  },
  jellies: {
    'Cherry_Slices-300x300.webp': ['CHERRY SLICES 5LB'],
    'Orange_slices-300x300.webp': ['ORANGE SLICES'],
  },
  dulces: {
    'Jovy_Fruit-300x300.webp': ['Lollipop Cherry'],
    'chillirokas-300x300.webp': ['Chilirokas'],
    'Revolcaditas-300x300.webp': ['Revolcaditas'],
    'Tamaros-300x300.webp': ['Tamaros'],
    'Vallenito-300x300.webp': ['Vallenito'],
  },
  paletas: {
    'Mango_Revolcado-300x300.webp': ['Mango revolcado'],
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
    polvos: 'POWDERS',
    jellies: 'JELLIES',
    dulces: 'HARD CANDY',
    paletas: 'LOLLIPOPS',
    gomitas: 'GUMMIES',
  };
  const categoryFolder = categoryFolderMap[categoryId] || categoryId.toUpperCase();
  const productSubfolder = productName.split(' ')[0].toUpperCase();

  return `/WEBP PRODUCTOS/${typeFolder}/${categoryFolder}/${productSubfolder}/placeholder.webp`;
}

export const catalogData: CatalogData = {
  polvos: {
    id: 'polvos',
    title: 'Polvos',
    accent: '#FF6B9D',
    products: [
      {
        id: 'p1',
        name: 'Acirrico',
        subtitle: 'Tamarind Powder\nSour & Sweet',
        description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
        image: getProductImagePath('Picante', 'polvos', 'Acirrico'),
        sampleImage: getProductImagePath('Picante', 'polvos', 'Acirrico'),
        secondaryImage: getProductImagePath('Picante', 'polvos', 'Acirrico'),
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
        image: getProductImagePath('Dulce', 'polvos', 'Limonazo'),
        sampleImage: getProductImagePath('Dulce', 'polvos', 'Limonazo'),
        secondaryImage: getProductImagePath('Dulce', 'polvos', 'Limonazo'),
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
  jellies: {
    id: 'jellies',
    title: 'Jellies',
    accent: '#FF4757',
    products: [
      {
        id: 'j1',
        name: 'CHERRY SLICES 5LB',
        subtitle: 'Strawberry Jelly\nSmooth & Sweet',
        description: 'Gelatina de fresa con textura suave y sabor intenso.',
        image: getProductImagePath('Dulce', 'jellies', 'CHERRY SLICES 5LB'),
        sampleImage: getProductImagePath('Dulce', 'jellies', 'CHERRY SLICES 5LB'),
        secondaryImage: getProductImagePath('Dulce', 'jellies', 'CHERRY SLICES 5LB'),
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
        image: getProductImagePath('Dulce', 'jellies', 'ORANGE SLICES'),
        sampleImage: getProductImagePath('Dulce', 'jellies', 'ORANGE SLICES'),
        secondaryImage: getProductImagePath('Dulce', 'jellies', 'ORANGE SLICES'),
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
    ],
  },
  dulces: {
    id: 'dulces',
    title: 'Dulces',
    accent: '#C8102E',
    products: [
      {
        id: 'd1',
        name: 'Lollipop Cherry',
        subtitle: 'Cherry Lollipop\nClassic Hard Candy',
        description: 'Caramelos macizos con sabor intenso a cereza.',
        image: getProductImagePath('Dulce', 'dulces', 'Lollipop Cherry'),
        sampleImage: getProductImagePath('Dulce', 'dulces', 'Lollipop Cherry'),
        secondaryImage: getProductImagePath('Dulce', 'dulces', 'Lollipop Cherry'),
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/CHILIROKAS/JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/REVOLCADITAS/JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp',
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
        image: '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/TÁMAROS/JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp',
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
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp',
        sampleImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp',
        secondaryImage:
          '/WEBP PRODUCTOS/SPICY/HARD CANDY/VALLENITO/JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp',
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
  paletas: {
    id: 'paletas',
    title: 'Paletas',
    accent: '#FFB500',
    products: [
      {
        id: 'pa1',
        name: 'Mango revolcado',
        subtitle: 'Watermelon Popsicle\nFresh & Sweet',
        description: 'Paleta refrescante con sabor a sandia natural.',
        image: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
        sampleImage: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
        secondaryImage: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
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
        image: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
        sampleImage: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
        secondaryImage: getProductImagePath('Dulce', 'paletas', 'Mango revolcado'),
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
  gomitas: {
    id: 'gomitas',
    title: 'Gomitas',
    accent: '#00AFAA',
    products: gomitasAltDefProducts,
  },
};
