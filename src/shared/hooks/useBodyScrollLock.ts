/**
 * useBodyScrollLock — Hook that locks body scroll when a modal/drawer is open.
 *
 * Problem it solves:
 * - Modals block background content but body can still scroll on mobile.
 * - Multiple modals can stack — each must not restore scroll prematurely.
 *
 * Solution:
 * - Uses a module-level counter (not state/ref) to track how many components
 *   have the lock active simultaneously.
 * - Only sets `overflow: hidden` on first open and only restores on last close.
 * - Stores previous overflow value before overwriting to restore correctly.
 *
 * Usage:
 *   function Modal({ open }) {
 *     useBodyScrollLock(open);
 *     // ...
 *   }
 *
 * Note: Since it uses module-level counter, this hook works correctly even when
 * multiple modal instances are rendered at the same time (e.g., contact + location modals).
 */
import { useEffect } from 'react';

/**
 * Module-level counter tracking how many components currently have scroll locked.
 * Starts at 0. Incremented on mount, decremented on unmount.
 */
let scrollLockCounter = 0;

/**
 * Stores the body's previous overflow value before we override it.
 * Only restored when counter reaches 0 again.
 */
let previousOverflowValue = '';

/**
 * Locks body scroll when `active` is true.
 *
 * @param active - Whether to engage the scroll lock. When false, the effect no-ops.
 *                  Pass the modal's `open` prop directly.
 */
export const useBodyScrollLock = (active: boolean = true) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    // First active component saves the previous overflow and locks scroll
    if (scrollLockCounter === 0) {
      previousOverflowValue = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    scrollLockCounter += 1;

    // Cleanup: decrement counter and restore overflow only if no other components still hold the lock
    return () => {
      scrollLockCounter -= 1;

      if (scrollLockCounter === 0) {
        document.body.style.overflow = previousOverflowValue;
      }
    };
  }, [active]);
};
