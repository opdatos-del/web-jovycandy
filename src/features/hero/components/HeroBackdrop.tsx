import { HERO_BACKGROUND_COPY, HERO_BACKGROUND_ROWS } from '../constants/hero.constants';
import type { HeroSceneRefs } from '../types/hero.types';

type HeroBackdropProps = Pick<HeroSceneRefs, 'backgroundRef'>;

export const HeroBackdrop = ({ backgroundRef }: HeroBackdropProps) => (
  <>
    <div ref={backgroundRef} className="hero-backdrop-copy absolute inset-0 flex flex-col justify-between overflow-hidden">
      {HERO_BACKGROUND_ROWS.map((row) => (
        <p
          key={row.id}
          className={`hero-backdrop-row whitespace-nowrap text-[clamp(3.1rem,16vw,8.4rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.065] ${row.offsetClass}`}
        >
          {HERO_BACKGROUND_COPY}
        </p>
      ))}
    </div>
  </>
);
