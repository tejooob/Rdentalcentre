import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppForm from "@/components/WhatsAppForm";
import QuizSection from "@/components/QuizSection";
import { WhatsApp, Phone, Check } from "@/components/icons";
import { clinic, telLink, bookWaLink } from "@/lib/site";
import styles from "./booking.module.css";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your dental appointment in under 30 seconds — by WhatsApp or phone. No long forms, no waiting. R Dental Centre, Nerul (W), Navi Mumbai.",
};

const reassurance = [
  "By appointment — no long waits",
  "Reply within working hours",
  "Emergency cases accommodated",
];

export default function BookingPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Online booking"
        title="Book in under 30 seconds"
        subtitle="Pick whatever's easiest, WhatsApp, a quick form, or a call. We'll confirm a time that suits you."
        crumb="Book"
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.formCard}>
            <h2 className={styles.h2}>Request an appointment</h2>
            <p className={styles.sub}>
              Fill this in, it opens WhatsApp with everything prefilled. Just
              tap send.
            </p>
            <WhatsAppForm variant="booking" />
          </Reveal>

          <Reveal className={styles.side} delay={120}>
            <div className={styles.quick}>
              <h3 className={styles.quickTitle}>Prefer it even faster?</h3>
              <a
                href={bookWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.bigBtn} ${styles.wa}`}
              >
                <WhatsApp /> Book on WhatsApp
              </a>
              <a href={telLink} className={`${styles.bigBtn} ${styles.call}`}>
                <Phone /> Call {clinic.phoneDisplay}
              </a>
            </div>

            <ul className={styles.reassure}>
              {reassurance.map((r) => (
                <li key={r}>
                  <Check /> {r}
                </li>
              ))}
            </ul>

            <div className={styles.hours}>
              <strong>Opening hours</strong>
              {clinic.hours.map((h) => (
                <div key={h.days} className={styles.hoursRow}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <QuizSection />
    </main>
  );
}
