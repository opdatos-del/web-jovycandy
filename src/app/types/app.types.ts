import type { LucideIcon } from 'lucide-react';

export type AppActiveModal = 'contact' | 'location' | null;

export type AppSocialLink = {
  href: string;
  label: string;
  Icon: LucideIcon;
};
