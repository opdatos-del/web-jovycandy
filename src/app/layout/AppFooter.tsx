import { footerPolicyLinks, footerSectionLinks } from '../config/navigation';
import { AppSocialLinks } from '../navigation/AppSocialLinks';
import { ScrollReveal } from '@/shared/ui/ScrollReveal';

type AppFooterProps = {
  onContactClick: () => void;
};

export const AppFooter = ({ onContactClick }: AppFooterProps) => (
  <footer className="app-footer bg-gradient-to-b from-[#00afaa] to-[#008b7f] text-white">
    <div className="pb-6 sm:pb-8 lg:pb-10">
      <div className="page-shell">
        <ScrollReveal>
          <div className="app-footer-logo-section flex justify-center">
            <img
              src="/logo.png"
              alt="Jovy"
              className="h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] sm:h-20 lg:h-24"
              draggable={false}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>

    <div className="flex flex-col gap-4 pb-8 sm:gap-6 sm:pb-10 lg:gap-8 lg:pb-12">
      <div className="page-shell">
        <ScrollReveal>
          <nav className="app-footer-nav flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
            {footerSectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="app-footer-nav-link text-sm font-medium transition-colors hover:text-white/75 sm:text-base lg:text-lg"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onContactClick}
              className="app-footer-nav-link text-sm font-medium transition-colors hover:text-white/75 sm:text-base lg:text-lg"
            >
              Contacto
            </button>
          </nav>
        </ScrollReveal>

        <ScrollReveal>
          <div className="app-footer-social mt-4 flex justify-center sm:mt-5 lg:mt-6">
            <AppSocialLinks
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base text-white transition-all hover:bg-white/30 sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14"
              containerClassName="flex items-center gap-3 sm:gap-4 lg:gap-6"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>

    <div className="pb-8 sm:pb-10 lg:pb-12">
      <div className="page-shell">
        <ScrollReveal>
          <div className="app-footer-feed">
            <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-widest sm:mb-6 sm:text-sm lg:mb-8 lg:text-base">
              Siguenos en Redes
            </h3>

            <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="group flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/40 sm:aspect-square">
                <div className="px-3 text-center">
                  <p className="text-xs font-semibold text-white transition-colors group-hover:text-white/80 sm:text-sm lg:text-base">
                    Instagram
                  </p>
                  <p className="mt-1 hidden text-xs text-white/60 sm:block">Ultimas publicaciones</p>
                </div>
              </div>

              <div className="group flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/40 sm:aspect-square">
                <div className="px-3 text-center">
                  <p className="text-xs font-semibold text-white transition-colors group-hover:text-white/80 sm:text-sm lg:text-base">
                    Facebook
                  </p>
                  <p className="mt-1 hidden text-xs text-white/60 sm:block">Ultimas actualizaciones</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>

    <div className="pt-6 sm:pt-8 lg:pt-10">
      <div className="page-shell">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left lg:gap-6">
              {footerPolicyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white/75 sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 text-center sm:pt-4">
              <p className="text-xs uppercase tracking-wide text-white/70">
                &copy; 2026 Jovy. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </footer>
);
