import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'create-ai-landing',
  description: 'Scaffold a landing page with a full AI agent system built in',
  base: '/create-ai-landing/',

  head: [
    ['meta', { name: 'theme-color', content: '#D4A574' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'create-ai-landing' }],
    ['meta', { property: 'og:description', content: 'Scaffold a landing page with a full AI agent system built in' }],
  ],

  themeConfig: {
    logo: '🏗️',
    siteTitle: 'create-ai-landing',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Frameworks', link: '/guide/frameworks' },
      { text: 'Changelog', link: '/changelog' },
      {
        text: 'v0.2.0',
        items: [
          { text: 'npm', link: 'https://www.npmjs.com/package/@ryanda9910/create-ai-landing' },
          { text: 'GitHub', link: 'https://github.com/ryanda9910/create-ai-landing' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Quick Start', link: '/guide/getting-started' },
          { text: 'Frameworks', link: '/guide/frameworks' },
        ],
      },
      {
        text: 'The AI System',
        items: [
          { text: 'DESIGN.md', link: '/guide/design-md' },
          { text: 'GUARDRAILS.md', link: '/guide/guardrails' },
          { text: 'Skills', link: '/guide/skills' },
          { text: 'Token Enforcement', link: '/guide/token-enforcement' },
        ],
      },
      {
        text: 'Customization',
        items: [
          { text: 'Brand & Content', link: '/guide/customization' },
          { text: 'Adding Sections', link: '/guide/adding-sections' },
          { text: 'API Route', link: '/guide/api-route' },
        ],
      },
      {
        text: 'Contributing',
        items: [
          { text: 'How to Contribute', link: '/guide/contributing' },
          { text: 'Adding a Framework', link: '/guide/adding-framework' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryanda9910/create-ai-landing' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@ryanda9910/create-ai-landing' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2026 ryanda9910',
    },

    editLink: {
      pattern: 'https://github.com/ryanda9910/create-ai-landing/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: { provider: 'local' },
  },
});
