import type { CatalogCategory } from '../../types/catalog.types';
import type { CatalogProduct } from '../../types/catalog.types';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory';

export function buildSazonador(getProductImagePath: (categoryId: string, productName: string) => string): CatalogCategory {
  const products: CatalogProduct[] = [
    {
      id: 'p1',
      name: 'Acirrico',
      subtitle: 'Tamarind Powder\nSour & Sweet',
      description: 'Polvo saborizante intenso con tamarindo y un toque de picante.',
      image: getProductImagePath('sazonador', 'Acirrico'),
      certifications: ['SGS', 'Halal'],
      specs: createStandardSpecs({
        weightPerPiece: 'Net Wt. 0.05 oz (1.5g)',
        piecesPerBag: 40,
        bagWeight: '2 oz (56g)',
        bagsPerBox: 24,
        boxWeight: '3 lb 8 oz (1.6 kg)',
      }),
      collapsibleInfo: [
        { title: 'Ingredientes', content: 'Azucar, tamarindo deshidratado, sal yodada, acido citrico y chile.' },
        { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 5g. Calorias: 20. Azucares: 4g.' },
      ],
      gramaje: '56 g',
    },
    {
      id: 'p2',
      name: 'Limonazo',
      subtitle: 'Chamoy Powder\nSweet & Tangy',
      description: 'Polvo con aroma y sabor a chamoy, perfecto para cubrir frutas.',
      image: getProductImagePath('sazonador', 'Limonazo'),
      certifications: ['SGS'],
      specs: createStandardSpecs({
        weightPerPiece: 'Net Wt. 0.05 oz (1.5g)',
        piecesPerBag: 40,
        bagWeight: '2 oz (56g)',
        bagsPerBox: 24,
        boxWeight: '3 lb 8 oz (1.6 kg)',
      }),
      collapsibleInfo: [
        { title: 'Ingredientes', content: 'Azucar, extracto de chamoy, sal, acido citrico y colorantes.' },
        { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 5g. Calorias: 18. Azucares: 4g.' },
      ],
      gramaje: '56 g',
    },
  ];

  return {
    id: 'sazonador',
    title: 'Sazonador',
    accent: '#FF6B9D',
    products,
  };
}
