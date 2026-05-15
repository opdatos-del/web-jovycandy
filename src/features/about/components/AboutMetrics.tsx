import type { AboutMetric } from '../types/about.types';

type AboutMetricsProps = {
  metrics: AboutMetric[];
};

export const AboutMetrics = ({ metrics }: AboutMetricsProps) => (
  <div className="mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-4 lg:gap-6 xl:gap-7">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className="group rounded-2xl border border-stone-200/60 bg-gradient-to-br from-white/95 to-white/70 px-5 py-6 shadow-[0_24px_56px_-48px_rgba(28,25,23,0.32)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_32px_72px_-56px_rgba(28,25,23,0.42)] hover:border-stone-300 sm:rounded-3xl sm:px-6 sm:py-8 lg:px-7 lg:py-10"
      >
        <p className="text-xs font-mono uppercase tracking-[0.28em] text-stone-400 sm:text-sm sm:tracking-[0.38em] lg:text-base lg:tracking-[0.42em]">
          {metric.label}
        </p>
        <p className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-stone-900 sm:mt-4 sm:text-3xl lg:mt-5 lg:text-4xl xl:text-5xl">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
);
