import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAboutParallax = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

    if (!section || !background) {
      return;
    }

    const context = gsap.context(() => {
      // Main parallax on entire background
      gsap.to(background, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
          markers: false,
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return {
    sectionRef,
    backgroundRef,
  };
};
