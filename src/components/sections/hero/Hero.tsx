import { HeroBackdrop } from './components/HeroBackdrop';
import { HeroHeading } from './components/HeroHeading';
import { HeroPromoDetails } from './components/HeroPromoDetails';
import { HeroPromoStage } from './components/HeroPromoStage';
import { useHero } from './hooks/useHero';

export const Hero = () => {
  const { activePromo, promos, refs, setImageRef } = useHero();

  return (
    <section ref={refs.sectionRef} className="relative min-h-screen min-h-[100svh] w-full overflow-hidden bg-[#00AFAA]">
      <HeroBackdrop
        backgroundRef={refs.backgroundRef}
        haloRef={refs.haloRef}
        glowRef={refs.glowRef}
        raysRef={refs.raysRef}
      />

      <div className="relative z-10 flex min-h-screen min-h-[100svh] w-full items-center justify-center px-4 pb-5 pt-[calc(var(--site-nav-height)+0.75rem)] sm:px-6 md:px-10 lg:px-12">
        <div ref={refs.stageRef} className="w-full max-w-7xl">
          <div
            ref={refs.shellRef}
            className="relative flex min-h-[calc(100vh-var(--site-nav-height)-1.25rem)] min-h-[calc(100svh-var(--site-nav-height)-1.25rem)] flex-col items-center justify-between px-2 pb-4 pt-4 sm:px-4 sm:pb-5 md:px-6 md:pb-6"
          >
            <div className="relative flex w-full flex-1 flex-col items-center justify-start pb-24 sm:pb-28 md:pb-36">
              <HeroHeading headlineRef={refs.headlineRef} />
              <HeroPromoStage promos={promos} setImageRef={setImageRef} />
            </div>

            <HeroPromoDetails detailRef={refs.detailRef} promo={activePromo} />
          </div>
        </div>
      </div>
    </section>
  );
};
