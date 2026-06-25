import Image from "next/image";
import { technology } from "@/lib/content";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";
import { Check } from "./icons";
import styles from "./TechnologyVideo.module.css";

export default function TechnologyVideo() {
  return (
    <section className={`section ${styles.section}`} id="technology">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.body}>
          <p className="eyebrow">{technology.eyebrow}</p>
          <h2 className={styles.title}>{technology.title}</h2>
          <p className={styles.text}>{technology.text}</p>

          <ul className={styles.points}>
            {technology.points.map((p) => (
              <li key={p} className={styles.point}>
                <span className={styles.check} aria-hidden>
                  <Check />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.media} delay={120}>
          {technology.clips.map((clip) => (
            <figure key={clip.src} className={styles.clip}>
              <div className={styles.phone}>
                <LazyVideo
                  className={styles.video}
                  src={clip.src}
                  poster={clip.poster}
                  caption={`/captions/${clip.src
                    .split("/")
                    .pop()
                    ?.replace(".mp4", ".vtt")}`}
                />
              </div>
              <figcaption className={styles.clipLabel}>{clip.label}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>

      <div className={`container ${styles.equip}`}>
        <Reveal className={styles.equipHead}>
          <h3 className={styles.equipTitle}>{technology.equipmentHeading}</h3>
          <p className={styles.equipIntro}>{technology.equipmentIntro}</p>
        </Reveal>

        <div className={styles.equipGrid}>
          {technology.equipment.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 90}
              className={styles.equipCardReveal}
            >
              <figure className={styles.equipCard}>
                <div className={styles.equipMedia}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 760px) 90vw, 320px"
                    className={styles.equipImg}
                  />
                </div>
                <figcaption className={styles.equipLabel}>
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
