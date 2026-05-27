# Changelog

All notable changes are documented here. Follows [Keep a Changelog](https://keepachangelog.com/) format.

## [0.2.0] — 2026-05-27

### Added
- Multi-framework support: Astro 4, Vite + React, Vanilla JS
- Framework selection as first CLI prompt
- Restructured templates into `shared/` + `frameworks/` architecture
- Generator merges shared AI system files with framework-specific source
- Vanilla JS token checker (`scripts/check-design-tokens.mjs`)
- Astro `.astro` component templates with `<style>` scoping
- VitePress documentation site
- Conventional commits + commitlint + Husky
- GitHub Actions CI + auto-publish workflow
- GitHub issue + PR templates
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`

### Changed
- `GUARDRAILS.md` template generalized — removed Next.js-specific references
- CLI now asks 10 questions (framework added)

## [0.1.0] — 2026-05-27

### Added
- Initial release
- Next.js 14 App Router template
- CLAUDE.md, DESIGN.md, GUARDRAILS.md with brand interpolation
- `.claude/skills/` — copywriter, qa-mobile, ui-designer
- `scripts/check-design-tokens.ts` — blocks hardcoded hex at commit
- `pnpm precommit` pipeline
- Hero, Services, Process, Contact, Header, Footer components
- API route with Zod validation + honeypot
- 9-question interactive CLI
