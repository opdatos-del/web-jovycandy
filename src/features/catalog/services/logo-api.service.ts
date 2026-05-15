/**
 * logo-api.service.ts
 *
 * Service to fetch logos from the admin API.
 * Falls back to static logos if API is unavailable.
 */

import type { CatalogLogoOption, CatalogLogoGroup } from '../types/catalog.types';

const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : 'http://localhost:3001/api';

export interface ApiLogo {
  id: number;
  slug: string;
  name: string;
  src: string;
  alt: string | null;
  families: string[] | string | null;
  active: boolean;
  position: number;
}

function normalizeLogoFamilies(families: ApiLogo['families']): string[] {
  if (Array.isArray(families)) {
    return families.filter((family): family is string => typeof family === 'string' && family.trim().length > 0);
  }

  if (typeof families !== 'string' || !families.trim()) return [];

  try {
    const parsed = JSON.parse(families);
    if (Array.isArray(parsed)) {
      return parsed.filter((family): family is string => typeof family === 'string' && family.trim().length > 0);
    }
  } catch {}

  return [families.trim()];
}

export async function fetchActiveLogos(): Promise<ApiLogo[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/logos?active=true`);
    if (!response.ok) {
      throw new Error(`Failed to fetch logos: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('[logo-api] Failed to fetch logos from API, using static fallback:', error);
    return [];
  }
}

export function transformApiLogosToCatalogLogos(apiLogos: ApiLogo[]): CatalogLogoOption[] {
  return apiLogos.map((logo) => ({
    src: logo.src,
    alt: logo.alt || logo.name,
  }));
}

export function transformApiLogosToCatalogLogoGroups(apiLogos: ApiLogo[]): CatalogLogoGroup[] {
  return apiLogos.map((logo) => ({
    src: logo.src,
    alt: logo.alt || logo.name,
    families: normalizeLogoFamilies(logo.families),
  }));
}
