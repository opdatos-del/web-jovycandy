import { UpcomingEventsTrack } from './components/UpcomingEventsTrack';
import { useUpcomingEventsHorizontalScroll } from './hooks/useUpcomingEventsHorizontalScroll';

export const UpcomingEvents = () => {
  const { sectionRef, viewportRef, trackRef } = useUpcomingEventsHorizontalScroll();

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#fff5d4]">
      <div className="absolute inset-0 bg-[#fff5d4]" />

      <div ref={viewportRef} className="relative h-full overflow-hidden">
        <UpcomingEventsTrack trackRef={trackRef} />
      </div>
    </section>
  );
};
