import type { HeroPromo } from '../types/hero.types';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'baby-gummy-mix',
    src: '/hero/baby-gummy-mix.png',
    alt: 'Promoción de Baby Gummy Mix',
    label: 'Baby Gummy Mix',
    note: 'Gomitas mini, colores vibrantes y sabor en cada bocado.',
    accent: '#ff8aa0',
    secondary: '#9ff3eb',
    shadow: 'rgba(255, 138, 160, 0.30)',
    imageTop: {
      mobile: '61%',
      desktop: '56%',
      xl: '55%',
      '2xl': '54%',
    },
    imageWidth: {
      mobile: 'clamp(17.5rem, 68vw, 25.5rem)',
      desktop: 'min(calc(49vw * var(--display-scale)), calc(36rem * var(--display-scale)))',
      xl: 'min(calc(47vw * var(--display-scale)), calc(39rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(43rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '0.65rem',
      desktop: '1.1rem',
    },
    raysAnchorTop: {
      mobile: '46%',
      desktop: '48%',
    },
  },
  {
    id: 'happy-mix-58',
    src: '/hero/happy-mix-58.png',
    alt: 'Promoción de Happy Mix 58',
    label: 'Happy Mix 58',
    note: 'Figuras y sabores surtidos con variedad y antojo al instante.',
    accent: '#ffd166',
    secondary: '#7fd8ff',
    shadow: 'rgba(255, 209, 102, 0.30)',
    imageTop: {
      mobile: '59%',
      desktop: '54%',
      xl: '53%',
      '2xl': '52%',
    },
    imageWidth: {
      mobile: 'clamp(17.5rem, 68vw, 25.5rem)',
      desktop: 'min(calc(49vw * var(--display-scale)), calc(36rem * var(--display-scale)))',
      xl: 'min(calc(47vw * var(--display-scale)), calc(39rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(43rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '-0.35rem',
      desktop: '0.2rem',
    },
    raysAnchorTop: {
      mobile: '44%',
      desktop: '46%',
    },
  },
];
