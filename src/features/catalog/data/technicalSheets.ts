import type { CatalogProduct } from '../types/catalog.types';

export type ProductTechnicalSheet = {
  src: string;
  type: 'image' | 'pdf';
  title?: string;
};

const TECHNICAL_SHEETS_ROOT = '/imagenes-alt-def';

const buildTechnicalSheetPath = (...segments: string[]) =>
  `${TECHNICAL_SHEETS_ROOT}/${segments.join('/')}`;

const technicalSheetsByProductId: Record<string, ProductTechnicalSheet> = {
  'g-rings-watermelon-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG RINGS SAND 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-rings-watermelon-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG RINGS SAND 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-rings-peach-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG RINGS DUZ 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-rings-peach-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG RINGS DUZ 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-rings-green-apple-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG RING MANZ 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-worms-original-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG WORMS 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-worms-original-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG WORMS  1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-worms-neon-50g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '50 g',
      'FICHA PEGBAG WORMS NEON 50g 24 Bolsas.webp'
    ),
    type: 'image',
  },
  'g-worms-neon-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG WORMS NEON 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-worms-neon-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG WORMS NEON 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-bears-classic-50g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '50 g',
      'FICHA PEGBAG BEARS 12 SABORES 50g 24 Bolsas.webp'
    ),
    type: 'image',
  },
  'g-bears-classic-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG BEARS 12 SAB 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-bears-classic-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG BEARS 12 SAB 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-bears-neon-50g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '50 g',
      'FICHA PEGBAG BEARS NEON 50g 12 Bolsas.webp'
    ),
    type: 'image',
  },
  'g-bears-neon-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG BEARS NEON 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-bears-neon-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG BEARS NEON 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-watermelon-slices-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG WATERMELON SLC 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-watermelon-slices-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG WATERMELON SLC 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-frutastika-50g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '50 g',
      'FICHA PEGBAG FRUTASTIKA GUMMIES SA 50g 24 Bolsas.webp'
    ),
    type: 'image',
  },
  'g-frutastika-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG FRUTASTIKA GUMMIS 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-frutastika-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG FRUTASTIKA GUMMIES 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-blue-sharks-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG BLUE SHARKS 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-blue-sharks-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG BLUE SHARKS 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-sharks-mix-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA PEGBAG SHARKS MIX 1KG 10 BOLSAS.webp'
    ),
    type: 'image',
  },
  'g-chamoy-bears-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG BEARS CHY 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-chamoy-bears-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA GOMITAS JOVY CHAMOY BEARS MX DOY PACK 1 kg_Abril 26.webp'
    ),
    type: 'image',
  },
  'g-chamoy-worms-100g': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '100g',
      'FICHA PEGBAG WORMS CHY 100g 12 bolsas.webp'
    ),
    type: 'image',
  },
  'g-chamoy-worms-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA GOMITAS JOVY CHAMOY WORMS MX DOY PACK 1 kg_Abril 26.webp'
    ),
    type: 'image',
  },
  'g-chamoy-rings-watermelon-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA GOMITAS JOVY CHAMOY RINGS SANDIA MX DOY PACK 1 kg_Abril 26.webp'
    ),
    type: 'image',
  },
  'g-chamoy-rings-peach-1kg': {
    src: buildTechnicalSheetPath(
      'Fichas t\u00e9cnicas',
      '1KG',
      'FICHA GOMITAS JOVY CHAMOY RINGS DURAZNO MX DOY PACK 1 kg_Abril 26.webp'
    ),
    type: 'image',
  },
  'pi-happy-mix-2-26kg': {
    src: buildTechnicalSheetPath('USA', 'Pi\u00f1ateros Usa Jovy.pdf'),
    type: 'pdf',
  },
  'pi-happy-mix-5kg': {
    src: buildTechnicalSheetPath('USA', 'Pi\u00f1ateros Usa Jovy.pdf'),
    type: 'pdf',
  },
  'pi-revolcados-mix-2-26kg': {
    src: buildTechnicalSheetPath('USA', 'Pi\u00f1ateros Usa Jovy.pdf'),
    type: 'pdf',
  },
  'pi-revolcados-mix-5kg': {
    src: buildTechnicalSheetPath('USA', 'Pi\u00f1ateros Usa Jovy.pdf'),
    type: 'pdf',
  },
  'pi-premium-mix-5kg': {
    src: buildTechnicalSheetPath('USA', 'Pi\u00f1ateros Usa Jovy.pdf'),
    type: 'pdf',
  },
  pa1: {
    src: buildTechnicalSheetPath('USA', 'Paletas Usa Jovy.pdf'),
    type: 'pdf',
  },
  pa2: {
    src: buildTechnicalSheetPath('USA', 'Paletas Usa Jovy.pdf'),
    type: 'pdf',
  },
};

export const getProductTechnicalSheet = (
  product: CatalogProduct
): ProductTechnicalSheet | null => technicalSheetsByProductId[product.id] ?? null;
