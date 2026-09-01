import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ProjectArt } from './projectart/ProjectArt';

// forwardRef: AnimatePresence needs a ref on the direct child it measures
// for exit animations — ProjectCard sits between AnimatePresence and the
// motion.div, so the ref must be forwarded through it.
export const ProjectCard = forwardRef(function ProjectCard({ project }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-2xl bg-ink-850 border border-line overflow-hidden shadow-card hover:border-line-strong hover:shadow-lift transition-[border-color,box-shadow] duration-300"
    >
      {/* The art inherits `text-accent` through currentColor. */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-950 text-accent">
        <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-500">
          <ProjectArt art={project.art} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-transparent to-transparent" />
        {project.metric && (
          <div className="absolute bottom-3 left-4">
            <span className="font-mono text-xl font-semibold text-accent leading-none drop-shadow">
              {project.metric.value}
            </span>
            <p className="mt-1 text-[11px] text-zinc-300">{project.metric.label}</p>
          </div>
        )}
        <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full border border-line-strong bg-ink-950/80 backdrop-blur-sm text-zinc-300 font-mono">
          {project.tag}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-zinc-100 leading-snug">{project.title}</h3>
        <p className="text-xs text-zinc-400 mt-1 font-mono">{project.duration}</p>

        <ul className="mt-3.5 list-disc ml-5 space-y-1.5 text-sm text-zinc-300 leading-relaxed">
          {project.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        {project.tech && (
          <div className="mt-4 pt-4 border-t border-line-soft flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-ink-800 text-zinc-400">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
});
