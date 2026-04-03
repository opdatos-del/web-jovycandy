import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const AppFooter = () => (
  <footer className="app-footer bg-[#00afaa] text-center">
    <div className="page-shell">
      <ScrollReveal>
        <p className="app-footer-copy uppercase text-white/80">
          &copy; 2026 Jovy - El sabor también puede ser diseño.
        </p>
      </ScrollReveal>
    </div>
  </footer>
);
