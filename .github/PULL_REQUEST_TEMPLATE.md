## What does this PR do?
<!-- One paragraph. Be specific. -->

## Type of change
- [ ] Bug fix
- [ ] New framework template
- [ ] New feature
- [ ] Documentation
- [ ] Chore / deps

## Checklist

### All PRs
- [ ] Commits follow conventional format (`feat:`, `fix:`, `docs:`, etc.)
- [ ] `pnpm build` passes
- [ ] No hardcoded brand-specific content in templates (use `{{VAR_NAME}}`)

### New framework template
- [ ] All required files present (see [adding-framework docs](../docs/guide/adding-framework.md))
- [ ] Framework entry added to CLI `src/index.ts`
- [ ] Test case added
- [ ] `docs/guide/frameworks.md` updated
- [ ] All tap targets ≥44px in generated components
- [ ] `<form>` wrapper on contact form
- [ ] `aria-label` on all `<nav>` elements
- [ ] `prefers-reduced-motion` respected on video/animation

### Bug fix
- [ ] Root cause identified and described
- [ ] Added to GUARDRAILS.md template if it's a recurring AI mistake pattern

## Screenshots / output
<!-- If UI change: before/after. If CLI change: terminal output. -->
