import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <>
    {content.eyebrow && (
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="h-px w-8 bg-stone-300 sm:w-10 lg:w-12" />
        <p className="text-xs font-mono uppercase tracking-[0.28em] text-stone-400 sm:text-sm sm:tracking-[0.5em]">
          {content.eyebrow}
        </p>
      </div>
    )}

    <h2 className="mt-4 text-2xl font-light uppercase leading-[0.95] tracking-[-0.06em] text-stone-900 sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      {content.titleLines[0]}
      <br />
      {content.titleLines[1]}
    </h2>

    <p className="mt-4 max-w-[32rem] text-xs font-light leading-relaxed text-stone-600 sm:mt-5 sm:text-sm md:text-base lg:text-base xl:text-lg">
      {content.description}
    </p>
  </>
);
