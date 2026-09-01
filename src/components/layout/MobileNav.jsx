import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Full-screen menu for viewports below `lg`, where the inline nav is hidden.
// Reuses the modal's scroll-lock and focus-trap hooks rather than
// reimplementing them.
export function MobileNav({ open, onClose, items, activeId }) {
  const panelRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useScrollLock(open);
  useFocusTrap(panelRef, open);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const duration = prefersReducedMotion ? 0 : 0.25;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className="fixed inset-0 z-[60] lg:hidden bg-ink-950/98 backdrop-blur-md"
        >
          <div className="flex items-center justify-between px-6 h-[73px] border-b border-line-soft">
            <span className="w-10 h-10 rounded-lg border border-line bg-ink-850 grid place-items-center">
              <span className="font-mono text-sm font-semibold text-accent">AP</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 grid place-items-center rounded-lg border border-line text-zinc-300 hover:border-accent hover:text-accent transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="px-6 pt-6 flex flex-col gap-1">
            {items.map((navItem, i) => (
              <motion.a
                key={navItem.id}
                href={`#${navItem.id}`}
                onClick={onClose}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration, delay: prefersReducedMotion ? 0 : 0.04 * i }}
                className={`py-3 border-b border-line-soft text-2xl font-semibold tracking-tight transition-colors ${
                  activeId === navItem.id ? 'text-accent' : 'text-zinc-200 hover:text-accent'
                }`}
              >
                {navItem.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
