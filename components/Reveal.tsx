"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms before this element animates in. */
  delay?: number;
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-reveal that enhances an already-visible default. Content renders
 * visible in HTML; only after JS confirms motion is allowed does it "arm"
 * (hide) the element and reveal it on scroll into view. On headless renders
 * or reduced-motion, the content simply stays visible.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    // Leave anything already on screen visible — only animate what's below the
    // fold. This guarantees the top of every page renders immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    el.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transitionDelay = `${delay}ms`;
            target.classList.remove("reveal-armed");
            target.classList.add("reveal-in");
            observer.unobserve(target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
