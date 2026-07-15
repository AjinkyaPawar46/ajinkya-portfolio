import { extracurricular } from '../data/content';

export function ExtracurricularList() {
  return (
    <div className="border border-line rounded-xl p-4">
      <div className="font-medium text-zinc-300">Extra-curricular Activities</div>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-zinc-500">
        {extracurricular.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
