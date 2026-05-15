import { useEffect, useState } from 'react';

import { HERO_PROMOS } from '../data/heroPromos';
import { fetchPublishedHeroContent } from '../services/hero-api.service';
import type { UseHeroResult } from '../types/hero.types';
import { useHeroAnimations } from './useHeroAnimations';
import { useHeroAutoplay } from './useHeroAutoplay';

export const useHero = (): UseHeroResult => {
  const [promos, setPromos] = useState<typeof HERO_PROMOS>([]);
  const [backgroundColor, setBackgroundColor] = useState(HERO_PROMOS[0]?.backgroundColor || '#00AFAA');
  const activeIndex = useHeroAutoplay(promos.length);
  const { refs, setImageRef } = useHeroAnimations(promos, activeIndex);
  const activePromo = promos[activeIndex] ?? promos[0] ?? null;

  useEffect(() => {
    document.documentElement.style.setProperty('--hero-theme-color', backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    let active = true;

    fetchPublishedHeroContent()
      .then((result) => {
        if (!active) return;
        setBackgroundColor(result.backgroundColor);
        setPromos(result.promos);
      })
      .catch(() => {
        // fetchPublishedHeroContent already logs and falls back
      });

    return () => {
      active = false;
    };
  }, []);

  return {
    activeIndex,
    activePromo,
    backgroundColor,
    promos,
    refs,
    setImageRef,
  };
};
