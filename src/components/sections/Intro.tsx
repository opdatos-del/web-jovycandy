import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTRO_ROWS = [
  {
    phrases: Array(28).fill(['GOMITAS', 'WORMS', 'RINGS']).flat(),
    color: 'text-lime-500',
  },
  {
    phrases: Array(28).fill(['JELLIES', 'GELATINAS', 'FRUTAS']).flat(),
    color: 'text-pink-500',
  },
  {
    phrases: Array(28).fill(['POLVOS', 'REVOLCADO', 'CUBIERTO']).flat(),
    color: 'text-orange-500',
  },
  {
    phrases: Array(28).fill(['PALETAS', 'CONFITERÍA', 'LUJO']).flat(),
    color: 'text-red-500',
  },
];

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
      // Horizontal parallax scroll effect for text - alternating directions
      const rows = text.querySelectorAll('[data-parallax-row]');
      rows.forEach((row, index) => {
        const rowContent = row.querySelector('[data-parallax-content]');
        if (!rowContent) return;
        
        // Get the width of the original content
        const contentWidth = rowContent.offsetWidth / 2; // Divided by 2 because content is duplicated
        const direction = index % 2 === 0 ? -1 : 1;
        
        gsap.to(
          rowContent,
          {
            x: contentWidth * direction,
            opacity: 1,
            scrollTrigger: {
              trigger: container,
              start: 'top 40%',
              end: 'bottom 10%',
              scrub: 2,
              markers: false,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-space relative flex min-h-fit w-full flex-col items-center justify-center bg-[#e8fbf7] overflow-hidden py-12 sm:py-16">
      <div className="w-full flex flex-col items-center">
        <div ref={textRef} className="w-full space-y-6 sm:space-y-8">
          {INTRO_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              data-parallax-row
              className="relative w-full overflow-hidden"
            >
              <div
                data-parallax-content
                className="flex gap-2 sm:gap-3 whitespace-nowrap"
              >
                {row.phrases.map((phrase, phraseIndex) => (
                  <span
                    key={phraseIndex}
                    className={`text-4xl font-black uppercase tracking-tight flex-shrink-0 sm:text-5xl md:text-6xl lg:text-7xl ${row.color}`}
                  >
                    {phrase}
                  </span>
                ))}
                {/* Duplicated content for infinite carousel */}
                {row.phrases.map((phrase, phraseIndex) => (
                  <span
                    key={`duplicate-${phraseIndex}`}
                    className={`text-4xl font-black uppercase tracking-tight flex-shrink-0 sm:text-5xl md:text-6xl lg:text-7xl ${row.color}`}
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 h-16 w-px bg-gradient-to-b from-[#ff8b6d] to-transparent sm:mt-16 sm:h-24" />
    </section>
  );
};
