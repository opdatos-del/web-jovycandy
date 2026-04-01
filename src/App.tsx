import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

import { Hero } from './components/sections/hero/Hero';
import { UpcomingEvents } from './components/sections/UpcomingEvents';
import { Intro } from './components/sections/Intro';
import { ScrollLogo } from './components/sections/ScrollLogo';
import { Certifications } from './components/sections/Certifications';
import { About } from './components/sections/brand/About';
import { CategoryGrid } from './components/sections/products/category-grid/CategoryGrid';
import { ContactModal } from './components/ui/contact-modal';
import { LocationModal } from './components/ui/LocationModal';

type ActiveModal = 'contact' | 'location' | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const openContactModal = () => setActiveModal('contact');
  const openLocationModal = () => setActiveModal('location');
  const closeModal = () => setActiveModal(null);

  return (
    <main className="relative bg-white selection:bg-stone-900 selection:text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-stone-900"
        style={{ scaleX }}
      />

      <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-transparent p-8">
        <img src="/logo.png" alt="Jovy" className="h-15 w-auto object-contain" draggable={false} />

        <div className="flex gap-3 text-xs font-medium uppercase tracking-widest">
          <button
            type="button"
            onClick={openContactModal}
            className="rounded-full border border-white/40 bg-white/12 px-5 py-2.5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900"
          >
            Contacto
          </button>
          <button
            type="button"
            onClick={openLocationModal}
            className="rounded-full border border-white/40 bg-white/12 px-5 py-2.5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900"
          >
            Ubicacion
          </button>
        </div>
      </nav>

      <Hero />
      <UpcomingEvents />
      <Certifications />
      <CategoryGrid />
      <Intro />
      <About />

      <section className="flex w-full flex-col items-center justify-center border-t border-stone-200 bg-white py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="px-6 text-center text-4xl font-light tracking-tighter text-stone-900 md:text-6xl"
        >
          El sabor tambien puede ser diseno.
        </motion.h2>
        <motion.button
          type="button"
          onClick={openContactModal}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-stone-200 px-12 py-4 text-xs uppercase tracking-widest text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-white"
        >
          Contactar con el atelier
        </motion.button>
      </section>

      <ScrollLogo />

      <footer className="border-t border-stone-200 bg-white px-8 py-12 text-center">
        <p className="text-xs uppercase tracking-widest text-stone-500">
          &copy; 2026 Jovy - El sabor tambien puede ser diseno.
        </p>
      </footer>

      <ContactModal open={activeModal === 'contact'} onClose={closeModal} />
      <LocationModal
        open={activeModal === 'location'}
        onClose={closeModal}
        onOpenContact={() => setActiveModal('contact')}
      />
    </main>
  );
}
