import { About } from '../../../components/sections/brand/About';
import { Certifications } from '../../../components/sections/Certifications';
import { HeroEventsTransition } from '../../../components/sections/HeroEventsTransition';
import { Intro } from '../../../components/sections/Intro';
import { SectionColorTransition } from '../../../components/sections/SectionColorTransition';
import { Hero } from '../../../components/sections/hero/Hero';
import { CategoryGrid } from '../../../components/sections/products/category-grid/CategoryGrid';
import { UpcomingEvents } from '../../../components/sections/upcoming-events';

export const AppSections = () => (
  <>
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
    <SectionColorTransition fromColor="#ffffff" toColor="#e8fbf7" heightClassName="h-12 md:h-14 lg:h-16" />
    <div id="quienes-somos">
      <Intro />
    </div>
    <SectionColorTransition fromColor="#e8fbf7" toColor="#fff0ec" heightClassName="h-12 md:h-14 lg:h-16" />
    <div id="nuestra-esencia">
      <About />
    </div>
    <SectionColorTransition fromColor="#fff0ec" toColor="#fff3c7" heightClassName="h-12 md:h-14 lg:h-16" />
  </>
);

