import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const AppFooter = () => (
  <footer className="bg-[#00afaa] py-10 text-center sm:py-12">
    <div className="page-shell">
      <ScrollReveal>
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/80 sm:text-xs">
          &copy; 2026 Jovy - El sabor tambien puede ser diseno.
        </p>
      </ScrollReveal>
    </div>
  </footer>
);
