import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  HERO_IMAGE_BLUR,
  HERO_IMAGE_CLEAR,
  HERO_IMAGE_ENTRY_Y,
  HERO_IMAGE_SWITCH_IN_Y,
  HERO_IMAGE_SWITCH_OUT_Y,
  HERO_INTRO_ENTRY_Y,
  HERO_STAGE_ENTRY_Y,
} from '../constants/hero.constants';
import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

gsap.registerPlugin(ScrollTrigger);

const getMountedImageElements = (refs: HeroSceneRefs['imageRefs']) =>
  refs.current.filter(Boolean) as HTMLImageElement[];

const getIntroElements = (refs: HeroSceneRefs) =>
  [refs.headlineRef.current, refs.detailRef.current].filter(Boolean);

export const createBackdropParallax = (sectionElement: HTMLElement) => {
  const backdropRows = sectionElement.querySelectorAll<HTMLParagraphElement>('.hero-backdrop-row');

  backdropRows.forEach((row) => {
    gsap.killTweensOf(row);
  });

  const rowAnimations = Array.from(backdropRows).map((row, index) => {
    const direction = index % 2 === 0 ? -1 : 1;
    const xDistance = 10 + index * 0.5;

    gsap.set(row, { willChange: 'transform' });

    return gsap.to(row, {
      xPercent: direction * xDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.52,
        invalidateOnRefresh: true,
      },
    });
  });

  return () => {
    rowAnimations.forEach((animation) => {
      animation.scrollTrigger?.kill();
      animation.kill();
    });
  };
};

export const applyHeroAccentState = (
  refs: Pick<HeroSceneRefs, 'haloRef' | 'glowRef'>,
  promo: HeroPromo,
  immediate = false
) => {
  const animate = immediate ? gsap.set : gsap.to;

  if (refs.haloRef.current) {
    animate(refs.haloRef.current, {
      backgroundColor: promo.accent,
      opacity: 0.24,
      duration: immediate ? 0 : 0.95,
    });
  }

  if (refs.glowRef.current) {
    animate(refs.glowRef.current, {
      backgroundColor: promo.secondary,
      opacity: 0.46,
      duration: immediate ? 0 : 0.95,
    });
  }
};

export const createHeroEntranceContext = (refs: HeroSceneRefs, firstPromo: HeroPromo) => {
  const scope = refs.sectionRef.current;

  if (!scope) {
    return null;
  }

  const imageElements = getMountedImageElements(refs.imageRefs);
  const introElements = getIntroElements(refs);

  return gsap.context(() => {
    if (refs.stageRef.current) {
      gsap.set(refs.stageRef.current, { autoAlpha: 0, y: HERO_STAGE_ENTRY_Y });
    }

    if (introElements.length > 0) {
      gsap.set(introElements, {
        autoAlpha: 0,
        y: HERO_INTRO_ENTRY_Y,
      });
    }

    gsap.set(imageElements, {
      autoAlpha: 0,
      scale: 0.94,
      y: HERO_IMAGE_ENTRY_Y,
      filter: HERO_IMAGE_BLUR,
      transformOrigin: 'center center',
    });

    if (imageElements[0]) {
      gsap.set(imageElements[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        filter: HERO_IMAGE_CLEAR,
      });
    }

    applyHeroAccentState(refs, firstPromo, true);

    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    introTimeline
      .to(refs.stageRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.95,
      })
      .to(
        refs.headlineRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
        },
        0.18
      )
      .to(
        refs.detailRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
        },
        0.32
      );

    if (refs.raysRef.current) {
      gsap.to(refs.raysRef.current, {
        rotation: 360,
        duration: 36,
        repeat: -1,
        ease: 'none',
      });
    }

    const auraElements = [refs.haloRef.current, refs.glowRef.current].filter(Boolean);

    if (auraElements.length > 0) {
      gsap.to(auraElements, {
        scale: 1.08,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.28,
      });
    }

  }, scope);
};

type HeroTransitionOptions = {
  refs: HeroSceneRefs;
  promos: HeroPromo[];
  activeIndex: number;
  previousIndex: number;
};

export const createHeroTransitionTimeline = ({
  refs,
  promos,
  activeIndex,
  previousIndex,
}: HeroTransitionOptions) => {
  const previousImage = refs.imageRefs.current[previousIndex];
  const nextImage = refs.imageRefs.current[activeIndex];
  const nextPromo = promos[activeIndex];

  if (!nextPromo) {
    return null;
  }

  const transitionTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (previousImage) {
    transitionTimeline.to(
      previousImage,
      {
        autoAlpha: 0,
        scale: 0.96,
        y: HERO_IMAGE_SWITCH_OUT_Y,
        filter: HERO_IMAGE_BLUR,
        duration: 0.34,
      },
      0
    );
  }

  if (nextImage) {
    transitionTimeline.fromTo(
      nextImage,
      {
        autoAlpha: 0,
        scale: 1.03,
        y: HERO_IMAGE_SWITCH_IN_Y,
        filter: HERO_IMAGE_BLUR,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        filter: HERO_IMAGE_CLEAR,
        duration: 0.64,
      },
      0.08
    );
  }

  transitionTimeline.fromTo(
    refs.detailRef.current,
    {
      autoAlpha: 0,
      y: 18,
      filter: HERO_IMAGE_BLUR,
    },
    {
      autoAlpha: 1,
      y: 0,
      filter: HERO_IMAGE_CLEAR,
      duration: 0.55,
    },
    0.12
  );

  applyHeroAccentState(refs, nextPromo);

  return transitionTimeline;
};
