# Adding a Framework

Want to add SvelteKit, Nuxt, Remix, or another framework? Here's the exact process.

## 1. Create template directory

```bash
mkdir -p templates/frameworks/{your-framework}/src/{components,lib,styles}
```

## 2. Required files

Every framework template must include:

| File | Purpose |
|---|---|
| `package.json.tmpl` | Dependencies with `{{BRAND_SLUG}}` name |
| `src/lib/site.ts.tmpl` (or `.js`) | `SITE` object with brand vars |
| `src/lib/services.ts.tmpl` | Services data structure |
| `src/lib/process.ts.tmpl` | Process steps data structure |
| `src/styles/tokens.css.tmpl` | CSS custom properties |
| Framework config file | `astro.config.mjs`, `vite.config.ts`, etc. |
| Entry point | `index.html`, `src/app/page.tsx`, etc. |
| Sections | Hero, Services, Process, Contact components |
| Layout | Header, Footer components |

## 3. Template variables

Use `{{VAR_NAME}}` syntax in `.tmpl` files. Available variables:

```
{{BRAND_NAME}}     Volta Studio
{{BRAND_SLUG}}     volta-studio
{{TAGLINE}}        Every beat tells a story.
{{INDUSTRY}}       music
{{CITY}}           Bandung
{{PRIMARY_COLOR}}  #1A1A2E
{{ACCENT_COLOR}}   #E94560
{{DOMAIN}}         voltastudio.com
{{EMAIL}}          hello@voltastudio.com
{{YEAR}}           2026
{{FRAMEWORK}}      your-framework
```

Files without `.tmpl` extension are copied as-is.

## 4. Register in CLI

Add to the `framework` select in `src/index.ts`:

```ts
{ value: 'your-framework', label: 'Framework Name', hint: 'Short description' },
```

## 5. Add generator test

In `src/test-generator.ts`, add your framework to the checks:

```ts
'your-framework': ['CLAUDE.md', 'DESIGN.md', 'package.json', 'your-entry-file'],
```

## 6. Shared files (don't duplicate)

The following come from `templates/shared/` and don't need to be in your framework template:

- `CLAUDE.md.tmpl`
- `DESIGN.md.tmpl`
- `GUARDRAILS.md.tmpl`
- `.claude/skills/`
- `docs/DESIGN-DECISIONS.md.tmpl`
- `scripts/check-design-tokens.ts`

## 7. Key requirements

All framework templates must:
- Use CSS custom properties from `tokens.css` (no hardcoded hex)
- Include `aria-label` on all `<nav>` elements
- Wrap contact form in `<form>` with submit handler
- Respect `prefers-reduced-motion` on video/animation
- Have all tap targets ≥44px

## 8. Submit PR

PR must include:
- Template files
- CLI entry
- Docs entry in `frameworks.md`
- Test case

See [Contributing](/guide/contributing) for the full PR process.
