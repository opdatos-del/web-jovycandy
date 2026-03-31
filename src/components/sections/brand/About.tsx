import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AboutLayer = {
  kicker: string;
  title: string;
  body: string;
  detail: string;
  tone: string;
};

const aboutLayers: AboutLayer[] = [
  {
    kicker: 'Misión',
    title: 'Elevar el dulce a una categoría de lujo.',
    body:
      'Transformamos el consumo en una experiencia de diseño y sofisticación, donde cada pieza debe sentirse tan pensada como deseable.',
    detail: 'experiencia y sofisticación',
    tone: 'rgba(41, 37, 36, 0.08)',
  },
  {
    kicker: 'Visión',
    title: 'Construir un atelier de confitería sin límites.',
    body:
      'Queremos ser un referente contemporáneo donde innovación, sabor y lenguaje visual convivan como una misma firma de marca.',
    detail: 'referencia global',
    tone: 'rgba(120, 113, 108, 0.11)',
  },
  {
    kicker: 'Valores',
    title: 'Rigor, detalle y sensibilidad en cada decisión.',
    body:
      'Trabajamos con calidad sin concesiones, coherencia estética y una atención obsesiva por la experiencia del usuario en cada punto de contacto.',
    detail: 'coherencia y excelencia',
    tone: 'rgba(168, 162, 158, 0.14)',
  },
  {
    kicker: 'Filosofía',
    title: 'El sabor también puede ser diseño.',
    body:
      'Entendemos la confitería como una disciplina donde materia, forma y emoción trabajan juntas para producir recuerdo, no solo consumo.',
    detail: 'arte comestible',
    tone: 'rgba(214, 211, 209, 0.18)',
  },
];

const atelierMetrics = [
  { label: 'Misión', value: 'elevar el dulce' },
  { label: 'Visión', value: 'atelier global' },
  { label: 'Valores', value: 'detalle y rigor' },
  { label: 'Filosofía', value: 'diseño sensorial' },
];

const AboutLayerCard = ({ item }: { item: AboutLayer }) => {
  return (
    <article className="relative min-h-[13.5rem] overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_-50px_rgba(28,25,23,0.22)] lg:p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36">
        <div
          className="mx-auto h-full w-[75%] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${item.tone} 0%, rgba(255,255,255,0) 72%)`,
          }}
        />
      </div>

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-stone-400">
            {item.kicker}
          </p>
          <h3 className="mt-5 max-w-[13ch] text-[1.9rem] font-light leading-tight tracking-tight text-stone-900">
            {item.title}
          </h3>
        </div>

        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 md:flex">
          <div className="h-5 w-5 rounded-full bg-stone-200" />
        </div>
      </div>

      <div className="relative mt-5">
        <p className="max-w-lg text-[0.96rem] font-light leading-relaxed text-stone-600">
          {item.body}
        </p>

        <div className="mt-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-stone-500">
          <span className="h-px w-10 bg-stone-300" />
          <span>{item.detail}</span>
        </div>
      </div>
    </article>
  );
};

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(min-width: 1024px)', () => {
        const getTravel = () => Math.max(track.scrollHeight - viewport.clientHeight, 0);

        gsap.set(track, { y: 0 });

        const tween = gsap.to(track, {
          y: () => -getTravel(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top+=88',
            end: () => `+=${Math.max(getTravel() + 320, window.innerHeight)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden border-t border-stone-200 bg-white px-6 py-20 md:px-10 md:py-22 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-14 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(41,37,36,0.08)_0%,_rgba(255,255,255,0)_72%)] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-0 hidden h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-6 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent lg:block" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
        <div className="relative z-10 lg:flex lg:h-[calc(100vh-10rem)] lg:flex-col lg:justify-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-stone-400">
            02 - Maison
          </p>

          <h2 className="mt-6 text-5xl font-light uppercase leading-none tracking-tighter text-stone-900 md:text-7xl">
            Nuestra
            <br />
            esencia
          </h2>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-stone-600 md:text-[1.15rem]">
            La sección condensa lo que sostiene a la marca: una misión clara,
            una visión ambiciosa, valores operativos y una filosofía que
            entiende al dulce como experiencia de diseño.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            {atelierMetrics.map((metric) => (
              <div key={metric.label} className="border-t border-stone-200 pt-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-stone-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm font-light uppercase tracking-[0.22em] text-stone-700">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:border-l lg:border-black lg:pl-10">
          <div
            ref={viewportRef}
            className="relative lg:h-[calc(100vh-10rem)] lg:overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 -top-8 z-10 hidden h-36 bg-gradient-to-b from-white via-white/95 via-white/80 to-transparent lg:block" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-8 z-10 hidden h-36 bg-gradient-to-t from-white via-white/95 via-white/80 to-transparent lg:block" />

            <div ref={trackRef} className="flex flex-col gap-5 lg:gap-6 lg:py-24">
              {aboutLayers.map((item) => (
                <AboutLayerCard key={item.kicker} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
