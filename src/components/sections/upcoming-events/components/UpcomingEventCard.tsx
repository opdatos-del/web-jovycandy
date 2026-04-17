import { ScrollReveal } from '../../../ui/ScrollReveal';
import type { UpcomingEvent } from '../types/upcoming-events.types';

type UpcomingEventCardProps = {
  event: UpcomingEvent;
  collageClassName?: string;
  onOpen?: (event: UpcomingEvent) => void;
};

export const UpcomingEventCard = ({ event, collageClassName = '', onOpen }: UpcomingEventCardProps) => (
  <ScrollReveal
    className={collageClassName}
    distance={30}
  >
    <button
      type="button"
      onClick={() => onOpen?.(event)}
      className="group relative h-full w-full overflow-hidden rounded-xl border border-white/30 bg-white/80 p-1 text-left shadow-[0_14px_42px_rgba(42,33,28,0.2)] sm:rounded-2xl"
      aria-label={`Ver imagen completa de ${event.alt}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f8eee8] sm:rounded-xl">
        <img
          src={event.image}
          alt={event.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-70" />
      </div>
    </button>
  </ScrollReveal>
);
