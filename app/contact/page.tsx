import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppForm from "@/components/WhatsAppForm";
import VirtualTour from "@/components/VirtualTour";
import { MapPin, Phone, WhatsApp } from "@/components/icons";
import { clinic, telLink, bookWaLink } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Find R Dental Centre in Nerul (W), Navi Mumbai — address, phone, opening hours, and a quick WhatsApp message form. We're easy to reach.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Get in touch"
        title="Contact the clinic"
        subtitle="Message us, call, or drop by. We'll help you find a time that works."
        crumb="Contact"
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.info}>
            <h2 className={styles.h2}>Visit us in {clinic.area}</h2>

            <ul className={styles.list}>
              <li>
                <span className={styles.icon}><MapPin /></span>
                <span>
                  <strong>Address</strong>
                  {clinic.addressLine1}
                  <br />
                  {clinic.addressLine2}
                </span>
              </li>
              <li>
                <span className={styles.icon}><Phone /></span>
                <span>
                  <strong>Phone</strong>
                  <a href={telLink}>{clinic.phoneDisplay}</a>
                </span>
              </li>
              <li>
                <span className={styles.icon}><WhatsApp /></span>
                <span>
                  <strong>WhatsApp</strong>
                  <a href={bookWaLink} target="_blank" rel="noopener noreferrer">
                    Chat with us
                  </a>
                </span>
              </li>
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

            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.mapBtn}`}
            >
              <MapPin /> Get directions
            </a>
          </Reveal>

          <Reveal className={styles.formCard} delay={120}>
            <h2 className={styles.h2}>Send a message</h2>
            <p className={styles.formSub}>
              Fill this in and it opens WhatsApp with your message ready to
              send.
            </p>
            <WhatsAppForm variant="contact" />
          </Reveal>
        </div>

        <Reveal className={styles.mapWrap}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.630672057042!2d73.0118921!3d19.0359894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c36f73d109af%3A0x1c28d314c2bfb412!2sR%20DENTAL%20CENTRE!5e0!3m2!1sen!2sin!4v1780944790498!5m2!1sen!2sin"
            title="R Dental Centre location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>

      <VirtualTour />
    </main>
  );
}
