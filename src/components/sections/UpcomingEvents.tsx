import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type UpcomingEvent = {
  id: string;
  image: string;
  alt: string;
};

const UPCOMING_EVENTS: UpcomingEvent[] = Array.from({ length: 11 }, (_, index) => ({
  id: `evento-${index + 1}`,
  image: `/eventos/${index + 1}.webp`,
  alt: `Evento ${String(index + 1).padStart(2, '0')}`,
}));

export const UpcomingEvents = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(section);
    resizeObserver.observe(track);

    const images = Array.from(track.querySelectorAll('img'));
    const handleRefresh = () => ScrollTrigger.refresh();

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener('load', handleRefresh);
      }
    });

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: () => -Math.max(track.scrollWidth - section.clientWidth, 0),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max(track.scrollWidth - section.clientWidth, 0)}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      images.forEach((image) => image.removeEventListener('load', handleRefresh));
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#fff7f2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,166,124,0.26),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(0,175,170,0.18),transparent_24%),linear-gradient(180deg,#fff8f3_0%,#fff1e6_100%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,rgba(14,14,14,1)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff8c83]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fff7f2] to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fff7f2] to-transparent md:w-16" />

      <div
        ref={trackRef}
        className="relative z-20 flex h-full items-center gap-5 px-5 py-10 md:gap-8 md:px-10 md:py-12 lg:gap-10 lg:px-16"
      >
        <article className="flex h-[76vh] w-[min(74vw,23rem)] shrink-0 flex-col justify-between rounded-[2.4rem] border border-[#f0d9d0] bg-white/72 p-6 shadow-[0_28px_90px_rgba(227,145,112,0.15)] backdrop-blur md:h-[78vh] md:w-[min(40vw,24rem)] md:p-8 lg:w-[min(25vw,23rem)]">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-[#f6cab7] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d27055]">
              Proximos eventos
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-stone-400">Agenda visual</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-stone-900 md:text-[2.75rem]">
                Activaciones, lanzamientos y presencia de marca.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-stone-600 md:text-base">
              Una galeria con los proximos momentos clave donde Jovy va a mostrarse, activarse y conectar con su audiencia.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7d7d]" />
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">Sigue bajando</p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f5dfd7]">
              <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#ff8a72_0%,#ff5e90_100%)]" />
            </div>
          </div>
        </article>

        {UPCOMING_EVENTS.map((event) => (
          <article
            key={event.id}
            className="group relative h-[76vh] w-[min(66vw,22rem)] shrink-0 overflow-hidden rounded-[2.4rem] border border-white/70 bg-white p-2 shadow-[0_28px_90px_rgba(42,33,28,0.14)] md:h-[78vh] md:w-[min(38vw,23rem)] lg:w-[min(24vw,23rem)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#f8eee8]">
              <img
                src={event.image}
                alt={event.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                draggable={false}
              />
            </div>
          </article>
        ))}

        <div className="h-px w-[38vw] max-w-[22rem] shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
};
