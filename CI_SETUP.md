# CI Setup

A recommended GitHub Actions CI workflow is included as `ci.yml.recommended`.

This runs on every push to `main` and every pull request:
- **Lint** — `npm run lint` (Next.js ESLint)
- **Type check** — `npx tsc --noEmit`
- **Build** — `npm run build`
- **Audit** — `npm audit --audit-level=high` (non-blocking)

## How to enable

The GitHub App cannot create workflow files directly — this must be done manually.

Copy `ci.yml.recommended` to `.github/workflows/ci.yml`:

```bash
mkdir -p .github/workflows
cp ci.yml.recommended .github/workflows/ci.yml
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions workflow"
git push
```

> **Note:** If `.github/workflows/ci.yml` already exists, compare the two files and merge any improvements you want to keep.
