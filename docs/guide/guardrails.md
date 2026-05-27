# GUARDRAILS.md

`GUARDRAILS.md` is institutional memory for AI. Every failure pattern discovered during development is documented here, so future sessions never repeat the same mistake.

## How it works

```
Session 1: debug SVG text disappearing in Clients section → 2000 tokens
Session 2: GUARDRAILS says "SVG <text> fails via optimizer, use unoptimized prop" → 50 tokens
```

Each entry = one bug that never repeats.

## Pre-loaded entries

Every generated project starts with these known patterns:

**Forms**
```md
- ALWAYS use a proper <form> element with submit handler — not <div> + onClick
  Without this: Enter key broken, autofill broken, screen reader can't identify as form
```

**SVG**
```md
- SVG <text> elements can fail silently when processed by image optimizers
  Fix: serve SVGs as static files or use unoptimized flags
```

**Accessibility**
```md
- <nav> MUST have aria-label if more than one nav exists on the page
- All tap/click targets MUST be ≥44px (WCAG 2.1 SC 2.5.5)
```

**Claude Code**
```md
- Skills MUST be at .claude/skills/{name}/SKILL.md with YAML frontmatter
- .agents/skills/ path does NOT work
```

## Adding new entries

Format:
```md
## Past Failures
- 2026-05-27: [issue description]. Fix: [solution]
```

Add entries immediately when you find a bug. The next session will avoid it automatically.

## Why this matters

Without GUARDRAILS, every new AI session starts from zero. The same `<div>` instead of `<form>` bug can happen in session 1, session 5, and session 12. With GUARDRAILS, it happens once.
