# Quick Start

## Requirements

- Node.js ≥ 18
- `pnpm`, `npm`, or `yarn`

## Create a project

```bash
npx @ryanda9910/create-ai-landing my-project
```

The CLI will ask 9 questions:

| Question | Example |
|---|---|
| Framework | Next.js / Astro / Vite+React / Vanilla |
| Brand name | Volta Studio |
| Tagline | Every beat tells a story. |
| Industry | Music / Photo / Agency / SaaS / Other |
| City | Bandung |
| Primary color | #1A1A2E |
| Accent color | #E94560 |
| Domain | voltastudio.com |
| Email | hello@voltastudio.com |

## Install and run

```bash
cd my-project
pnpm install
pnpm dev
```

## Fill in your content

Open these files and replace the placeholder brackets:

```
DESIGN.md               → complete voice/feel description
src/lib/services.ts     → your actual services + deliverables
src/lib/process.ts      → your actual process steps
src/lib/site.ts         → verify brand info (auto-filled)
```

## Before committing

```bash
pnpm precommit
```

This runs lint + typecheck + design token check. Commit is blocked if any hardcoded hex values are found in components.

## Using with Claude Code

Start a session and Claude will read `CLAUDE.md` automatically. Then use skills:

```
/copywriter    Write hero copy for the studio
/qa-mobile     Check all tap targets and form accessibility
/ui-designer   Build the Works section with project cards
```

Each skill loads role-specific constraints before doing any work.
