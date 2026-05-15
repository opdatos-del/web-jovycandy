import { HeroBackdrop } from './components/HeroBackdrop';
import { HeroPromoDetails } from './components/HeroPromoDetails';
import { HeroPromoStage } from './components/HeroPromoStage';
import { useHero } from './hooks/useHero';

export const Hero = () => {
  const { activePromo, backgroundColor, promos, refs, setImageRef } = useHero();

  return (
    <section
      ref={refs.sectionRef}
      className="relative min-h-viewport w-full overflow-hidden"
      style={{
        backgroundColor,
        transition: 'background-color 900ms ease',
      }}
    >
      <HeroBackdrop backgroundRef={refs.backgroundRef} />

      <div className="hero-layout relative z-10 flex min-h-viewport w-full items-center justify-center">
        <div ref={refs.stageRef} className="w-full max-w-[min(96vw,var(--hero-max-width))]">
          <div
            ref={refs.shellRef}
            className="hero-shell relative flex flex-col items-center justify-center md:justify-between"
          >
            {activePromo ? (
              <>
                <div className="hero-content relative flex w-full flex-none flex-col items-center justify-center md:flex-1">
                  <HeroPromoStage
                    activePromo={activePromo}
                    promos={promos}
                    raysRef={refs.raysRef}
                    setImageRef={setImageRef}
                  />
                </div>

                <HeroPromoDetails detailRef={refs.detailRef} promo={activePromo} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
