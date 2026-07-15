import { Section } from './layout/Section';
import { publications } from '../data/content';

export function Publications() {
  return (
    <Section id="publications" className="max-w-6xl mx-auto px-6 mb-10">
      <h3 className="text-2xl font-semibold">Publications</h3>
      <div className="mt-4 space-y-3">
        {publications.map((pub, i) => (
          <div key={i} className="bg-ink-900 border border-line rounded-2xl p-4 flex items-start justify-between gap-4">
            <div>
              <div className="font-medium">{pub.title}</div>
              <div className="text-sm text-zinc-500 mt-1">{pub.authors}</div>
              <div className="text-sm text-zinc-400 mt-1">{pub.venue}</div>
            </div>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-sm px-3 py-1 rounded-md border border-line hover:border-accent text-accent transition-colors"
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
