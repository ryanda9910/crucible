# DESIGN.md

`DESIGN.md` is the design system ground truth. Every AI session reads this file before touching any UI.

## What it contains

### 1. Brand Identity
Name, location, industry, tagline, voice description, and feel. This prevents AI from defaulting to generic "professional" tone.

### 2. Color Tokens
```md
--color-bg:          #1A1A2E   (page background)
--color-accent:      #E94560   (CTAs, highlights)
--color-text-muted:  rgba(255,255,255,0.45)
```
Token names, not hex values. Rules: **never hardcode hex in components**.

### 3. Typography
Which fonts, which classes, what rules. "Serif for headlines, mono for technical specs."

### 4. Spacing Scale
Reference to the design system scale. No arbitrary pixel values.

### 5. Component Patterns
How buttons render, card styles, label classes. Prevents AI from inventing new patterns.

### 6. Motion
`duration-300 ease-out`. No bounce. No elastic. Always check `prefers-reduced-motion`.

### 7. Anti-Patterns
The **forbidden list**. Explicit things that will never appear in this project:
- Purple-pink gradients
- `rounded-xl` on cards
- "We are passionate about music"
- Stock-looking hero images
- Vague copy ("professional", "innovative")

## How AI uses it

Claude Code loads `DESIGN.md` at session start (via `CLAUDE.md` instructions). When implementing UI:

1. Checks color — must use token name, not hex
2. Checks typography — must use specified font pairing
3. Checks anti-patterns — refuses to implement anything on the list
4. Proposes additions rather than inventing new patterns

## Updating DESIGN.md

When you need a pattern that doesn't exist yet:
1. Propose the addition to `DESIGN.md` first
2. Get approval (from yourself, or your team)
3. Add to `DESIGN.md`
4. Then implement

This forces deliberate design decisions instead of ad-hoc one-offs.
