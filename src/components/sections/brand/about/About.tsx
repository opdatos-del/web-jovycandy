import { AboutBackground } from './components/AboutBackground';
import { AboutHeader } from './components/AboutHeader';
import { AboutLayers } from './components/AboutLayers';
import { AboutMetrics } from './components/AboutMetrics';
import { ABOUT_CONTENT, ABOUT_LAYERS, ABOUT_METRICS } from './data/about.data';
import { useAboutScrollAnimation } from './hooks/useAboutScrollAnimation';

export const About = () => {
  const { sectionRef, contentRef, layersRef } = useAboutScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden border-t border-stone-200 bg-white px-6 py-20 md:px-10 md:py-24 lg:px-20 lg:py-24"
    >
      <AboutBackground />

      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-12 xl:gap-16">
        <div ref={contentRef} className="relative z-10 max-w-2xl lg:sticky lg:top-28">
          <AboutHeader content={ABOUT_CONTENT} />
          <AboutMetrics metrics={ABOUT_METRICS} />
        </div>

        <AboutLayers layers={ABOUT_LAYERS} layersRef={layersRef} />
      </div>
    </section>
  );
};
