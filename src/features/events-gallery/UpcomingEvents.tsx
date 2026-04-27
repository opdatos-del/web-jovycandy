import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { UpcomingEventsTrack } from './components/UpcomingEventsTrack';
import { useUpcomingEventsHorizontalScroll } from './hooks/useUpcomingEventsHorizontalScroll';
import type { UpcomingEvent } from './types/upcoming-events.types';

export const UpcomingEvents = () => {
  const { sectionRef, viewportRef, trackRef } = useUpcomingEventsHorizontalScroll();
  const [activeEvent, setActiveEvent] = useState<UpcomingEvent | null>(null);

  const closeModal = () => {
    setActiveEvent(null);

    if (window.history.state?.jovyEventsModal) {
      window.history.back();
    }
  };

  useEffect(() => {
    if (!activeEvent) {
      return;
    }

    const bodyStyle = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = bodyStyle.overflow;
    const previousPaddingRight = bodyStyle.paddingRight;

    bodyStyle.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }

    window.history.pushState({ ...window.history.state, jovyEventsModal: true }, '');

    const handlePopState = () => {
      setActiveEvent(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      bodyStyle.overflow = previousOverflow;
      bodyStyle.paddingRight = previousPaddingRight;
    };
  }, [activeEvent]);

  return (
    <section ref={sectionRef} className="events-section relative overflow-hidden bg-[#fff5d4]">
      <div className="events-section-header flex justify-center">
        <h2 className="font-mono text-xs uppercase text-stone-400 opacity-90 sm:text-sm">
          Galeria y Eventos
        </h2>
      </div>
      <div
        ref={viewportRef}
        className="events-viewport mobile-scroll relative overflow-x-auto snap-x snap-mandatory lg:overflow-hidden lg:snap-none"
      >
        <UpcomingEventsTrack trackRef={trackRef} onImageOpen={setActiveEvent} />
      </div>

      {activeEvent &&
        createPortal(
          <div
            className="events-modal fixed inset-0 z-[120] flex items-center justify-center bg-black/80"
            role="dialog"
            aria-modal="true"
            aria-label={activeEvent.alt}
            onClick={closeModal}
          >
            <div className="relative flex h-full w-full max-w-[min(96vw,var(--modal-max-width-xl))] items-center justify-center">
              <img
                src={activeEvent.image}
                alt={activeEvent.alt}
                className="events-modal-image w-auto max-w-full rounded-xl bg-white object-contain shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:rounded-2xl"
                draggable={false}
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
