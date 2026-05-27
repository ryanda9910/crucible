# Contributing to create-ai-landing

Thanks for your interest. Contributions are welcome — especially new framework templates, GUARDRAILS entries, and bug fixes.

## Quick start

```bash
git clone https://github.com/ryanda9910/create-ai-landing.git
cd create-ai-landing
pnpm install
pnpm dev  # runs the CLI interactively
```

## Commit format

Required: [Conventional Commits](https://www.conventionalcommits.org/)

```
feat(cli): add sveltekit framework option
fix(generator): handle spaces in brand name
docs: add api-route guide
```

Commitlint enforces this on every commit. Check your commit message before pushing.

## What we want

- **New framework templates** — see [Adding a Framework](docs/guide/adding-framework.md)
- **Bug fixes** — with reproduction + root cause
- **GUARDRAILS entries** — common AI mistake patterns worth documenting
- **Documentation improvements** — clarity, examples, corrections

## What we don't want

- Refactors without behavior change
- New options that make the CLI more complex without clear value
- Changes to existing templates that break the design system rules

## PR requirements

- Commits in conventional format
- `pnpm build` passes
- Templates use `{{VAR_NAME}}` — no hardcoded brand content
- Framework PRs: all accessibility requirements met (see PR template)

## Full contributing guide

See [docs/guide/contributing.md](docs/guide/contributing.md) for details.
