// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JLU-AI-Lab',
  tagline: '不要停止奔跑，值得期待的只有远方',
  url: 'https://tars-cat.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-go.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tars-cat', // Usually your GitHub org/user name.
  projectName: 'tars-cat.github.io', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Post',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'links',
        routeBasePath: 'links',
        path: './links',
        showReadingTime: false,
        blogSidebarTitle: 'Friendly Links',
        blogSidebarCount: 'ALL',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JLU-AI-Lab',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: '📖Docs',
          },
          {
            type: 'doc',
            docId: 'exam_cpp',
            position: 'left',
            label: '✏️Exam',
          },
          {
            type: 'doc',
            docId: 'sim_rmua',
            position: 'left',
            label: '📦Repo',
          },
          {to: '/blog', label: '👀Blog', position: 'left'},
          {to: '/links', label: '🔗Links', position: 'right'},
          {to: '/docs/about', label: '📬About', position: 'right'},
          {
            href: 'https://github.com/tars-cat/tars-cat.github.io/tree/gh-pages',
            label: '🐈‍⬛GitHub',
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
                label: 'CPP',
                to: '/docs/cpp_foundation',
              },
              {
                label: 'ROS',
                to: '/docs/ros_foundation',
              },
              {
                label: 'Ubuntu',
                to: '/docs/ubuntu_00',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '吉甲大师梦工厂',
                href: 'https://tarsgo.team',
              },
              {
                label: 'JLU-AI(previous)',
                href: 'https://jlu-ai.vercel.app/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Links',
                to: '/links',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JLU-AI-Lab. Built with Docusaurus.<br>Address: 吉林大学南湖校区吉甲车库进门直行右转`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
