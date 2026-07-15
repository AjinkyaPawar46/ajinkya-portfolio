import { positionsOfResponsibility } from '../data/content';

export function PositionsOfResponsibility() {
  return (
    <div className="space-y-3">
      {positionsOfResponsibility.map((pos, i) => (
        <div key={i} className="border border-slate-800 rounded-xl p-4">
          <div className="font-medium text-slate-200">{pos.role}</div>
          <div className="text-sm text-slate-400">
            {pos.org} · {pos.duration}
          </div>
          <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-400">
            {pos.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
