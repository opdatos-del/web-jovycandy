import type { CatalogCategory } from '../../types/catalog.types';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory';

export function buildGomitasAlmidon(
  getProductImagePath: (categoryId: string, productName: string) => string
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
        image: getProductImagePath('gomitas_almidon', 'CHERRY SLICES 5LB'),
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
      },
      {
        id: 'j2',
        name: 'ORANGE SLICES',
        subtitle: 'Orange Jelly\nCitrus & Sweet',
        description: 'Gelatina de naranja con sabor citrico intenso.',
        image: getProductImagePath('gomitas_almidon', 'ORANGE SLICES'),
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
            content:
              'Azucar, jarabe de maiz, pectina, acido citrico y aceite esencial de naranja.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
          },
        ],
        gramaje: '170 g',
      },
      {
        id: 'j3',
        name: 'FRUIT ASSORTED SLICES',
        subtitle: 'Fruit Jelly\nAssorted Slices',
        description: 'Gelatina surtida de frutas con un perfil suave y clasico.',
        image: getProductImagePath('gomitas_almidon', 'FRUIT ASSORTED SLICES'),
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
      },
      {
        id: 'j4',
        name: 'GUM DROPS',
        subtitle: 'Gum Drops\nSweet Jelly Mix',
        description: 'Clasicos gum drops de textura suave y sabor dulce.',
        image: getProductImagePath('gomitas_almidon', 'GUM DROPS'),
        sampleImage: getProductImagePath('gomitas_almidon', 'GUM DROPS'),
        secondaryImage: getProductImagePath('gomitas_almidon', 'GUM DROPS'),
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
      },
      {
        id: 'j5',
        name: 'SPICE DROPS',
        subtitle: 'Spice Drops\nSweet Heat Jelly',
        description: 'Gomitas tipo jelly con acabado especiado y toque dulce.',
        image: getProductImagePath('gomitas_almidon', 'SPICE DROPS'),
        sampleImage: getProductImagePath('gomitas_almidon', 'SPICE DROPS'),
        secondaryImage: getProductImagePath('gomitas_almidon', 'SPICE DROPS'),
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
      },
      {
        id: 'j6',
        name: 'SPEARMINT LEAVES',
        subtitle: 'Spearmint Leaves\nFresh Jelly',
        description: 'Hojas de menta dulce con perfil fresco y clasico.',
        image: getProductImagePath('gomitas_almidon', 'SPEARMINT LEAVES'),
        sampleImage: getProductImagePath('gomitas_almidon', 'SPEARMINT LEAVES'),
        secondaryImage: getProductImagePath('gomitas_almidon', 'SPEARMINT LEAVES'),
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
      },
      {
        id: 'j7',
        name: 'CHERRY JELLY SOUR',
        subtitle: 'Cherry Jelly\nSour Candy',
        description: 'Gelatina de cereza con perfil agrio y dulce.',
        image: getProductImagePath('gomitas_almidon', 'CHERRY JELLY SOUR'),
        sampleImage: getProductImagePath('gomitas_almidon', 'CHERRY JELLY SOUR'),
        secondaryImage: getProductImagePath('gomitas_almidon', 'CHERRY JELLY SOUR'),
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
      },
    ],
  };
}
