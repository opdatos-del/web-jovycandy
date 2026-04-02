import React from 'react';
import { motion } from 'motion/react';

export const Certifications: React.FC = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[linear-gradient(180deg,#ff6a86_0%,#ff7f69_100%)] py-16 sm:py-20 lg:py-24">
      <div className="page-shell-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.5em] text-white/75">
            Nuestros Certificados
          </h2>
          <h3 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl">
            Calidad <br />
            <span className="font-serif italic text-white/75">Garantizada</span>
          </h3>
          <p className="max-w-xl text-base font-medium leading-relaxed text-white/88 md:text-lg">
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
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-8"
        >
          <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-[#ffd8cd] bg-[#fffaf6] p-4 shadow-sm transition-colors duration-500 hover:border-[#ffc3b3] hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/certifications/sgs.png"
              alt="SGS"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-[#ffd8cd] bg-[#fffaf6] p-4 shadow-sm transition-colors duration-500 hover:border-[#ffc3b3] hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/certifications/kosher.webp"
              alt="Kosher"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          <div className="group relative col-span-2 mx-auto flex aspect-square w-full max-w-[11rem] items-center justify-center overflow-hidden rounded-2xl border border-[#ffd8cd] bg-[#fffaf6] p-4 shadow-sm transition-colors duration-500 hover:border-[#ffc3b3] hover:shadow-md sm:col-span-1 sm:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/certifications/halal.png"
              alt="Halal"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
