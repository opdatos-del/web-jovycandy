import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Chili: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pulseRef.current, {
        opacity: 0.72,
        scale: 1.12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff5f1]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(255,94,46,0.36)_0%,rgba(255,115,74,0.18)_26%,rgba(255,255,255,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/55 to-transparent" />

      <div
        ref={pulseRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vw] w-[90vw] max-h-[72rem] max-w-[72rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a2a]/35 opacity-55 blur-[180px] will-change-transform"
      />

      <div className="text-center z-10">
        <h2 className="text-[#ff3c00] text-9xl font-black tracking-tighter uppercase italic">Picante</h2>
        <p className="text-stone-600 mt-4 tracking-[0.4em] uppercase text-xs">Intensidad Sensorial</p>
        <div className="mt-12 flex justify-center gap-12">
          <div className="text-center">
            <div className="text-[#ff3c00]/60 text-[10px] font-mono uppercase mb-1">Scoville</div>
            <div className="text-stone-900 text-xl font-light tracking-widest">50,000</div>
          </div>
          <div className="text-center">
            <div className="text-[#ff3c00]/60 text-[10px] font-mono uppercase mb-1">Heat Level</div>
            <div className="text-stone-900 text-xl font-light tracking-widest">EXTREME</div>
          </div>
        </div>
      </div>

    </section>
  );
};
