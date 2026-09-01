import { Section } from './layout/Section';
import { SectionHeading } from './layout/SectionHeading';
import { publications, profile } from '../data/content';
import { mediaUrl } from '../lib/mediaUrl';

// Only the IROS submission has a figure of its own; the arXiv entry falls
// back to a mono initials plate rather than borrowing an unrelated image.
const THUMBS = {
  'Rapid Object Retrieval from Dense Clutter via Reactive RL Policies': {
    src: 'media/rutgers/figure1.webp',
    alt: 'Method figure: a reactive RL policy retrieving a target object from dense clutter',
  },
};

// The author list is a plain string in content.js, so pull out this site's
// owner by surname and emphasize it — the reader should not have to hunt
// for which name is his.
function Authors({ value }) {
  const surname = profile.name.split(' ').pop();
  return (
    <p className="text-sm text-zinc-400 mt-1.5">
      {value.split(', ').map((author, i, all) => {
        const isMe = author.includes(surname);
        return (
          <span key={author}>
            <span className={isMe ? 'text-accent font-medium' : undefined}>{author}</span>
            {i < all.length - 1 && ', '}
          </span>
        );
      })}
    </p>
  );
}

export function Publications() {
  return (
    <Section id="publications">
      <SectionHeading
        eyebrow="Writing"
        title="Publications"
        subtitle="Peer-reviewed and preprint work in robotic manipulation and autonomous driving."
      />

      <div className="mt-10 space-y-5">
        {publications.map((pub) => {
          const thumb = THUMBS[pub.title];
          return (
            <article
              key={pub.title}
              className="rounded-2xl border border-line bg-ink-850 shadow-card hover:border-line-strong transition-colors overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-56 shrink-0 bg-ink-950 border-b sm:border-b-0 sm:border-r border-line-soft grid place-items-center p-4 min-h-[7rem]">
                  {thumb ? (
                    <img
                      src={mediaUrl(thumb.src)}
                      alt={thumb.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-32 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                      Preprint
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="flex-1">
                    <h3 className="font-semibold text-zinc-100 leading-snug">{pub.title}</h3>
                    <Authors value={pub.authors} />
                    <p className="mt-3">
                      <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-full border border-gold/40 text-gold">
                        {pub.venue}
                      </span>
                    </p>
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 self-start inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-line-strong text-zinc-200 hover:bg-accent hover:text-ink-950 hover:border-accent transition-colors"
                    >
                      View
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
