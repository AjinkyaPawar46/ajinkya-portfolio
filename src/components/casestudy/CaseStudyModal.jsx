import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MediaFrame } from './MediaFrame';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// `detail` is one of technicalHighlight (impact/roboticsAndControls/computerVision
// bullet groups) or researchExperience/aerialRoboticsThesis (a flat bullets[]).
// This normalizes both shapes into a uniform group list for rendering.
function bulletGroups(detail) {
  if (!detail) return [];
  if (detail.impact) {
    return [
      { label: 'Impact & Accolades', bullets: detail.impact },
      { label: 'Robotics & Controls', bullets: detail.roboticsAndControls },
      { label: 'Computer Vision', bullets: detail.computerVision },
    ];
  }
  return detail.bullets ? [{ label: null, bullets: detail.bullets }] : [];
}

export function CaseStudyModal({ caseStudy, onClose }) {
  const panelRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isOpen = !!caseStudy;

  useScrollLock(isOpen);
  useFocusTrap(panelRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Portalled to document.body: an ancestor motion.section animates `y`
  // (Section.jsx) and the app root has relative positioning, both of which
  // create a containing block for position:fixed descendants — a
  // non-portalled overlay would size itself to that ancestor instead of
  // the viewport.
  return createPortal(
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <motion.div className="fixed inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-study-title-${caseStudy.id}`}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl mx-auto bg-ink-850 border border-line rounded-2xl shadow-lift my-4 sm:my-8"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 border-b border-line bg-ink-850/95 backdrop-blur rounded-t-2xl">
              <div>
                <p className="text-xs uppercase tracking-wide text-accent font-mono">{caseStudy.org}</p>
                <h2 id={`case-study-title-${caseStudy.id}`} className="text-xl sm:text-2xl font-bold mt-1">
                  {caseStudy.title}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  {caseStudy.role} · {caseStudy.duration}
                </p>
                {caseStudy.guide && <p className="text-xs text-zinc-400 mt-1">Guide: {caseStudy.guide}</p>}
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="shrink-0 w-9 h-9 rounded-full border border-line hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="p-6 space-y-8">
              <p className="text-zinc-300 max-w-3xl">{caseStudy.summary}</p>

              <div className="flex flex-wrap gap-2">
                {caseStudy.metrics.map((m) => (
                  <span key={m.label} className="text-xs font-mono px-3 py-1.5 rounded-full border border-line">
                    <span className={m.tone === "gold" ? "text-gold font-semibold" : "text-accent font-semibold"}>{m.value}</span>{' '}
                    <span className="text-zinc-400">{m.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {caseStudy.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-full bg-ink-950 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>

              {caseStudy.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-lg font-semibold">{section.heading}</h3>
                  <p className="text-sm text-zinc-400 mt-2 max-w-3xl">{section.body}</p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    {section.media.map((item) => (
                      <MediaFrame key={item.src} item={item} />
                    ))}
                  </div>
                </div>
              ))}

              {bulletGroups(caseStudy.detail).length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold">Full Record</h3>
                  <div className="mt-3 space-y-4">
                    {bulletGroups(caseStudy.detail).map((group, i) => (
                      <div key={i}>
                        {group.label && <p className="text-sm font-medium text-zinc-300 mb-2">{group.label}</p>}
                        <ul className="list-disc ml-5 space-y-1 text-sm text-zinc-300">
                          {group.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2 border-t border-line">
                  {caseStudy.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-4 py-2 rounded-md border border-line hover:border-accent hover:text-accent transition-colors"
                    >
                      {link.label} &#8599;
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
