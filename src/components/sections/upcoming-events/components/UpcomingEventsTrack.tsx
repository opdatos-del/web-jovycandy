import type { RefObject } from 'react';

import { upcomingEvents } from '../data/upcoming-events.data';
import { UpcomingEventCard } from './UpcomingEventCard';
import { UpcomingEventsIntroCard } from './UpcomingEventsIntroCard';

type UpcomingEventsTrackProps = {
  trackRef: RefObject<HTMLDivElement | null>;
};

export const UpcomingEventsTrack = ({ trackRef }: UpcomingEventsTrackProps) => (
  <div
    ref={trackRef}
    className="relative z-20 flex h-full items-center gap-5 px-5 py-10 will-change-transform md:gap-8 md:px-10 md:py-12 lg:gap-10 lg:px-16"
  >
    <UpcomingEventsIntroCard />

    {upcomingEvents.map((event) => (
      <UpcomingEventCard key={event.id} event={event} />
    ))}

    <div className="h-px w-[36vw] max-w-[21rem] shrink-0" aria-hidden="true" />
  </div>
);
