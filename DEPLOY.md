# Deploy checklist — Hadyński Inkaso (hadynski.pl)

Dokument dla Kuby Markiewicza — co potrzebne do podpięcia nowej strony na hadynski.pl z zachowaniem działającej giełdy wierzytelności.

---

## 1. Stan obecny

### Co masz w tym repo
- **19 produkcyjnych stron HTML** (statyczne, hostowane obecnie na `hadynski.github.io/hadynski-strona/`)
- Strony lekkie po optymalizacji (homepage 272 KB, podstrony 100-250 KB)
- Wszystko gotowe pod responsywność, SEO, Core Web Vitals
- Formularze leadów działają (Google Apps Script → arkusz Google Sheets)
- Mobile drawer, pop-up modale, cookie banner — wszystko sprawdzone na 320–1440px

### Stan obecnej strony hadynski.pl (live)
- Stara strona (`hadynski.pl`)
- **KRYTYCZNE: subkatalog `/gielda-wierzytelnosci/` musi pozostać nietknięty** — to działająca giełda zasilana API Kambit/Softlex (metoda `GetClaimsFromStockExchangeKambit`, cron cyklicznie zaciąga dane)
- Nowa Gielda.html w tym repo to **landing explainer** który linkuje na `/gielda-wierzytelnosci/` — nie zastępuje funkcjonalności

---

## 2. Co trzeba zrobić przy deploy

### 2.1 Backup obecnej strony
```bash
# Na serwerze hadynski.pl — przed jakimkolwiek deployem
cp -r /var/www/hadynski.pl /var/www/hadynski.pl.backup-$(date +%Y-%m-%d)
```

### 2.2 Deploy nowych plików
Wgrać wszystkie pliki z tego repo do roota `hadynski.pl`, **Z WYJĄTKIEM**:
- `/gielda-wierzytelnosci/` — **NIE NADPISYWAĆ**, zostaw obecną
- `/_backup_pre_*/` — backupy, nie deployować
- `/_scratch/`, `/audit/`, `/uploads/`, `/screenshots/`, `/_leads-setup/` — wewnętrzne, w robots.txt jako Disallow

Pliki do deploya: zobacz [DEPLOY-FILES.txt](DEPLOY-FILES.txt) (generowane skryptem niżej)

### 2.3 Przekierowania / 301
Stara strona prawdopodobnie miała inne URL-e. Po deployu sprawdzić w Search Console:
- Czy są 404 z starych URL-i
- Dodać 301 redirects w `.htaccess` lub server config

**Aktualne URL-e po deployu:**
- `/` → `Hadynski.html` (homepage)
- `/Hadynski - Usluga Windykacja Sadowa.html` itp. (usługi)
- `/gielda-wierzytelnosci/` → **NIE RUSZAMY** (stary subkatalog z Softlex)
- `/Hadynski - Kontakt.html`
- `/Hadynski - Blog.html`

**Sugestia (opcjonalna):** Rename pliki HTML na slugi (`uslugi/windykacja-sadowa.html`) + 301 — łatwiej do udostępnienia. Wymaga edycji wewnętrznych linków + sitemap.

### 2.4 robots.txt + sitemap
- [robots.txt](robots.txt) — zaktualizować Sitemap URL na `https://hadynski.pl/sitemap.xml`
- [sitemap.xml](sitemap.xml) — zaktualizować wszystkie `<loc>` z `hadynski.github.io/hadynski-strona/` na `hadynski.pl/`
- **Skrypt do tej migracji**: [scripts/migrate-urls.sh](scripts/migrate-urls.sh)

### 2.5 HTTPS / SSL
- Sprawdzić że strona ma ważny SSL cert (Let's Encrypt jeśli brak)
- Wymusić HTTPS w server config
- Sprawdzić HSTS header

---

## 3. Soflex/Kambit — co MUSI dalej działać

### 3.1 Co to robi
- **Kambit** (firma) dostarcza system do windykacji + giełdę wierzytelności
- **Softlex** to nazwa produktu/programu Kambitu (program dla windykacji + prawników)
- Giełda działa tak:
  1. Kambit wystawia dane przez metodę `GetClaimsFromStockExchangeKambit`
  2. Cron po stronie hadynski.pl cyklicznie zaciąga dane
  3. Dane są publikowane na `/gielda-wierzytelnosci/`

### 3.2 Kontakt techniczny Kambit
- **Krzysztof Bitel — Kambit**
- E-mail: k.bitel@kambit.pl
- Tel: +48 504-240-565
- Strona: www.kambit.pl

### 3.3 Co trzeba sprawdzić po deployu
1. `/gielda-wierzytelnosci/` ładuje się — wpisy są aktualne
2. Cron działa (sprawdzić log serwera, lub w panelu cron jeśli jest)
3. Endpoint API jest dostępny dla Kambit (sprawdzić whitelist IP jeśli był)
4. Wyszukiwarka po NIP / nazwie działa
5. **Test integralności**: poprosić Kambit żeby wystawił testowy claim → sprawdzić czy pojawia się na giełdzie

### 3.4 Jeśli się sypnie
- Dane (claims) są w bazie/plikach na serwerze hadynski.pl
- Logi cronu są tam gdzie cron je pisze (zwykle `/var/log/cron` lub w panelu CMS jeśli używany)
- Kambit ma pełen kontekst integracji — można odpalić k.bitel@kambit.pl

---

## 4. Co dodać po deployu

### 4.1 Google Analytics 4
- W każdej HTML stronie jest placeholder: `<!-- GA4-PLACEHOLDER -->`
- Po założeniu property GA4 zamienić placeholder na snippet
- Skrypt: [scripts/inject-ga4.sh](scripts/inject-ga4.sh) (do uruchomienia z Measurement ID jako argument)

### 4.2 Google Search Console
- Dodać property `https://hadynski.pl`
- Submit sitemap: `https://hadynski.pl/sitemap.xml`
- Verify ownership przez meta tag (placeholder już w head: `<meta name="google-site-verification" content="">`)

### 4.3 Google Business Profile (lokalny SEO)
- Sprawdzić obecność profilu Hadyński Inkaso
- Zaktualizować dane: NAP (Name, Address, Phone) musi być spójny z JSON-LD na stronie
- Adres z JSON-LD: `ul. Powstańców Śląskich 7A, 53-332 Wrocław`
- Telefon: `+48 71 711 99 66`

---

## 5. Lead form — sprawdzenie po deployu

Formularze (hero, popup, kontakt) wysyłają do Google Apps Script:
- Endpoint: `https://script.google.com/macros/s/AKfycbwrPmjw_P6sPnmkzKqiWkdDBtH1cnG55xFztXiMwQWhle6MEpxr2wpwN8wBN-HQUFdiDg/exec`
- Konfiguracja: [leads-config.js](leads-config.js)
- Apps Script kod: [_leads-setup/apps-script.gs](_leads-setup/apps-script.gs)

**Test po deployu**: wypełnić formularz na żywej stronie, sprawdzić arkusz Google Sheets "Leady" — nowy wiersz powinien się pojawić w ciągu 5 sekund.

---

## 6. Backup obecnej strony przed deployem

```bash
ssh hadynski.pl
cp -r /var/www/hadynski.pl /var/www/hadynski.pl.backup-pre-redesign-$(date +%Y-%m-%d)

# Sprawdzić że backup ma /gielda-wierzytelnosci/
ls /var/www/hadynski.pl.backup-pre-redesign-*/gielda-wierzytelnosci/
```

---

## 7. Rollback plan (jeśli coś się sypnie)

```bash
# Przywróć backup
rm -rf /var/www/hadynski.pl
mv /var/www/hadynski.pl.backup-pre-redesign-* /var/www/hadynski.pl
```

`/gielda-wierzytelnosci/` w backupie ma wszystkie dane z dnia deployu — działa.

---

## Kontakt do Mikołaja (właściciel projektu)
- Imię: Mikołaj Krawczyk-Demczuk
- E-mail: f.kosel@hadynski.pl (lub osobisty)

## Kontakt do Bartosza Hadyńskiego (CEO Hadyński Inkaso)
- Adres: ul. Powstańców Śląskich 7A, 53-332 Wrocław
- Tel: +48 71 711 99 66
- E-mail: biuro@hadynski.pl
