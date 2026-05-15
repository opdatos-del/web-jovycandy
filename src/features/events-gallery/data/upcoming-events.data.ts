import type { UpcomingEvent } from '../types/upcoming-events.types';
import { buildMarketingEventPath } from '@/shared/assets/publicAssets';

export const STATIC_UPCOMING_EVENTS: UpcomingEvent[] = Array.from({ length: 11 }, (_, index) => ({
  id: `evento-${index + 1}`,
  mediaUrl: buildMarketingEventPath(`${index + 1}.webp`),
  mediaType: 'image',
  alt: `Evento ${String(index + 1).padStart(2, '0')}`,
}));
