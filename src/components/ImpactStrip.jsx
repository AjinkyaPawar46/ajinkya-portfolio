import { impactStats } from '../data/content';

const TONES = {
  accent: 'text-accent',
  gold: 'text-gold',
};

// The proof-at-a-glance band directly under the hero. Values are strings
// rather than numbers ('100→7', '4th', '+40%'), so this renders them as
// typed — there's no count-up to run and nothing to parse.
export function ImpactStrip() {
  return (
    <section
      id="impact"
      className="relative z-10 border-y border-line-soft bg-ink-900/60 backdrop-blur-sm"
    >
      <div className="max-w-rail mx-auto px-6 sm:px-8 py-10 sm:py-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          {impactStats.map((stat) => (
            <li key={stat.label} className="flex flex-col">
              <span
                className={`font-mono font-semibold text-stat leading-none ${
                  TONES[stat.tone] ?? TONES.accent
                }`}
              >
                {stat.value}
                {stat.suffix && (
                  <span className="text-base text-zinc-400 font-normal ml-1">{stat.suffix}</span>
                )}
              </span>
              <span className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-snug">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
