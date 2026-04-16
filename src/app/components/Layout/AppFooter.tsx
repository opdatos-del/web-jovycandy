import { AppSocialLinks } from '../Navbar/AppSocialLinks';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const AppFooter = () => (
  <footer className="app-footer bg-gradient-to-b from-[#00afaa] to-[#008b7f] text-white py-12 sm:py-16 lg:py-20">
    {/* Top Section - Logo */}
    <div className="pb-6 sm:pb-8 lg:pb-10">
      <div className="page-shell">
        <ScrollReveal>
          <div className="app-footer-logo-section flex justify-center">
            <img
              src="/logo.png"
              alt="Jovy"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              draggable={false}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Middle Section - Navigation and Social */}
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 pb-8 sm:pb-10 lg:pb-12">
      <div className="page-shell">
        {/* Navigation Menu */}
        <ScrollReveal>
          <nav className="app-footer-nav flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
            <a href="#inicio" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Inicio
            </a>
            <a href="#nuestra-esencia" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Quiénes Somos
            </a>
            <a href="#tienda" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Tienda
            </a>
            <a href="#tienda" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Líneas
            </a>
            <a href="#certificaciones" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Certificaciones
            </a>
            <a href="#contacto" className="app-footer-nav-link text-sm sm:text-base lg:text-lg hover:text-white/75 transition-colors font-medium">
              Contacto
            </a>
          </nav>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal>
          <div className="app-footer-social flex justify-center mt-4 sm:mt-5 lg:mt-6">
            <AppSocialLinks
              className="flex h-10 sm:h-12 lg:h-14 w-10 sm:w-12 lg:w-14 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 text-base sm:text-lg"
              containerClassName="flex items-center gap-3 sm:gap-4 lg:gap-6"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Social Media Feed Section */}
    <div className="pb-8 sm:pb-10 lg:pb-12">
      <div className="page-shell">
        <ScrollReveal>
          <div className="app-footer-feed">
            <h3 className="text-center text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-widest mb-4 sm:mb-6 lg:mb-8">
              Síguenos en Redes
            </h3>
            
            {/* Social Media Grid - Facebook & Instagram */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-xl mx-auto">
              {/* Instagram */}
              <div className="aspect-video sm:aspect-square bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="text-center px-3">
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-white group-hover:text-white/80 transition-colors">
                    Instagram
                  </p>
                  <p className="text-xs text-white/60 mt-1 hidden sm:block">Últimas publicaciones</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="aspect-video sm:aspect-square bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="text-center px-3">
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-white group-hover:text-white/80 transition-colors">
                    Facebook
                  </p>
                  <p className="text-xs text-white/60 mt-1 hidden sm:block">Últimas actualizaciones</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Bottom Section - Policies and Copyright */}
    <div className="pt-6 sm:pt-8 lg:pt-10">
      <div className="page-shell">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Policies Links */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-between items-center text-center sm:text-left">
              <a href="#politica-inocuidad" className="text-xs sm:text-sm font-semibold uppercase tracking-widest hover:text-white/75 transition-colors">
                Política de Inocuidad y Calidad
              </a>
              <a href="#politica-ambiental" className="text-xs sm:text-sm font-semibold uppercase tracking-widest hover:text-white/75 transition-colors">
                Política Ambiental
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center pt-3 sm:pt-4">
              <p className="text-xs text-white/70 uppercase tracking-wide">
                &copy; 2026 Jovy. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </footer>
);
