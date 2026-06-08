"use client";

import { useState } from "react";
import { waLink, clinic } from "@/lib/site";
import { treatments } from "@/lib/content";
import { WhatsApp } from "./icons";
import styles from "./WhatsAppForm.module.css";

type Props = {
  /** "booking" includes treatment + preferred time; "contact" is a simple message. */
  variant?: "booking" | "contact";
};

export default function WhatsAppForm({ variant = "booking" }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    when: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const compose = () => {
    const lines = [`Hi ${clinic.name},`];
    if (variant === "booking") {
      lines.push(`I'd like to book an appointment.`);
      lines.push(`Name: ${form.name || "—"}`);
      lines.push(`Phone: ${form.phone || "—"}`);
      if (form.treatment) lines.push(`Treatment: ${form.treatment}`);
      if (form.when) lines.push(`Preferred time: ${form.when}`);
      if (form.message) lines.push(`Notes: ${form.message}`);
    } else {
      lines.push(`Name: ${form.name || "—"}`);
      lines.push(`Phone: ${form.phone || "—"}`);
      lines.push(`Message: ${form.message || "—"}`);
    }
    return lines.join("\n");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(compose()), "_blank", "noopener,noreferrer");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Your name</span>
          <input
            className={styles.input}
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Priya Sharma"
            required
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Phone number</span>
          <input
            className={styles.input}
            value={form.phone}
            onChange={set("phone")}
            placeholder="e.g. 98765 43210"
            inputMode="tel"
            required
          />
        </label>
      </div>

      {variant === "booking" && (
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Treatment</span>
            <select className={styles.input} value={form.treatment} onChange={set("treatment")}>
              <option value="">Not sure / general checkup</option>
              {treatments.map((t) => (
                <option key={t.title} value={t.title}>
                  {t.title}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Preferred day / time</span>
            <input
              className={styles.input}
              value={form.when}
              onChange={set("when")}
              placeholder="e.g. Sat morning"
            />
          </label>
        </div>
      )}

      <label className={styles.field}>
        <span className={styles.label}>
          {variant === "booking" ? "Anything else? (optional)" : "Message"}
        </span>
        <textarea
          className={styles.input}
          rows={variant === "booking" ? 2 : 4}
          value={form.message}
          onChange={set("message")}
          placeholder={
            variant === "booking"
              ? "Tell us about your concern…"
              : "How can we help?"
          }
          required={variant === "contact"}
        />
      </label>

      <button type="submit" className={`btn ${styles.submit}`}>
        <WhatsApp /> Send on WhatsApp
      </button>
      <p className={styles.note}>
        Opens WhatsApp with your details prefilled, just tap send. We reply
        within working hours.
      </p>
    </form>
  );
}
