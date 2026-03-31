import { AboutBackground } from './components/AboutBackground';
import { AboutHeader } from './components/AboutHeader';
import { AboutLayers } from './components/AboutLayers';
import { AboutMetrics } from './components/AboutMetrics';
import { ABOUT_CONTENT, ABOUT_LAYERS, ABOUT_METRICS } from './data/about.data';
import { useAboutScrollAnimation } from './hooks/useAboutScrollAnimation';

export const About = () => {
  const { sectionRef, viewportRef, trackRef } = useAboutScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden border-t border-stone-200 bg-white px-6 py-20 md:px-10 md:py-22 lg:px-20 lg:py-24"
    >
      <AboutBackground />

      <div className="mx-auto grid max-w-6xl gap-10 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
        <div className="relative z-10 lg:flex lg:h-[calc(100vh-10rem)] lg:flex-col lg:justify-center">
          <AboutHeader content={ABOUT_CONTENT} />
          <AboutMetrics metrics={ABOUT_METRICS} />
        </div>

        <AboutLayers
          layers={ABOUT_LAYERS}
          viewportRef={viewportRef}
          trackRef={trackRef}
        />
      </div>
    </section>
  );
};
