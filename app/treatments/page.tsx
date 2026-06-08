import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TechnologyVideo from "@/components/TechnologyVideo";
import { ArrowRight } from "@/components/icons";
import { treatments } from "@/lib/content";
import styles from "./treatments.module.css";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "R Dental Centre offers a full range of dental services including root canal, implants, braces, smile design, teeth whitening, laser dentistry and more in Nerul, Navi Mumbai.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title="Treatments for every smile"
        subtitle="From routine checkups to full smile makeovers, every treatment under one calm roof in Nerul (W) — no referrals needed."
        crumb="Treatments"
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80} className={styles.cardReveal}>
                <article className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={t.image.src}
                      alt={t.image.alt}
                      fill
                      sizes="(max-width: 620px) 92vw, 360px"
                      className={styles.img}
                    />
                    <span className={styles.tag}>{t.tag}</span>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.titleRow}>
                      <h2 className={styles.title}>{t.title}</h2>
                      <span className={styles.price}>{t.priceFrom}</span>
                    </div>
                    <p className={styles.blurb}>{t.blurb}</p>
                    <Link href="/booking" className={styles.link}>
                      Book this <ArrowRight />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.cta}>
            <p>
              Not sure what you need? Take the 30-second smile quiz or talk to
              us directly.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/booking#quiz" className="btn btn-primary">
                Take the smile quiz <ArrowRight />
              </Link>
              <Link href="/contact" className={styles.ctaLink}>
                Contact the clinic <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TechnologyVideo />
    </main>
  );
}
