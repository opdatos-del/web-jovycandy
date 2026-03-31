import React from 'react';
import { motion } from 'motion/react';

export const Certifications: React.FC = () => {
  return (
    <section className="relative w-full bg-stone-50 pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden z-20">
      <div className="pointer-events-none absolute left-0 top-0 w-full h-24 md:h-28 -translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 C240,120 520,0 780,40 C1040,80 1240,100 1440,40 L1440,0 L0,0 Z"
            fill="#00AFAA"
          />
        </svg>
      </div>
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-stone-500 text-xs uppercase tracking-[0.5em] mb-6 font-mono">
            Nuestros Certificados
          </h2>
          <h3 className="text-stone-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Calidad <br />
            <span className="text-stone-500 italic font-serif">Garantizada</span>
          </h3>
          <p className="text-stone-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Cumplimos con los más altos estándares de calidad que satisfacen a miles de personas en los
            mercados nacionales e internacionales. Contamos con normas de aseguramiento de calidad,
            protocolos y procedimientos que incluyen cuidadosas inspecciones en todas las fases de nuestra
            operación, para asegurar que solo los productos de la más alta calidad lleguen a ti.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* SGS */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex items-center justify-center p-4 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/certifications/sgs.png"
              alt="SGS"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          {/* Kosher */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex items-center justify-center p-4 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/certifications/kosher.webp"
              alt="Kosher"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          {/* Halal */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex items-center justify-center p-4 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md md:col-span-1 col-span-2 md:w-full w-1/2 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
