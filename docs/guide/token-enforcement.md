# Token Enforcement

Design consistency enforced by code, not discipline.

## The script

```bash
pnpm check:tokens
```

Scans all source files and fails if it finds:

| Pattern | Reason |
|---|---|
| `bg-[#hex]` | Hardcoded color via Tailwind arbitrary value |
| `text-[#hex]` | Same |
| `border-[#hex]` | Same |
| `p-[18px]` | Hardcoded spacing |
| `#XXXXXX` directly in component | Direct hex reference |

## Precommit pipeline

```json
"precommit": "pnpm lint && pnpm typecheck && pnpm check:tokens"
```

Commit is blocked if any violation is found. AI cannot bypass this even if it wants to.

## Examples

```tsx
// ✗ Fails check:tokens
<div className="bg-[#D4A574] p-[18px]">

// ✓ Passes
<div className="bg-accent p-4">
```

```css
/* ✗ Fails (in component CSS) */
color: #D4A574;

/* ✓ Passes */
color: var(--color-accent);
```

## Vanilla JS version

For the Vanilla JS framework, `scripts/check-design-tokens.mjs` checks `.html`, `.js`, and `.css` files for raw hex values outside of `tokens.css`.

## Adding custom rules

Edit `scripts/check-design-tokens.ts` and add patterns to the `FORBIDDEN_PATTERNS` array:

```ts
const FORBIDDEN_PATTERNS = [
  /bg-\[#[0-9a-fA-F]/,       // existing
  /your-custom-pattern/,      // add here
];
```
