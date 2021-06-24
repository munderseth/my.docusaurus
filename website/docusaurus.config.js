/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Testspace',
  tagline: 'Integrated Test Management',
  url: 'https://munderseth.github.io',
  baseUrl: '/my.docusaurus/',
  organizationName: 'munderseth', // Usually your GitHub org/user name.
  projectName: 'my.docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Testspace',
      logo: {
        alt: 'Testspace',
        src: 'img/testspace.png',
        href: 'https://testspace.com',
      },
      items: [
    
        {
          href: '/',
          label: 'Help',
          position: 'right',
        },
      //  {to: '/blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/munderseth/my.docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              label: 'Contact',
              to:    'mailto:contact@testspace.com',
            },
          ],
        },
        {
          items: [
            {
              label: 'Issues',
              to: 'https://github.com/testspace-com/testspace.support/issues',
            },
          ],
        },
        {
          items: [
            {
              label: 'Discussions',
              to: 'https://github.com/testspace-com/testspace.support/discussions',
            },
          ],
        },
        {
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/testspace-com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} S2 Technologies, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/munderseth/my.docusaurus/edit/main/website/',
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
