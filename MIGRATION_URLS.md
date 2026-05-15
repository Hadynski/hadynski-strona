# Mapa URL-i do migracji — hadynski.pl

Dokument dla osoby przepinającej stronę na docelową domenę.

Cel: SEO-friendly clean URLs (bez `.html`, bez spacji, lowercase, kebab-case).
Po przepięciu musi działać **301 redirect** ze starych URL-i na nowe — żeby Google nie zgubił obecnego indeksu.

---

## Strona główna

| Plik w repo | Stary URL (github.io) | Nowy URL (hadynski.pl) |
|---|---|---|
| `Hadynski.html` | `/Hadynski.html` | `/` |

---

## Usługi (8 podstron)

| Plik w repo | Nowy URL |
|---|---|
| `Hadynski - Usluga.html` | `/uslugi` |
| `Hadynski - Usluga Windykacja Sadowa.html` | `/windykacja-sadowa` |
| `Hadynski - Usluga Windykacja Terenowa.html` | `/windykacja-terenowa` |
| `Hadynski - Usluga Windykacja Miedzynarodowa.html` | `/windykacja-miedzynarodowa` |
| `Hadynski - Usluga Masowa Windykacja.html` | `/windykacja-masowa` |
| `Hadynski - Usluga Skup Wierzytelnosci.html` | `/skup-wierzytelnosci` |
| `Hadynski - Usluga Eksmisje Lokatorow.html` | `/eksmisje-lokatorow` |
| `Hadynski - Usluga Pieczec Prewencyjna.html` | `/pieczec-prewencyjna` |
| `Hadynski - Usluga Poszukiwanie Majatku.html` | `/poszukiwanie-majatku` |
| `Hadynski - Usluga Obsluga Prawna.html` | `/obsluga-prawna` |
| `Hadynski - Usluga Wywiad Gospodarczy.html` | `/wywiad-gospodarczy` |

---

## Pozostałe podstrony

| Plik w repo | Nowy URL |
|---|---|
| `Hadynski - Blog.html` | `/blog` |
| `Hadynski - Kontakt.html` | `/kontakt` |
| `Hadynski - Polityka Prywatnosci.html` | `/polityka-prywatnosci` |
| `Hadynski - Polityka Cookies.html` | `/polityka-cookies` |
| `Hadynski - Regulamin.html` | `/regulamin` |
| `Hadynski - Gielda.html` | **przekierowanie 301 → `https://gielda.hadynski.pl/`** (zewnętrzna subdomena Soflexu) |

---

## Blog (8 artykułów)

Już mają dobre slug-i, wystarczy obciąć `.html` i prefix `/blog/`.

| Plik w repo | Nowy URL |
|---|---|
| `blog/jak-skutecznie-odzyskac-dlug-bez-sadu.html` | `/blog/jak-skutecznie-odzyskac-dlug-bez-sadu` |
| `blog/windykacja-zagraniczna-co-warto-wiedziec.html` | `/blog/windykacja-zagraniczna-co-warto-wiedziec` |
| `blog/kiedy-skup-wierzytelnosci-jest-oplacalny.html` | `/blog/kiedy-skup-wierzytelnosci-jest-oplacalny` |
| `blog/pieczec-prewencyjna-jak-dziala.html` | `/blog/pieczec-prewencyjna-jak-dziala` |
| `blog/wywiad-gospodarczy-przed-umowa.html` | `/blog/wywiad-gospodarczy-przed-umowa` |
| `blog/5-bledow-w-wezwaniach-do-zaplaty.html` | `/blog/5-bledow-w-wezwaniach-do-zaplaty` |
| `blog/jak-sprawdzic-wyplacalnosc-kontrahenta.html` | `/blog/jak-sprawdzic-wyplacalnosc-kontrahenta` |
| `blog/monitoring-naleznosci-w-praktyce.html` | `/blog/monitoring-naleznosci-w-praktyce` |

---

## Co po Twojej stronie (osoba przepinająca)

1. **Konfiguracja serwera** dla clean URLs:
   - **Apache (`.htaccess`)** — `RewriteRule ^windykacja-sadowa/?$ "Hadynski - Usluga Windykacja Sadowa.html" [L]` × każda strona
   - **Nginx** — `rewrite ^/windykacja-sadowa/?$ /Hadynski%20-%20Usluga%20Windykacja%20Sadowa.html last;`
   - **Cloudflare Pages / Vercel** — plik `_redirects` lub `vercel.json`

   Łatwiejsze rozwiązanie: **zmiana nazw plików** w repo na slug-i (np. `windykacja-sadowa.html`) — wtedy konfig serwera tylko obcina `.html` ze ścieżki. Mogę zrobić ten patch w repo (przemianowanie + update wszystkich wewnętrznych linków), jeśli to wygodniejsze. Wystarczy odezwać się do Bartosza.

2. **301 redirecty** dla każdego starego URL → nowy. Lista w tabelach powyżej. Pamiętaj o wersji z `%20` (URL-encoded spacja) — Google ma to zaindeksowane.

3. **Aktualizacja `sitemap.xml` i `robots.txt`** — zmiana domeny `https://hadynski.github.io/hadynski-strona/` → `https://hadynski.pl/` i nowe URL-e. Mogę wygenerować nowe pliki, daj znać które URL-e finalnie ustalamy.

4. **`<link rel="canonical">`** w nagłówku każdej strony obecnie wskazuje już na `https://hadynski.pl/...` — sprawdź czy jest spójne po deployu.

5. **HTTPS + HSTS** na całej domenie.

6. **Search Console**:
   - Dodać `hadynski.pl` jako property (jeśli nie ma)
   - Wgrać nowy sitemap.xml
   - Zgłosić change of address (jeśli wcześniej w SC był github.io)

7. **Giełda wierzytelności** — Filip Kosel (Soflex) konfiguruje `gielda.hadynski.pl` po swojej stronie. Potrzebny rekord DNS:
   - `CNAME gielda → [serwer Soflexa, do ustalenia z Filipem]` lub
   - `A gielda → [IP od Filipa]`
   - Plus SSL (Let's Encrypt lub po stronie Soflexa)

---

## Ważne — co NIE wymaga zmiany

- ✅ Cała treść stron, schemat JSON-LD, OG, Twitter cards — gotowe
- ✅ Formularz leadowy (Google Apps Script endpoint) — działa niezależnie od domeny
- ✅ Favicon, theme-color, mobile drawer
- ✅ Lighthouse CI, walidacja HTML w GitHub Actions
- ✅ Schema.org → już ma poprawne `mainEntityOfPage` z `hadynski.pl`

---

## Lista plików DO IGNOROWANIA przy deployu

Te pliki są w repo ale **nie powinny iść na produkcję**:

```
_backup_pre_globe.html
Hadynski v2 (standalone).html
Hadynski - Usluga v1 (data-driven).html
Mobile podglad.html
Hadynski-print.html
Hadynski - Blog Post.html  (template, nie content)
podglad-klatek.html
wybor-posterow.html
```

Już są w `robots.txt` jako `Disallow`. Jeśli używasz Cloudflare Pages / Vercel — dodaj je do `.cloudflareignore` / build excludes.

---

## Kontakt

- **Bartosz Hadyński** — właściciel, treść, decyzje biznesowe — [telefon, email]
- **Filip Kosel (Soflex)** — giełda wierzytelności, konfiguracja gielda.hadynski.pl — [kontakt Slack]
- Pytania o kod / strukturę repo — przez Issues w GitHubie
