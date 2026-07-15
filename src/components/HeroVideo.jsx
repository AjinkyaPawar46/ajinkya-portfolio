import { useEffect, useRef } from 'react';
import { heroMedia } from '../data/content';
import { mediaUrl } from '../lib/mediaUrl';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function HeroVideo() {
  const videoRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // React's `muted` prop is set as a DOM property in a way that's
    // inconsistently applied before the browser evaluates autoplay
    // eligibility — the browser can end up seeing an "unmuted" video and
    // silently block autoplay. Setting it imperatively guarantees it lands.
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  if (prefersReducedMotion) {
    // Render the poster only — don't mount <video> at all. Pausing would
    // still download the full clip for someone who explicitly asked for
    // less motion.
    return (
      <img
        src={mediaUrl(heroMedia.poster)}
        alt={heroMedia.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={mediaUrl(heroMedia.poster)}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={mediaUrl(heroMedia.video)} type="video/mp4" />
    </video>
  );
}
