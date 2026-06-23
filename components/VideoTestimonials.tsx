"use client";

import { useState } from "react";
import Image from "next/image";
import { videoTestimonials } from "@/lib/content";
import Reveal from "./Reveal";
import styles from "./VideoTestimonials.module.css";

const Play = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
  </svg>
);

export default function VideoTestimonials() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className={styles.wrap}>
      <Reveal>
        <h3 className={styles.heading}>Hear it from our patients</h3>
      </Reveal>
      <div className={styles.grid}>
        {videoTestimonials.map((v, i) => (
          <Reveal key={i} delay={i * 90} className={styles.cardReveal}>
            <div className={styles.card}>
              {playing === i ? (
                <video
                  className={styles.video}
                  src={v.video}
                  poster={v.poster.src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  <track
                    kind="captions"
                    src={`/captions/${v.video.split("/").pop()?.replace(".mp4", ".vtt")}`}
                    srcLang="en"
                    label="English"
                    default
                  />
                </video>
              ) : (
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setPlaying(i)}
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
        ))}
      </div>
    </div>
  );
}
