import type { HeroPromo } from '../types/hero.types';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'bears-12-flavors',
    src: '/hero/bears-12-flavors_transparent.png',
    alt: 'Promocion de ositos gummies de 12 sabores',
    label: '12 Flavors Bears',
    note: 'Una mezcla vistosa y dulce para que la promo se sienta como pieza central.',
    accent: '#ff7b62',
    secondary: '#ffe16f',
    shadow: 'rgba(255, 123, 98, 0.30)',
    imageTop: {
      mobile: '40%',
      desktop: '45%',
    },
    imageWidth: {
      mobile: 'min(92vw, 22rem)',
      desktop: 'min(48vw, 35rem)',
    },
    imageOffset: {
      mobile: '-0.35rem',
      desktop: '0.15rem',
    },
  },
  {
    id: 'peach-rings',
    src: '/hero/peach-rings_transparent.png',
    alt: 'Promocion de peach rings',
    label: 'Peach Rings',
    note: 'Aros con presencia fuerte en anaquel y una silueta perfecta para hero visual.',
    accent: '#ffae58',
    secondary: '#ffdba0',
    shadow: 'rgba(255, 174, 88, 0.30)',
    imageTop: {
      mobile: '39%',
      desktop: '46%',
    },
    imageWidth: {
      mobile: 'min(92vw, 22rem)',
      desktop: 'min(48vw, 35rem)',
    },
    imageOffset: {
      mobile: '-0.75rem',
      desktop: '0.45rem',
    },
  },
  {
    id: 'watermelon-rings',
    src: '/hero/watermerlon-rings_transparent.png',
    alt: 'Promocion de watermelon rings',
    label: 'Watermelon Rings',
    note: 'Color alto contraste y un look mas explosivo para una campana con mucho punch.',
    accent: '#ef5d73',
    secondary: '#8fe07f',
    shadow: 'rgba(239, 93, 115, 0.30)',
    imageTop: {
      mobile: '39%',
      desktop: '45%',
    },
    imageWidth: {
      mobile: 'min(92vw, 22rem)',
      desktop: 'min(48vw, 35rem)',
    },
    imageOffset: {
      mobile: '-0.6rem',
      desktop: '0.1rem',
    },
  },
];
