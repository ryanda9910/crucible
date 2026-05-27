# AI Skills

Skills are role-based constraint files for Claude Code. Each skill loads specific rules before doing any work.

## Location

```
.claude/skills/
  copywriter/SKILL.md
  qa-mobile/SKILL.md
  ui-designer/SKILL.md
```

::: warning Important
Skills MUST be in `.claude/skills/`, not `.agents/skills/`. Claude Code only loads from the `.claude/` directory.
:::

## /copywriter

Enforces voice, tone, and specificity rules from `DESIGN.md`.

**Rules enforced:**
- No superlatives (world-class, innovative, passionate)
- Specific over vague — name the city, the format, the gear, the numbers
- Headlines max 10 words
- CTAs verb-first, max 4 words

**Usage:**
```
/copywriter Write hero section copy for a film scoring studio in Jakarta
/copywriter Review the Services section copy for slop
```

## /qa-mobile

Runs a checklist against the built UI at 375px viewport.

**Checks:**
- All tap targets ≥44px (WCAG)
- `<form>` wrapper present on all forms
- `<nav>` elements have `aria-label`
- No horizontal overflow at 375px
- OG image is not a black placeholder
- Video has poster fallback
- `prefers-reduced-motion` respected

**Usage:**
```
/qa-mobile Run full mobile QA check
```

## /ui-designer

Enforces design system rules when implementing components.

**Rules enforced:**
- All colors via token names (`bg-accent`, not `bg-[#D4A574]`)
- All spacing from scale (`p-4`, not `p-[18px]`)
- No inline `style={}` props
- No new CSS custom properties without updating `DESIGN.md`
- Hover states required on all interactive elements
- `prefers-reduced-motion` check on any animation

**Usage:**
```
/ui-designer Build the Works section with 6 project cards
```

## Adding a custom skill

Create `.claude/skills/your-skill/SKILL.md`:

```md
---
name: your-skill
description: One-line description of what this skill does
---

# Your Skill Name

## Rules
- Rule 1
- Rule 2

## Usage
Explain when and how to invoke this skill.
```

The `name` and `description` frontmatter fields are required.
