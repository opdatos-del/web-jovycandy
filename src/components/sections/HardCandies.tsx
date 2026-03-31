import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HardCandies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const crystalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(crystalRef.current, {
        rotateY: 180,
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-stone-50 flex items-center justify-center relative border-t border-stone-200">
      <div className="absolute top-1/2 left-20 -translate-y-1/2 z-10">
        <h2 className="text-stone-900 text-7xl font-light tracking-tighter uppercase">Cristal</h2>
        <p className="text-stone-600 mt-6 max-w-sm font-light leading-relaxed">
          Dulces duros con acabado de vidrio. La refracción de la luz como ingrediente principal.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 border-l border-stone-300 pl-6">
          <div>
            <div className="text-stone-400 text-[8px] uppercase tracking-widest font-mono">Dureza</div>
            <div className="text-stone-600 text-sm font-light">3.5 Mohs</div>
          </div>
          <div>
            <div className="text-stone-400 text-[8px] uppercase tracking-widest font-mono">Claridad</div>
            <div className="text-stone-600 text-sm font-light">99.8%</div>
          </div>
        </div>
      </div>

      {/* Crystal Object */}
      <div 
        ref={crystalRef}
        className="w-80 h-80 border border-stone-300 bg-white/50 backdrop-blur-3xl rotate-45 flex items-center justify-center"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-stone-200/50 to-transparent opacity-50" />
      </div>

      <div className="absolute bottom-20 right-20 text-stone-400 font-mono text-xs uppercase tracking-widest flex flex-col items-end">
        <span>Refraction_Index: 1.45</span>
        <span className="mt-1 opacity-50">Structure: Crystalline</span>
      </div>
    </section>
  );
};
