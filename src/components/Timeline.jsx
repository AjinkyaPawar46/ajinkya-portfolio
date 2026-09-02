import { Section } from './layout/Section';
import { SectionHeading } from './layout/SectionHeading';
import { timeline } from '../data/content';

const KIND_LABEL = {
  education: 'Education',
  role: 'Leadership',
  research: 'Research',
};

const TONES = {
  accent: { dot: 'bg-accent', ring: 'ring-accent/25', badge: 'border-accent/40 text-accent' },
  gold: { dot: 'bg-gold', ring: 'ring-gold/25', badge: 'border-gold/40 text-gold' },
};

// One vertical spine merging education and roles into a single 2022 → 2028
// arc, newest first. Replaces the old Education section — the degrees are
// still here, just read alongside the work that happened during them.
export function Timeline() {
  return (
    <Section id="journey" band="raised">
      <SectionHeading
        eyebrow="Journey"
        title="Where the work happened"
        subtitle="Degrees and roles on one line - IIT Bombay through Rutgers to Michigan."
      />

      <ol className="mt-12 relative">
        {/* The spine sits behind the dots, fading at both ends so it doesn't
            terminate in a hard stub. */}
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px bg-spine"
          aria-hidden="true"
        />

        {timeline.map((entry) => {
          const tone = TONES[entry.tone] ?? TONES.accent;
          return (
            <li key={`${entry.org}-${entry.period}`} className="relative pl-10 pb-11 last:pb-0">
              <span
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${tone.dot} ring-4 ${tone.ring}`}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-xs text-zinc-400">{entry.period}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                  {KIND_LABEL[entry.kind]}
                </span>
                {entry.badge && (
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${tone.badge}`}
                  >
                    {entry.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-2.5 text-lg font-semibold text-zinc-100 leading-snug">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{entry.org}</p>
              {entry.guide && (
                <p className="mt-1 text-xs text-zinc-400">Guide: {entry.guide}</p>
              )}
              {entry.note && (
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed max-w-2xl">{entry.note}</p>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
