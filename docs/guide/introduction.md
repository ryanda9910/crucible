# Introduction

## What is this?

`create-ai-landing` is a CLI scaffold for landing pages. It generates a complete project with a full AI agent system built in — not just a component library, but a constraint system that shapes how AI writes code and copy for your specific brand.

## The problem it solves

Most AI-generated landing pages look the same because the AI has no information about the brand. Without constraints, it defaults to:

- Generic copy ("Professional solutions for discerning clients")
- 3-column equal grids with stock icons
- Hex values hardcoded in every component
- Missing `<form>` wrappers, broken Enter key submission
- OG images that are just black placeholders

`create-ai-landing` solves this by generating a **constraint system** alongside the code:

```
Your project/
  CLAUDE.md          ← AI reads this every session
  DESIGN.md          ← exact colors, fonts, anti-patterns
  GUARDRAILS.md      ← learned failure patterns
  .claude/skills/    ← role-based AI constraints
  scripts/           ← automated enforcement
```

## The core idea

```
Slop     = AI without constraints
Not slop = AI with design system + guardrails + concrete specs
```

Quality of AI output = quality of the environment you build.

## What gets generated

Running `npx @ryanda9910/create-ai-landing my-project` generates:

1. **AI meta-files** — `CLAUDE.md`, `DESIGN.md`, `GUARDRAILS.md` pre-filled with your brand name, colors, and city
2. **Claude Code skills** — `copywriter`, `qa-mobile`, `ui-designer` role constraints in `.claude/skills/`
3. **Token enforcement** — `scripts/check-design-tokens.ts` blocks hardcoded hex values at commit
4. **Precommit pipeline** — `pnpm precommit` = lint + typecheck + token check
5. **Component skeletons** — Hero, Services, Process, Contact, Header, Footer
6. **Data layer** — `src/lib/site.ts`, `services.ts`, `process.ts` — content separate from markup
7. **API route** — contact form with Zod validation + honeypot

## Who is it for?

- Developers building brand landing pages with AI assistance (Claude Code, Cursor, Copilot)
- Agencies who want a repeatable AI-assisted workflow per client
- Indie builders who want to ship faster without generating generic output
