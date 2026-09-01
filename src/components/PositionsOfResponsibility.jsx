import { positionsOfResponsibility } from '../data/content';

export function PositionsOfResponsibility() {
  return (
    <div className="space-y-3">
      {positionsOfResponsibility.map((pos, i) => (
        <div key={i} className="border border-line-soft bg-ink-900/40 rounded-xl p-5">
          <div className="font-medium text-zinc-300">{pos.role}</div>
          <div className="text-xs text-zinc-400 mt-1 font-mono">
            {pos.org} · {pos.duration}
          </div>
          <ul className="mt-3 list-disc ml-5 space-y-1.5 text-sm text-zinc-300">
            {pos.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
