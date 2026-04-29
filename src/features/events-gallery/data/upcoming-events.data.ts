import type { UpcomingEvent } from '../types/upcoming-events.types';
import { buildMarketingEventPath } from '@/shared/assets/publicAssets';

export const upcomingEvents: UpcomingEvent[] = Array.from({ length: 11 }, (_, index) => ({
  id: `evento-${index + 1}`,
  image: buildMarketingEventPath(`${index + 1}.webp`),
  alt: `Evento ${String(index + 1).padStart(2, '0')}`,
}));
