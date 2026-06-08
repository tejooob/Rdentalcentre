import Image from "next/image";
import Link from "next/link";
import { doctor } from "@/lib/content";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";
import styles from "./DoctorPreview.module.css";

export default function DoctorPreview() {
  return (
    <section className={`section ${styles.section}`} id="doctor">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <Image
            src={images.about.src}
            alt={images.about.alt}
            width={620}
            height={720}
            className={styles.img}
            sizes="(max-width: 920px) 90vw, 500px"
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>{doctor.experienceYears}+</span>
            <span className={styles.badgeLabel}>years of experience</span>
          </div>
        </Reveal>

        <Reveal className={styles.body} delay={120}>
          <p className="eyebrow">Meet your dentist</p>
          <h2 className={styles.title}>
            Care led by {doctor.name}
          </h2>
          <p className={styles.role}>
            {doctor.title} · {doctor.credentials}
          </p>
          <p className={styles.text}>{doctor.bio[0]}</p>

          <ul className={styles.points}>
            {doctor.qualifications.slice(0, 3).map((q) => (
              <li key={q} className={styles.point}>
                <span className={styles.check} aria-hidden>
                  <Check />
                </span>
                {q}
              </li>
            ))}
          </ul>

          <p className={styles.proof}>
            <strong>{doctor.rating}★</strong> rating from{" "}
            <strong>{doctor.reviewCount}+</strong> patient reviews
          </p>

          <Link href="/about" className={styles.read}>
            Read {doctor.name.split(" ")[0]}&apos;s full profile{" "}
            <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
