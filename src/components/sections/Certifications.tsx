import React from 'react';
import { motion } from 'motion/react';

export const Certifications: React.FC = () => {
  return (
    <section className="relative z-20 flex w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#ff6a86_0%,#ff7f69_100%)] px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-white/75 text-xs uppercase tracking-[0.5em] mb-6 font-mono">
            Nuestros Certificados
          </h2>
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Calidad <br />
            <span className="text-white/75 italic font-serif">Garantizada</span>
          </h3>
          <p className="text-white/88 text-base md:text-lg font-medium leading-relaxed max-w-xl">
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
          <div className="aspect-square bg-[#fffaf6] border border-[#ffd8cd] rounded-2xl flex items-center justify-center p-4 group hover:border-[#ffc3b3] transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/certifications/sgs.png"
              alt="SGS"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          {/* Kosher */}
          <div className="aspect-square bg-[#fffaf6] border border-[#ffd8cd] rounded-2xl flex items-center justify-center p-4 group hover:border-[#ffc3b3] transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/certifications/kosher.webp"
              alt="Kosher"
              className="relative z-10 h-20 w-auto object-contain md:h-24 lg:h-28"
            />
          </div>

          {/* Halal */}
          <div className="aspect-square bg-[#fffaf6] border border-[#ffd8cd] rounded-2xl flex items-center justify-center p-4 group hover:border-[#ffc3b3] transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md md:col-span-1 col-span-2 md:w-full w-1/2 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff0e7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
