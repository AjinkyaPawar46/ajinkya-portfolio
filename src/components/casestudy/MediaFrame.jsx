import { mediaUrl } from '../../lib/mediaUrl';

// Images default to object-contain: many are diagrams with axis labels and
// legend text, and cropping them to fill the box would cut off exactly the
// detail meant to prove technical depth. Photographs can be cropped safely,
// so those carry `fit: 'cover'` in content.js — without it a portrait photo
// sits in a 16:10 box with wide empty bars either side.
//
// Aspect ratios rather than fixed heights, so a wide plot in a two-column
// grid isn't letterboxed into a short box with dead space above and below.
export function MediaFrame({ item }) {
  const box = item.portrait ? 'aspect-[3/4]' : 'aspect-[16/10]';
  const frame = `${box} rounded-lg overflow-hidden bg-ink-950 border border-line`;

  if (item.type === 'video') {
    return (
      <figure>
        <div className={frame}>
          <video
            controls
            preload="none"
            poster={mediaUrl(item.poster)}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={mediaUrl(item.src)} type="video/mp4" />
          </video>
        </div>
        {item.caption && <figcaption className="mt-2 text-xs text-zinc-400">{item.caption}</figcaption>}
      </figure>
    );
  }

  const cover = item.fit === 'cover';

  return (
    <figure>
      <div className={`${frame} ${cover ? '' : 'flex items-center justify-center p-2'}`}>
        <img
          src={mediaUrl(item.src)}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className={cover ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}
        />
      </div>
      {item.caption && <figcaption className="mt-2 text-xs text-zinc-400">{item.caption}</figcaption>}
    </figure>
  );
}
