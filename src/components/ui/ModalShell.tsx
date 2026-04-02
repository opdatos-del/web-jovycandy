import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

type ModalShellProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  size?: 'md' | 'lg' | 'xl';
  contentScrollable?: boolean;
  contentClassName?: string;
};

const SIZE_CLASSNAME: Record<NonNullable<ModalShellProps['size']>, string> = {
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-[82rem]',
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
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
        <motion.div
          className="modal-shell-overlay fixed inset-0 z-[120] flex justify-center bg-stone-950/45 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={`modal-shell-surface relative flex max-h-[min(94svh,58rem)] w-full flex-col overflow-hidden border border-white/65 bg-[#fff7f2] shadow-[0_40px_140px_rgba(28,25,23,0.28)] ${SIZE_CLASSNAME[size]}`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,129,147,0.22),transparent_65%)]" />

            <div className="modal-shell-header relative flex items-start justify-between border-b border-[#f1ded5]">
              <div>
                {subtitle ? (
                  <p className="modal-shell-subtitle text-[10px] uppercase text-stone-400">{subtitle}</p>
                ) : null}
                <h2 className="modal-shell-title mt-2 font-semibold tracking-[-0.05em] text-stone-900">{title}</h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="modal-shell-close inline-flex items-center justify-center rounded-full border border-[#efddd4] bg-white/80 text-stone-500 transition-colors hover:text-stone-900"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className={`modal-shell-content relative ${contentScrollable ? 'overflow-y-auto' : 'overflow-hidden'} ${contentClassName}`}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
