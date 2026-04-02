import type { RefObject } from 'react';

export type UpcomingEvent = {
  id: string;
  image: string;
  alt: string;
};

export type UpcomingEventsHorizontalScrollResult = {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
};
