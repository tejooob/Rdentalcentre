import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/content";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import styles from "./GalleryPreview.module.css";

export default function GalleryPreview() {
  const item = gallery[0];

  return (
    <section className={`section ${styles.section}`} id="gallery">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Before &amp; after</p>
          <h2 className={styles.title}>Real smiles, real results</h2>
          <p className={styles.text}>
            See the difference for yourself. Every result is the work of careful
            planning, not filters, across smile design, whitening, crowns and
            full smile makeovers.
          </p>
          <ul className={styles.tags}>
            {gallery.map((g) => (
              <li key={g.category}>{g.category}</li>
            ))}
            <li>Implants</li>
            <li>Smile makeovers</li>
          </ul>
          <Link href="/gallery" className={styles.link}>
            View the full gallery <ArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={120} className={styles.sliderWrap}>
          <div className={styles.frame}>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 880px) 92vw, 520px"
              className={styles.frameImg}
            />
            <span className={`${styles.baTag} ${styles.baBefore}`}>Before</span>
            <span className={`${styles.baTag} ${styles.baAfter}`}>After</span>
          </div>
          <p className={styles.caption}>
            {item.title} · <span>{item.treatment}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
