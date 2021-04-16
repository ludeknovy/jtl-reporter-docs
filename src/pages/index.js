import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Detailed performance report',
    description: (
      <>
        JtlReport will provide you with metrics for each label such as requests per seconds (RPS), various percentiles, error rate, network data transferred (mbps) and more.
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
        Create a special link to share performance report with anyone without the need of having an account. No worries, you can always revoke the link.
      </>
    ),
  },
  {
    title: 'Create custom chart',
    description: (
      <>
        JtlReport provide you with a couple of ready-made charts, but you can create your custom chart with any metrics available on it. This way can explore and find even more correlations.
      </>
    ),
  },
  {
    title: 'Notification',
    description: (
      <>
        Set up a notification for an external service to be informed on a newly processed performance report.
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
          <img src="img/showcase.gif" alt="title" />
        </div>
      </main>
    </Layout>
  );
}
