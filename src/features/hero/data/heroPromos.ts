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
      mobile: '49%',
      desktop: '48.5%',
      xl: '48.5%',
      '2xl': '48.5%',
    },
    imageWidth: {
      mobile: 'min(96vw, 23rem)',
      desktop: 'min(calc(54vw * var(--display-scale)), calc(40rem * var(--display-scale)))',
      xl: 'min(calc(58vw * var(--display-scale)), calc(48rem * var(--display-scale)))',
      '2xl': 'min(calc(62vw * var(--display-scale)), calc(56rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '1.15rem',
      desktop: '1.1rem',
    },
    raysAnchorTop: {
      mobile: '48%',
      desktop: '48%',
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
      mobile: '46%',
      desktop: '45%',
      xl: '45%',
      '2xl': '45%',
    },
    imageWidth: {
      mobile: 'min(96vw, 23rem)',
      desktop: 'min(calc(54vw * var(--display-scale)), calc(40rem * var(--display-scale)))',
      xl: 'min(calc(58vw * var(--display-scale)), calc(48rem * var(--display-scale)))',
      '2xl': 'min(calc(62vw * var(--display-scale)), calc(56rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '-0.05rem',
      desktop: '0.2rem',
    },
    raysAnchorTop: {
      mobile: '46%',
      desktop: '46%',
    },
  },
];
