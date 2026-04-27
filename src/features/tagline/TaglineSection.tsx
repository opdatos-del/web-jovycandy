import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Instagram, Music2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  '/eventos/1.webp',
  '/eventos/4.webp',
  '/eventos/8.webp',
  '/eventos/11.webp',
];

const casaJovySocials = [
  {
    label: 'Instagram',
    handle: '@casajovy.mx',
    detail: 'Vida diaria, cocina, montaje y detalles del espacio.',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    handle: '/CasaJovyMX',
    detail: 'Agenda, eventos privados y novedades de la casa.',
    Icon: Facebook,
  },
  {
    label: 'TikTok',
    handle: '@casa.jovy',
    detail: 'Recorridos, recetas y momentos compartidos.',
    Icon: Music2,
  },
];

export const TaglineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const closeModal = () => {
    setActiveImage(null);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray<HTMLElement>('[data-casa-jovy-column]');

      gsap.fromTo(
        columns,
        {
          opacity: 0,
          y: 28,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const bodyStyle = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = bodyStyle.overflow;
    const previousPaddingRight = bodyStyle.paddingRight;

    bodyStyle.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      bodyStyle.overflow = previousOverflow;
      bodyStyle.paddingRight = previousPaddingRight;
    };
  }, [activeImage]);

  return (
    <section
      ref={sectionRef}
      className="tagline-section-bg relative overflow-hidden bg-[#f3e4da] py-0"
    >
      <div ref={contentRef} className="relative z-10 w-full">
        <div className="grid min-h-[42rem] lg:min-h-[39rem] lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
          <article
            data-casa-jovy-column
            className="flex flex-col justify-center border-b border-white/30 px-6 py-10 sm:px-8 md:px-10 lg:min-h-[39rem] lg:border-b-0 lg:border-r lg:border-white/30 lg:px-10 xl:px-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#9b7660]">
              Casa Jovy
            </p>
            <h2 className="mt-4 max-w-[13ch] text-[2.3rem] font-black leading-[0.92] tracking-[-0.05em] text-[#231813] sm:text-[2.55rem] lg:text-[2.8rem]">
              Donde la marca se vive desde adentro.
            </h2>
            <div className="mt-6 max-w-[33rem] space-y-4 text-sm leading-7 text-[#694f43] sm:text-[0.94rem]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere,
                justo vitae dictum feugiat, mauris arcu volutpat lectus, eu interdum
                mauris urna id risus.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Integer viverra, libero vel hendrerit
                condimentum, nibh risus dapibus nunc, non laoreet mi lorem non elit.
              </p>
            </div>
          </article>

          <article
            data-casa-jovy-column
            className="flex flex-col justify-center border-b border-white/30 px-6 py-10 sm:px-8 md:px-10 lg:min-h-[39rem] lg:border-b-0 lg:border-r lg:border-white/30 lg:px-10 xl:px-12"
          >
            <div className="flex h-full flex-col justify-center">
              <div className="mb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#9b7660]">
                  Galeria
                </p>
                <h3 className="mt-3 text-[2rem] font-black leading-[0.94] tracking-[-0.05em] text-[#231813] sm:text-[2.2rem] lg:text-[2.35rem]">
                  Casa Jovy en imagenes
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {galleryImages.map((src, index) => (
                  <button
                    type="button"
                    key={`${src}-${index}`}
                    onClick={() =>
                      setActiveImage({
                        src,
                        alt: `Casa Jovy galeria ${index + 1}`,
                      })
                    }
                    aria-label={`Ver imagen completa Casa Jovy galeria ${index + 1}`}
                    className="aspect-square overflow-hidden bg-[#e9d3c4]"
                  >
                    <img
                      src={src}
                      alt={`Casa Jovy galeria ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article
            data-casa-jovy-column
            className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-10 lg:min-h-[39rem] lg:px-10 xl:px-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#9b7660]">
              Redes Casa Jovy
            </p>
            <h3 className="mt-4 max-w-[14ch] text-[2rem] font-black leading-[0.94] tracking-[-0.05em] text-[#231813] sm:text-[2.2rem] lg:text-[2.35rem]">
              Una comunidad distinta a Jovy.
            </h3>

            <div className="mt-7 space-y-0 border-t border-white/40">
              {casaJovySocials.map(({ label, handle, detail, Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 border-b border-white/40 py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/55 text-[#87553b] shadow-[0_6px_18px_rgba(101,70,49,0.08)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b7660]">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-black tracking-[-0.03em] text-[#231813]">
                      {handle}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#694f43]">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      {activeImage &&
        createPortal(
          <div
            className="events-modal fixed inset-0 z-[120] flex items-center justify-center bg-black/80"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            onClick={closeModal}
          >
            <div className="relative flex h-full w-full max-w-[min(96vw,var(--modal-max-width-xl))] items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="events-modal-image w-auto max-w-full rounded-xl bg-white object-contain shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:rounded-2xl"
                draggable={false}
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
