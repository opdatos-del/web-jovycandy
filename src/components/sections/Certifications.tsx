import React from 'react';
import { motion } from 'motion/react';

export const Certifications: React.FC = () => {
  return (
    <section className="w-full bg-stone-50 py-24 md:py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden z-20 relative border-t border-stone-200">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-stone-500 text-xs uppercase tracking-[0.5em] mb-6 font-mono">
            Nuestros Certificados.
          </h2>
          <h3 className="text-stone-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Calidad <br />
            <span className="text-stone-500 italic font-serif">Garantizada</span>
          </h3>
          <p className="text-stone-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Cumplimos con los más altos estándares de calidad que satisfacen a miles de personas en los mercados nacionales e internacionales. Contamos con normas de aseguramiento de calidad, protocolos y procedimientos que incluyen cuidadosas inspecciones en todas las fases de nuestra operación, para asegurar que solo los productos de la más alta calidad lleguen a ti.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* SGS FSSC 22000 Mockup */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex flex-col items-center justify-center p-6 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 z-10 bg-stone-50">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-stone-900 font-bold text-lg md:text-xl z-10 tracking-widest">SGS</span>
            <span className="text-[10px] md:text-xs font-mono text-stone-500 mt-1 z-10">FSSC 22000</span>
          </div>

          {/* OU Kosher Mockup */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex flex-col items-center justify-center p-6 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-stone-700 flex items-center justify-center mb-4 z-10 bg-stone-50">
              <span className="text-stone-900 font-black text-2xl md:text-3xl">U</span>
            </div>
            <span className="text-stone-900 font-bold text-sm md:text-base z-10 tracking-widest uppercase">Kosher</span>
          </div>

          {/* Halal Mockup */}
          <div className="aspect-square bg-white border border-stone-200 rounded-2xl flex flex-col items-center justify-center p-6 group hover:border-stone-300 transition-colors duration-500 relative overflow-hidden shadow-sm hover:shadow-md md:col-span-1 col-span-2 md:w-full w-1/2 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 z-10 bg-stone-50">
              <span className="text-stone-700 font-bold text-xl md:text-2xl">حلال</span>
            </div>
            <span className="text-stone-900 font-bold text-sm md:text-base tracking-widest z-10">HALAL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
