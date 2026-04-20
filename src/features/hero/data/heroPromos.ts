import type { HeroPromo } from '../types/hero.types';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'baby-gummy-mix',
    src: '/hero/baby-gummy-mix.png',
    alt: 'Promoción de Baby Gummy Mix',
    label: 'Nuevo lanzamiento',
    note: 'Sabor, color y actitud en un empaque que roba miradas desde el primer scroll.',
    accent: '#ff8aa0',
    secondary: '#9ff3eb',
    shadow: 'rgba(255, 138, 160, 0.30)',
    imageTop: {
      mobile: '69%',
      desktop: '64%',
      xl: '62%',
      '2xl': '60%',
    },
    imageWidth: {
      mobile: 'clamp(22rem, 88vw, 34rem)',
      desktop: 'min(calc(58vw * var(--display-scale)), calc(42rem * var(--display-scale)))',
      xl: 'min(calc(56vw * var(--display-scale)), calc(44rem * var(--display-scale)))',
      '2xl': 'min(calc(58vw * var(--display-scale)), calc(50rem * var(--display-scale)))',
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
    label: 'Edicion especial',
    note: 'Una mezcla divertida y explosiva para que el producto sea el protagonista del hero.',
    accent: '#ffd166',
    secondary: '#7fd8ff',
    shadow: 'rgba(255, 209, 102, 0.30)',
    imageTop: {
      mobile: '66%',
      desktop: '61%',
      xl: '59%',
      '2xl': '57%',
    },
    imageWidth: {
      mobile: 'clamp(22rem, 88vw, 34rem)',
      desktop: 'min(calc(58vw * var(--display-scale)), calc(42rem * var(--display-scale)))',
      xl: 'min(calc(56vw * var(--display-scale)), calc(44rem * var(--display-scale)))',
      '2xl': 'min(calc(58vw * var(--display-scale)), calc(50rem * var(--display-scale)))',
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
