import { motion } from 'framer-motion';
import { mediaUrl } from '../../lib/mediaUrl';

export function CaseStudyCard({ caseStudy, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -2 }}
      className="text-left rounded-2xl border border-line bg-ink-900 overflow-hidden hover:border-accent/60 transition-colors group flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-ink-950">
        <img
          src={mediaUrl(caseStudy.poster.src)}
          alt={caseStudy.poster.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-semibold text-lg leading-snug">{caseStudy.title}</h4>
        <p className="text-sm text-zinc-500 mt-1 font-mono">
          {caseStudy.org} · {caseStudy.duration}
        </p>
        <p className="text-sm text-zinc-400 mt-3 line-clamp-2">{caseStudy.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.metrics.slice(0, 2).map((m) => (
            <span key={m.label} className="text-xs font-mono px-2 py-1 rounded-full border border-line">
              <span className="text-accent font-semibold">{m.value}</span>{' '}
              <span className="text-zinc-500">{m.label}</span>
            </span>
          ))}
        </div>
        <span className="mt-4 text-sm text-accent font-medium">View case study &rarr;</span>
      </div>
    </motion.button>
  );
}
