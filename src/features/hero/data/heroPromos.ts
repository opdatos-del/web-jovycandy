import type { HeroPromo } from '../types/hero.types';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'baby-gummy-mix',
    src: '/hero/baby-gummy-mix.png',
    alt: 'Promoción de Baby Gummy Mix',
    label: '',
    note: '',
    accent: '#ff8aa0',
    secondary: '#9ff3eb',
    shadow: 'rgba(255, 138, 160, 0.30)',
    imageTop: {
      mobile: '68%',
      desktop: '66%',
      xl: '66%',
      '2xl': '66%',
    },
    imageWidth: {
      mobile: 'min(96vw, 18.5rem)',
      desktop: 'min(calc(43vw * var(--display-scale)), calc(32rem * var(--display-scale)))',
      xl: 'min(calc(46vw * var(--display-scale)), calc(38.5rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(44.5rem * var(--display-scale)))',
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
    label: '',
    note: '',
    accent: '#ffd166',
    secondary: '#7fd8ff',
    shadow: 'rgba(255, 209, 102, 0.30)',
    imageTop: {
      mobile: '65%',
      desktop: '63%',
      xl: '63%',
      '2xl': '63%',
    },
    imageWidth: {
      mobile: 'min(96vw, 18.5rem)',
      desktop: 'min(calc(43vw * var(--display-scale)), calc(32rem * var(--display-scale)))',
      xl: 'min(calc(46vw * var(--display-scale)), calc(38.5rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(44.5rem * var(--display-scale)))',
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
