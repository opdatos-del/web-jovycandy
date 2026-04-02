import { getHeroPromoStyle } from '../utils/getHeroPromoStyle';
import type { HeroPromo, SetHeroImageRef } from '../types/hero.types';

type HeroPromoStageProps = {
  promos: HeroPromo[];
  setImageRef: SetHeroImageRef;
};

export const HeroPromoStage = ({ promos, setImageRef }: HeroPromoStageProps) => (
  <div className="relative z-10 mx-auto mt-[-0.5rem] h-[clamp(15rem,39vh,22rem)] w-full max-w-5xl md:mt-[-3.5rem] md:h-[clamp(24rem,56vh,34rem)] lg:mt-[-5rem] lg:h-[clamp(28rem,60vh,40rem)]">
    {promos.map((promo, index) => (
      <div
        key={promo.id}
        className="pointer-events-none absolute left-1/2 top-[var(--promo-top-mobile)] z-10 w-[var(--promo-width-mobile)] -translate-x-1/2 -translate-y-1/2 md:top-[var(--promo-top-desktop)] md:w-[var(--promo-width-desktop)]"
        style={getHeroPromoStyle(promo)}
      >
        <div className="translate-y-[var(--promo-offset-mobile)] md:translate-y-[var(--promo-offset-desktop)]">
          <img
            ref={setImageRef(index)}
            src={promo.src}
            alt={promo.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="block h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(76,46,14,0.22)]"
          />
        </div>
      </div>
    ))}
  </div>
);
