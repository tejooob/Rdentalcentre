"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Img } from "@/lib/images";
import styles from "./BeforeAfter.module.css";

type Props = {
  before: Img;
  after: Img;
  className?: string;
};

/**
 * Before/after comparison slider. Drag the handle, or use the overlaid range
 * input (pointer + keyboard arrows), to wipe between the two images. The before
 * image is clipped with clip-path so neither image is ever distorted.
 */
export default function BeforeAfter({ before, after, className }: Props) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.wrap} ${className ?? ""}`} ref={wrap}>
      {/* After: base layer */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(max-width: 700px) 92vw, 560px"
        className={styles.img}
      />
      <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>

      {/* Before: same full-size layer, revealed from the left via clip-path */}
      <div
        className={styles.beforeLayer}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 700px) 92vw, 560px"
          className={styles.img}
        />
        <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
      </div>

      {/* Visual handle */}
      <div className={styles.handle} style={{ left: `${pos}%` }} aria-hidden>
        <span className={styles.knob} />
      </div>

      {/* Accessible control overlaying the image */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className={styles.range}
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
