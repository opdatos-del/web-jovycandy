import gsap from 'gsap';

import {
  HERO_IMAGE_BLUR,
  HERO_IMAGE_CLEAR,
  HERO_IMAGE_ENTRY_Y,
  HERO_IMAGE_FLOAT_Y,
  HERO_IMAGE_SWITCH_IN_Y,
  HERO_IMAGE_SWITCH_OUT_Y,
  HERO_INTRO_ENTRY_Y,
  HERO_STAGE_ENTRY_Y,
} from '../constants/hero.constants';
import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

const getMountedImageElements = (refs: HeroSceneRefs['imageRefs']) =>
  refs.current.filter(Boolean) as HTMLImageElement[];

const getIntroElements = (refs: HeroSceneRefs) =>
  [refs.headlineRef.current, refs.detailRef.current].filter(Boolean);

export const applyHeroAccentState = (
  refs: Pick<HeroSceneRefs, 'haloRef' | 'glowRef' | 'shellRef'>,
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

  if (refs.shellRef.current) {
    animate(refs.shellRef.current, {
      boxShadow: `0 28px 90px ${promo.shadow}`,
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
      scale: 0.84,
      y: HERO_IMAGE_ENTRY_Y,
      rotation: -8,
      filter: HERO_IMAGE_BLUR,
      transformOrigin: 'center center',
    });

    if (imageElements[0]) {
      gsap.set(imageElements[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        rotation: 0,
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

    if (refs.backgroundRef.current) {
      gsap.to(refs.backgroundRef.current, {
        xPercent: -2.5,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

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

    if (imageElements[0]) {
      gsap.to(imageElements[0], {
        y: HERO_IMAGE_FLOAT_Y,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
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
        scale: 0.84,
        y: HERO_IMAGE_SWITCH_OUT_Y,
        rotation: -8,
        filter: HERO_IMAGE_BLUR,
        duration: 0.42,
      },
      0
    );
  }

  if (nextImage) {
    transitionTimeline.fromTo(
      nextImage,
      {
        autoAlpha: 0,
        scale: 1.08,
        y: HERO_IMAGE_SWITCH_IN_Y,
        rotation: 8,
        filter: HERO_IMAGE_BLUR,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        filter: HERO_IMAGE_CLEAR,
        duration: 0.82,
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
