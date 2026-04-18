import { About } from '@/features/about';
import { CategoryGrid } from '@/features/catalog';
import { Certifications } from '@/features/certifications/Certifications';
import { UpcomingEvents } from '@/features/events-gallery';
import { Hero } from '@/features/hero';
import { HeroEventsTransition } from '@/features/hero/HeroEventsTransition';
import { ScrollLogo } from '@/features/scroll-logo/ScrollLogo';
import { TaglineSection } from '@/features/tagline/TaglineSection';
import { SectionColorTransition } from '@/shared/ui/SectionColorTransition';

export const AppSections = () => (
  <>
    <ScrollLogo />
    <SectionColorTransition fromColor="#edf5ff" toColor="#00AFAA" heightClassName="h-14 md:h-16 lg:h-20" />
    <div id="inicio">
      <Hero />
    </div>
    <HeroEventsTransition />
    <div id="eventos">
      <UpcomingEvents />
    </div>
    <SectionColorTransition fromColor="#fff5d4" toColor="#ff6a86" heightClassName="h-14 md:h-16 lg:h-20" />
    <div id="certificaciones">
      <Certifications />
    </div>
    <SectionColorTransition fromColor="#ff7f69" toColor="#ffffff" heightClassName="h-14 md:h-16 lg:h-20" />
    <div id="tienda">
      <CategoryGrid />
    </div>
    <TaglineSection />
    <div id="nuestra-esencia">
      <About />
    </div>
  </>
);
