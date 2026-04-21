import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ScrollProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;

      gsap.to(bar, {
        width: `${progress}%`,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#ff8a72] via-[#ff5e90] to-[#ff8a72] z-50 transition-all duration-300"
      style={{ width: '0%' }}
    />
  );
};
