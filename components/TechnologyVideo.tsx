import { technology } from "@/lib/content";
import Reveal from "./Reveal";
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
          <div className={styles.phone}>
            <video
              className={styles.video}
              poster={technology.poster}
              controls
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={technology.video} type="video/mp4" />
              Your browser doesn&apos;t support embedded video.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
