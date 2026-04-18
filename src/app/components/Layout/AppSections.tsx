import { About } from '../../../components/sections/brand/About';
import { Certifications } from '../../../components/sections/Certifications';
import { HeroEventsTransition } from '../../../components/sections/HeroEventsTransition';
import { Intro } from '../../../components/sections/Intro';
import { SectionColorTransition } from '../../../components/sections/SectionColorTransition';
import { ScrollLogo } from '../../../components/sections/ScrollLogo';
import { TaglineSection } from '../../../components/sections/TaglineSection.tsx';
import { Hero } from '../../../components/sections/hero/Hero';
import { CategoryGrid } from '../../../components/sections/products/category-grid/CategoryGrid';
import { UpcomingEvents } from '../../../components/sections/upcoming-events';

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
    {/*<div id="quienes-somos">
      <Intro />
    </div>*/}
    <TaglineSection />
    <div id="nuestra-esencia">
      <About />
    </div>

  </>
);

