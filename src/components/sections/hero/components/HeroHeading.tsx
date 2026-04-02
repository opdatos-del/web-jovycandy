import type { HeroSceneRefs } from '../types/hero.types';

type HeroHeadingProps = Pick<HeroSceneRefs, 'headlineRef'>;

export const HeroHeading = ({ headlineRef }: HeroHeadingProps) => (
  <h1
    ref={headlineRef}
    className="hero-heading pointer-events-none relative z-0 w-full max-w-[1120px] px-2 select-none text-center font-black uppercase leading-[0.86] tracking-[-0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
    style={{ fontSize: 'clamp(2.55rem, 14vw, 7.4rem)' }}
  >
    <span className="block md:inline">NUEVOS</span>{' '}
    <span className="block md:inline">PRODUCTOS</span>
  </h1>
);
