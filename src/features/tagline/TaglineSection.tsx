import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TaglineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 32,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-space relative flex min-h-fit w-full flex-col items-center justify-center overflow-hidden bg-[#e8fbf7] py-32 sm:py-40 md:py-48 mt-12 sm:mt-16 md:mt-20"
      style={{
        backgroundImage: 'url(/casa-cale.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/25" />
      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-3xl px-4">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <p className="text-center text-xl font-light leading-relaxed text-white sm:text-2xl md:text-3xl">
          En la Casa de Jovy
          <span className="mt-2 block font-semibold text-white">
            Elaboramos dulces que acompañan tus momentos
          </span>
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};