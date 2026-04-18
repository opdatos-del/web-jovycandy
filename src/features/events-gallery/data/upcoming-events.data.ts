import type { UpcomingEvent } from '../types/upcoming-events.types';

export const upcomingEvents: UpcomingEvent[] = Array.from({ length: 11 }, (_, index) => ({
  id: `evento-${index + 1}`,
  image: `/eventos/${index + 1}.webp`,
  alt: `Evento ${String(index + 1).padStart(2, '0')}`,
}));
