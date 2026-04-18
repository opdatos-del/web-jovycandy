import { ScrollReveal } from '@/shared/ui/ScrollReveal';

export const UpcomingEventsIntroCard = () => (
  <ScrollReveal
    className="h-auto min-h-[19rem] w-[min(88vw,19rem)] shrink-0 snap-start md:w-[min(64vw,22rem)] lg:h-[72vh] lg:w-[min(25vw,23rem)]"
    delay={0.05}
    distance={34}
  >
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-[#f0d9d0] bg-white/92 p-5 shadow-[0_28px_90px_rgba(227,145,112,0.15)] sm:p-6 lg:rounded-[2.4rem] lg:p-8">
      <div className="space-y-5">
        <span className="inline-flex rounded-full border border-[#f6cab7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d27055] sm:text-sm sm:tracking-[0.35em]">
          Proximos eventos
        </span>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-stone-400 sm:text-base sm:tracking-[0.45em]">Agenda visual</p>
          <h2 className="mt-4 text-2xl font-semibold leading-[0.95] tracking-[-0.06em] text-stone-900 sm:text-3xl lg:text-[2.75rem]">
            Activaciones, lanzamientos y presencia de marca.
          </h2>
        </div>

        <p className="max-w-sm text-base leading-relaxed text-stone-600 lg:text-lg">
          Una galeria con los proximos momentos clave donde Jovy va a mostrarse, activarse y conectar
          con su audiencia.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff7d7d]" />
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500 sm:text-sm sm:tracking-[0.35em]">Sigue bajando</p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f5dfd7]">
          <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#ff8a72_0%,#ff5e90_100%)]" />
        </div>
      </div>
    </article>
  </ScrollReveal>
);
