import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/content";
import { clinic, telLink, bookWaLink } from "@/lib/site";
import Reveal from "./Reveal";
import { ArrowRight, MapPin, Phone } from "./icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <Reveal className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Ready for a calmer kind of dentistry?
            </h2>
            <p className={styles.ctaText}>
              Book on WhatsApp and we&apos;ll find a time that suits you, no
              pressure, no jargon.
            </p>
          </div>
          <a
            href={bookWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.ctaBtn}`}
          >
            Book on WhatsApp <ArrowRight />
          </a>
        </Reveal>

        <div className={styles.main}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <Image
                src="/logo-mark.png"
                alt=""
                width={256}
                height={256}
                className={styles.mark}
                aria-hidden
              />
              {clinic.name}
            </span>
            <p className={styles.tagline}>{clinic.brandTagline}</p>
            <p className={styles.blurb}>
              Excellence in dentistry. Premium, gentle care for your perfect
              smile, in {clinic.area}.
            </p>
          </div>

          <nav className={styles.col} aria-label="Quick links">
            <h3 className={styles.colTitle}>Explore</h3>
            {footerLinks.quick.map((l) => (
              <Link key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className={styles.col} aria-label="More">
            <h3 className={styles.colTitle}>More</h3>
            {footerLinks.more.map((l) => (
              <Link key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <p className={styles.contact}>
              <MapPin className={styles.cIcon} />
              <span>
                {clinic.addressLine1}
                <br />
                {clinic.addressLine2}
              </span>
            </p>
            <a href={telLink} className={styles.contact}>
              <Phone className={styles.cIcon} />
              {clinic.phoneDisplay}
            </a>
            <p className={styles.hours}>
              {clinic.hours.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.time}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </span>
          <div className={styles.legal}>
            {footerLinks.legal.map((l) => (
              <Link key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
