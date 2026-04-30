import type { CatalogCategory } from '../../types/catalog.types';
import type { CatalogProduct } from '../../types/catalog.types';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory';

export function buildDulcesPaletas(getProductImagePath: (categoryId: string, productName: string) => string): CatalogCategory {
  const products: CatalogProduct[] = [
    {
      id: 'm0',
      name: 'Lollipop Cherry',
      subtitle: 'Cherry Lollipop\nClassic Hard Candy',
      description: 'Caramelos macizos con sabor intenso a cereza.',
      image: getProductImagePath('dulces_paletas', 'Lollipop Cherry'),
      certifications: ['SGS', 'OU Kosher'],
      specs: createStandardSpecs({
        weightPerPiece: 'Net Wt. 0.15 oz (4g)',
        piecesPerBag: 40,
        bagWeight: '6 oz (170g)',
        bagsPerBox: 24,
        boxWeight: '8 lb 13 oz (4.08 kg)',
      }),
      collapsibleInfo: [
        { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido malico y saborizante de cereza.' },
        { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
      ],
      gramaje: '170 g',
    },
    {
      id: 'm1',
      name: 'Mango revolcado',
      subtitle: 'Mango revolcado\nPaleta',
      description: 'Paleta con chamoy y chile.',
      image: getProductImagePath('dulces_paletas', 'Mango revolcado'),
      certifications: ['SGS'],
      specs: [],
      collapsibleInfo: [],
      gramaje: '5.29 oz',
    },
  ];

  return {
    id: 'dulces_paletas',
    title: 'Dulces y Paletas',
    accent: '#FFB84D',
    products,
  };
}
