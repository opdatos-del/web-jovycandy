import type { AboutLayer } from '../types/about.types';

type AboutLayerCardProps = {
  item: AboutLayer;
};

export const AboutLayerCard = ({ item }: AboutLayerCardProps) => (
  <article
    data-about-layer-card
    className="relative min-h-[12.75rem] overflow-hidden rounded-[1.5rem] border border-stone-200/90 bg-white p-5 shadow-[0_24px_60px_-50px_rgba(28,25,23,0.22)] lg:min-h-[13.5rem] lg:p-6"
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-36">
      <div
        className="mx-auto h-full w-[75%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${item.tone} 0%, rgba(255,255,255,0) 72%)`,
        }}
      />
    </div>

    <div className="relative flex items-start justify-between gap-6">
      <div className="max-w-[16rem]">
        <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-stone-400">
          {item.kicker}
        </p>
        <h3 className="mt-4 max-w-[12ch] text-[1.65rem] font-light leading-tight tracking-tight text-stone-900 lg:text-[1.85rem]">
          {item.title}
        </h3>
      </div>

      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 md:flex">
        <div className="h-5 w-5 rounded-full bg-stone-200 shadow-inner" />
      </div>
    </div>

    <div className="relative mt-5">
      <p className="max-w-lg text-[0.95rem] font-light leading-relaxed text-stone-600">
        {item.body}
      </p>

      <div className="mt-5 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-stone-500">
        <span className="h-px w-10 bg-stone-300" />
        <span>{item.detail}</span>
      </div>
    </div>
  </article>
);
