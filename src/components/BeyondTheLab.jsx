import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfessionalExperienceCard } from './ProfessionalExperienceCard';
import { PositionsOfResponsibility } from './PositionsOfResponsibility';
import { CoursesList } from './CoursesList';
import { ExtracurricularList } from './ExtracurricularList';

export function BeyondTheLab() {
  const [open, setOpen] = useState(false);

  return (
    <section id="beyond-the-lab" className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 bg-ink-900/60 border border-line rounded-2xl px-6 py-4 text-left hover:border-zinc-600 transition-colors"
      >
        <div>
          <h3 className="text-lg font-semibold text-zinc-400">Beyond the Lab</h3>
          <p className="text-sm text-zinc-500">Teaching, positions of responsibility, coursework &amp; more</p>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-zinc-500 text-xl">
          ⌄
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3">
              <ProfessionalExperienceCard />
              <PositionsOfResponsibility />
              <CoursesList />
              <ExtracurricularList />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
