#!/bin/bash
# ============================================================
# Inject Google Analytics 4 snippet across all production pages
# ============================================================
# Usage: ./scripts/inject-ga4.sh G-XXXXXXXXXX
#
# Wstawia GA4 tag (gtag.js) do każdej strony produkcyjnej,
# zamieniając placeholder <!-- GA4-PLACEHOLDER -->.
# ============================================================

set -e

if [ -z "$1" ]; then
  echo "❌ Brak Measurement ID."
  echo "Usage: $0 G-XXXXXXXXXX"
  exit 1
fi

GA4_ID="$1"

# Walidacja: musi być format G-...
if ! [[ "$GA4_ID" =~ ^G-[A-Z0-9]+$ ]]; then
  echo "❌ Nieprawidłowy format Measurement ID. Powinien być: G-XXXXXXXXXX"
  exit 1
fi

cd "$(dirname "$0")/.."

GA4_SNIPPET="<!-- Google Analytics 4 -->
<script async src=\"https://www.googletagmanager.com/gtag/js?id=$GA4_ID\"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '$GA4_ID', { anonymize_ip: true });
</script>"

echo "🔄 Wstawiam GA4 ($GA4_ID) do produkcyjnych stron..."

count=0
for f in *.html; do
  case "$f" in
    _backup_*|Mobile*|*print*|*v2*|index*|podglad*|wybor*) continue;;
  esac

  if grep -q "googletagmanager.com/gtag/js?id=$GA4_ID" "$f"; then
    echo "  ⏭  $f (już ma GA4)"
    continue
  fi

  if grep -q "<!-- GA4-PLACEHOLDER -->" "$f"; then
    # Zamień placeholder
    awk -v snippet="$GA4_SNIPPET" '{ gsub(/<!-- GA4-PLACEHOLDER -->/, snippet); print }' "$f" > "$f.tmp"
    mv "$f.tmp" "$f"
    count=$((count + 1))
    echo "  ✓ $f"
  else
    # Wstaw przed </head> jeśli nie ma placeholdera
    python3 -c "
import sys
with open('$f', 'r', encoding='utf-8') as f: s = f.read()
snippet = '''$GA4_SNIPPET
'''
s = s.replace('</head>', snippet + '</head>', 1)
with open('$f', 'w', encoding='utf-8') as f: f.write(s)
"
    count=$((count + 1))
    echo "  ✓ $f (wstawione przed </head>)"
  fi
done

echo ""
echo "✅ GA4 wstawione do $count stron."
echo "👉 Sprawdź na produkcji: DevTools → Network → szukaj 'gtag/js?id=$GA4_ID'"
