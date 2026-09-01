import { AutoplayVideo } from '../AutoplayVideo';
import { mediaUrl } from '../../lib/mediaUrl';

// One full-bleed band per case study, media on one side and narrative on the
// other, alternating direction down the page. This is what puts the work on
// screen without a click — the modal stays as the deep dive behind
// "Open full case study".
export function CaseStudyFeature({ caseStudy, index, onOpen }) {
  const flipped = index % 2 === 1;
  const raised = index % 2 === 0;
  const media = caseStudy.featureMedia;

  return (
    <div className={`py-20 sm:py-28 ${raised ? 'bg-ink-900 border-y border-line-soft' : ''}`}>
      <div className="max-w-rail mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* `order-*` flips the columns on lg and up while leaving the DOM
              order alone, so the reading and tab order stay media-then-text
              on every row regardless of which side the video sits on. */}
          <div className={`lg:col-span-7 group ${flipped ? 'lg:order-2' : ''}`}>
            {media ? (
              <AutoplayVideo
                src={media.src}
                poster={media.poster}
                alt={media.alt}
                portrait={media.portrait}
                className="shadow-card group-hover:shadow-lift transition-shadow duration-300"
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-950 aspect-video">
                <img
                  src={mediaUrl(caseStudy.poster.src)}
                  alt={caseStudy.poster.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className={`lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {caseStudy.orgShort ?? caseStudy.org}
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50">
              {caseStudy.title}
            </h3>
            <p className="mt-2 font-mono text-xs text-zinc-400">
              {caseStudy.role} · {caseStudy.duration}
            </p>
            <p className="mt-5 text-zinc-300 leading-relaxed">{caseStudy.summary}</p>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-mono text-xl sm:text-2xl font-semibold text-accent leading-none">
                    {metric.value}
                  </dd>
                  <p className="mt-2 text-xs text-zinc-400 leading-snug">{metric.label}</p>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2">
              {caseStudy.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-ink-850 border border-line-soft text-xs font-mono text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpen}
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line-strong text-sm font-semibold text-zinc-100 hover:border-accent hover:text-accent transition-colors"
            >
              Open full case study
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
