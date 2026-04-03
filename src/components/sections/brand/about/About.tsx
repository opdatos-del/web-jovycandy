import { AboutBackground } from './components/AboutBackground';
import { AboutHeader } from './components/AboutHeader';
import { AboutLayers } from './components/AboutLayers';
import { AboutMetrics } from './components/AboutMetrics';
import { ABOUT_CONTENT, ABOUT_LAYERS, ABOUT_METRICS } from './data/about.data';
import { useAboutScrollAnimation } from './hooks/useAboutScrollAnimation';
import { useAboutParallax } from './hooks/useAboutParallax';

export const About = () => {
  const { sectionRef, contentRef, layersRef } = useAboutScrollAnimation();
  const { backgroundRef } = useAboutParallax();

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-x-hidden bg-[#fff0ec]"
    >
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0">
        <AboutBackground />
      </div>

      <div className="page-shell-wide relative z-10 grid gap-6 sm:gap-8 lg:gap-10 xl:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] xl:items-start xl:gap-12 xl:gap-14">
        <div ref={contentRef} className="relative z-10 max-w-2xl xl:sticky xl:top-20">
          <AboutHeader content={ABOUT_CONTENT} />
          <AboutMetrics metrics={ABOUT_METRICS} />
        </div>

        <AboutLayers layers={ABOUT_LAYERS} layersRef={layersRef} />
      </div>
    </section>
  );
};
