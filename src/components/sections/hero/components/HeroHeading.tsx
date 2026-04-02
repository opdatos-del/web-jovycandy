import type { HeroSceneRefs } from '../types/hero.types';

type HeroHeadingProps = Pick<HeroSceneRefs, 'headlineRef'>;

export const HeroHeading = ({ headlineRef }: HeroHeadingProps) => (
  <h1
    ref={headlineRef}
    className="pointer-events-none relative -top-6 z-0 mt-4 w-full max-w-[1120px] px-2 select-none text-center font-black uppercase leading-[0.86] tracking-[-0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:-top-10 sm:mt-6 md:-top-14 md:mt-8 lg:-top-24 lg:mt-16"
    style={{ fontSize: 'clamp(3rem, 16vw, 7.4rem)' }}
  >
    <span className="block md:inline">NUEVOS</span>{' '}
    <span className="block md:inline">PRODUCTOS</span>
  </h1>
);
