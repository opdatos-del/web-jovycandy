import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import type { UpcomingEventsHorizontalScrollResult } from '../types/upcoming-events.types';
import {
  attachImageLoadRefreshListeners,
  createResizeRefreshObserver,
  getHorizontalScrollDistance,
  getTrackImages,
} from '../utils/upcoming-events.utils';

gsap.registerPlugin(ScrollTrigger);

const HORIZONTAL_ENTRY_HOLD = 0.14;
const HORIZONTAL_SCROLL_SCRUB = 1.15;
const HORIZONTAL_PIN_ANTICIPATION = 2;

export const useUpcomingEventsHorizontalScroll = (): UpcomingEventsHorizontalScrollResult => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    const resizeObserver = createResizeRefreshObserver(
      [section, viewport, track],
      refreshScrollTrigger,
    );
    const trackImages = getTrackImages(track);
    const removeImageLoadRefreshListeners = attachImageLoadRefreshListeners(
      trackImages,
      refreshScrollTrigger,
    );

    const context = gsap.context(() => {
      gsap.set(track, {
        x: 0,
        force3D: true,
        willChange: 'transform',
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getHorizontalScrollDistance(track, viewport)}`,
          pin: true,
          pinSpacing: true,
          scrub: HORIZONTAL_SCROLL_SCRUB,
          invalidateOnRefresh: true,
          anticipatePin: HORIZONTAL_PIN_ANTICIPATION,
        },
      });

      timeline.to({}, { duration: HORIZONTAL_ENTRY_HOLD });

      timeline.to(track, {
        x: () => -getHorizontalScrollDistance(track, viewport),
        duration: 1,
        ease: 'none',
        force3D: true,
      });
    }, section);

    const refreshFrame = window.requestAnimationFrame(refreshScrollTrigger);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      removeImageLoadRefreshListeners();
      resizeObserver.disconnect();
      context.revert();
    };
  }, []);

  return { sectionRef, viewportRef, trackRef };
};
