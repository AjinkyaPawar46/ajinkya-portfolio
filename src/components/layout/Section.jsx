import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Shared scroll-reveal wrapper used by every content section, so reveal
// timing/easing stays consistent without repeating motion props everywhere.
//
// `band` controls the section's ground. Alternating 'raised' and default
// sections is what gives the page vertical rhythm — without it every
// section sits on the same flat ink-950 and the page reads as one stack.
//   default   — transparent, sits on the page's ink-950
//   'raised'  — full-bleed ink-900 with hairline top/bottom rules
//   'bleed'   — no inner rail; the child owns its own width (feature bands)
export function Section({ id, band, className = '', innerClassName = '', children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const ground =
    band === 'raised' ? 'bg-ink-900 border-y border-line-soft' : '';
  const rail =
    band === 'bleed' ? '' : 'max-w-rail mx-auto px-6 sm:px-8';

  return (
    <motion.section
      id={id}
      className={`relative z-10 py-20 sm:py-28 ${ground} ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={`${rail} ${innerClassName}`}>{children}</div>
    </motion.section>
  );
}
