import Image from "next/image";
import { clinicTour } from "@/lib/content";
import Reveal from "./Reveal";
import styles from "./VirtualTour.module.css";

export default function VirtualTour() {
  return (
    <section className={`section ${styles.section}`} id="tour">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Inside the clinic</p>
          <h2 className={styles.title}>See where you&apos;ll be treated</h2>
          <p className={styles.intro}>
            Clean, modern and calm. Here&apos;s a look at our treatment room, so
            you know exactly what to expect when you arrive.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {clinicTour.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className={styles.cardReveal}>
              <figure className={styles.card}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 700px) 90vw, 280px"
                  className={styles.img}
                />
                <figcaption className={styles.caption}>
                  <strong>{item.title}</strong>
                  <span>{item.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
