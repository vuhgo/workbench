#!/usr/bin/env bash
set -euo pipefail

if ! command -v wrangler &>/dev/null; then
  echo "Error: wrangler is not installed."
  echo "Install it with: npm install -g wrangler"
  exit 1
fi

pnpm build
wrangler pages deploy dist --project-name=hugios-web
