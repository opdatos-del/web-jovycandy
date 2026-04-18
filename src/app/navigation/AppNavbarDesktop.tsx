import { navActionClassName, navSocialClassName } from '../config/navigation';
import { AppSocialLinks } from './AppSocialLinks';

type AppNavbarDesktopProps = {
  onContactClick: () => void;
  onLocationClick: () => void;
};

export const AppNavbarDesktop = ({
  onContactClick,
  onLocationClick,
}: AppNavbarDesktopProps) => (
  <div className="hidden items-center gap-3 lg:flex">
    <div className="flex gap-3">
      <button type="button" onClick={onContactClick} className={navActionClassName}>
        Contacto
      </button>
      <button type="button" onClick={onLocationClick} className={navActionClassName}>
        Ubicacion
      </button>
    </div>

    <AppSocialLinks className={navSocialClassName} />
  </div>
);
