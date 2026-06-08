import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import styles from "./Services.module.css";

export default function Services() {
  const [feature, ...rest] = services;

  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our services</p>
            <h2 className={styles.title}>
              Signature dental care, start to finish
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={styles.intro}>
              A full range of treatments tailored to your needs, using the
              latest advances in dental technology, all under one calm roof.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          <Reveal className={styles.featureReveal}>
            <article className={`${styles.card} ${styles.feature}`}>
              <div className={styles.featureMedia}>
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 460px"
                  className={styles.img}
                />
              </div>
              <div className={styles.featureBody}>
                <span className={styles.badge}>Most requested</span>
                <span className={styles.tag}>{feature.tag}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.blurb}>{feature.blurb}</p>
                <Link href="/booking" className={styles.link}>
                  Book this treatment <ArrowRight />
                </Link>
              </div>
            </article>
          </Reveal>

          {rest.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className={styles.cardReveal}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 620px) 92vw, 300px"
                    className={styles.img}
                  />
                  <span className={`${styles.tag} ${styles.tagOnImg}`}>
                    {s.tag}
                  </span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.blurb}>{s.blurb}</p>
                  <Link href="/treatments" className={styles.link}>
                    Learn more <ArrowRight />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.allWrap}>
          <Link href="/treatments" className="btn btn-primary">
            View all treatments <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
