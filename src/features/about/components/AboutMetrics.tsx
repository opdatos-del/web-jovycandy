import type { AboutMetric } from '../types/about.types';

type AboutMetricsProps = {
  metrics: AboutMetric[];
};

export const AboutMetrics = ({ metrics }: AboutMetricsProps) => (
  <div className="mt-6 grid max-w-2xl grid-cols-2 gap-2 sm:mt-8 sm:gap-3 xl:gap-4">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className="rounded-lg border border-stone-200 bg-white/80 px-3 py-3 shadow-[0_18px_45px_-40px_rgba(28,25,23,0.28)] backdrop-blur sm:rounded-[1.2rem] sm:px-4 sm:py-4"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 sm:text-sm sm:tracking-[0.35em]">
          {metric.label}
        </p>
        <p className="mt-2 text-sm font-light uppercase tracking-[0.22em] text-stone-700 sm:mt-3 sm:text-base">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
);
