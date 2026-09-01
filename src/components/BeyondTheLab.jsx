import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './layout/Section';
import { ProfessionalExperienceCard } from './ProfessionalExperienceCard';
import { PositionsOfResponsibility } from './PositionsOfResponsibility';
import { CoursesList } from './CoursesList';
import { ExtracurricularList } from './ExtracurricularList';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Deliberately the quietest section on the page: full CV parity is
// preserved (teaching, positions of responsibility, coursework,
// extracurriculars) but collapsed by default so it doesn't compete with the
// research work above it.
export function BeyondTheLab() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Section id="beyond-the-lab" className="!py-12">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 bg-ink-900/60 border border-line rounded-2xl px-6 py-5 text-left hover:border-accent/50 transition-colors group"
      >
        <div>
          <h2 className="text-lg font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors">
            Beyond the lab
          </h2>
          <p className="text-sm text-zinc-400 mt-0.5">
            Teaching, positions of responsibility, coursework &amp; more
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="shrink-0 text-zinc-400 group-hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          // overflow-hidden lives on this outer wrapper, never on the inner
          // <ul className="list-disc"> — Tailwind preflight zeroes list
          // padding, so outside-position markers sit outside the <ul>'s own
          // box and would be clipped by an overflow-hidden there.
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              <ProfessionalExperienceCard />
              <PositionsOfResponsibility />
              <CoursesList />
              <ExtracurricularList />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
