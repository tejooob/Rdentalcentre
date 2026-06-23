import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, WhatsApp } from "@/components/icons";
import { posts } from "@/lib/content";
import { bookWaLink } from "@/lib/site";
import styles from "./post.module.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main id="main-content" className={styles.main}>
      <article>
        <header className={styles.header}>
          <div className={`container ${styles.headInner}`}>
            <Link href="/blog" className={styles.back}>
              <ArrowLeft /> All articles
            </Link>
            <p className={styles.meta}>
              <span className={styles.cat}>{post.category}</span>
              {fmtDate(post.date)} · {post.readMins} min read
            </p>
            <h1 className={styles.title}>{post.title}</h1>
          </div>
        </header>

        <div className="container">
          <div className={styles.cover}>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(max-width: 820px) 92vw, 820px"
              className={styles.coverImg}
            />
          </div>

          <div className={styles.body}>
            {post.body.map((block, i) =>
              "h" in block ? (
                <h2 key={i} className={styles.h2}>
                  {block.h}
                </h2>
              ) : (
                <p key={i} className={styles.p}>
                  {block.p}
                </p>
              )
            )}

            <Reveal className={styles.cta}>
              <h3>Have a question about your teeth?</h3>
              <p>
                A quick consultation is the fastest way to a clear answer.
                We&apos;re happy to help, no pressure.
              </p>
              <div className={styles.ctaActions}>
                <a
                  href={bookWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsApp /> Book an appointment
                </a>
                <Link href="/treatments" className={styles.ctaLink}>
                  Explore treatments <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
