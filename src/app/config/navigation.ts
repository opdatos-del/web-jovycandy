import { Facebook, Instagram } from 'lucide-react';

import type { AppLinkItem, AppSocialLink } from '../types/app.types';

export const socialLinks: AppSocialLink[] = [
  {
    href: 'https://www.facebook.com/jovymx/?locale=es_LA',
    label: 'Facebook de Jovy',
    Icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/jovymx',
    label: 'Instagram de Jovy',
    Icon: Instagram,
  },
];

export const footerSectionLinks: AppLinkItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nuestra-esencia', label: 'Quienes Somos' },
  { href: '#tienda', label: 'Tienda' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#certificaciones', label: 'Certificaciones' },
];

export const footerPolicyLinks: AppLinkItem[] = [
  { href: '#politica-inocuidad', label: 'Politica de Inocuidad y Calidad' },
  { href: '#politica-ambiental', label: 'Politica Ambiental' },
];

export const navActionClassName =
  'inline-flex items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-800 shadow-[0_4px_12px_rgba(68,54,40,0.08)] backdrop-blur-sm transition-colors hover:bg-stone-900 hover:text-white sm:px-5 sm:text-[11px] sm:tracking-[0.28em]';

export const navSocialClassName =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 text-stone-800 shadow-[0_4px_12px_rgba(68,54,40,0.08)] backdrop-blur-sm transition-colors hover:bg-stone-900 hover:text-white';

export const navMenuButtonClassName =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 text-stone-800 shadow-[0_4px_12px_rgba(68,54,40,0.08)] backdrop-blur-sm transition-colors hover:bg-stone-900 hover:text-white lg:hidden';

export const mobileMenuPanelClassName =
  'mt-3 overflow-hidden rounded-[1.5rem] border border-white/35 bg-white/12 p-3 shadow-[0_8px_32px_rgba(68,54,40,0.08)] backdrop-blur-md lg:hidden';
