import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <>
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-px w-8 bg-stone-300 sm:w-10 lg:w-12" />
      <p className="text-xs font-mono uppercase tracking-[0.28em] text-stone-400 sm:text-sm sm:tracking-[0.5em]">
        {content.eyebrow}
      </p>
    </div>

    <h2 className="mt-4 max-w-[10ch] text-3xl font-light uppercase leading-[0.95] tracking-[-0.06em] text-stone-900 sm:mt-6 sm:max-w-[8ch] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      {content.titleLines[0]}
      <br />
      {content.titleLines[1]}
    </h2>

    <p className="mt-4 max-w-[34rem] text-sm font-light leading-relaxed text-stone-600 sm:mt-5 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      {content.description}
    </p>
  </>
);
