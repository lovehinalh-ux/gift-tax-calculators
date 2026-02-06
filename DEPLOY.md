# Deployment Procedure

This project deploys from `main`.

## Pre-deploy checklist (local)

1. Make sure you are on `main`.
2. Make sure your working tree is clean.
3. Run:

```bash
npm run predeploy:check
```

This script validates:
- Branch is `main`
- Local `main` matches `origin/main`
- Unit tests pass
- Type check passes
- Production build succeeds

## GitHub flow

1. Develop on a feature branch (example: `codex/...`).
2. Open PR to `main`.
3. Merge PR.
4. Pull latest `main` locally:

```bash
git checkout main
git pull --ff-only origin main
```

## Zeabur deployment checks

Before clicking deploy, verify:
- Source branch is `main`
- Commit hash shown in Zeabur equals latest `origin/main`
- If not, trigger redeploy after refreshing the repository state
- Build command uses webpack fallback: `npm run build` (mapped to `next build --webpack`)
  - Reason: avoid Turbopack-specific build instability on some CI/deploy environments

## Recommended command sequence

```bash
git checkout main
git pull --ff-only origin main
npm run predeploy:check
```

When all checks pass, deploy from Zeabur using `main`.
