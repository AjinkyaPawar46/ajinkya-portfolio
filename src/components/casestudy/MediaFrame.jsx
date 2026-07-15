import { mediaUrl } from '../../lib/mediaUrl';

// object-contain (not object-cover) for images: several are diagrams with
// axis labels/text — cropping them to fill a fixed box would cut off
// exactly the detail meant to prove technical depth. Videos use
// object-cover since some minor edge cropping doesn't lose information.
export function MediaFrame({ item }) {
  const boxHeight = item.portrait ? 'h-80' : 'h-56 sm:h-64';

  if (item.type === 'video') {
    return (
      <figure>
        <div className={`${boxHeight} rounded-lg overflow-hidden bg-ink-950 border border-line`}>
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
        {item.caption && <figcaption className="mt-2 text-xs text-zinc-500">{item.caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure>
      <div className={`${boxHeight} rounded-lg overflow-hidden bg-ink-950 border border-line flex items-center justify-center`}>
        <img
          src={mediaUrl(item.src)}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      {item.caption && <figcaption className="mt-2 text-xs text-zinc-500">{item.caption}</figcaption>}
    </figure>
  );
}
