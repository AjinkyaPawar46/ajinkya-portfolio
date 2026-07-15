import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

// While `active`: focuses the first focusable element in `containerRef`,
// traps Tab/Shift+Tab cycling within it, and restores focus to whatever was
// focused before activation once it deactivates (the part that's easy to
// skip — without it, keyboard users land back at the top of the page
// instead of where they opened the modal from).
export function useFocusTrap(containerRef, active) {
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!active) return;
    previouslyFocused.current = document.activeElement;

    const container = containerRef.current;
    if (!container) return;

    const focusables = () => Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
    focusables()[0]?.focus();

    function onKeyDown(e) {
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [active, containerRef]);
}
