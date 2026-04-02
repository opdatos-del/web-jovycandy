import { AppNavbarDesktop } from './AppNavbarDesktop';
import { AppNavbarMobileMenu, AppNavbarMobileToggle } from './AppNavbarMobile';

type AppNavbarProps = {
  isMobileMenuOpen: boolean;
  onContactClick: () => void;
  onLocationClick: () => void;
  toggleMobileMenu: () => void;
};

export const AppNavbar = ({
  isMobileMenuOpen,
  onContactClick,
  onLocationClick,
  toggleMobileMenu,
}: AppNavbarProps) => (
  <nav className="fixed inset-x-0 top-0 z-40">
    <div className="page-shell-wide py-3 sm:py-4 lg:py-6">
      <div className="flex items-center justify-between gap-3 bg-transparent px-1 py-1 text-stone-900 sm:px-0 lg:px-0">
        <img
          src="/logo.png"
          alt="Jovy"
          className="h-10 w-auto object-contain drop-shadow-[0_8px_18px_rgba(68,54,40,0.12)] sm:h-11 md:h-12 lg:h-15"
          draggable={false}
        />

        <AppNavbarDesktop onContactClick={onContactClick} onLocationClick={onLocationClick} />
        <AppNavbarMobileToggle isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </div>

      <AppNavbarMobileMenu
        isOpen={isMobileMenuOpen}
        onContactClick={onContactClick}
        onLocationClick={onLocationClick}
      />
    </div>
  </nav>
);
