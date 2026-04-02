import { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

import { Hero } from './components/sections/hero/Hero';
import { HeroEventsTransition } from './components/sections/HeroEventsTransition';
import { SectionColorTransition } from './components/sections/SectionColorTransition';
import { UpcomingEvents } from './components/sections/upcoming-events';
import { Intro } from './components/sections/Intro';
import { ScrollLogo } from './components/sections/ScrollLogo';
import { Certifications } from './components/sections/Certifications';
import { About } from './components/sections/brand/About';
import { CategoryGrid } from './components/sections/products/category-grid/CategoryGrid';
import { ContactModal } from './components/ui/contact-modal';
import { LocationModal } from './components/ui/LocationModal';
import { ScrollReveal } from './components/ui/ScrollReveal';

type ActiveModal = 'contact' | 'location' | null;

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/jovymx/?locale=es_LA',
    label: 'Facebook de Jovy',
    Icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/jovymx',
    label: 'Instagram de Jovy',
    Icon: Instagram,
  },
] as const;

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
    <main className="relative bg-[#fff5d4] selection:bg-stone-900 selection:text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-stone-900"
        style={{ scaleX }}
      />

      <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-transparent p-8">
        <img src="/logo.png" alt="Jovy" className="h-15 w-auto object-contain" draggable={false} />

        <div className="flex items-center gap-3">
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

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900"
              >
                <Icon size={16} strokeWidth={2.1} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Hero />
      <HeroEventsTransition />
      <UpcomingEvents />
      <SectionColorTransition fromColor="#fff5d4" toColor="#ff6a86" heightClassName="h-14 md:h-16 lg:h-20" />
      <Certifications />
      <SectionColorTransition fromColor="#ff7f69" toColor="#ffffff" heightClassName="h-14 md:h-16 lg:h-20" />
      <CategoryGrid />
      <SectionColorTransition fromColor="#ffffff" toColor="#e8fbf7" heightClassName="h-12 md:h-14 lg:h-16" />
      <Intro />
      <SectionColorTransition fromColor="#e8fbf7" toColor="#fff0ec" heightClassName="h-12 md:h-14 lg:h-16" />
      <About />

      <SectionColorTransition fromColor="#fff0ec" toColor="#fff3c7" heightClassName="h-12 md:h-14 lg:h-16" />

      <section className="flex w-full flex-col items-center justify-center bg-[#fff3c7] py-32">
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
          className="mt-12 border border-[#ff7f69] px-12 py-4 text-xs uppercase tracking-widest text-stone-900 transition-all duration-500 hover:bg-[#0f3daa] hover:text-white"
        >
          Contactar con el atelier
        </motion.button>
      </section>

      <SectionColorTransition fromColor="#fff3c7" toColor="#edf5ff" heightClassName="h-12 md:h-14 lg:h-16" />
      <ScrollLogo />

      <SectionColorTransition fromColor="#edf5ff" toColor="#00afaa" heightClassName="h-10 md:h-12 lg:h-14" />

      <footer className="bg-[#00afaa] px-8 py-12 text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-white/80">
            &copy; 2026 Jovy - El sabor tambien puede ser diseno.
          </p>
        </ScrollReveal>
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
