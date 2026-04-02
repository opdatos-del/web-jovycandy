import { HeroBackdrop } from './components/HeroBackdrop';
import { HeroHeading } from './components/HeroHeading';
import { HeroPromoDetails } from './components/HeroPromoDetails';
import { HeroPromoStage } from './components/HeroPromoStage';
import { useHero } from './hooks/useHero';

export const Hero = () => {
  const { activePromo, promos, refs, setImageRef } = useHero();

  return (
    <section ref={refs.sectionRef} className="relative h-screen w-full overflow-hidden bg-[#00AFAA]">
      <HeroBackdrop
        backgroundRef={refs.backgroundRef}
        haloRef={refs.haloRef}
        glowRef={refs.glowRef}
        raysRef={refs.raysRef}
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 pt-24 md:px-12 md:pt-24">
        <div ref={refs.stageRef} className="w-full max-w-7xl">
          <div ref={refs.shellRef} className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-4 pb-6 pt-6 md:px-8 md:pb-8 md:pt-6">
            <div className="relative flex w-full flex-1 flex-col items-center justify-start pb-28 md:pb-40">
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
