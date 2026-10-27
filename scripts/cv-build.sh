#!/usr/bin/env bash
# Renders the CV masters (cv/*.html) into the deployable PDFs (public/cv-vicente-perez-*.pdf).
# The HTML in cv/ is the source of truth — never edit the PDFs by hand.
# Usage: pnpm cv:build   (override Chrome with CHROME=/path/to/chrome)
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

for pair in ENG:en ESP:es FR:fr; do
  src="${pair%%:*}"
  lang="${pair##*:}"
  out="public/cv-vicente-perez-${lang}.pdf"
  rm -f "$out"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$out" \
    "cv/Vicente Pérez ${src} CV.html" 2>/dev/null
  if [[ ! -s "$out" ]]; then
    echo "FAILED: $out was not written (Chrome exited cleanly but produced no output)" >&2
    exit 1
  fi
  echo "cv-vicente-perez-${lang}.pdf  <-  cv/Vicente Pérez ${src} CV.html"
done
