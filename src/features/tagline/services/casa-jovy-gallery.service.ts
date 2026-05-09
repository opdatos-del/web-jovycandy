type ApiCasaJovyGalleryImage = {
  id: number | string;
  image_path?: string | null;
};

const DEFAULT_CASA_JOVY_GALLERY_API_URL = 'http://localhost:3001/api/casa-jovy-gallery/public';
const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : null;
const API_ORIGIN = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : null;
const CASA_JOVY_GALLERY_API_URL = API_BASE_URL
  ? `${API_BASE_URL}/casa-jovy-gallery/public`
  : DEFAULT_CASA_JOVY_GALLERY_API_URL;

const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) {
    return API_ORIGIN ? `${API_ORIGIN}${url}` : url;
  }
  return url;
};

export async function fetchCasaJovyGalleryImages(signal?: AbortSignal): Promise<string[]> {
  try {
    const response = await fetch(CASA_JOVY_GALLERY_API_URL, { signal });
    if (!response.ok) {
      throw new Error(`Casa Jovy gallery API request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      return [];
    }

    const images = data
      .map((item) => resolveImageUrl((item as ApiCasaJovyGalleryImage).image_path || ''))
      .filter(Boolean);

    return images;
  } catch (error) {
    console.warn('[casa-jovy-gallery-api] Failed to fetch gallery images:', error);
    return [];
  }
}
