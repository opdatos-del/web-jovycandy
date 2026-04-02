import { UpcomingEventsTrack } from './components/UpcomingEventsTrack';
import { useUpcomingEventsHorizontalScroll } from './hooks/useUpcomingEventsHorizontalScroll';

export const UpcomingEvents = () => {
  const { sectionRef, viewportRef, trackRef } = useUpcomingEventsHorizontalScroll();

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white" />

      <div ref={viewportRef} className="relative h-full overflow-hidden">
        <UpcomingEventsTrack trackRef={trackRef} />
      </div>
    </section>
  );
};
