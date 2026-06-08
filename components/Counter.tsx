"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Numeric portion to count up to (e.g. 98, 50, 4.9). */
  value: number;
  /** Text shown after the number (e.g. "%", "K+", "+"). */
  suffix?: string;
  /** Decimal places to display. */
  decimals?: number;
  durationMs?: number;
};

/**
 * Counts up from 0 to `value` when scrolled into view. Reduced-motion and
 * headless renders show the final value immediately.
 */
export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  durationMs = 1600,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    setDisplay(0);
    let raf = 0;
    let started = false;

    const animate = (start: number) => {
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        // ease-out-expo
        const eased =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplay(value * eased);
        if (progress < 1) raf = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            animate(performance.now());
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
