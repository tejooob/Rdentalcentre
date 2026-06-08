import { stats } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";
import { Star } from "./icons";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Practice at a glance">
      <div className={`container ${styles.row}`}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className={styles.item}>
            <div className={styles.value}>
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              {s.star && (
                <Star className={styles.star} style={{ color: "var(--color-accent)" }} />
              )}
            </div>
            <div className={styles.label}>{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
