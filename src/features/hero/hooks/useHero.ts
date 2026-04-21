import { HERO_PROMOS } from '../data/heroPromos';
import type { UseHeroResult } from '../types/hero.types';
import { useHeroAnimations } from './useHeroAnimations';
import { useHeroAutoplay } from './useHeroAutoplay';

export const useHero = (): UseHeroResult => {
  const promos = HERO_PROMOS;
  const activeIndex = useHeroAutoplay(promos.length);
  const { refs, setImageRef } = useHeroAnimations(promos, activeIndex);
  const activePromo = promos[activeIndex] ?? promos[0];

  return {
    activeIndex,
    activePromo,
    promos,
    refs,
    setImageRef,
  };
};
