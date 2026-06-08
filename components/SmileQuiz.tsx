"use client";

import { useState } from "react";
import Link from "next/link";
import { quizQuestions, quizResults } from "@/lib/content";
import { waLink, clinic } from "@/lib/site";
import { ArrowLeft, ArrowRight, Check, WhatsApp } from "./icons";
import styles from "./SmileQuiz.module.css";

export default function SmileQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const total = quizQuestions.length;
  const done = step >= total;

  const choose = (qid: string, value: string, label: string) => {
    setAnswers((a) => ({ ...a, [qid]: value, [`${qid}_label`]: label }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const result = quizResults[answers.concern] ?? quizResults.rootcanal;

  const waMessage = () => {
    const lines = [
      `Hi ${clinic.name}, I completed the smile quiz.`,
      `Main concern: ${answers.concern_label ?? "—"}`,
      `Timeline: ${answers.when_label ?? "—"}`,
      `Last visit: ${answers.visited_label ?? "—"}`,
      `Recommended: ${result.title}.`,
      `I'd like to book an appointment.`,
    ];
    return lines.join("\n");
  };

  return (
    <div className={styles.card} id="quiz">
      {!done ? (
        <>
          <div className={styles.top}>
            <span className={styles.kicker}>Smile assessment</span>
            <span className={styles.count}>
              {step + 1} / {total}
            </span>
          </div>
          <div className={styles.bar} aria-hidden>
            <span style={{ width: `${(step / total) * 100}%` }} />
          </div>

          <h3 className={styles.q}>{quizQuestions[step].q}</h3>

          <div className={styles.options}>
            {quizQuestions[step].options.map((opt) => (
              <button
                key={opt.value}
                className={styles.option}
                onClick={() => choose(quizQuestions[step].id, opt.value, opt.label)}
              >
                {opt.label}
                <ArrowRight className={styles.optArrow} />
              </button>
            ))}
          </div>

          {step > 0 && (
            <button className={styles.back} onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft /> Back
            </button>
          )}
        </>
      ) : (
        <div className={styles.result}>
          <span className={styles.resultBadge}>
            <Check /> Your match
          </span>
          <h3 className={styles.resultTitle}>{result.title}</h3>
          <p className={styles.resultText}>{result.blurb}</p>
          <div className={styles.resultActions}>
            <a
              href={waLink(waMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.resultCta}`}
            >
              <WhatsApp /> Book an appointment
            </a>
            <Link href="/treatments" className={styles.resultLink}>
              See all treatments <ArrowRight />
            </Link>
          </div>
          <button className={styles.back} onClick={reset}>
            Retake the quiz
          </button>
        </div>
      )}
    </div>
  );
}
