#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="$(git remote get-url origin)"

build_for_pages() {
  if grep -qi microsoft /proc/version 2>/dev/null && command -v cmd.exe >/dev/null 2>&1 && command -v wslpath >/dev/null 2>&1; then
    WINDOWS_PWD="$(wslpath -w "$PWD")"
    cmd.exe /d /c "cd /d $WINDOWS_PWD && npm run build:gh-pages"
  else
    npm run build:gh-pages
  fi
}

rm -rf dist
build_for_pages

test -f dist/index.html || { echo "build failed: dist/index.html not found" >&2; exit 1; }

cd dist
touch .nojekyll
git init
git add -A
git commit -m "Deploy GitHub Pages"
git branch -M gh-pages
git remote add origin "$REMOTE_URL"
git push -f origin gh-pages
