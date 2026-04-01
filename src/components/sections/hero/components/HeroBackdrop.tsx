import { HERO_BACKGROUND_COPY, HERO_BACKGROUND_ROWS } from '../constants/hero.constants';
import type { HeroSceneRefs } from '../types/hero.types';

type HeroBackdropProps = Pick<HeroSceneRefs, 'backgroundRef' | 'haloRef' | 'glowRef' | 'raysRef'>;

export const HeroBackdrop = ({
  backgroundRef,
  haloRef,
  glowRef,
  raysRef,
}: HeroBackdropProps) => (
  <>
    <div className="absolute inset-0 " />
    <div className="absolute inset-0" />

    <div ref={backgroundRef} className="absolute inset-0 flex translate-y-8 flex-col justify-center gap-3 overflow-hidden md:translate-y-8">
      {HERO_BACKGROUND_ROWS.map((row) => (
        <p
          key={row.id}
          className={`whitespace-nowrap text-[clamp(3.6rem,10vw,8.4rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.065] ${row.offsetClass}`}
        >
          {HERO_BACKGROUND_COPY}
        </p>
      ))}
    </div>

    <div
      ref={haloRef}
      className="absolute left-1/2 top-[54%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] md:h-[30rem] md:w-[30rem]"
    />
    <div
      ref={glowRef}
      className="absolute left-1/2 top-[57%] h-[14rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] md:h-[20rem] md:w-[38rem]"
    />
    <div
      ref={raysRef}
      className="absolute left-1/2 top-[54%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 opacity-60 md:h-[38rem] md:w-[38rem]"
      style={{
        backgroundImage:
          'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.75) 0deg 5deg, rgba(255,255,255,0) 5deg 20deg)',
        WebkitMaskImage:
          'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 16%, rgba(0,0,0,0) 74%)',
        maskImage:
          'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 16%, rgba(0,0,0,0) 74%)',
      }}
    />
    <div className="absolute bottom-[12%] left-1/2 h-16 w-[min(72vw,36rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,79,77,0.32),transparent_72%)] blur-[24px]" />
  </>
);
