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
            className={`relative px-3 py-1.5 rounded-full text-sm border transition-colors font-mono ${
              isActive ? 'text-ink-950 border-transparent font-medium' : 'text-zinc-400 border-line hover:border-accent hover:text-accent'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
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
