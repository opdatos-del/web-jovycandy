import { AppNavbarDesktop } from './AppNavbarDesktop';
import { AppNavbarMobileMenu, AppNavbarMobileToggle } from './AppNavbarMobile';
import { BRAND_LOGO_PATH } from '@/shared/assets/publicAssets';

type AppNavbarProps = {
  isMobileMenuOpen: boolean;
  onContactClick: () => void;
  onLocationClick: () => void;
  onLogoClick: () => void;
  toggleMobileMenu: () => void;
};

export const AppNavbar = ({
  isMobileMenuOpen,
  onContactClick,
  onLocationClick,
  onLogoClick,
  toggleMobileMenu,
}: AppNavbarProps) => (
  <nav className="fixed inset-x-0 top-0 z-40">
    <div className="app-navbar-shell page-shell-wide">
      <div className="app-navbar-inner flex items-center justify-between text-stone-900">
        <button type="button" onClick={onLogoClick} aria-label="Ir al inicio" className="cursor-pointer">
          <img
            src={BRAND_LOGO_PATH}
            alt="Jovy"
            className="app-navbar-logo w-auto object-contain drop-shadow-[0_8px_18px_rgba(68,54,40,0.12)]"
            draggable={false}
          />
        </button>

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
