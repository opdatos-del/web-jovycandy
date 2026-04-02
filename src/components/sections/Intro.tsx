import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 60%',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-space flex min-h-[42vh] w-full flex-col items-center justify-center bg-[#e8fbf7]">
      <div ref={textRef} className="page-shell max-w-4xl text-center">
        <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.38em] text-stone-400 sm:mb-8 sm:tracking-[0.5em]">
          01 - La Fabrica
        </h2>
        <p className="text-2xl font-light leading-tight tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-5xl">
          En el corazon de nuestra manufactura, la <span className="text-stone-600">precision industrial</span> se encuentra con la <span className="text-stone-600">vision artistica</span>. Cada gramo es pesado, cada textura es esculpida.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 text-[10px] uppercase tracking-widest text-stone-400 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>[ TEMP: 24C ]</div>
          <div>[ HUMIDITY: 42% ]</div>
          <div>[ PRESSURE: 1.2 BAR ]</div>
          <div>[ STATUS: OPTIMAL ]</div>
        </div>
      </div>

      <div className="mt-12 h-16 w-px bg-gradient-to-b from-[#ff8b6d] to-transparent sm:mt-16 sm:h-24" />
    </section>
  );
};
