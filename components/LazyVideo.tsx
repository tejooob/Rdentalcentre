"use client";

import { useEffect, useRef } from "react";
import styles from "./LazyVideo.module.css";

type Props = {
  src: string;
  poster?: string;
  /** WebVTT caption file path (shown by default — kept per request). */
  caption?: string;
  className?: string;
};

const Expand = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <path
      d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * A muted, looping clip that only downloads and plays once it scrolls into
 * view (preload="none" + IntersectionObserver). This stops several videos from
 * all loading at once on page load — the main cause of slow/failed playback on
 * mobile. Respects reduced-motion (won't auto-play; controls still work).
 * Includes an explicit fullscreen button (with iOS Safari support).
 */
export default function LazyVideo({ src, poster, caption, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!reduce) el.play().catch(() => {});
          } else if (!el.paused) {
            el.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goFullscreen = () => {
    const el = ref.current as
      | (HTMLVideoElement & {
          webkitEnterFullscreen?: () => void;
          webkitRequestFullscreen?: () => void;
        })
      | null;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // iOS
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <>
      <video
        ref={ref}
        className={className}
        poster={poster}
        muted
        loop
        playsInline
        controls
        preload="none"
      >
        <source src={src} type="video/mp4" />
        {caption && (
          <track
            kind="captions"
            src={caption}
            srcLang="en"
            label="English"
            default
          />
        )}
      </video>
      <button
        type="button"
        className={styles.fsBtn}
        onClick={goFullscreen}
        aria-label="Play full screen"
      >
        <Expand />
      </button>
    </>
  );
}
