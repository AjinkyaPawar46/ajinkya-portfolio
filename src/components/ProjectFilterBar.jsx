import { motion } from 'framer-motion';

export function ProjectFilterBar({ tags, activeTag, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = tag === activeTag;
        return (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={`relative px-3 py-1.5 rounded-full text-sm border transition-colors ${
              isActive ? 'text-slate-950 border-transparent' : 'text-slate-300 border-slate-700 hover:border-amber-300 hover:text-amber-300'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 rounded-full bg-amber-300"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <motion.span whileTap={{ scale: 0.95 }} className="relative">
              {tag}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
