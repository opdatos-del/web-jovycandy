import type { CatalogNavigation } from '../types/catalog.types';

export const categoryNavigation: CatalogNavigation = {
  gummies: {
    subcategories: [
      {
        id: 'rings',
        title: 'Rings',
        productIds: ['g1', 'g2', 'g3', 'g4'],
        logo: {
          src: '/products/logos/gummies/rings.png',
          alt: 'Rings Gummies logo',
        },
      },
      {
        id: 'worms',
        title: 'Worms',
        productIds: ['g5', 'g6'],
        logo: {
          src: '/products/logos/gummies/worms-gummmies.png',
          alt: 'Worms Gummies logo',
        },
      },
      {
        id: 'bears',
        title: 'Bears',
        productIds: ['g7', 'g8'],
        logo: {
          src: '/products/logos/gummies/bears-logo.png',
          alt: 'Bears Gummies logo',
        },
      },
    ],
  },
  hard: {
    subcategories: [
      { id: 'drops', title: 'Drops', productIds: ['h1', 'h2'] },
      { id: 'mints', title: 'Mints', productIds: ['h3', 'h4'] },
    ],
  },
  chili: {
    productIds: ['c1', 'c2', 'c3'],
  },
};
