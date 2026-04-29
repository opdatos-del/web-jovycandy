import { buildCatalogBowlPath } from '@/shared/assets/publicAssets';
import type { CatalogCategory } from '../../types/catalog.types';

export function buildGomitasAlmidon(
  getProductImagePath: (type: 'Picante' | 'Dulce', categoryId: string, productName: string) => string
): CatalogCategory {
  const enchilokasBowlImage = buildCatalogBowlPath('chamoy/enchilokas-assorted.webp');

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
  };
}
