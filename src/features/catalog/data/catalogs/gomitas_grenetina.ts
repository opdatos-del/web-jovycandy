import type { CatalogCategory } from '../../types/catalog.types';
import { gomitasGrenetinaAltDefProducts } from '../altDefCatalogData';

export function buildGomitasGrenetina(): CatalogCategory {
  return {
    id: 'gomitas_grenetina',
    title: 'Gomitas Grenetina',
    accent: '#00AFAA',
    products: gomitasGrenetinaAltDefProducts,
  };
}
