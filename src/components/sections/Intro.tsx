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
      gsap.fromTo(text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-[50vh] w-full bg-white flex flex-col items-center justify-center px-6 py-24 lg:py-32">
      <div ref={textRef} className="max-w-4xl text-center">
        <h2 className="text-stone-400 text-xs uppercase tracking-[0.5em] mb-8 font-mono">
          01 — La Fábrica
        </h2>
        <p className="text-stone-900 text-3xl md:text-5xl font-light leading-tight tracking-tight">
          En el corazón de nuestra manufactura, la <span className="text-stone-600">precisión industrial</span> se encuentra con la <span className="text-stone-600">visión artística</span>. Cada gramo es pesado, cada textura es esculpida.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-stone-400 text-[10px] uppercase tracking-widest font-mono">
          <div>[ TEMP: 24°C ]</div>
          <div>[ HUMIDITY: 42% ]</div>
          <div>[ PRESSURE: 1.2 BAR ]</div>
          <div>[ STATUS: OPTIMAL ]</div>
        </div>
      </div>
      
      {/* Industrial Line Element */}
      <div className="mt-16 w-px h-24 bg-gradient-to-b from-stone-200 to-transparent" />
    </section>
  );
};
