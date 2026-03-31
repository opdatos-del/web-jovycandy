import type { HeroBackgroundRow } from '../types/hero.types';

export const HERO_AUTOPLAY_INTERVAL_MS = 3600;

export const HERO_BACKGROUND_COPY = 'NUEVO PRODUCTO NUEVO PRODUCTO NUEVO PRODUCTO';

export const HERO_BACKGROUND_ROWS: HeroBackgroundRow[] = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  offsetClass: index % 2 === 0 ? '-translate-x-[6%]' : 'translate-x-[4%]',
}));

export const HERO_STAGE_ENTRY_Y = 34;
export const HERO_INTRO_ENTRY_Y = 22;
export const HERO_IMAGE_ENTRY_Y = 36;
export const HERO_IMAGE_FLOAT_Y = 6;
export const HERO_IMAGE_SWITCH_OUT_Y = 38;
export const HERO_IMAGE_SWITCH_IN_Y = 54;
export const HERO_IMAGE_BLUR = 'blur(8px)';
export const HERO_IMAGE_CLEAR = 'blur(0px)';
