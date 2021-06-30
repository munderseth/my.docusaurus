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
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
  
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
      //disableSwitch: true,
  
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
  
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
  
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',
  
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
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
          customCss: require.resolve('./src/css/customv2.css'),
        },
      },
    ],
  ],
};
