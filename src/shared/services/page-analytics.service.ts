const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : 'http://localhost:3001/api';

const PAGE_VIEW_URL = `${API_BASE_URL}/analytics/page-view`;
const VISITOR_STORAGE_KEY = 'jovy_visitor_id';
const SESSION_STORAGE_KEY = 'jovy_session_id';

const createId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getPersistentId = (storage: Storage, key: string) => {
  const existing = storage.getItem(key);
  if (existing) return existing;

  const next = createId();
  storage.setItem(key, next);
  return next;
};

export async function trackPageView() {
  if (typeof window === 'undefined') return;

  const visitorId = getPersistentId(window.localStorage, VISITOR_STORAGE_KEY);
  const sessionId = getPersistentId(window.sessionStorage, SESSION_STORAGE_KEY);

  await fetch(PAGE_VIEW_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
      page_title: document.title || 'Jovy Web',
      visitor_id: visitorId,
      session_id: sessionId,
      referrer: document.referrer || null,
    }),
  });
}
