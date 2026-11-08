"use client";

/**
 * Optional looping background video.
 * Renders nothing unless NEXT_PUBLIC_HERO_VIDEO_SRC is set, so the gradient
 * fallback in <Hero /> shows instead and there are no 404s.
 */
const VIDEO_SRC = process.env.NEXT_PUBLIC_HERO_VIDEO_SRC;
const POSTER_SRC = process.env.NEXT_PUBLIC_HERO_POSTER_SRC;

export function HeroVideo() {
  if (!VIDEO_SRC) return null;

  return (
    <video
      className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
      src={VIDEO_SRC}
      poster={POSTER_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onLoadedData={(event) => {
        // Respect users who prefer reduced motion.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          event.currentTarget.pause();
        }
      }}
    />
  );
}
