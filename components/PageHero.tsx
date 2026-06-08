import Link from "next/link";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb?: string;
};

export default function PageHero({ eyebrow, title, subtitle, crumb }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>{crumb ?? title}</span>
        </nav>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
