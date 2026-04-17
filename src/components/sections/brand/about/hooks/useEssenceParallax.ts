import { useEffect, useRef, useState } from 'react';

export const useEssenceParallax = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to element position
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + rect.height);
      setScrollY(Math.max(0, Math.min(1, scrollProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { containerRef, scrollY };
};
