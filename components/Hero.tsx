import Image from "next/image";
import { heroPills, featuredDentist } from "@/lib/content";
import { images } from "@/lib/images";
import { ArrowRight, Star } from "./icons";
import styles from "./Hero.module.css";

const trustAvatars = [
  images.patientSarah,
  images.patientEmily,
  images.patientMichael,
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ${styles.a0}`}>
            <span className={styles.dot} /> Trusted dental care in Nerul (W)
          </p>

          <h1 className={`${styles.title} ${styles.a1}`}>
            Complete dental care,{" "}
            <span className={styles.em}>one trusted address.</span>
          </h1>

          <p className={`${styles.lead} ${styles.a2}`}>
            Advanced dental care for the whole family in Nerul (W), Navi Mumbai —
            from routine check-ups to complete smile transformations, all under
            one roof.
          </p>

          <div className={`${styles.actions} ${styles.a3}`}>
            <a href="/booking" className="btn btn-primary">
              Book an Appointment <ArrowRight />
            </a>
            <a href="#services" className={styles.ghost}>
              See our services
            </a>
          </div>

          <div className={`${styles.trust} ${styles.a4}`}>
            <div className={styles.avatars}>
              {trustAvatars.map((a, i) => (
                <Image
                  key={i}
                  src={a.src}
                  alt={a.alt}
                  width={80}
                  height={80}
                  className={styles.trustAvatar}
                  style={{ zIndex: trustAvatars.length - i }}
                />
              ))}
            </div>
            <div className={styles.trustText}>
              <span className={styles.trustStars}>
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} style={{ color: "var(--color-accent)" }} />
                ))}
                <strong>4.8</strong>
              </span>
              <span className={styles.trustNote}>from 242+ Justdial reviews</span>
            </div>
          </div>
        </div>

        <div className={`${styles.figure} ${styles.a2}`}>
          <div className={styles.frame}>
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 980px) 92vw, 520px"
              className={styles.heroImg}
            />
          </div>

          <figure className={`${styles.card} ${styles.a4}`}>
            <Image
              src={featuredDentist.image.src}
              alt={featuredDentist.image.alt}
              width={120}
              height={120}
              className={styles.cardAvatar}
            />
            <figcaption className={styles.cardBody}>
              <strong className={styles.cardName}>{featuredDentist.name}</strong>
              <span className={styles.cardRole}>{featuredDentist.role}</span>
              <span className={styles.cardRating}>
                <Star style={{ color: "var(--color-accent)" }} />
                {featuredDentist.rating.toFixed(1)}
                <span className={styles.cardNote}>· {featuredDentist.note}</span>
              </span>
            </figcaption>
          </figure>

          <div className={`${styles.chip} ${styles.a5}`}>
            <span className={styles.chipNum}>98%</span>
            <span className={styles.chipLabel}>patient satisfaction</span>
          </div>
        </div>
      </div>

      <ul className={`container ${styles.pills} ${styles.a5}`}>
        <li className={styles.pillsLabel}>Popular treatments</li>
        {heroPills.map((pill) => (
          <li key={pill} className={styles.pill}>
            {pill}
          </li>
        ))}
      </ul>
    </section>
  );
}
