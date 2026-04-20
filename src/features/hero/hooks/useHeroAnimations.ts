import { useCallback, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HERO_IMAGE_FLOAT_Y } from '../constants/hero.constants';
import { createHeroEntranceContext, createHeroTransitionTimeline, createBackdropParallax } from '../utils/heroAnimations';
import type { HeroPromo, HeroSceneRefs, SetHeroImageRef } from '../types/hero.types';

gsap.registerPlugin(ScrollTrigger);

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
  const imageFloatTweenRef = useRef<gsap.core.Tween | null>(null);

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
    const firstImage = imageRefs.current[0];

    if (firstImage) {
      imageFloatTweenRef.current?.kill();
      imageFloatTweenRef.current = gsap.to(firstImage, {
        y: HERO_IMAGE_FLOAT_Y,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      imageFloatTweenRef.current?.kill();
      imageFloatTweenRef.current = null;
      context?.revert();
    };
  }, [promos, refs]);

  useEffect(() => {
    const previousIndex = previousIndexRef.current;

    if (previousIndex === activeIndex) {
      return undefined;
    }

    imageFloatTweenRef.current?.kill();
    imageFloatTweenRef.current = null;

    const transitionTimeline = createHeroTransitionTimeline({
      refs,
      promos,
      activeIndex,
      previousIndex,
    });
    const nextImage = imageRefs.current[activeIndex];

    transitionTimeline?.eventCallback('onComplete', () => {
      if (!nextImage) {
        return;
      }

      imageFloatTweenRef.current?.kill();
      imageFloatTweenRef.current = gsap.to(nextImage, {
        y: HERO_IMAGE_FLOAT_Y,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    previousIndexRef.current = activeIndex;

    return () => {
      transitionTimeline?.kill();
    };
  }, [activeIndex, promos, refs]);

  useEffect(() => {
    if (!refs.sectionRef.current) return;

    const cleanupParallax = createBackdropParallax(refs.sectionRef.current);

    return () => {
      cleanupParallax();
    };
  }, [refs]);

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
