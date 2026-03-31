import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Gummies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gummyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky gummy animation
      gsap.to(gummyRef.current, {
        scale: 1.5,
        rotate: 15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden border-t border-stone-200">
      <div className="absolute top-20 left-20 z-10">
        <h2 className="text-stone-900 text-6xl font-light tracking-tighter">GOMITAS</h2>
        <p className="text-stone-600 mt-4 max-w-xs font-light">
          Texturas elásticas, translúcidas y vibrantes. Una oda a la flexibilidad sensorial.
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-yellow-500/50" />
            <span className="text-[10px] text-stone-500 uppercase tracking-widest">Elasticidad Molecular</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-amber-500/50" />
            <span className="text-[10px] text-stone-500 uppercase tracking-widest">Translucidez Controlada</span>
          </div>
        </div>
      </div>

      {/* The "Gummy" Object - Abstract Representation */}
      <div 
        ref={gummyRef}
        className="w-64 h-64 rounded-[40%] bg-gradient-to-br from-yellow-400/60 to-amber-500/60 blur-xl mix-blend-multiply"
        style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.05)' }}
      />
      
      <div className="absolute bottom-20 right-20 text-stone-400 font-mono text-sm flex flex-col items-end">
        <span>[ ELASTICITY_INDEX: 0.98 ]</span>
        <span className="mt-2 opacity-50">[ VISCOSITY: HIGH ]</span>
      </div>
    </div>
  );
};
