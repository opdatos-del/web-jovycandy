import type { CatalogCategory } from '../../types/catalog.types';
import { pinateroAltDefProducts } from '../altDefCatalogData';

export function buildPinatero(): CatalogCategory {
  return {
    id: 'pinatero',
    title: 'Piñatero',
    accent: '#FD3B1F',
    products: pinateroAltDefProducts,
  };
}
