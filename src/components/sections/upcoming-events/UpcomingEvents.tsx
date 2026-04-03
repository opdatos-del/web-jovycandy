import { UpcomingEventsTrack } from './components/UpcomingEventsTrack';
import { useUpcomingEventsHorizontalScroll } from './hooks/useUpcomingEventsHorizontalScroll';

export const UpcomingEvents = () => {
  const { sectionRef, viewportRef, trackRef } = useUpcomingEventsHorizontalScroll();

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#fff5d4] py-6 sm:py-8 lg:h-screen lg:py-0">
      <div ref={viewportRef} className="mobile-scroll relative h-full overflow-x-auto snap-x snap-mandatory lg:overflow-hidden lg:snap-none">
        <UpcomingEventsTrack trackRef={trackRef} />
      </div>
    </section>
  );
};
