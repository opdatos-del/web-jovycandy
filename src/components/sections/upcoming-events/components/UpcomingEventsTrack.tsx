import type { RefObject } from 'react';

import { upcomingEvents } from '../data/upcoming-events.data';
import type { UpcomingEvent } from '../types/upcoming-events.types';
import { UpcomingEventCard } from './UpcomingEventCard';

type UpcomingEventsTrackProps = {
  trackRef: RefObject<HTMLDivElement | null>;
  onImageOpen?: (event: UpcomingEvent) => void;
};

const COLLAGE_LAYOUT = [
  'col-span-3 row-span-3 sm:col-span-2 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-4 lg:col-span-3 lg:row-start-1 lg:row-span-2',
  'col-span-3 row-span-3 sm:col-span-2 lg:col-start-7 lg:col-span-3 lg:row-start-1 lg:row-span-3',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-2',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-4 lg:col-span-3 lg:row-start-3 lg:row-span-2',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-10 lg:col-span-3 lg:row-start-3 lg:row-span-2',
  'col-span-3 row-span-3 sm:col-span-2 lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-3',
  'col-span-3 row-span-3 sm:col-span-2 lg:col-start-4 lg:col-span-3 lg:row-start-5 lg:row-span-3',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-7 lg:col-span-3 lg:row-start-4 lg:row-span-2',
  'col-span-3 row-span-3 sm:col-span-2 lg:col-start-10 lg:col-span-3 lg:row-start-5 lg:row-span-3',
  'col-span-3 row-span-2 sm:col-span-2 lg:col-start-7 lg:col-span-3 lg:row-start-6 lg:row-span-2',
] as const;

export const UpcomingEventsTrack = ({ trackRef, onImageOpen }: UpcomingEventsTrackProps) => (
  <div
    ref={trackRef}
    className="relative z-20 flex min-w-max items-center px-3 py-2 will-change-transform sm:px-5 sm:py-3 lg:h-full lg:px-8 lg:py-4"
  >
    <div className="w-[min(1080px,172vw)] shrink-0 sm:w-[min(1300px,165vw)] lg:w-[min(1720px,132vw)]">
      <div className="grid auto-rows-[64px] grid-cols-6 gap-2 sm:auto-rows-[74px] sm:gap-2.5 lg:grid-cols-12 lg:auto-rows-[82px] lg:gap-3">
        {upcomingEvents.slice(0, 11).map((event, index) => (
          <UpcomingEventCard
            key={event.id}
            event={event}
            collageClassName={COLLAGE_LAYOUT[index] ?? 'col-span-3 row-span-2 sm:col-span-2 lg:col-span-3 lg:row-span-2'}
            onOpen={onImageOpen}
          />
        ))}
      </div>
    </div>

    <div className="h-px w-8 shrink-0 sm:w-10 lg:w-[10vw] lg:max-w-[9rem]" aria-hidden="true" />
  </div>
);
