// One place defines heading rhythm for every section: a mono eyebrow, a
// large tracking-tight title, an optional subtitle, and a short accent rule.
// `tone` follows the site-wide rule — 'accent' (cyan) for technical/quantitative
// sections, 'gold' (amber) for recognition.
const TONES = {
  accent: { text: 'text-accent', rule: 'bg-accent' },
  gold: { text: 'text-gold', rule: 'bg-gold' },
};

export function SectionHeading({ eyebrow, title, subtitle, tone = 'accent', align = 'left' }) {
  const t = TONES[tone] ?? TONES.accent;
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start';

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className={`font-mono text-xs uppercase tracking-[0.18em] ${t.text}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
        {title}
      </h2>
      <span className={`mt-4 h-px w-12 ${t.rule}`} aria-hidden="true" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
