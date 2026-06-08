"use client";

import { useMemo, useState } from "react";
import { emiPresets, estimatorItems } from "@/lib/content";
import { waLink, clinic } from "@/lib/site";
import { WhatsApp } from "./icons";
import styles from "./Calculators.module.css";

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

/* ------------------------------- EMI ------------------------------- */
export function EmiCalculator() {
  const [amount, setAmount] = useState(emiPresets[0].amount);
  const [months, setMonths] = useState(12);
  const [noCost, setNoCost] = useState(true);

  const annualRate = noCost ? 0 : 14;

  const { emi, total } = useMemo(() => {
    if (annualRate === 0) return { emi: amount / months, total: amount };
    const r = annualRate / 12 / 100;
    const f = Math.pow(1 + r, months);
    const e = (amount * r * f) / (f - 1);
    return { emi: e, total: e * months };
  }, [amount, months, annualRate]);

  const message = `Hi ${clinic.name}, I'd like to know more about EMI for ${inr(
    amount
  )} over ${months} months (about ${inr(emi)}/month).`;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>EMI calculator</h3>
      <p className={styles.sub}>
        Split bigger treatments, implants, aligners, smile makeovers, into easy
        monthly payments.
      </p>

      <label className={styles.field}>
        <span className={styles.label}>Treatment</span>
        <select
          className={styles.select}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          {emiPresets.map((p) => (
            <option key={p.label} value={p.amount}>
              {p.label} — {inr(p.amount)}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          Treatment cost: <strong>{inr(amount)}</strong>
        </span>
        <input
          type="range"
          min={5000}
          max={300000}
          step={1000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className={styles.range}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          Tenure: <strong>{months} months</strong>
        </span>
        <input
          type="range"
          min={3}
          max={24}
          step={3}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className={styles.range}
        />
      </label>

      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={noCost}
          onChange={(e) => setNoCost(e.target.checked)}
        />
        <span>No-cost EMI (0% interest)</span>
      </label>

      <div className={styles.result}>
        <div>
          <span className={styles.resultLabel}>Monthly EMI</span>
          <span className={styles.resultBig}>{inr(emi)}</span>
        </div>
        <div>
          <span className={styles.resultLabel}>Total payable</span>
          <span className={styles.resultMid}>{inr(total)}</span>
        </div>
      </div>

      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${styles.cta}`}
      >
        <WhatsApp /> Discuss this plan
      </a>
    </div>
  );
}

/* --------------------------- Cost estimator --------------------------- */
export function CostEstimator() {
  const [picked, setPicked] = useState<Record<string, boolean>>({});

  const total = estimatorItems.reduce(
    (sum, item) => (picked[item.label] ? sum + item.amount : sum),
    0
  );
  const chosen = estimatorItems.filter((i) => picked[i.label]);

  const message = `Hi ${clinic.name}, I'd like an estimate for: ${chosen
    .map((c) => c.label)
    .join(", ")} (around ${inr(total)}+).`;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Treatment cost estimator</h3>
      <p className={styles.sub}>
        Tick what you&apos;re considering for a rough starting estimate. Final
        cost is confirmed after a free exam.
      </p>

      <div className={styles.checks}>
        {estimatorItems.map((item) => (
          <label key={item.label} className={styles.check}>
            <input
              type="checkbox"
              checked={!!picked[item.label]}
              onChange={(e) =>
                setPicked((p) => ({ ...p, [item.label]: e.target.checked }))
              }
            />
            <span className={styles.checkLabel}>{item.label}</span>
            <span className={styles.checkPrice}>from {inr(item.amount)}</span>
          </label>
        ))}
      </div>

      <div className={styles.result}>
        <div>
          <span className={styles.resultLabel}>Estimated from</span>
          <span className={styles.resultBig}>{inr(total)}</span>
        </div>
      </div>

      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${styles.cta}`}
        aria-disabled={chosen.length === 0}
      >
        <WhatsApp /> Get an exact quote
      </a>
    </div>
  );
}
