import type { RefObject } from 'react';

export type UpcomingEventMediaType = 'image' | 'video' | 'gif';

export type UpcomingEvent = {
  id: string;
  mediaUrl: string;
  mediaType: UpcomingEventMediaType;
  alt: string;
  title?: string;
  slug?: string;
  startsAt?: string | null;
};

export type UpcomingEventsHorizontalScrollResult = {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
};
