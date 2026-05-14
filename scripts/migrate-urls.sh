#!/bin/bash
# ============================================================
# Migration script: hadynski.github.io/hadynski-strona/ → hadynski.pl
# ============================================================
# Zamienia wszystkie wystąpienia URL bazy w canonical, og:url,
# twitter cards, sitemap.xml, JSON-LD itp. — przygotowanie do
# deployu na produkcyjny hadynski.pl.
#
# Uruchom RAZ przed deployem.
# Idempotentny — można odpalić wielokrotnie bez szkody.
# ============================================================

set -e

OLD_URL="https://hadynski.github.io/hadynski-strona"
NEW_URL="https://hadynski.pl"

# OLD_URL może być też bez /hadynski-strona (sprawdzić wszystkie warianty)
OLD_URL_ALT="https://hadynski.github.io"

cd "$(dirname "$0")/.."

echo "🔍 Sprawdzam wystąpienia $OLD_URL w plikach HTML..."
matches_before=$(grep -lE "$OLD_URL" *.html sitemap.xml robots.txt 2>/dev/null | wc -l)
echo "  → Znaleziono w $matches_before plikach"
echo ""

echo "🔄 Zamieniam URL w plikach produkcyjnych..."

for f in *.html sitemap.xml robots.txt; do
  # Pomiń backupy i wewnętrzne
  case "$f" in
    _backup_*|*.bak|Mobile*|*print*|*v2*|podglad*|wybor*) continue;;
  esac
  if [ ! -f "$f" ]; then continue; fi

  before=$(wc -c < "$f")
  # Zamień długi (z /hadynski-strona) najpierw
  sed -i.bak \
    -e "s|$OLD_URL|$NEW_URL|g" \
    "$f"
  after=$(wc -c < "$f")
  diff=$((before - after))
  if [ "$diff" -ne 0 ]; then
    echo "  ✓ $f  (zaoszczędzone $diff bajtów)"
  fi
  rm -f "$f.bak"
done

echo ""
echo "🔍 Weryfikacja po migracji..."
remaining=$(grep -rE "$OLD_URL" *.html sitemap.xml robots.txt 2>/dev/null | wc -l)
echo "  → Pozostałe wystąpienia $OLD_URL: $remaining"

if [ "$remaining" -gt 0 ]; then
  echo "⚠️  UWAGA: zostały wystąpienia — sprawdź ręcznie:"
  grep -rnE "$OLD_URL" *.html sitemap.xml robots.txt 2>/dev/null | head -5
fi

echo ""
echo "✅ Migracja URL zakończona."
echo ""
echo "👉 Po deployu sprawdź:"
echo "   1. https://hadynski.pl/sitemap.xml — czy URL-e mają hadynski.pl"
echo "   2. View source homepage — canonical, og:url, JSON-LD"
echo "   3. Google Search Console — submit sitemap"
