import React from 'react';
import { motion } from 'motion/react';

type CertificationItem = {
  src: string;
  pdf: string;
  alt: string;
  imageClassName: string;
  imageMaxWidth: string;
  cardClassName?: string;
};

const certificationItems: CertificationItem[] = [
  {
    src: '/certifications/sgs.webp',
    pdf: '/certifications/MXMEX_553119308_CertificateFSSC_Final.pdf',
    alt: 'SGS',
    cardClassName: 'col-span-1',
    imageClassName:
      'w-[95%] object-contain sm:w-[96%] lg:w-[98%]',
    imageMaxWidth: 'clamp(10rem, calc(14rem * var(--content-scale)), calc(20rem * var(--display-scale)))',
  },
  {
    src: '/certifications/Kosher_icon.webp',
    pdf: '/certifications/Kosher.pdf',
    alt: 'Kosher',
    cardClassName: 'col-span-1',
    imageClassName:
      'w-[95%] object-contain sm:w-[96%] lg:w-[98%]',
    imageMaxWidth: 'clamp(9.5rem, calc(13rem * var(--content-scale)), calc(19rem * var(--display-scale)))',
  },
  {
    src: '/certifications/halal.webp',
    pdf: '/certifications/IH-634.2024.C06.S1-Halal.pdf',
    alt: 'Halal',
    cardClassName: 'col-span-1',
    imageClassName:
      'w-[95%] object-contain sm:w-[96%] lg:w-[98%]',
    imageMaxWidth: 'clamp(10rem, calc(13.5rem * var(--content-scale)), calc(19.5rem * var(--display-scale)))',
  },
];

const certificationCardClassName =
  'certification-card group relative flex aspect-square items-center justify-center rounded-full';

export const Certifications: React.FC = () => {
  return (
    <section className="certifications-section relative z-20 overflow-hidden bg-[linear-gradient(180deg,#ff6a86_0%,#ff7f69_100%)]">
      <div className="flex justify-center px-4 pt-8 sm:pt-10 lg:pt-12">
        <h2 className="font-mono text-[clamp(0.72rem,0.5vw+0.62rem,1.08rem)] uppercase tracking-[0.35em] text-white/80 opacity-90">
          Certificaciones
        </h2>
      </div>
      <div className="certifications-layout page-shell-wide grid items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="certifications-copy flex flex-col"
        >
          <h2 className="certifications-eyebrow mb-6 text-sm font-mono uppercase text-white/75 sm:text-base">
            Nuestros Certificados.
          </h2>
          <h3 className="certifications-title mb-6 font-bold leading-tight tracking-tight text-white">
            Calidad Garantizada
          </h3>
          <p className="certifications-body max-w-[min(92vw,calc(54rem*var(--content-scale)))] font-medium leading-relaxed text-justify text-white/88">
            Cumplimos con los más altos estándares de calidad que satisfacen a miles de personas en los mercados nacionales e internacionales. Contamos con normas de aseguramiento de calidad, protocolos y procedimientos que incluyen cuidadosas inspecciones en todas las fases de nuestra operación, para asegurar que solo los productos de la más alta calidad lleguen a ti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          viewport={{ once: true }}
          className="certifications-grid mx-auto grid"
        >
          <p className="col-span-full mb-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/85 sm:hidden">
            Toca un certificado para abrir su PDF
          </p>

          {certificationItems.map((item, index) => (
            <motion.a
              key={item.alt}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver certificado PDF de ${item.alt}`}
              title={`Abrir certificado de ${item.alt}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.15 }}
              viewport={{ once: true }}
              className={`${certificationCardClassName} ${item.cardClassName ?? ''} cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ff7b6c]`}
            >
              <span className="pointer-events-none absolute -top-2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1 rounded-full bg-white/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#98504f] opacity-0 shadow-[0_6px_16px_rgba(110,37,54,0.22)] transition-all duration-200 group-hover:-translate-y-0 group-hover:opacity-100 group-focus-visible:-translate-y-0 group-focus-visible:opacity-100 sm:block">
                Clic para ver PDF
              </span>

              <img
                src={item.src}
                alt={item.alt}
                className={`relative z-10 ${item.imageClassName}`}
                style={{ maxWidth: item.imageMaxWidth }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
