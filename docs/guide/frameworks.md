# Frameworks

All frameworks share the same AI system (`DESIGN.md`, `GUARDRAILS.md`, skills, enforcement scripts). Only the source code differs.

## Next.js 14

**Best for:** Full-stack landing pages with server-side rendering, API routes, image optimization.

```
Framework:    Next.js 14 App Router
Styling:      Tailwind CSS
API:          /app/api/inquiry/route.ts (Zod validation)
Images:       next/image with WebP/AVIF
Fonts:        next/font (prevents FOUT)
Deploy:       Vercel (zero config)
```

```bash
npx @ryanda9910/create-ai-landing my-project
# → select nextjs
```

## Astro 4

**Best for:** Best Lighthouse scores. Static-first with islands for interactive parts.

```
Framework:    Astro 4
Styling:      Tailwind CSS
API:          None by default (add Astro server endpoints if needed)
Contact form: Vanilla JS fetch in <script> block
Deploy:       Vercel, Netlify, Cloudflare Pages
```

```bash
npx @ryanda9910/create-ai-landing my-project
# → select astro
```

::: tip
Astro's `motion-reduce:hidden` class on video elements handles `prefers-reduced-motion` natively via Tailwind.
:::

## Vite + React

**Best for:** SPA approach, client-side only, maximum flexibility.

```
Framework:    Vite 5 + React 18
Styling:      Tailwind CSS
API:          None (use a separate backend or serverless function)
Routing:      Hash links (#section)
Deploy:       Any static host
```

```bash
npx @ryanda9910/create-ai-landing my-project
# → select vite-react
```

## Vanilla JS

**Best for:** Zero framework overhead. Plain HTML + CSS + minimal JS with Vite as dev server.

```
Framework:    None
Bundler:      Vite (dev server + build)
Styling:      Plain CSS with custom properties (no Tailwind)
API:          None
Token check:  scripts/check-design-tokens.mjs (checks for hardcoded hex in CSS/HTML/JS)
Deploy:       Any static host
```

```bash
npx @ryanda9910/create-ai-landing my-project
# → select vanilla
```

::: info Token enforcement for Vanilla
Instead of checking for Tailwind arbitrary values, the vanilla token checker scans all `.css`, `.html`, and `.js` files for raw hex values outside of `tokens.css`.
:::

## Comparison

| | Next.js | Astro | Vite+React | Vanilla |
|---|---|---|---|---|
| SSR | ✓ | ✓ (SSG) | ✗ | ✗ |
| API routes | ✓ | Add-on | ✗ | ✗ |
| TypeScript | ✓ | ✓ | ✓ | ✗ |
| Tailwind | ✓ | ✓ | ✓ | ✗ |
| Bundle size | Medium | Small | Medium | Tiny |
| Lighthouse | High | Highest | High | Highest |
