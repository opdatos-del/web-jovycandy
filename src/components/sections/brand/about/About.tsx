import { AboutHeader } from './components/AboutHeader';
import { AboutEssenceCards } from './components/AboutEssenceCards';
import { ABOUT_CONTENT, ABOUT_LAYERS } from './data/about.data';
import { useAboutScrollAnimation } from './hooks/useAboutScrollAnimation';

export const About = () => {
  const { sectionRef, contentRef } = useAboutScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-x-hidden bg-[#fff0ec]"
    >
      <div className="flex justify-center px-4 pb-8 sm:pb-10 lg:pb-12">
        <h2 className="font-mono text-xs uppercase text-stone-400 opacity-90 sm:text-sm">
          Nuestra Esencia
        </h2>
      </div>
      <div className="page-shell-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start xl:gap-16">
          {/* Left: Title and Description */}
          <div ref={contentRef} className="relative">
            <AboutHeader content={ABOUT_CONTENT} />
          </div>

          {/* Right: Essence Cards */}
          <div>
            <AboutEssenceCards layers={ABOUT_LAYERS} />
          </div>
        </div>
      </div>
    </section>
  );
};
