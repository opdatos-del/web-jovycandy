import { STATIC_UPCOMING_EVENTS } from '../data/upcoming-events.data';
import type { UpcomingEvent, UpcomingEventMediaType } from '../types/upcoming-events.types';

type ApiEvent = {
  id: number | string;
  title?: string | null;
  slug?: string | null;
  image?: string | null;
  media_url?: string | null;
  media_type?: string | null;
  start_date?: string | null;
  starts_at?: string | null;
};

const DEFAULT_UPCOMING_EVENTS_API_URL = 'http://localhost:3001/api/events/published?limit=11';
const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : null;
const API_ORIGIN = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : null;
const UPCOMING_EVENTS_API_URL = import.meta.env.VITE_UPCOMING_EVENTS_API_URL
  || (API_BASE_URL ? `${API_BASE_URL}/events/published?limit=11` : DEFAULT_UPCOMING_EVENTS_API_URL);

const resolveEventMediaUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) {
    return API_ORIGIN ? `${API_ORIGIN}${url}` : url;
  }
  return url;
};

const inferMediaTypeFromUrl = (url: string | null | undefined): UpcomingEventMediaType => {
  const normalized = url?.trim().toLowerCase() || '';
  if (!normalized) return 'image';

  try {
    const parsed = new URL(normalized.startsWith('http') ? normalized : `http://local${normalized.startsWith('/') ? '' : '/'}${normalized}`);
    const pathname = parsed.pathname.toLowerCase();

    if (pathname.endsWith('.gif')) return 'gif';
    if (
      pathname.endsWith('.mp4')
      || pathname.endsWith('.webm')
      || pathname.endsWith('.mov')
      || pathname.endsWith('.m4v')
      || pathname.endsWith('.ogg')
      || pathname.endsWith('.ogv')
    ) {
      return 'video';
    }
  } catch {}

  return 'image';
};

const normalizeMediaType = (mediaType: string | null | undefined, mediaUrl: string): UpcomingEventMediaType => {
  if (mediaType === 'video' || mediaType === 'gif' || mediaType === 'image') {
    return mediaType;
  }

  return inferMediaTypeFromUrl(mediaUrl);
};

const mapApiEvent = (event: ApiEvent): UpcomingEvent | null => {
  const rawMediaUrl = event.media_url || event.image || '';
  const mediaUrl = resolveEventMediaUrl(rawMediaUrl);
  if (!mediaUrl) return null;

  const title = event.title?.trim() || `Evento ${event.id}`;

  return {
    id: String(event.id),
    mediaUrl,
    mediaType: normalizeMediaType(event.media_type, rawMediaUrl),
    alt: title,
    title,
    slug: event.slug?.trim() || undefined,
    startsAt: event.start_date || event.starts_at || null,
  };
};

export async function fetchUpcomingEvents(signal?: AbortSignal): Promise<UpcomingEvent[]> {
  try {
    const response = await fetch(UPCOMING_EVENTS_API_URL, { signal });
    if (!response.ok) {
      throw new Error(`Upcoming events API request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      return STATIC_UPCOMING_EVENTS;
    }

    const events = data
      .map((event) => mapApiEvent(event as ApiEvent))
      .filter((event): event is UpcomingEvent => Boolean(event));

    return events.slice(0, 11);
  } catch (error) {
    console.warn('[upcoming-events-api] Failed to fetch upcoming events, using static fallback:', error);
    return STATIC_UPCOMING_EVENTS;
  }
}
