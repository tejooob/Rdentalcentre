import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { WhatsApp } from "@/components/icons";
import { faqs } from "@/lib/content";
import { waLink } from "@/lib/site";
import styles from "./faqs.module.css";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about treatments, pain, timings, location, safety and booking at R Dental Centre, Nerul.",
};

export default function FaqsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Good to know"
        title="Frequently asked questions"
        subtitle="The things patients ask us most. If yours isn't here, just message us."
        crumb="FAQs"
      />

      <section className="section">
        <div className={`container ${styles.wrap}`}>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>

          <Reveal className={styles.cta} delay={100}>
            <h2>Still have a question?</h2>
            <p>
              Message us on WhatsApp and a real person from the clinic will get
              back to you.
            </p>
            <a
              href={waLink("Hi R Dental Centre, I have a question:")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsApp /> Ask on WhatsApp
            </a>
            <p className={styles.small}>
              Or <Link href="/contact">visit the contact page</Link> for
              directions and hours.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
