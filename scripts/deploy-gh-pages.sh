#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="$(git remote get-url origin)"

npm run build:gh-pages

test -d dist || { echo "build failed: dist/ not found" >&2; exit 1; }

cd dist
touch .nojekyll
rm -rf .git
git init
git add -A
git commit -m "Deploy GitHub Pages"
git branch -M gh-pages
git remote add origin "$REMOTE_URL"
git push -f origin gh-pages
