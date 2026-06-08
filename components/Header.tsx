"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { nav } from "@/lib/content";
import { ArrowRight } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href !== "/" && href.startsWith("/") && pathname.startsWith(href.split("#")[0]);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="R Dental Centre home">
          <Image
            src="/logo.png"
            alt="R Dental Centre"
            width={600}
            height={158}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/booking" className={`btn btn-primary ${styles.cta}`}>
          Book Now <ArrowRight />
        </Link>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
          <span data-open={open} />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className={styles.mobileLink}>
              {item.label}
            </Link>
          ))}
          <Link href="/booking" className="btn btn-primary">
            Book Now <ArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
}
