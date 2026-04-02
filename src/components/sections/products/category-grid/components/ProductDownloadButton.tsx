import { Download } from 'lucide-react';
import type { CSSProperties } from 'react';

import { CATEGORY_GRID_DOWNLOAD_LABEL } from '../constants/catalog.constants';

type ProductDownloadButtonProps = {
  accentColor: string;
  className?: string;
};

export const ProductDownloadButton = ({ accentColor, className = '' }: ProductDownloadButtonProps) => (
  <button
    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-500 transition-colors hover:text-[var(--accent-color)] sm:tracking-widest ${className}`}
    style={{ '--accent-color': accentColor } as CSSProperties}
  >
    {CATEGORY_GRID_DOWNLOAD_LABEL} <Download size={14} />
  </button>
);
