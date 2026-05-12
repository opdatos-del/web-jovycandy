import { useEffect, useRef } from 'react';
import { ContactModal } from '@/features/contact';
import { LocationModal } from '@/features/location/LocationModal';

import { AppFooter } from './layout/AppFooter';
import { AppScrollProgress } from './layout/AppScrollProgress';
import { AppSections } from './layout/AppSections';
import { useAppModals } from './hooks/useAppModals';
import { useMobileMenu } from './hooks/useMobileMenu';
import { AppNavbar } from './navigation/AppNavbar';
import { JovyEasterEgg } from '@/shared/ui/JovyEasterEgg';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { trackPageView } from '@/shared/services/page-analytics.service';

export default function App() {
  const scrollResetFrameRef = useRef<number | null>(null);

  useEffect(() => {
    console.log('%c¿Qué buscas aquí compa?', 'color: #FF0004; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
  }, []);

  useEffect(() => {
    trackPageView().catch((error) => {
      console.warn('[analytics] Failed to register page view:', error);
    });
  }, []);

  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  const {
    activeModal,
    openContactModal,
    openLocationModal,
    closeActiveModal,
  } = useAppModals({ onBeforeOpenModal: closeMobileMenu });

  const handleLogoClick = () => {
    closeMobileMenu();
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    let attempts = 0;

    if (scrollResetFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollResetFrameRef.current);
      scrollResetFrameRef.current = null;
    }

    root.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0 });
      root.scrollTop = 0;
      document.body.scrollTop = 0;
      attempts += 1;

      if (window.scrollY > 0 && attempts < 12) {
        scrollResetFrameRef.current = window.requestAnimationFrame(forceTop);
        return;
      }

      scrollResetFrameRef.current = null;
      root.style.scrollBehavior = previousScrollBehavior;
      document.body.style.scrollBehavior = '';
    };

    forceTop();
  };

  useEffect(() => () => {
    if (scrollResetFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollResetFrameRef.current);
    }
  }, []);

  return (
    <ErrorBoundary>
      <main className="relative overflow-x-clip bg-[#fff5d4] selection:bg-stone-900 selection:text-white">
        <AppScrollProgress />
        <AppNavbar
          isMobileMenuOpen={isMobileMenuOpen}
          onContactClick={openContactModal}
          onLocationClick={openLocationModal}
          onLogoClick={handleLogoClick}
          toggleMobileMenu={toggleMobileMenu}
        />
        <AppSections />
        <JovyEasterEgg />
        <AppFooter onContactClick={openContactModal} />

        <ContactModal open={activeModal === 'contact'} onClose={closeActiveModal} />
        <LocationModal
          open={activeModal === 'location'}
          onClose={closeActiveModal}
          onOpenContact={openContactModal}
        />
      </main>
    </ErrorBoundary>
  );
}
