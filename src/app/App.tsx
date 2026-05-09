import { useEffect } from 'react';
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

  return (
    <ErrorBoundary>
      <main className="relative overflow-x-clip bg-[#fff5d4] selection:bg-stone-900 selection:text-white">
        <AppScrollProgress />
        <AppNavbar
          isMobileMenuOpen={isMobileMenuOpen}
          onContactClick={openContactModal}
          onLocationClick={openLocationModal}
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
