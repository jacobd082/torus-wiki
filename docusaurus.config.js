// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Magic Torus Game Wiki!',
  tagline: 'The full guide to the Magic Torus Game!',
  url: 'https://torus-wiki-jacobd082.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jacobd082', // Usually your GitHub org/user name.
  projectName: 'torus-wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jacobd082/torus-wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Magic Torus Game Wiki',
        logo: {
          alt: 'MTG Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://torus.jacobdrath.co',
            label: 'Play',
            position: 'right',
          },
          {
            href: 'https://github.com/jacobd082/torus-wiki',
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
                label: 'Quick Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Play',
                href: 'https://torus.jacobdrath.co',
              },
              {
                label: 'Made by Jacob Drath',
                href: 'https://zzz.jacobdrath.co',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Edit this Wiki',
                href: 'https://github.com/jacobd082/torus-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Magic Torus Game. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
