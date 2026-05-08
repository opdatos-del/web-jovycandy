import type { RefObject } from 'react';

import type { UpcomingEvent } from '../types/upcoming-events.types';
import { UpcomingEventCard } from './UpcomingEventCard';

type UpcomingEventsTrackProps = {
  events: UpcomingEvent[];
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

export const UpcomingEventsTrack = ({ events, trackRef, onImageOpen }: UpcomingEventsTrackProps) => (
  <div
    ref={trackRef}
    className="events-track relative z-20 flex min-w-max items-center will-change-transform"
  >
    <div className="events-collage shrink-0">
      <div className="events-grid grid">
        {events.map((event, index) => (
          <UpcomingEventCard
            key={event.id}
            event={event}
            collageClassName={COLLAGE_LAYOUT[index] ?? 'col-span-3 row-span-2 sm:col-span-2 lg:col-span-3 lg:row-span-2'}
            onOpen={onImageOpen}
          />
        ))}
      </div>
    </div>

    <div className="events-trailing-space h-px shrink-0" aria-hidden="true" />
  </div>
);
