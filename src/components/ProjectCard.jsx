import { forwardRef } from 'react';
import { motion } from 'framer-motion';

// forwardRef: AnimatePresence needs a ref on the direct child it measures
// for exit animations — ProjectCard sits between AnimatePresence and the
// motion.div, so the ref must be forwarded through it.
export const ProjectCard = forwardRef(function ProjectCard({ project }, ref) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-2xl bg-ink-900 border border-line"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="font-medium">{project.title}</div>
        <span className="shrink-0 text-xs px-2 py-1 rounded-full border border-accent/40 text-accent font-mono">
          {project.tag}
        </span>
      </div>
      <p className="text-xs text-zinc-500 mt-1 font-mono">{project.duration}</p>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-zinc-400">
        {project.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </motion.div>
  );
});
