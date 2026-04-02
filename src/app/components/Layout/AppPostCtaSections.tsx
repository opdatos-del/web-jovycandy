import { ScrollLogo } from '../../../components/sections/ScrollLogo';
import { SectionColorTransition } from '../../../components/sections/SectionColorTransition';

export const AppPostCtaSections = () => (
  <>
    <SectionColorTransition fromColor="#fff3c7" toColor="#edf5ff" heightClassName="h-12 md:h-14 lg:h-16" />
    <ScrollLogo />
    <SectionColorTransition fromColor="#edf5ff" toColor="#00afaa" heightClassName="h-10 md:h-12 lg:h-14" />
  </>
);
