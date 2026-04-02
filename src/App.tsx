import { useState } from 'react';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';

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

const NAV_ACTION_CLASSNAME =
  'inline-flex items-center justify-center rounded-full border border-white/40 bg-white/12 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900';

const NAV_SOCIAL_CLASSNAME =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const openContactModal = () => {
    setIsMobileMenuOpen(false);
    setActiveModal('contact');
  };

  const openLocationModal = () => {
    setIsMobileMenuOpen(false);
    setActiveModal('location');
  };

  const closeModal = () => setActiveModal(null);

  return (
    <main className="relative overflow-x-clip bg-[#fff5d4] selection:bg-stone-900 selection:text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-stone-900"
        style={{ scaleX }}
      />

      <nav className="fixed inset-x-0 top-0 z-40">
        <div className="page-shell-wide py-3 sm:py-4 lg:py-6">
          <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-5 lg:rounded-none lg:border-transparent lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
            <img
              src="/logo.png"
              alt="Jovy"
              className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-15"
              draggable={false}
            />

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex gap-3">
                <button type="button" onClick={openContactModal} className={NAV_ACTION_CLASSNAME}>
                  Contacto
                </button>
                <button type="button" onClick={openLocationModal} className={NAV_ACTION_CLASSNAME}>
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
                    className={NAV_SOCIAL_CLASSNAME}
                  >
                    <Icon size={16} strokeWidth={2.1} />
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-stone-900 lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="mt-3 overflow-hidden rounded-[1.5rem] border border-white/20 bg-stone-900/15 p-3 shadow-[0_24px_64px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:hidden"
              >
                <div className="flex flex-col gap-3">
                  <button type="button" onClick={openContactModal} className={`${NAV_ACTION_CLASSNAME} w-full`}>
                    Contacto
                  </button>
                  <button type="button" onClick={openLocationModal} className={`${NAV_ACTION_CLASSNAME} w-full`}>
                    Ubicacion
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className={NAV_SOCIAL_CLASSNAME}
                      >
                        <Icon size={16} strokeWidth={2.1} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
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

      <section className="bg-[#fff3c7] py-20 sm:py-24 lg:py-32">
        <div className="page-shell flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-center text-3xl font-light tracking-tighter text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            El sabor tambien puede ser diseno.
          </motion.h2>
          <motion.button
            type="button"
            onClick={openContactModal}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 inline-flex w-full items-center justify-center border border-[#ff7f69] px-8 py-4 text-xs uppercase tracking-[0.3em] text-stone-900 transition-all duration-500 hover:bg-[#0f3daa] hover:text-white sm:mt-12 sm:w-auto sm:px-12"
          >
            Contactar con el atelier
          </motion.button>
        </div>
      </section>

      <SectionColorTransition fromColor="#fff3c7" toColor="#edf5ff" heightClassName="h-12 md:h-14 lg:h-16" />
      <ScrollLogo />

      <SectionColorTransition fromColor="#edf5ff" toColor="#00afaa" heightClassName="h-10 md:h-12 lg:h-14" />

      <footer className="bg-[#00afaa] py-10 text-center sm:py-12">
        <div className="page-shell">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/80 sm:text-xs">
              &copy; 2026 Jovy - El sabor tambien puede ser diseno.
            </p>
          </ScrollReveal>
        </div>
      </footer>

      <ContactModal open={activeModal === 'contact'} onClose={closeModal} />
      <LocationModal
        open={activeModal === 'location'}
        onClose={closeModal}
        onOpenContact={openContactModal}
      />
    </main>
  );
}
