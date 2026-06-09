import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Reveal from "@/components/Reveal";
import { ArrowRight, Star, WhatsApp } from "@/components/icons";
import { doctor } from "@/lib/content";
import { bookWaLink } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Dr. Radhika Ujjankar",
  description:
    "Meet Dr. Radhika Ujjankar — BDS, cosmetic & laser dentist, and founder of R Dental Centre, Nerul (W). Specialist in smile design, root canals, and laser procedures.",
};

const credentialGroups = [
  { heading: "Qualifications", items: doctor.qualifications },
  { heading: "Areas of expertise", items: doctor.certifications },
  { heading: "Special focus", items: doctor.education },
  { heading: "Recognition", items: doctor.awards },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the doctor"
        title={`Meet ${doctor.name}`}
        subtitle={`${doctor.title} · ${doctor.credentials}`}
        crumb="About"
      />

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <Reveal className={styles.media}>
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              width={560}
              height={680}
              className={styles.img}
              sizes="(max-width: 920px) 90vw, 460px"
              priority
            />
            <div className={styles.ratingCard}>
              <Star style={{ color: "var(--color-accent)" }} />
              <span>
                <strong>{doctor.rating}</strong> / 5 · {doctor.reviewCount}+ reviews
              </span>
            </div>
          </Reveal>

          <Reveal className={styles.bio} delay={120}>
            <p className="eyebrow">The approach</p>
            <h2 className={styles.h2}>Dentistry that never feels frightening</h2>
            {doctor.bio.map((para) => (
              <p key={para} className={styles.para}>
                {para}
              </p>
            ))}

            <div className={styles.proofRow}>
              <div>
                <span className={styles.proofNum}>{doctor.experienceYears}+</span>
                <span className={styles.proofLabel}>years of experience</span>
              </div>
              <div>
                <span className={styles.proofNum}>{doctor.rating}★</span>
                <span className={styles.proofLabel}>
                  from {doctor.reviewCount}+ reviews
                </span>
              </div>
            </div>

            <a
              href={bookWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsApp /> Book with {doctor.name.split(" ")[0]}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.pressGrid}`}>
          <Reveal className={styles.workMedia}>
            <div className={styles.workPhone}>
              <video
                className={styles.workVideo}
                poster="/clinic/doctor-at-work-poster.jpg"
                controls
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src="/clinic/doctor-at-work.mp4" type="video/mp4" />
              </video>
            </div>
            <p className={styles.workCaption}>Dr. Radhika at work</p>
          </Reveal>

          <Reveal className={styles.press} delay={120}>
            <p className="eyebrow">As featured in</p>
            <h2 className={styles.h2}>Featured in Bombay Times</h2>
            <p className={styles.para}>
              Dr. Radhika was featured in Bombay Times (India) as a Women
              Entrepreneur, sharing her expertise on nurturing women&apos;s oral
              health.
            </p>
            <Image
              src="/clinic/doctor/bombay-times.jpg"
              alt="Dr. Radhika Ujjankar featured in Bombay Times — Nurturing women's oral health"
              width={1100}
              height={1119}
              className={styles.pressImg}
              sizes="(max-width: 920px) 90vw, 520px"
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.credsSection}`}>
        <div className="container">
          <Reveal>
            <h2 className={styles.credsTitle}>Credentials &amp; training</h2>
          </Reveal>
          <div className={styles.credsGrid}>
            {credentialGroups.map((group, i) => (
              <Reveal key={group.heading} delay={i * 80} className={styles.credCard}>
                <h3 className={styles.credHeading}>{group.heading}</h3>
                <ul className={styles.credList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className={`container ${styles.cta}`}>
          <Reveal>
            <h2 className={styles.ctaTitle}>Have a question for the doctor?</h2>
            <p className={styles.ctaText}>
              Start with a consultation, no pressure, no jargon, just a clear
              plan for your smile.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/booking" className="btn btn-primary">
                Book an appointment <ArrowRight />
              </Link>
              <Link href="/treatments" className={styles.ctaLink}>
                Explore treatments <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
