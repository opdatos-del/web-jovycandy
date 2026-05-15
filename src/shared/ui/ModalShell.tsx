/**
 * ModalShell — Generic modal wrapper component.
 *
 * Features:
 * - Scroll lock on body when open (via useBodyScrollLock hook)
 * - Escape key closes modal
 * - Click outside modal surface closes modal
 * - Entrance/exit animations via motion/react
 * - Three size variants: md, lg, xl
 * - Accessible: role="dialog", aria-modal, aria-label
 *
 * Usage:
 *   <ModalShell
 *     open={isOpen}
 *     onClose={() => setIsOpen(false)}
 *     title="Contact Us"
 *     size="lg"
 *   >
 *     <ContactForm />
 *   </ModalShell>
 */
import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';

/** Props for the ModalShell component */
type ModalShellProps = {
  /** Controls whether the modal is visible */
  open: boolean;
  /** Called when user closes the modal (via X button, Escape, or click outside) */
  onClose: () => void;
  /** Title displayed in the modal header */
  title: string;
  /** Optional subtitle shown above the title */
  subtitle?: string;
  /** Modal body content */
  children: ReactNode;
  /** Size preset controlling max-width. Defaults to 'lg' */
  size?: 'md' | 'lg' | 'xl';
  /** Whether modal body scrolls when content overflows. Defaults to true */
  contentScrollable?: boolean;
  /** Additional CSS classes for the modal body */
  contentClassName?: string;
};

/**
 * Maps size prop to corresponding CSS max-width class.
 * Uses CSS custom properties (defined elsewhere) for responsive breakpoints.
 */
const SIZE_CLASSNAME: Record<NonNullable<ModalShellProps['size']>, string> = {
  md: 'max-w-[min(var(--modal-max-width-md),96vw)]',
  lg: 'max-w-[min(var(--modal-max-width-lg),96vw)]',
  xl: 'max-w-[min(var(--modal-max-width-xl),96vw)]',
};

export const ModalShell = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  size = 'lg',
  contentScrollable = true,
  contentClassName = '',
}: ModalShellProps) => {
  /**
   * Scroll lock — prevents background page scrolling while modal is open.
   * The hook uses a module-level counter so it works correctly even when
   * multiple modals are open simultaneously.
   */
  useBodyScrollLock(open);

  /**
   * Keyboard handling — closes modal when Escape key is pressed.
   * Only registers listener when modal is open.
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        /**
         * Overlay — fixed fullscreen backdrop with blur.
         * Clicking on it (not the modal surface) triggers onClose.
         */
        <motion.div
          className="modal-shell-overlay fixed inset-0 z-[120] flex justify-center bg-stone-950/45 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/*
           * Modal surface — the actual modal card.
           * Animates in (fade + slide up) and out (fade + slide down).
           * role/dialog and aria-modal for accessibility.
           */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={`modal-shell-surface relative flex w-full flex-col overflow-hidden border border-stone-200 bg-white shadow-[0_20px_80px_rgba(28,25,23,0.12)] will-change-transform ${SIZE_CLASSNAME[size]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {/*
             * Header — contains subtitle, title, and close button (X).
             */}
            <div className="modal-shell-header relative flex items-start justify-between border-b border-stone-100 px-6 py-5">
              <div>
                {subtitle ? (
                  <p className="modal-shell-subtitle text-xs font-semibold uppercase tracking-wider text-stone-500">{subtitle}</p>
                ) : null}
                <h2 className="modal-shell-title mt-2 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{title}</h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="modal-shell-close inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-700"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>

            {/*
             * Content area — scrollable if contentScrollable=true.
             * Accepts arbitrary children (forms, text, images, etc.).
             */}
            <div
              className={`modal-shell-content relative px-6 py-5 ${contentScrollable ? 'overflow-y-auto' : 'overflow-hidden'} ${contentClassName}`}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
