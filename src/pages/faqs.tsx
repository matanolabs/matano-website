import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import TOC from "@theme/TOC";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { FAQ, FAQStructuredData } from "../components/faq";
import faq from "../data/faq.json";


// TODO: add sections
export default function FAQPage() {
  return (
    <Layout description="Frequently asked questions about Matano.">
      <Head>
        <html className="mtn-homepage" />
        <title>Matano | Frequently asked questions</title>
        <meta property="og:title" content="Matano | Frequently asked questions" />
        <script type="application/ld+json">{JSON.stringify(FAQStructuredData(faq))}</script>
      </Head>

      <main>
        <div className="container container--fluid margin-vert--lg">
          <div className="row justify-center">
            <div className="col col--10">
              <FAQ qas={faq} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

