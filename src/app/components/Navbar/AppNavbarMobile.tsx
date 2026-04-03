import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import {
  mobileMenuPanelClassName,
  navActionClassName,
  navMenuButtonClassName,
  navSocialClassName,
} from '../../constants/navigation.constants';
import { AppSocialLinks } from './AppSocialLinks';

type AppNavbarMobileCommonProps = {
  isOpen: boolean;
  onContactClick: () => void;
  onLocationClick: () => void;
};

type AppNavbarMobileToggleProps = Pick<AppNavbarMobileCommonProps, 'isOpen'> & {
  toggleMobileMenu: () => void;
};

export const AppNavbarMobileToggle = ({
  isOpen,
  toggleMobileMenu,
}: AppNavbarMobileToggleProps) => (
  <button
    type="button"
    onClick={toggleMobileMenu}
    className={navMenuButtonClassName}
    aria-expanded={isOpen}
    aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
  >
    {isOpen ? <X size={18} /> : <Menu size={18} />}
  </button>
);

export const AppNavbarMobileMenu = ({
  isOpen,
  onContactClick,
  onLocationClick,
}: AppNavbarMobileCommonProps) => (
  <AnimatePresence>
    {isOpen ? (
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className={`${mobileMenuPanelClassName} will-change-transform`}
      >
        <div className="flex flex-col gap-3">
          <button type="button" onClick={onContactClick} className={`${navActionClassName} w-full`}>
            Contacto
          </button>
          <button type="button" onClick={onLocationClick} className={`${navActionClassName} w-full`}>
            Ubicacion
          </button>

          <AppSocialLinks
            className={navSocialClassName}
            containerClassName="flex items-center justify-center gap-2 pt-1"
          />
        </div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
