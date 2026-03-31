#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3100}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FIXTURE_PATH="${SCRIPT_DIR}/../../candidate/fixtures/site-packet.happy.json"

curl -sS \
  -X POST "${BASE_URL}/v1/diligence/runs" \
  -H "content-type: application/json" \
  --data @"${FIXTURE_PATH}"

echo
