"use client";

import { useState } from "react";
import { Plus } from "./icons";
import styles from "./FaqAccordion.module.css";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={`${styles.item} ${isOpen ? styles.openItem : ""}`}>
            <button
              className={styles.q}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <Plus className={styles.icon} />
            </button>
            <div className={styles.aWrap} hidden={!isOpen}>
              <p className={styles.a}>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
