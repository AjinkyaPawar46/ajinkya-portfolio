import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Shared scroll-reveal wrapper used by every content section, so reveal
// timing/easing stays consistent without repeating motion props everywhere.
export function Section({ id, className = '', children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.section
      id={id}
      className={`relative z-10 ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
