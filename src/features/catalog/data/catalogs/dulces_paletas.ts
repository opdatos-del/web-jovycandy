import type { CatalogCategory } from '../../types/catalog.types';
import type { CatalogProduct } from '../../types/catalog.types';

export function buildDulcesPaletas(getProductImagePath: (type: 'Picante' | 'Dulce', categoryId: string, productName: string) => string): CatalogCategory {
  const products: CatalogProduct[] = [
    {
      id: 'm1',
      name: 'Mango revolcado',
      subtitle: 'Mango revolcado\nPaleta',
      description: 'Paleta con chamoy y chile.',
      image: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
      sampleImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
      secondaryImage: getProductImagePath('Dulce', 'dulces_paletas', 'Mango revolcado'),
      certifications: ['SGS'],
      specs: [],
      collapsibleInfo: [],
      gramaje: '5.29 oz',
      type: 'Picante',
    },
  ];

  return {
    id: 'dulces_paletas',
    title: 'Dulces y Paletas',
    accent: '#FFB84D',
    products,
  };
}
