# crucible

> Scaffold a landing page with a full AI agent system built in.

```bash
npm create crucible my-project
# or
npx create-crucible my-project
```

Answer 9 questions → get a complete landing page scaffold with AI constraints baked in from day one:

- `CLAUDE.md` — AI session briefing, pre-filled with your brand
- `DESIGN.md` — design system ground truth (colors, typography, anti-patterns)
- `GUARDRAILS.md` — failure memory, pre-loaded with common pitfalls
- `.claude/skills/` — copywriter, qa-mobile, ui-designer role constraints
- `scripts/check-design-tokens.ts` — blocks hardcoded hex at commit time
- Full component skeletons: Hero, Services, Process, Contact, Header, Footer
- API route with Zod validation + honeypot spam protection
- `src/lib/site.ts` — single source of truth for brand name, domain, email

## Supported frameworks

| Framework | Select |
|---|---|
| Next.js 14 (App Router, SSR, API routes) | `nextjs` |
| Astro 4 (Static + islands, best Lighthouse scores) | `astro` |
| Vite + React (SPA, client-side only) | `vite-react` |
| Vanilla JS (no framework, Vite dev server) | `vanilla` |

## What gets personalized

| Variable | Example |
|---|---|
| `BRAND_NAME` | Volta Studio |
| `TAGLINE` | Every beat tells a story. |
| `PRIMARY_COLOR` | #1A1A2E |
| `ACCENT_COLOR` | #E94560 |
| `CITY` | Bandung |
| `DOMAIN` | voltastudio.com |
| `EMAIL` | hello@voltastudio.com |

## After scaffolding

```bash
cd my-project
pnpm install

# Fill in:
#   DESIGN.md        → complete your color/type system
#   src/lib/         → add your real content
#   GUARDRAILS.md    → fills itself as you build

pnpm dev
```

## The idea

AI output quality = quality of the constraints you give it.

```
Slop     = AI without constraints
Not slop = AI inside a design system + guardrails + concrete specs
```

A crucible transforms raw material into refined output. Same idea here — your brand inputs go in, an AI-ready landing page comes out. The scaffold sets the walls; the AI works inside them.

Built from lessons building [Sonara Studio](https://github.com/ryanda9910) landing page with Claude Code.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). New framework templates, GUARDRAILS entries, and bug fixes are welcome.

## License

MIT
