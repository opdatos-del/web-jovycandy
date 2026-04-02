import { HeroBackdrop } from './components/HeroBackdrop';
import { HeroHeading } from './components/HeroHeading';
import { HeroPromoDetails } from './components/HeroPromoDetails';
import { HeroPromoStage } from './components/HeroPromoStage';
import { useHero } from './hooks/useHero';

export const Hero = () => {
  const { activePromo, promos, refs, setImageRef } = useHero();

  return (
    <section ref={refs.sectionRef} className="relative min-h-screen min-h-[100svh] w-full overflow-hidden bg-[#00AFAA]">
      <HeroBackdrop backgroundRef={refs.backgroundRef} />

      <div className="hero-layout relative z-10 flex min-h-screen min-h-[100svh] w-full items-center justify-center">
        <div ref={refs.stageRef} className="w-full max-w-7xl">
          <div
            ref={refs.shellRef}
            className="hero-shell relative flex flex-col items-center justify-between"
          >
            <div className="hero-content relative flex w-full flex-1 flex-col items-center justify-start">
              <HeroHeading headlineRef={refs.headlineRef} />
              <HeroPromoStage
                activePromo={activePromo}
                promos={promos}
                raysRef={refs.raysRef}
                setImageRef={setImageRef}
              />
            </div>

            <HeroPromoDetails detailRef={refs.detailRef} promo={activePromo} />
          </div>
        </div>
      </div>
    </section>
  );
};
