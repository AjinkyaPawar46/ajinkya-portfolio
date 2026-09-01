import { useEffect, useRef, useState } from 'react';
import { mediaUrl } from '../lib/mediaUrl';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// A muted, looping clip that plays only while it's on screen.
//
// Three things make this safe to scatter across the page:
//   1. `src` is not attached until the element first intersects, so a video
//      far down the page costs nothing until the reader scrolls to it.
//   2. Only the in-view instance plays — everything else is paused, so a
//      long page never has six videos decoding at once.
//   3. Under prefers-reduced-motion the <video> is never mounted at all
//      (pausing it would still download the clip), mirroring HeroVideo.
//
// WCAG 2.2.2 requires motion lasting over five seconds to be pausable, so
// every instance carries a visible play/pause control.
export function AutoplayVideo({ src, poster, alt, portrait = false, className = '' }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Null until the element first intersects; after that it holds the resolved
  // URL and the <source> mounts.
  const [resolvedSrc, setResolvedSrc] = useState(null);
  const [paused, setPaused] = useState(false);
  // `paused` is the reader's explicit choice and must survive scrolling away
  // and back, so the observer reads it through a ref rather than resubscribing.
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const el = wrapRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResolvedSrc((current) => current ?? mediaUrl(src));
          if (!pausedRef.current) {
            // play() rejects if the browser declines autoplay (or if the
            // element is torn down mid-promise). Neither is actionable —
            // the poster stays visible, which is the correct fallback.
            videoRef.current?.play?.().catch(() => {});
          }
        } else {
          videoRef.current?.pause?.();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, prefersReducedMotion]);

  useEffect(() => {
    // React sets `muted` as a property late enough that the browser can
    // evaluate autoplay eligibility against an unmuted element and block it.
    // Setting it imperatively guarantees it lands first.
    if (videoRef.current) videoRef.current.muted = true;
  }, [resolvedSrc]);

  const aspect = portrait ? 'aspect-[3/4]' : 'aspect-video';
  const frame = `relative overflow-hidden rounded-2xl border border-line bg-ink-950 ${aspect} ${className}`;

  if (prefersReducedMotion) {
    return (
      <div className={frame}>
        <img src={mediaUrl(poster)} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <div ref={wrapRef} className={frame}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster={mediaUrl(poster)}
        aria-label={alt}
        className="w-full h-full object-cover"
      >
        {resolvedSrc && <source src={resolvedSrc} type="video/mp4" />}
      </video>

      <button
        type="button"
        onClick={toggle}
        aria-label={paused ? 'Play video' : 'Pause video'}
        className="absolute bottom-3 right-3 w-9 h-9 grid place-items-center rounded-full border border-line-strong bg-ink-950/70 text-zinc-300 backdrop-blur-sm opacity-0 focus-visible:opacity-100 group-hover:opacity-100 hover:text-accent hover:border-accent transition-opacity"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
