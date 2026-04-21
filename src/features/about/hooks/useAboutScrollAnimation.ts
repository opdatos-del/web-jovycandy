import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import type { AboutAnimationRefs } from '../types/about.types';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_SCROLL_START = 'top 85%';
const ABOUT_CONTENT_ENTRY_X = -120;
const ABOUT_CONTENT_ENTRY_Y = 22;
const ABOUT_CARD_ENTRY_Y = 34;
const ABOUT_CARD_ENTRY_ROTATION = 2.5;
const ABOUT_ENTRY_BLUR = 'blur(12px)';
const ABOUT_EXIT_BLUR = 'blur(0px)';

export const useAboutScrollAnimation = (): AboutAnimationRefs => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const layersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const layers = layersRef.current;

    if (!section || !content || !layers) {
      return;
    }

    const context = gsap.context(() => {
      const layerCards = gsap.utils.toArray<HTMLElement>('[data-about-layer-card]', layers);

      gsap.set(content, {
        autoAlpha: 0,
        x: ABOUT_CONTENT_ENTRY_X,
        y: ABOUT_CONTENT_ENTRY_Y,
        scale: 0.96,
        filter: ABOUT_ENTRY_BLUR,
        transformOrigin: 'left center',
        force3D: true,
      });

      gsap.set(layerCards, {
        autoAlpha: 0,
        x: (index) => (index % 2 === 0 ? 116 : 148),
        y: ABOUT_CARD_ENTRY_Y,
        scale: 0.94,
        rotation: ABOUT_CARD_ENTRY_ROTATION,
        filter: ABOUT_ENTRY_BLUR,
        transformOrigin: 'center center',
        force3D: true,
      });

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: section,
          start: ABOUT_SCROLL_START,
          once: true,
          toggleActions: 'play none none none',
        },
      });

      timeline
        .to(content, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: ABOUT_EXIT_BLUR,
          duration: 1.05,
        })
        .to(
          layerCards,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            filter: ABOUT_EXIT_BLUR,
            duration: 0.9,
            stagger: 0.15,
          },
          0.16
        );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return {
    sectionRef,
    contentRef,
    layersRef,
  };
};
