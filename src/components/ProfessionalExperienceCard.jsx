import { professionalExperience as pe } from '../data/content';

export function ProfessionalExperienceCard() {
  return (
    <div className="border border-line-soft bg-ink-900/40 rounded-xl p-5">
      <div className="font-medium text-zinc-300">{pe.role}</div>
      <div className="text-xs text-zinc-400 mt-1 font-mono">
        {pe.org} · {pe.duration}
      </div>
      <ul className="mt-3 list-disc ml-5 space-y-1.5 text-sm text-zinc-300">
        {pe.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
