#!/usr/bin/env bash
set -euo pipefail

NODE_BIN="/Users/b/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
if [ ! -x "$NODE_BIN" ]; then
  NODE_BIN="$(command -v node)"
fi

exec "$NODE_BIN" server.mjs
