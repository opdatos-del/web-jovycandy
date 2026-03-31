import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/sections/hero/Hero';
import { Intro } from './components/sections/Intro';
import { ScrollLogo } from './components/sections/ScrollLogo';
import { Gummies } from './components/sections/Gummies';
import { HardCandies } from './components/sections/HardCandies';
import { Chili } from './components/sections/Chili';
import { Process } from './components/sections/Process';
import { Certifications } from './components/sections/Certifications';
import { About } from './components/sections/brand/About';
import { CategoryGrid } from './components/sections/products/category-grid/CategoryGrid';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate premium loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-stone-900 font-mono text-xs tracking-[1em] uppercase"
        >
          Iniciando Experiencia
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative bg-white selection:bg-stone-900 selection:text-white cursor-none">
      <CustomCursor />
      {/* Custom Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-stone-900 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 bg-transparent">
        <img
          src="/logo.png"
          alt="Jovy"
          className="h-15 w-auto object-contain"
          draggable={false}
        />
        <div className="flex gap-8 text-black text-xs uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-white transition-colors">Opción 1</a>
          <a href="#" className="hover:text-white transition-colors">Opción 2</a>
          <a href="#" className="hover:text-white transition-colors">Opción 3</a>
        </div>
      </nav>

      <Hero />
      <Certifications />
      <CategoryGrid />
      <Intro />
      <Gummies />
      <HardCandies />
      <Chili />
      <Process />
      <About />

      
      {/* CTA Section */}
      <section className="py-32 w-full bg-white flex flex-col items-center justify-center border-t border-stone-200">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-stone-900 text-4xl md:text-6xl font-light tracking-tighter text-center px-6"
        >
          El sabor también puede ser diseño.
        </motion.h2>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 px-12 py-4 border border-stone-200 text-stone-900 uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-all duration-500"
        >
          Contactar con el Atelier
        </motion.button>
      </section>
      <ScrollLogo />
      <footer className="py-12 px-8 border-t border-stone-200 bg-white text-center">
        <p className="text-stone-500 text-xs uppercase tracking-widest">
          &copy; 2026 Jovy — El sabor también puede ser diseño.
        </p>
      </footer>
    </main>
  );
}
