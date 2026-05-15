import type { HeroPromo } from '../types/hero.types';
import { buildMarketingHeroPath } from '@/shared/assets/publicAssets';

export const HERO_PROMOS: HeroPromo[] = [
  {
    id: 'baby-gummy-mix',
    src: buildMarketingHeroPath('baby-gummy-mix.png'),
    alt: 'Promocion de Baby Gummy Mix',
    label: 'Baby Gummy Mix',
    note: 'Gomitas mini, colores vibrantes y sabor en cada bocado.',
    backgroundColor: '#00AFAA',
    accent: '#ff8aa0',
    secondary: '#9ff3eb',
    shadow: 'rgba(255, 138, 160, 0.30)',
    imageTop: {
      mobile: '53%',
      desktop: '56%',
      xl: '55%',
      '2xl': '54%',
    },
    imageWidth: {
      mobile: 'clamp(16.75rem, 79vw, 23rem)',
      desktop: 'min(calc(49vw * var(--display-scale)), calc(36rem * var(--display-scale)))',
      xl: 'min(calc(47vw * var(--display-scale)), calc(39rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(43rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '0.2rem',
      desktop: '1.1rem',
    },
    raysAnchorTop: {
      mobile: '49%',
      desktop: '48%',
    },
  },
  {
    id: 'happy-mix-58',
    src: buildMarketingHeroPath('happy-mix-58.png'),
    alt: 'Promocion de Happy Mix 58',
    label: 'Happy Mix 58',
    note: 'Figuras y sabores surtidos con variedad y antojo al instante.',
    backgroundColor: '#00AFAA',
    accent: '#ffd166',
    secondary: '#7fd8ff',
    shadow: 'rgba(255, 209, 102, 0.30)',
    imageTop: {
      mobile: '52%',
      desktop: '54%',
      xl: '53%',
      '2xl': '52%',
    },
    imageWidth: {
      mobile: 'clamp(16.75rem, 79vw, 23rem)',
      desktop: 'min(calc(49vw * var(--display-scale)), calc(36rem * var(--display-scale)))',
      xl: 'min(calc(47vw * var(--display-scale)), calc(39rem * var(--display-scale)))',
      '2xl': 'min(calc(49vw * var(--display-scale)), calc(43rem * var(--display-scale)))',
    },
    imageOffset: {
      mobile: '-0.1rem',
      desktop: '0.2rem',
    },
    raysAnchorTop: {
      mobile: '47%',
      desktop: '46%',
    },
  },
];
