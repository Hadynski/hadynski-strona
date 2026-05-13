# Hadyński Inkaso — strona windykacyjna

Statyczna strona HTML/CSS/JS pod kampanie reklamowe (Facebook Ads, Google Ads). Lead capture przez Google Apps Script → Google Sheets.

## Stack

- Vanilla HTML/CSS/JS (bez frameworka)
- Google Apps Script — endpoint do lead capture
- Python `http.server` — local dev server
- Cloudflare Stream — hosting nagrań reels w sekcji "Zobacz jak odzyskujemy"
- Fonty self-hosted (Fraunces, Inter Tight, Instrument Serif, JetBrains Mono) lub Google Fonts CDN — zależnie od pliku

## Struktura

```
HIngo/
├── Hadynski.html                  # Home — Hero, 4 obszary, Jak działa, Reels, Panel HINGO, Testimonials, FAQ, Urgency, CTA
├── Hadynski - Kontakt.html        # Formularz kontaktowy
├── Hadynski - Gielda.html         # Giełda wierzytelności (TODO: Soflex embed)
├── Hadynski - Skup.html           # Skup wierzytelności (landing)
├── Hadynski - Masowa.html         # Masowa windykacja (landing)
├── Hadynski - Eksmisje.html       # Eksmisje lokatorów (landing)
├── Hadynski - Polubowna.html
├── Hadynski - Sadowa.html
├── Hadynski - Miedzynarodowa.html
├── Hadynski - Doradztwo.html
├── Hadynski - Wywiad.html
├── Hadynski - Poszukiwanie.html
├── Hadynski - Pieczec.html
├── Hadynski - Polityka-prywatnosci.html
├── Hadynski - Polityka-cookies.html
├── Hadynski - Regulamin.html
├── Hadynski - Blog.html           # Placeholder (TODO: infrastruktura)
├── apps-script/Code.gs            # Apps Script — lead capture endpoint
├── leads-config.js                # URL endpoint Apps Script (publiczny)
├── README.md
└── .gitignore
```

## Local development

```bash
cd HIngo
python3 -m http.server 8000
```

Otwórz `http://localhost:8000/Hadynski.html` w Chrome.

Hot reload nie istnieje (vanilla HTML) — po każdej zmianie ręczny **Cmd+R**. W DevTools rekomendowane: Network tab → **Disable cache** żeby uniknąć stale assets.

## Lead capture

Każdy formularz na stronie POSTuje na endpoint Apps Script (URL w `leads-config.js`), który zapisuje lead do Google Sheets. Apps Script parsuje też User Agent i Referrer na czytelny tekst ("Safari na iPhone", "Google (wyszukiwarka)").

**Honeypot field:** każdy formularz ma ukryte pole `<input name="website">` — boty wypełniają, ludzie nie. Apps Script ignoruje wpisy z wypełnionym honeypot.

## TODO dla Kuby

### Priorytet 1 — przed deploy

- [ ] **SEO infrastructure** — Marceli prowadzi SEO. Trzeba dodać per stronę: title/description/canonical, Schema.org JSON-LD (LegalService/Service/FAQPage/Article), OG images, sitemap.xml, robots.txt. Internal linking strategy. Core Web Vitals optymalizacja (image lazy loading, font preload).

- [ ] **Blog infrastructure** — Marceli ma dodawać wpisy SEO. Coś co pozwala mu pisać i publikować bez kontaktu z deweloperem. Opcje: NextJS+MDX, Ghost, Sanity CMS, Astro+Content. Decyzja po stronie Kuby. **Zintegrować z dodawaniem przez Cowork** (Marceli pracuje z Cowork/Claude).

- [ ] **Lead capture — logika Michała** — Michał ma swoją logikę dla arkusza z leadami (lead scoring, routing, notyfikacje). Obecnie strona idzie do Sheets przez Apps Script (`apps-script/Code.gs`). Skoordynuj z Michałem implementację jego logiki.

- [ ] **Giełda wierzytelności (Hadynski - Gielda.html)** — obecnie statyczny landing z FAQ i przyciskiem "Dodaj wierzytelność". **Soflex** (firma) ma swoje narzędzie do giełdy które ma być wpięte tutaj jako embed/iframe lub API integration. Skontaktuj się z Soflex bezpośrednio, ustal techniczne szczegóły.

- [ ] **Wersja mobile** — strona jest desktop-first. Na mobile (375px iPhone SE) są problemy z: horizontal overflow, Hero padding, statystyki layout, drawer overlay, animacje. Mikołaj zapyta studio (zewnętrzny zespół design) w mailu o pomoc z mobile version — możliwe że dostarczą gotowe mockupy lub gotowy HTML. Synchronizuj się z Mikołajem przed touchowaniem mobile.

- [ ] **Reels videos — docelowe nagrania** — obecnie w `Hadynski.html` jest tablica `REELS` z 6 vid IDs Cloudflare Stream (linia ~6043). Mikołaj dostał docelowe nagrania ze studia na mailu. Trzeba wgrać na Cloudflare Stream (Mikołaj/Kuba ma dostęp do konta), pobrać nowe vid IDs, podmienić w tablicy.

### Priorytet 2 — deploy

- [ ] **Vercel/GitHub Pages deploy** — wybierz platformę (Vercel preferowane — szybsze, łatwiejsze custom domain). Podłącz repo, auto-deploy on push to `main`.

- [ ] **Custom domain hadynski.pl** — CNAME `hadynski.pl` → deployment URL. Przed przepięciem zrobić **backup** obecnej strony hadynski.pl na poddomenę `legacy.hadynski.pl` lub w branch `legacy-html`.

- [ ] **Redirecty starych URL** — jeśli obecna strona ma jakieś URL pamiętane przez Google (Search Console) lub linki z kampanii, ustawić 301 redirecty na nowe ścieżki.

### Priorytet 3 — po deploy

- [ ] **Analytics** — Google Analytics 4 / Plausible / Fathom. Konsultacja z Marcelim które wybrać.
- [ ] **Performance audit** — Lighthouse score >90 dla mobile i desktop. Optymalizacja obrazów (WebP), font preload, lazy loading.
- [ ] **A/B testy** — jeśli będzie potrzeba pod kampanie. Google Optimize lub VWO.

## Kontakty

- **Mikołaj Krawczyk-Demczuk** (UI, copy, decyzje produktowe, akceptacja zmian): m.krawczyk.demczuk04@gmail.com
- **Marceli** (SEO, content): _do uzupełnienia_
- **Michał** (lead capture logic): _do uzupełnienia_
- **Soflex** (giełda wierzytelności integracja): _kontakt przez Mikołaja_
- **Studio** (mobile design): _kontakt przez Mikołaja_

## Historia developmentu (skrót)

Strona powstała iteracyjnie z Mikołajem przez Cowork (Claude). Główne etapy:

1. Setup struktury (nav, footer, polityki, 11 podstron usług, Giełda, Kontakt)
2. Lead capture przez Apps Script → Google Sheets (z parsingiem UA i Referrer)
3. Cookie banner + modal polityk (3 zakładki: privacy/cookies/regulamin) z localStorage consent shared cross-page
4. FAQ unification w stylu Giełda/Kontakt na wszystkich podstronach
5. "O firmie" w stopce na wszystkich stronach (pod SEO)
6. Eksperyment migracji na NextJS+MDX (folder `hadynski-next/` — **NIE w repo**, zamrożony)
7. Mobile audit + częściowe fixy (drawer, Hero padding, stats grid, portrait centering, reveal animation, hero entrance) — niedokończone, czeka na input ze studia

Pełna historia w komitach git.
