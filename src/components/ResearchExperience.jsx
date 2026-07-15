import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './layout/Section';
import { researchExperience as re } from '../data/content';

const PREVIEW_COUNT = 3;

export function ResearchExperience() {
  const [expanded, setExpanded] = useState(false);
  const preview = re.bullets.slice(0, PREVIEW_COUNT);
  const rest = re.bullets.slice(PREVIEW_COUNT);

  return (
    <Section id="research" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Research Experience</h3>
      <div className="mt-4 bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <div className="font-medium text-lg">{re.title}</div>
            <div className="text-sm text-slate-300">
              {re.role} · {re.org}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Guide: {re.guide} · {re.duration}
            </div>
          </div>
        </div>
        <ul className="mt-4 list-disc ml-5 space-y-1 text-slate-300 text-sm">
          {preview.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {rest.length > 0 && (
          <>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {/* overflow-hidden lives on this wrapper, not the <ul>, so the
                      list markers (which render outside the <ul>'s zero-padding
                      box) aren't clipped along with the height animation. */}
                  <ul className="list-disc ml-5 mt-1 space-y-1 text-slate-300 text-sm">
                    {rest.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 text-sm text-amber-300 hover:text-amber-200"
            >
              {expanded ? 'Show less' : `Show ${rest.length} more`}
            </button>
          </>
        )}
      </div>
    </Section>
  );
}
