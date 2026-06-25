"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { videoTestimonials } from "@/lib/content";
import Reveal from "./Reveal";
import styles from "./VideoTestimonials.module.css";

const Play = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
  </svg>
);

type Item = (typeof videoTestimonials)[number];

function Testimonial({ v, delay }: { v: Item; delay: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  // Start playback inside the click handler (a user gesture) so the browser
  // — including iOS Safari — allows sound. The file is only fetched now
  // (preload="none"), so nothing loads until the visitor chooses to watch.
  const start = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1;
    setStarted(true);
    el.play().catch(() => {});
  };

  const caption = `/captions/${v.video
    .split("/")
    .pop()
    ?.replace(".mp4", ".vtt")}`;

  return (
    <Reveal delay={delay} className={styles.cardReveal}>
      <div className={styles.card}>
        <video
          ref={ref}
          className={styles.video}
          controls={started}
          playsInline
          preload="none"
          src={v.video}
        >
          <track
            kind="captions"
            src={caption}
            srcLang="en"
            label="English"
            default
          />
        </video>

        {!started && (
          <button
            type="button"
            className={styles.trigger}
            onClick={start}
            aria-label={`Play ${v.name} video`}
          >
            <Image
              src={v.poster.src}
              alt={v.poster.alt}
              fill
              sizes="(max-width: 760px) 90vw, 320px"
              className={styles.poster}
            />
            <span className={styles.scrim} />
            <span className={styles.play} aria-hidden>
              <Play />
            </span>
            <span className={styles.meta}>
              <strong>{v.name}</strong>
              <span>{v.treatment}</span>
            </span>
          </button>
        )}
      </div>
    </Reveal>
  );
}

export default function VideoTestimonials() {
  return (
    <div className={styles.wrap}>
      <Reveal>
        <h3 className={styles.heading}>Hear it from our patients</h3>
      </Reveal>
      <div className={styles.grid}>
        {videoTestimonials.map((v, i) => (
          <Testimonial key={i} v={v} delay={i * 90} />
        ))}
      </div>
    </div>
  );
}
