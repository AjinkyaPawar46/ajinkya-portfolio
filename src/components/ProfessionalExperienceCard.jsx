import { professionalExperience as pe } from '../data/content';

export function ProfessionalExperienceCard() {
  return (
    <div className="border border-slate-800 rounded-xl p-4">
      <div className="font-medium text-slate-200">{pe.role}</div>
      <div className="text-sm text-slate-400">
        {pe.org} · {pe.duration}
      </div>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-400">
        {pe.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
