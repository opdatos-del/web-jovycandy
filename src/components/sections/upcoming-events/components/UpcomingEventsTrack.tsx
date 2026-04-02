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
    className="relative z-20 flex min-w-max items-stretch gap-4 px-4 py-2 will-change-transform sm:gap-5 sm:px-6 md:py-4 lg:h-full lg:items-center lg:gap-10 lg:px-16 lg:py-12"
  >
    <UpcomingEventsIntroCard />

    {upcomingEvents.map((event) => (
      <UpcomingEventCard key={event.id} event={event} />
    ))}

    <div className="h-px w-8 shrink-0 sm:w-10 lg:w-[36vw] lg:max-w-[21rem]" aria-hidden="true" />
  </div>
);
