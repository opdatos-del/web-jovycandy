import { ScrollReveal } from '../../../ui/ScrollReveal';
import type { UpcomingEvent } from '../types/upcoming-events.types';

type UpcomingEventCardProps = {
  event: UpcomingEvent;
};

export const UpcomingEventCard = ({ event }: UpcomingEventCardProps) => (
  <ScrollReveal className="aspect-[5/8] w-[min(68vw,23rem)] shrink-0 md:w-[min(39vw,24rem)] lg:w-[min(25vw,24rem)]" distance={30}>
    <article className="group relative h-full w-full overflow-hidden rounded-[2.4rem] border border-white/70 bg-white p-2 shadow-[0_28px_90px_rgba(42,33,28,0.14)]">
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#f8eee8]">
        <img
          src={event.image}
          alt={event.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          draggable={false}
        />
      </div>
    </article>
  </ScrollReveal>
);
