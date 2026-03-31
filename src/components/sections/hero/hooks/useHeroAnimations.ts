import { useCallback, useEffect, useMemo, useRef } from 'react';

import { createHeroEntranceContext, createHeroTransitionTimeline } from '../utils/heroAnimations';
import type { HeroPromo, HeroSceneRefs, SetHeroImageRef } from '../types/hero.types';

export const useHeroAnimations = (promos: HeroPromo[], activeIndex: number) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const previousIndexRef = useRef(0);

  const refs = useMemo<HeroSceneRefs>(
    () => ({
      sectionRef,
      stageRef,
      shellRef,
      backgroundRef,
      headlineRef,
      detailRef,
      haloRef,
      glowRef,
      raysRef,
      imageRefs,
    }),
    []
  );

  useEffect(() => {
    const firstPromo = promos[0];

    if (!firstPromo) {
      return undefined;
    }

    const context = createHeroEntranceContext(refs, firstPromo);

    return () => {
      context?.revert();
    };
  }, [promos, refs]);

  useEffect(() => {
    const previousIndex = previousIndexRef.current;

    if (previousIndex === activeIndex) {
      return undefined;
    }

    const transitionTimeline = createHeroTransitionTimeline({
      refs,
      promos,
      activeIndex,
      previousIndex,
    });

    previousIndexRef.current = activeIndex;

    return () => {
      transitionTimeline?.kill();
    };
  }, [activeIndex, promos, refs]);

  const setImageRef = useCallback<SetHeroImageRef>(
    (index) => (element) => {
      imageRefs.current[index] = element;
    },
    []
  );

  return {
    refs,
    setImageRef,
  };
};
