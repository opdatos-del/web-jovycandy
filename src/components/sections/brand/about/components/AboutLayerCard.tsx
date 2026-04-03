import type { AboutLayer } from '../types/about.types';

type AboutLayerCardProps = {
  item: AboutLayer;
};

export const AboutLayerCard = ({ item }: AboutLayerCardProps) => {
  return (
    <article
      data-about-layer-card
      className="hover-lift group relative min-h-[13rem] overflow-hidden rounded-lg border border-stone-200/90 bg-white p-3 shadow-[0_24px_60px_-50px_rgba(28,25,23,0.22)] transition-all duration-500 sm:min-h-[14rem] sm:p-4 sm:rounded-[1.3rem] md:min-h-[15rem] lg:min-h-[15.5rem] lg:p-6 lg:rounded-[1.5rem]"
    >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-36">
      <div
        className="mx-auto h-full w-[75%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${item.tone} 0%, rgba(255,255,255,0) 72%)`,
        }}
      />
    </div>

    <div className="relative flex items-start justify-between gap-3 sm:gap-4">
      <div className="max-w-[14rem]">
        <p className="text-xs font-mono uppercase tracking-[0.24em] text-stone-400 sm:text-sm sm:tracking-[0.45em]">
          {item.kicker}
        </p>
        <h3 className="mt-2 max-w-[12ch] text-base font-light leading-snug tracking-tight text-stone-900 sm:mt-3 sm:text-lg lg:text-2xl">
          {item.title}
        </h3>
      </div>

      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 sm:flex md:h-10 md:w-10">
        <div className="h-4 w-4 rounded-full bg-stone-200 shadow-inner sm:h-5 sm:w-5" />
      </div>
    </div>

    <div className="relative mt-3 sm:mt-4">
      <p className="max-w-lg text-xs font-light leading-relaxed text-stone-600 sm:text-sm lg:text-base">
        {item.body}
      </p>

      <div className="mt-3 flex items-start gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 sm:mt-4 sm:text-xs sm:gap-3 sm:tracking-[0.35em]">
        <span className="h-px w-6 shrink-0 bg-stone-300 sm:w-8" style={{ marginTop: '2px' }} />
        <span className="break-words leading-tight">{item.detail}</span>
      </div>
    </div>
    </article>
  );
};
