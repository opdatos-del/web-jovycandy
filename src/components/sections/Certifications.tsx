import React from 'react';
import { motion } from 'motion/react';

type CertificationItem = {
  src: string;
  alt: string;
  imageClassName: string;
  cardClassName?: string;
};

const certificationItems: CertificationItem[] = [
  {
    src: '/certifications/sgs.png',
    alt: 'SGS',
    cardClassName: 'col-span-2 sm:col-span-1',
    imageClassName:
      'w-[72%] max-w-[9.5rem] object-contain sm:w-[68%] sm:max-w-[10rem] lg:w-[72%] lg:max-w-[12.5rem] xl:max-w-[13.5rem]',
  },
  {
    src: '/certifications/Kosher_icon.png',
    alt: 'Kosher',
    cardClassName: 'col-span-2 sm:col-span-1',
    imageClassName:
      'w-[70%] max-w-[9rem] object-contain sm:w-[66%] sm:max-w-[9.5rem] lg:w-[70%] lg:max-w-[11.5rem] xl:max-w-[12.5rem]',
  },
  {
    src: '/certifications/halal.png',
    alt: 'Halal',
    cardClassName: 'col-span-2 col-start-2 sm:col-span-1 sm:col-start-auto',
    imageClassName:
      'w-[72%] max-w-[8.75rem] object-contain sm:w-[68%] sm:max-w-[9.5rem] lg:w-[72%] lg:max-w-[12rem] xl:max-w-[13rem]',
  },
];

const certificationCardClassName =
  'certification-card group relative flex aspect-square items-center justify-center overflow-hidden border border-[#ffd8cd] bg-[#fffaf6] shadow-sm transition-colors duration-500 hover:border-[#ffc3b3] hover:shadow-md';

export const Certifications: React.FC = () => {
  return (
    <section className="certifications-section relative z-20 overflow-hidden bg-[linear-gradient(180deg,#ff6a86_0%,#ff7f69_100%)]">
      <div className="certifications-layout page-shell-wide grid items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="certifications-copy flex flex-col"
        >
          <h2 className="certifications-eyebrow mb-6 text-sm font-mono uppercase text-white/75 sm:text-base">
            Nuestros Certificados
          </h2>
          <h3 className="certifications-title font-bold leading-tight tracking-tight text-white">
            Calidad <br />
            <span className="font-serif italic text-white/75">Garantizada</span>
          </h3>
          <p className="certifications-body max-w-xl font-medium leading-relaxed text-white/88">
            Cumplimos con los mas altos estandares de calidad que satisfacen a miles de personas en los
            mercados nacionales e internacionales. Contamos con normas de aseguramiento de calidad,
            protocolos y procedimientos que incluyen cuidadosas inspecciones en todas las fases de nuestra
            operacion, para asegurar que solo los productos de la mas alta calidad lleguen a ti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          viewport={{ once: true }}
          className="certifications-grid mx-auto grid"
        >
          {certificationItems.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.15 }}
              viewport={{ once: true }}
              className={`${certificationCardClassName} ${item.cardClassName ?? ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={item.src}
                alt={item.alt}
                className={`relative z-10 ${item.imageClassName}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
