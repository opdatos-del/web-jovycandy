/**
 * useTilt — Mouse-tracking tilt effect for hero elements.
 *
 * Attaches mousemove and mouseleave listeners to a target element and applies
 * a CSS 3D perspective transform that tilts the element toward the mouse cursor.
 *
 * Mechanics:
 * - Calculates normalized mouse position relative to element center (-0.5 to 0.5)
 * - Converts to rotation angles: X rotates based on Y position, Y rotates based on X position
 * - Multiplies by intensity parameter to control effect strength
 * - Uses perspective(1000px) for realistic 3D depth
 * - translateZ(10px) lifts element slightly off the surface
 *
 * Cleanup:
 * - Removes both event listeners on unmount or when intensity changes
 * - Correctly restores transform on mouseleave
 *
 * @param intensity - Rotation angle multiplier. Default 10 = max ±10deg tilt.
 * @returns ref - Attach this ref to the element you want to apply the effect to.
 *
 * Usage:
 *   const tiltRef = useTilt(15);
 *   return <div ref={tiltRef}>Tilted content</div>;
 */
import { useRef, useEffect } from 'react';

export const useTilt = (intensity = 10) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      /** Normalized X position of mouse relative to element left edge */
      const x = e.clientX - rect.left;

      /** Normalized Y position of mouse relative to element top edge */
      const y = e.clientY - rect.top;

      /** Element center point */
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      /**
       * Rotation angles:
       * rotateX: positive when mouse is below center (tilts top toward viewer)
       * rotateY: positive when mouse is left of center (tilts right toward viewer)
       */
      const rotateX = ((y - centerY) / centerY) * intensity;
      const rotateY = ((centerX - x) / centerX) * intensity;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    /** Resets transform to neutral when mouse leaves the element */
    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return ref;
};
