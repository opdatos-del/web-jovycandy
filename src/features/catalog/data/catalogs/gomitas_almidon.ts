import type { CatalogCategory } from '../../types/catalog.types';

export function buildGomitasAlmidon(
  getProductImagePath: (type: 'Picante' | 'Dulce', categoryId: string, productName: string) => string
): CatalogCategory {
  return {
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
            content:
              'Azucar, jarabe de maiz, pectina, acido citrico y aceite esencial de naranja.',
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
  };
}
