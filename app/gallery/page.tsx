import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, WhatsApp } from "@/components/icons";
import { gallery } from "@/lib/content";
import { bookWaLink } from "@/lib/site";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "Real before-and-after results from R Dental Centre, Nerul — smile design, whitening and crowns. See the difference for yourself.",
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Before & after"
        title="Smiles we've transformed"
        subtitle="Real treatment outcomes from our clinic in Nerul — the result of careful planning, not filters."
        crumb="Gallery"
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {gallery.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100} className={styles.item}>
                <div className={styles.frame}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 760px) 92vw, 520px"
                    className={styles.frameImg}
                  />
                  <span className={`${styles.baTag} ${styles.baBefore}`}>Before</span>
                  <span className={`${styles.baTag} ${styles.baAfter}`}>After</span>
                </div>
                <div className={styles.caption}>
                  <span className={styles.cat}>{item.category}</span>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.treatment}>Treatment: {item.treatment}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.note}>
            <p>
              Want to see results for your specific case? Send us a photo on
              WhatsApp and we&apos;ll talk you through the options.
            </p>
            <div className={styles.actions}>
              <a
                href={bookWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsApp /> Ask about your smile
              </a>
              <Link href="/treatments" className={styles.link}>
                Browse treatments <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
