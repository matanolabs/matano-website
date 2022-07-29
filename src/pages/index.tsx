import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import imageUrl from "@site/src/assets/diagram.png"


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero-bg flex-1 flex px-12 sm:px-24 pt-24 pb-20 sm:pt-32 sm:pb-40 shadow-md">
      <div className="max-w-5xl">
        <h1 className="pt-0 subpixel-antialiased mx-auto font-display sm:text-6xl text-4xl font-semibold tracking-tight text-slate-900" 
        style={{
          fontFamily: "Lexend",
          lineHeight: 1.1,
        }}
        >The Open Source<br/><span className="" style={{color: "var(--ifm-color-primary-dark)"}}>Security Lake Platform</span> for AWS</h1>
        <p className="font-normal text-lg sm:text-2xl sm:leading-9">
          Serverless, high scale, low cost, zero-ops security log analytics <span className=' decoration-pink-500'>in your AWS account</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-4 mt-4">
          <a className="my-btn text-white hover:text-white text-lg bg-blue-600 border-blue-600 hover:bg-blue-700 w-full mb-2 sm:w-auto" href="/docs/intro">Get started</a>
          <a className="my-btn border-2 text-blue-600 hover:text-blue-600 text-lg border-blue-600 hover:bg-blue-100 w-full mb-2 sm:w-auto tw-border-solid" href="https://github.com/matanolabs/matano">
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            Explore Docs
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout wrapperClassName=''>
        <Head>
          <html className="mtn-homepage"/>
          <title>Matano | Open source security lake for AWS</title>
        </Head>
        <div className='flex-1 flex'>
          <HomepageHeader />
        </div> 
        <main className="flex flex-col items-center">
          <div className="mx-4 sm:mx-16 shadow-xl sm:shadow-2xl !shadow-blue-400 -mt-8 sm:-mt-16">
            <img src={imageUrl} />
          </div>
          <HomepageFeatures />
        </main>
    </Layout>
  );
}
