import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import USED_BY from "../data/USED_BY";

const features = [
  {
    title: 'Detailed performance test report',
    description: (
      <>
        JtlReport will provide you with metrics for each label such as: requests per seconds (RPS), various percentiles, error rate, network data transferred (Mbps), and more.
      </>
    ),
  },
  {
    title: 'Test run comparison',
    description: (
      <>
        If you want to compare HTML reports, you need to open them side by side and look for the differences and correlations on your own. With JtlReporter that comparison is only four clicks away. And it does not stop there. You can even drill down in response time and throughput trends for each endpoint.
      </>
    ),
  },
  {
    title: 'Performance insights',
    description: (
      <>
        JtlReport will perform some performance analysis automatically for you. It aims to help you to interpret the outcome of the measurements and warn you if there might be an issue related to an overloaded system under tests.
      </>
    ),
  },
  {
    title: 'Share reports with anybody',
    description: (
      <>
        Create a special link to share performance test report with anyone without the need of having an account. No worries, you can always revoke the link.
      </>
    ),
  },
  {
    title: 'Create custom chart',
    description: (
      <>
        JtlReport provides you with a couple of ready-made charts, but you can create your custom chart with any metrics available on it. This way can explore and find even more correlations.
      </>
    ),
  },
  {
    title: 'Notification',
    description: (
      <>
        Set up a notification for an external service to be informed on a newly processed performance test report.

        <p className={styles.more}>
          <a href="/docs/introduction/features">And more ...</a>
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Getting more from your performance test reports | ${siteConfig.title}`}
      description="Online reporting application to generate performance test reports from JMeter (Taurus), Locust and other tools by either uploading JTL file or streaming data from the test run continuously.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
            <iframe width="100%" height="560" src="https://www.youtube.com/embed/sG4RT68IvMs" title="JtlReporter Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        </div>
        <div className="container">
          <sdiv></sdiv>
        </div>
      </main>
      <QuotesSection />

    </Layout>
  );
}


function QuotesSection() {
  return (
      <div className="trusted-by">
        <div className="container">
            <h2 className>Who is using JtlReporter?</h2>
          <div className="row">
            {USED_BY.map((company) => (
                <div className="col" key={company.name}>
                  <div className="avatar avatar--vertical margin-bottom--sm">
                      <img src={company.logo} width={100}/>

                  </div>

                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
