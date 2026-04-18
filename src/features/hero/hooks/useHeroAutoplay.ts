import { useEffect, useState } from 'react';

import { HERO_AUTOPLAY_INTERVAL_MS } from '../constants/hero.constants';

export const useHeroAutoplay = (totalPromos: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (totalPromos <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalPromos);
    }, HERO_AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [totalPromos]);

  return activeIndex;
};
