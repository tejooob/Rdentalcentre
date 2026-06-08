import { Check } from "./icons";
import Reveal from "./Reveal";
import SmileQuiz from "./SmileQuiz";
import styles from "./QuizSection.module.css";

const perks = [
  "Takes under 30 seconds",
  "A clear recommendation",
  "Book your visit at the end",
];

export default function QuizSection() {
  return (
    <section className={`section ${styles.section}`} id="smile-quiz">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>Not sure where to start?</p>
          <h2 className={styles.title}>
            Find out which treatment is right for you
          </h2>
          <p className={styles.text}>
            Answer three quick questions and we&apos;ll point you to the
            treatment that fits your smile, then help you book an appointment
            to confirm it.
          </p>
          <ul className={styles.perks}>
            {perks.map((p) => (
              <li key={p}>
                <Check /> {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <SmileQuiz />
        </Reveal>
      </div>
    </section>
  );
}
