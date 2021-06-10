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
          type: 'doc',
          docId: 'intro',
          //docId: '/',
          position: 'right',
          label: 'Documentation',
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
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
