import { ScrollLogo } from '../../../components/sections/ScrollLogo';
import { SectionColorTransition } from '../../../components/sections/SectionColorTransition';

export const AppPostCtaSections = () => (
  <>
    <SectionColorTransition fromColor="#fff0ec" toColor="#edf5ff" heightClassName="h-20 md:h-28 lg:h-32" />
    <ScrollLogo />
    <SectionColorTransition fromColor="#edf5ff" toColor="#00afaa" heightClassName="h-20 md:h-28 lg:h-32" />
  </>
);
