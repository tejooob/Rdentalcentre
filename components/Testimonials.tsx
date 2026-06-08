import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";
import VideoTestimonials from "./VideoTestimonials";
import { Quote, Star } from "./icons";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`} id="reviews">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Patient stories</p>
          <h2 className={styles.title}>What our patients say</h2>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className={styles.cardReveal}>
              <figure className={styles.card}>
                <Quote className={styles.quoteMark} />
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} style={{ color: "var(--color-accent)" }} />
                  ))}
                </div>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <figcaption className={styles.person}>
                  <span className={styles.avatar} aria-hidden>
                    {t.initials}
                  </span>
                  <span>
                    <strong className={styles.name}>{t.name}</strong>
                    <span className={styles.detail}>{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <VideoTestimonials />
      </div>
    </section>
  );
}
