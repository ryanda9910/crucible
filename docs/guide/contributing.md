# How to Contribute

Contributions are welcome. This project values specificity — if you open a PR, make it concrete.

## Development setup

```bash
git clone https://github.com/ryanda9910/create-ai-landing.git
cd create-ai-landing
pnpm install
```

Test the CLI locally:
```bash
pnpm dev          # runs tsx src/index.ts
```

Test the generator:
```bash
pnpm tsx src/index.ts /tmp/test-project
```

## Commit format

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
type(scope): subject

feat(cli): add vue framework option
fix(generator): handle empty target directory
docs(readme): update quick start example
chore(deps): bump vitepress to 1.6.0
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`

Commitlint runs on every commit via Husky.

## What to contribute

### High value
- **New framework template** — See [Adding a Framework](/guide/adding-framework)
- **Bug fix** — With a reproduction case
- **GUARDRAILS entry** — A failure pattern you discovered and documented

### Lower priority
- Refactoring without behavior change
- New features without a clear use case
- Style-only changes

## PR process

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Make changes + commit with conventional format
4. Open a PR against `main`
5. Fill in the PR template

PRs that add a framework must include:
- Template files in `templates/frameworks/{name}/`
- Framework entry in the CLI `select` prompt (`src/index.ts`)
- Documentation page in `docs/guide/frameworks.md`
- Generator test case

## Reporting bugs

Use the [bug report template](https://github.com/ryanda9910/create-ai-landing/issues/new?template=bug_report.md).

Include:
- CLI version (`npx @ryanda9910/create-ai-landing --version`)
- Framework selected
- Node.js version
- Steps to reproduce
