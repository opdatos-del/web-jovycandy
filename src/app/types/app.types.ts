import type { LucideIcon } from 'lucide-react';

export type AppActiveModal = 'contact' | 'location' | null;

export type AppLinkItem = {
  href: string;
  label: string;
};

export type AppSocialLink = {
  href: string;
  label: string;
  Icon: LucideIcon;
};
