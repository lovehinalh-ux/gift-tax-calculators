#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/6] Verify git working tree..."
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "ERROR: Working tree is not clean. Commit or stash changes before deploy."
  exit 1
fi

echo "[2/6] Fetch latest remote refs..."
git fetch origin --prune

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "ERROR: You are on '$CURRENT_BRANCH'. Switch to 'main' before production deploy."
  exit 1
fi

LOCAL_HEAD="$(git rev-parse HEAD)"
REMOTE_MAIN="$(git rev-parse origin/main)"

echo "[3/6] Check main branch freshness..."
if [[ "$LOCAL_HEAD" != "$REMOTE_MAIN" ]]; then
  echo "ERROR: Local main is not at origin/main."
  echo "Local : $LOCAL_HEAD"
  echo "Remote: $REMOTE_MAIN"
  echo "Run: git pull --ff-only origin main"
  exit 1
fi

echo "[4/6] Run unit tests..."
npm run test:run

echo "[5/6] Run type checks..."
npm run type-check

echo "[6/6] Run production build..."
npm run build

echo ""
echo "Pre-deploy checks passed."
echo "Deploy commit: $LOCAL_HEAD"
