import type { HeroPromo } from '../types/hero.types';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'baby-gummy-mix',
    src: '/hero/baby-gummy-mix.png',
    alt: 'Promoción de Baby Gummy Mix',
    label: 'Baby Gummy Mix',
    note: 'Una mezcla colorida y juguetona para un hero con presencia inmediata y perfil más dulce.',
    accent: '#ff8aa0',
    secondary: '#9ff3eb',
    shadow: 'rgba(255, 138, 160, 0.30)',
    imageTop: {
      mobile: '41%',
      desktop: '47%',
    },
    imageWidth: {
      mobile: 'min(92vw, 22rem)',
      desktop: 'min(48vw, 34rem)',
    },
    imageOffset: {
      mobile: '0rem',
      desktop: '0.55rem',
    },
  },
  {
    id: 'happy-mix-58',
    src: '/hero/happy-mix-58.png',
    alt: 'Promoción de Happy Mix 58',
    label: 'Happy Mix 58',
    note: 'Una promo más festiva y vibrante, pensada para que el empaque se sienta como protagonista total.',
    accent: '#ffd166',
    secondary: '#7fd8ff',
    shadow: 'rgba(255, 209, 102, 0.30)',
    imageTop: {
      mobile: '40%',
      desktop: '45%',
    },
    imageWidth: {
      mobile: 'min(92vw, 22rem)',
      desktop: 'min(48vw, 34rem)',
    },
    imageOffset: {
      mobile: '-0.2rem',
      desktop: '0.2rem',
    },
  },
];
