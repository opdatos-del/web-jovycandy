import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import type { AboutScrollRefs } from '../types/about.types';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_DESKTOP_QUERY = '(min-width: 1024px)';
const ABOUT_SCROLL_START = 'top top+=88';
const ABOUT_SCROLL_END_PADDING = 320;

export const useAboutScrollAnimation = (): AboutScrollRefs => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(ABOUT_DESKTOP_QUERY, () => {
        const getTravel = () => Math.max(track.scrollHeight - viewport.clientHeight, 0);

        gsap.set(track, { y: 0 });

        const tween = gsap.to(track, {
          y: () => -getTravel(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: ABOUT_SCROLL_START,
            end: () => `+=${Math.max(getTravel() + ABOUT_SCROLL_END_PADDING, window.innerHeight)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => {
        media.revert();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return {
    sectionRef,
    viewportRef,
    trackRef,
  };
};
