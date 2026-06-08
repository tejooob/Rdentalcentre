import Link from "next/link";
import { faqs } from "@/lib/content";
import Reveal from "./Reveal";
import FaqAccordion from "./FaqAccordion";
import { ArrowRight } from "./icons";
import styles from "./FaqPreview.module.css";

export default function FaqPreview() {
  return (
    <section className={`section ${styles.section}`} id="faqs">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.aside}>
          <p className="eyebrow">Good to know</p>
          <h2 className={styles.title}>Questions, answered</h2>
          <p className={styles.text}>
            The things patients ask us most. Can&apos;t find yours? Message us on
            WhatsApp and we&apos;ll help.
          </p>
          <Link href="/faqs" className={styles.link}>
            See all FAQs <ArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={120} className={styles.accordion}>
          <FaqAccordion items={faqs.slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  );
}
