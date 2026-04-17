import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const title = titleRef.current;

    if (!container || !text) {
      return;
    }

    const ctx = gsap.context(() => {
      // Title fade in
      gsap.fromTo(
        title,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
          },
        }
      );

      // Horizontal parallax scroll effect for text
      gsap.to(
        text,
        {
          x: -300,
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: 'top 40%',
            end: 'bottom 10%',
            scrub: 1.5,
            markers: false,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-space relative flex min-h-[52vh] w-full flex-col items-center justify-center bg-[#e8fbf7] overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <div ref={titleRef} className="mb-8 sm:mb-10">
          <h2 className="font-mono text-xs uppercase text-stone-400 opacity-90 sm:text-sm">
            Quiénes Somos
          </h2>
        </div>
        <div className="w-full overflow-x-hidden px-4">
          <div ref={textRef} className="w-max">
            <p className="text-2xl font-light leading-snug tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap pr-8">
              En el corazon de nuestra manufactura, la <span className="text-stone-600">precision industrial</span> se encuentra con la <span className="text-stone-600">vision artistica</span>. Cada gramo es pesado, cada textura es esculpida.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 h-16 w-px bg-gradient-to-b from-[#ff8b6d] to-transparent sm:mt-16 sm:h-24" />
    </section>
  );
};
