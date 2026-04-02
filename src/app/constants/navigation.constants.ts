import { Facebook, Instagram } from 'lucide-react';

import type { AppSocialLink } from '../types/app.types';

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

export const navActionClassName =
  'inline-flex items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-stone-800 shadow-[0_10px_24px_rgba(68,54,40,0.1)] backdrop-blur-md transition-colors hover:bg-stone-900 hover:text-white';

export const navSocialClassName =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 text-stone-800 shadow-[0_10px_24px_rgba(68,54,40,0.1)] backdrop-blur-md transition-colors hover:bg-stone-900 hover:text-white';

export const navMenuButtonClassName =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-[#fff8ec]/88 text-stone-800 shadow-[0_10px_24px_rgba(68,54,40,0.1)] backdrop-blur-md transition-colors hover:bg-stone-900 hover:text-white lg:hidden';

export const mobileMenuPanelClassName =
  'mt-3 overflow-hidden rounded-[1.5rem] border border-white/35 bg-white/12 p-3 shadow-[0_24px_64px_rgba(68,54,40,0.12)] backdrop-blur-xl lg:hidden';
