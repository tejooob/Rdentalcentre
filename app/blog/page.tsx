import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { posts } from "@/lib/content";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical dental advice from the team at R Dental Centre — prevention, cosmetic treatments, kids' dentistry and more.",
};

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Advice & insights"
        title="From the dentist's chair"
        subtitle="Clear, practical guidance to help you keep your smile healthy between visits."
        crumb="Blog"
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80} className={styles.cardReveal}>
                <article className={styles.card}>
                  <Link href={`/blog/${post.slug}`} className={styles.media}>
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(max-width: 620px) 92vw, 360px"
                      className={styles.img}
                    />
                    <span className={styles.cat}>{post.category}</span>
                  </Link>
                  <div className={styles.body}>
                    <p className={styles.meta}>
                      {fmtDate(post.date)} · {post.readMins} min read
                    </p>
                    <h2 className={styles.title}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.link}>
                      Read article <ArrowRight />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
