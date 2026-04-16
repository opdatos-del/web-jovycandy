import type { CatalogData } from '../types/catalog.types';

/**
 * Mapping of products to their WebP image files
 * Explicitly map each product to the correct image in WEBP PRODUCTOS structure
 * Note: Maps to actual files that exist in the public folder
 */
const productImageMap: Record<string, Record<string, string>> = {
  gomitas: {
    'Rings Watermelon': '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp',
    'Rings Neon': '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp',
    'Gummies Peach': '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp',
    'Gummies Cherry': '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Cherry-5-lb-1-300x300.webp',
    'Worms Original': '/WEBP PRODUCTOS/SWEET/GUMMIES/WORMS/JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp',
    'Bears Classic': '/WEBP PRODUCTOS/SWEET/GUMMIES/BEARS/JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp',
  },
  polvos: {
    'Powder Tamarind': '/WEBP PRODUCTOS/SPICY/POWDERS/Acirrico.webp',
    'Powder Chamoy': '/WEBP PRODUCTOS/SPICY/POWDERS/Limonazo.webp',
  },
  jellies: {
    'Jelly Strawberry': '/WEBP PRODUCTOS/SWEET/JELLIES/CHERRY SLICES/JOVY-SWEET-JELLIES-CHERRY-SLICES-5-lb-300x300.webp',
    'Jelly Orange': '/WEBP PRODUCTOS/SWEET/JELLIES/ORANGE SLICES/JOVY-SWEET-JELLIES-Orange-Slices-5-lb-300x300.webp',
  },
  dulces: {
    'Lollipop Cherry': '/WEBP PRODUCTOS/SWEET/HARD CANDY/JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp',
    'Lollipop Lemon': '/WEBP PRODUCTOS/SWEET/HARD CANDY/JOVY-SWEET-HARD-CANDY-Jovy-Fruit-6-oz-300x300.webp',
  },
  paletas: {
    'Paleta Watermelon': '/WEBP PRODUCTOS/SPICY/LOLLIPOPS/MANGO REVOLCADO/JOVY-LOLLIPOP-Mango-Revolcado-5.29-oz-300x300.webp',
    'Paleta Mango': '/WEBP PRODUCTOS/SPICY/LOLLIPOPS/MANGO REVOLCADO/JOVY-LOLLIPOP-Mango-Revolcado-6-oz-300x300.webp',
  },
  pinatero: {
    'Piñatero Mix': '/WEBP PRODUCTOS/SPICY/PIÑATERO/HAPPY MIX/JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp',
    'Piñatero Dulce Picante': '/WEBP PRODUCTOS/SPICY/PIÑATERO/HAPPY MIX/JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp',
  },
};

/**
 * Helper function to get product image path from the mapping
 * Falls back to a default path if product not found
 */
function getProductImagePath(
  type: 'Picante' | 'Dulce',
  categoryId: string,
  productName: string
): string {
  // Try to get from explicit mapping first
  const categoryImages = productImageMap[categoryId];
  if (categoryImages && categoryImages[productName]) {
    return categoryImages[productName];
  }
  
  // Fallback path construction if not in map
  const typeFolder = type === 'Picante' ? 'SPICY' : 'SWEET';
  const categoryFolderMap: Record<string, string> = {
    polvos: 'POWDERS',
    jellies: 'JELLIES',
    dulces: 'HARD CANDY',
    paletas: 'LOLLIPOPS',
    pinatero: 'PIÑATERO',
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
        name: 'Powder Tamarind',
        subtitle: 'Tamarind Powder\nSour & Sweet',
        description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
        image: getProductImagePath('Picante', 'polvos', 'Powder Tamarind'),
        sampleImage: getProductImagePath('Picante', 'polvos', 'Powder Tamarind'),
        secondaryImage: getProductImagePath('Picante', 'polvos', 'Powder Tamarind'),
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
            content: 'Azúcar, tamarindo deshidratado, sal yodada, ácido cítrico y chile.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 5g. Calorías: 20. Azúcares: 4g.',
          },
        ],
        gramaje: '0.06kg',
        type: 'Picante',
      },
      {
        id: 'p2',
        name: 'Powder Chamoy',
        subtitle: 'Chamoy Powder\nSweet & Tangy',
        description: 'Polvo con aroma y sabor a chamoy, perfecto para cubrir frutas.',
        image: getProductImagePath('Dulce', 'polvos', 'Powder Chamoy'),
        sampleImage: getProductImagePath('Dulce', 'polvos', 'Powder Chamoy'),
        secondaryImage: getProductImagePath('Dulce', 'polvos', 'Powder Chamoy'),
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
            content: 'Azúcar, extracto de chamoy, sal, ácido cítrico y colorantes.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 5g. Calorías: 18. Azúcares: 4g.',
          },
        ],
        gramaje: '0.06kg',
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
        name: 'Jelly Strawberry',
        subtitle: 'Strawberry Jelly\nSmooth & Sweet',
        description: 'Gelatina de fresa con textura suave y sabor intenso.',
        image: getProductImagePath('Dulce', 'jellies', 'Jelly Strawberry'),
        sampleImage: getProductImagePath('Dulce', 'jellies', 'Jelly Strawberry'),
        secondaryImage: getProductImagePath('Dulce', 'jellies', 'Jelly Strawberry'),
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
            content: 'Azúcar, jarabe de maíz, pectina, ácido cítrico y saborizante de fresa.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'j2',
        name: 'Jelly Orange',
        subtitle: 'Orange Jelly\nCitrus Flavor',
        description: 'Gelatina de naranja con sabor cítrico refrescante.',
        image: getProductImagePath('Dulce', 'jellies', 'Jelly Orange'),
        sampleImage: getProductImagePath('Dulce', 'jellies', 'Jelly Orange'),
        secondaryImage: getProductImagePath('Dulce', 'jellies', 'Jelly Orange'),
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
            content: 'Azúcar, jarabe de maíz, pectina, ácido cítrico y aceite esencial de naranja.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 108. Azúcares: 19g.',
          },
        ],
        gramaje: '0.17kg',
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
            content: 'Azúcar, jarabe de maíz, ácido málico y saborizante de cereza.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 60. Azúcares: 12g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'd2',
        name: 'Lollipop Lemon',
        subtitle: 'Lemon Lollipop\nSour & Sweet',
        description: 'Caramelo de limón con un toque ácido agradable.',
        image: getProductImagePath('Dulce', 'dulces', 'Lollipop Lemon'),
        sampleImage: getProductImagePath('Dulce', 'dulces', 'Lollipop Lemon'),
        secondaryImage: getProductImagePath('Dulce', 'dulces', 'Lollipop Lemon'),
        certifications: ['SGS', 'OU Kosher', 'Halal'],
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
            content: 'Azúcar, jarabe de maíz, ácido cítrico y aceite esencial de limón.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 60. Azúcares: 12g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
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
        name: 'Paleta Watermelon',
        subtitle: 'Watermelon Popsicle\nFresh & Sweet',
        description: 'Paleta refrescante con sabor a sandía natural.',
        image: getProductImagePath('Dulce', 'paletas', 'Paleta Watermelon'),
        sampleImage: getProductImagePath('Dulce', 'paletas', 'Paleta Watermelon'),
        secondaryImage: getProductImagePath('Dulce', 'paletas', 'Paleta Watermelon'),
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
            content: 'Azúcar, jarabe de maíz, pectina, ácido cítrico y saborizante de sandía.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'pa2',
        name: 'Paleta Mango',
        subtitle: 'Mango Popsicle\nTropical Flavor',
        description: 'Paleta de mango con toque tropical y sabor auténtico.',
        image: getProductImagePath('Dulce', 'paletas', 'Paleta Mango'),
        sampleImage: getProductImagePath('Dulce', 'paletas', 'Paleta Mango'),
        secondaryImage: getProductImagePath('Dulce', 'paletas', 'Paleta Mango'),
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
            content: 'Azúcar, jarabe de maíz, pectina, ácido cítrico y concentrado de mango.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 112. Azúcares: 21g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
    ],
  },
  pinatero: {
    id: 'pinatero',
    title: 'Piñatero',
    accent: '#FD3B1F',
    products: [
      {
        id: 'pi1',
        name: 'Piñatero Mix',
        subtitle: 'Assorted Mix\nMulti Flavor',
        description: 'Surtido de dulces muy variados con sabores tradicionales.',
        image: getProductImagePath('Dulce', 'pinatero', 'Piñatero Mix'),
        sampleImage: getProductImagePath('Dulce', 'pinatero', 'Piñatero Mix'),
        secondaryImage: getProductImagePath('Dulce', 'pinatero', 'Piñatero Mix'),
        certifications: ['SGS'],
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
            content: 'Mezcla de caramelos con azúcar, jarabe de maíz y saborizantes variados.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 115. Azúcares: 21g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'pi2',
        name: 'Piñatero Dulce Picante',
        subtitle: 'Sweet & Spicy Mix\nBalanced Heat',
        description: 'Mix especial de dulces y picantes para piñateros tradicionales.',
        image: getProductImagePath('Picante', 'pinatero', 'Piñatero Dulce Picante'),
        sampleImage: getProductImagePath('Picante', 'pinatero', 'Piñatero Dulce Picante'),
        secondaryImage: getProductImagePath('Picante', 'pinatero', 'Piñatero Dulce Picante'),
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
            content: 'Mezcla de caramelos dulces y picantes con saborizantes naturales.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Picante',
      },
    ],
  },
  gomitas: {
    id: 'gomitas',
    title: 'Gomitas',
    accent: '#D4AF37',
    products: [
      {
        id: 'g1',
        name: 'Rings Watermelon',
        subtitle: 'Gummy candy\nFlavor: Watermelon',
        description: 'Deliciosas gomitas en forma de aro con un intenso y refrescante sabor a sandía.',
        image: getProductImagePath('Dulce', 'gomitas', 'Rings Watermelon'),
        sampleImage: getProductImagePath('Dulce', 'gomitas', 'Rings Watermelon'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Rings Watermelon'),
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico, saborizantes y colorantes.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'g2',
        name: 'Rings Neon',
        subtitle: 'Gummy candy\nNeón Colors',
        description: 'Aros de gomita en tonos neón con perfil dulce y textura suave.',
        image: getProductImagePath('Dulce', 'gomitas', 'Rings Neon'),
        sampleImage: getProductImagePath('Dulce', 'gomitas', 'Rings Neon'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Rings Neon'),
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, pectina, concentrado de fruta y ácido cítrico.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 105. Azúcares: 18g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'g3',
        name: 'Gummies Peach',
        subtitle: 'Gummy candy\nFlavor: Peach',
        description: 'Aros de gomita con un dulce y jugoso sabor a durazno.',
        image: getProductImagePath('Dulce', 'gomitas', 'Gummies Peach'),
        sampleImage: getProductImagePath('Dulce', 'gomitas', 'Gummies Peach'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Gummies Peach'),
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizante de durazno.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'g4',
        name: 'Gummies Cherry',
        subtitle: 'Gummy candy\nFlavor: Cherry',
        description: 'Aros de gomita espolvoreados con un intenso sabor a cereza.',
        image: getProductImagePath('Dulce', 'gomitas', 'Gummies Cherry'),
        sampleImage: getProductImagePath('Dulce', 'gomitas', 'Gummies Cherry'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Gummies Cherry'),
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizante de cereza.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 21g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'g5',
        name: 'Worms Original',
        subtitle: 'Gummy candy\nFruit Mix',
        description: 'Gomitas tipo worm con una mezcla clásica de sabores frutales.',
        image: getProductImagePath('Dulce', 'gomitas', 'Worms Original'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Worms Original'),
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizantes.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 108. Azúcares: 19g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
      {
        id: 'g6',
        name: 'Bears Classic',
        subtitle: 'Gummy candy\nAssorted Fruit',
        description: 'Ositos de gomita con perfil dulce tradicional y colores surtidos.',
        image: getProductImagePath('Dulce', 'gomitas', 'Bears Classic'),
        secondaryImage: getProductImagePath('Dulce', 'gomitas', 'Bears Classic'),
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
          { label: 'Pieces per bag', value: '24 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizantes naturales.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 106. Azúcares: 18g.',
          },
        ],
        gramaje: '0.17kg',
        type: 'Dulce',
      },
    ],
  },
};

