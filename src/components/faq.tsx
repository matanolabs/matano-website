import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from '@docusaurus/theme-common';
import Layout from "@theme/Layout";
import styles from "./faq.module.css";

type QA = { question: string; answer: string };

export function FAQStructuredData(qas: QA[]) {
  const items = qas.map(({ question, answer }) => {
    const ans = answer.startsWith("<") ? answer : `<p>${answer}</p>`;
    return {
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: ans,
      },
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };
  return data;
}

export function FAQ({ qas }: { qas: QA[] }) {
  const items = qas.map(({ question, answer }) => {
    return (
      <div className="text-lg mb-6">
        <p>
          <strong>{question}</strong>
        </p>
        <p dangerouslySetInnerHTML={{__html: answer}}></p>
      </div>
    );
  });
  return (
    <div className={styles.faq}>
      <h1 className="mb-8">Frequently Asked Questions</h1>
      {items}
    </div>
  );
}
