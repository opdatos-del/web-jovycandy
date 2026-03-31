import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(gearRef.current, {
        rotate: 360,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-stone-50 flex items-center justify-center relative overflow-hidden border-t border-stone-200">
      <div className="absolute top-20 right-20 text-right z-10">
        <h2 className="text-stone-900 text-5xl font-light tracking-tighter uppercase">Ingeniería</h2>
        <p className="text-stone-600 mt-4 max-w-xs font-light">
          Maquinaria de alta precisión diseñada para preservar la integridad molecular de cada ingrediente.
        </p>
      </div>

      {/* Industrial Gear Element */}
      <div 
        ref={gearRef}
        className="w-[80vh] h-[80vh] border-[40px] border-stone-200 rounded-full flex items-center justify-center relative opacity-40"
      >
        <div className="absolute w-full h-4 bg-stone-200 rotate-45" />
        <div className="absolute w-full h-4 bg-stone-200 -rotate-45" />
        <div className="absolute w-4 h-full bg-stone-200" />
        <div className="absolute w-full h-4 bg-stone-200" />
      </div>

      <div className="absolute left-20 bottom-20 flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-12 h-1 bg-stone-200 overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: -1, delay: i * 0.5, ease: "linear" }}
              className="w-full h-full bg-stone-400"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
