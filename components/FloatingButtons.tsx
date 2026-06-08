"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { telLink, bookWaLink } from "@/lib/site";
import { WhatsApp, Phone, CalendarPlus } from "./icons";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.dock} ${show ? styles.show : ""}`} aria-label="Quick actions">
      <a
        href={bookWaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fab} ${styles.whatsapp}`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp />
        <span className={styles.label}>WhatsApp</span>
      </a>
      <a href={telLink} className={`${styles.fab} ${styles.call}`} aria-label="Call the clinic">
        <Phone />
        <span className={styles.label}>Call</span>
      </a>
      <Link href="/booking" className={`${styles.fab} ${styles.book}`} aria-label="Book an appointment">
        <CalendarPlus />
        <span className={styles.label}>Book</span>
      </Link>
    </div>
  );
}
