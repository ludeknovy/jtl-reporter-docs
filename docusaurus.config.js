/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JtlReporter',
  tagline: 'Getting more from your performance reports',
  url: 'https://jtlreporter.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ludeknovy', // Usually your GitHub org/user name.
  projectName: 'jtl-reporter', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JtlReporter',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ludeknovy/jtl-reporter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/ludeknovy/jtl-reporter/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ludeknovy/jtl-reporter',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JtlReporter. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'G-RXBYHFLSTS',
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ludeknovy/jtl-reporter-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }, 
    ],
  ],

};
