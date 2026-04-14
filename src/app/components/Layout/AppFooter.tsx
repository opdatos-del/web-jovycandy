import { AppSocialLinks } from '../Navbar/AppSocialLinks';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const AppFooter = () => (
  <footer className="app-footer bg-gradient-to-b from-[#00afaa] to-[#008b7f] text-white">
    <div className="page-shell">
      {/* Logo Section */}
      <ScrollReveal>
        <div className="app-footer-logo-section mb-8 flex justify-center">
          <img
            src="/logo.png"
            alt="Jovy"
            className="h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            draggable={false}
          />
        </div>
      </ScrollReveal>

      {/* Navigation Menu */}
      <ScrollReveal>
        <nav className="app-footer-nav mb-8 flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="#inicio" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Inicio
          </a>
          <a href="#nuestra-esencia" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Quiénes Somos
          </a>
          <a href="#tienda" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Tienda
          </a>
          <a href="#tienda" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Líneas
          </a>
          <a href="#certificaciones" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Certificaciones
          </a>
          <a href="#contacto" className="app-footer-nav-link hover:text-white/75 transition-colors">
            Contacto
          </a>
        </nav>
      </ScrollReveal>

      {/* Social Links */}
      <ScrollReveal>
        <div className="app-footer-social mb-8 flex justify-center">
          <AppSocialLinks
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30"
            containerClassName="flex items-center gap-3"
          />
        </div>
      </ScrollReveal>

      {/* Info Sections */}
      <ScrollReveal>
        <div className="app-footer-info mb-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:text-left">
          <div className="app-footer-info-item">
            <p className="text-sm font-semibold uppercase tracking-widest">Política de Inocuidad y Calidad</p>
          </div>
          <div className="app-footer-info-item">
            <p className="text-sm font-semibold uppercase tracking-widest">Política Ambiental</p>
          </div>
          <div className="app-footer-info-item">
            <p className="text-right text-sm font-semibold uppercase tracking-widest sm:text-left">
              &copy; 2026 Jovy
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Copyright and Credit */}
      <ScrollReveal>
        <div className="app-footer-bottom border-t border-white/20 pt-6 text-center">
          <p className="app-footer-copy uppercase text-white/80 text-xs sm:text-sm">
            Oye, no nada
          </p>
        </div>
      </ScrollReveal>
    </div>
  </footer>
);
