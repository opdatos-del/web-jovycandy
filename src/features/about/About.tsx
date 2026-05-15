import { AboutHeader } from './components/AboutHeader';
import { AboutEssenceCards } from './components/AboutEssenceCards';
import { ABOUT_CONTENT, ABOUT_LAYERS } from './data/about.data';
import { useAboutScrollAnimation } from './hooks/useAboutScrollAnimation';
import { BRAND_BACKGROUND_ABOUT_PATH } from '@/shared/assets/publicAssets';

export const About = () => {
  const { sectionRef, contentRef } = useAboutScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-x-hidden bg-[#f8ebe6]"
    >
      <div className="page-shell-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)] lg:items-start xl:gap-14">
          <div className="relative isolate min-h-[28rem] overflow-hidden rounded-l-[2.25rem] [border-bottom-right-radius:34%] [border-top-right-radius:34%] bg-[#f0ddd6] sm:min-h-[33rem] sm:rounded-l-[2.6rem] sm:[border-bottom-right-radius:40%] sm:[border-top-right-radius:40%] lg:min-h-[39rem] lg:rounded-l-[3rem] lg:[border-bottom-right-radius:48%] lg:[border-top-right-radius:48%]">
            <img
              src={BRAND_BACKGROUND_ABOUT_PATH}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[46%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(88deg,rgba(255,243,238,0.92)_0%,rgba(255,243,238,0.76)_42%,rgba(255,243,238,0.16)_100%)]" />

            <div ref={contentRef} className="relative z-10 max-w-[22rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
              <AboutHeader content={ABOUT_CONTENT} />
            </div>
          </div>

          <div className="pt-2 lg:pt-3">
            <AboutEssenceCards layers={ABOUT_LAYERS} />
          </div>
        </div>
      </div>
    </section>
  );
};
