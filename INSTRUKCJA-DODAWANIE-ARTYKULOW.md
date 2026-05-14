# Instrukcja — dodawanie artykułów na blog (workflow z Cowork)

## Co dostajesz po każdym artykule

Każdy artykuł publikowany na blogu Hadyński powinien być:
- Pełnoprawnym plikiem HTML w folderze `~/Downloads/HIngo/blog/`
- Wpisany do `sitemap.xml`
- Wpisany do `Hadynski - Blog.html` (lista artykułów)
- Posiadać Article schema (JSON-LD) dla Google
- Trzymać się jednej z **6 kategorii**: Windykacja sądowa, Windykacja terenowa, Skup wierzytelności, Eksmisje, Obsługa prawna, Wywiad gospodarczy

## Workflow z Cowork (5 kroków)

### 1. Sformułuj pytanie do Cowork

Przykład:
> "Napisz artykuł na blog Hadyński Inkaso o temacie: **'Jak skutecznie odzyskać dług bez sądu'**. Kategoria: Windykacja polubowna. Słowa kluczowe: windykacja polubowna, odzyskanie należności, wezwanie do zapłaty. Długość: 1500-2000 słów. Struktura: intro (problem), 5-7 sekcji praktycznych, FAQ (3-5 pytań), CTA na konsultację. Styl: ekspercki ale czytelny, polskie B2B, bez AI-tików."

### 2. Cowork generuje artykuł

Skill `searchfit-seo:create-content` napisze:
- Title 50-60 chars z keywordem
- Meta description 150-160 chars
- H1 + H2/H3 hierarchy
- Body 1500-2000 słów
- FAQ section (Schema FAQPage)
- Internal links (sugerowane podstrony usług)

### 3. Cowork dodaje artykuł do strony

Po wygenerowaniu treści, kolejnym promptem:
> "Dodaj ten artykuł do strony Hadyński. Slug: 'jak-odzyskac-dlug-bez-sadu'. Update sitemap.xml + Blog.html."

Cowork wtedy:
- Stworzy plik `blog/jak-odzyskac-dlug-bez-sadu.html` (kopia template'a)
- Wstawi treść w odpowiednie sloty
- Dopisze wpis do `sitemap.xml` (z dzisiejszą datą)
- Doda card w `Hadynski - Blog.html`
- Doda Article schema (JSON-LD) + FAQPage schema
- Doda Open Graph + canonical URL

### 4. Sprawdź lokalnie

Otwórz `localhost:8000/blog/jak-odzyskac-dlug-bez-sadu.html` — przejrzyj.

### 5. Push przez GitHub Desktop

Commit message: `Blog: [tytuł artykułu]`

Po 5-10 min Google Search Console wykryje update sitemap (jeśli zgłoszony) → szybciej zaindeksuje.

## Kategorie blog (6 silosów)

| Kategoria | Linkuje do podstrony | Slug |
|---|---|---|
| Windykacja sądowa | `Hadynski - Usluga Windykacja Sadowa.html` | `windykacja-sadowa` |
| Windykacja terenowa | `Hadynski - Usluga Windykacja Terenowa.html` | `windykacja-terenowa` |
| Skup wierzytelności | `Hadynski - Usluga Skup Wierzytelnosci.html` | `skup-wierzytelnosci` |
| Eksmisje | `Hadynski - Usluga Eksmisje Lokatorow.html` | `eksmisje` |
| Obsługa prawna | `Hadynski - Usluga Obsluga Prawna.html` | `obsluga-prawna` |
| Wywiad gospodarczy | `Hadynski - Usluga Wywiad Gospodarczy.html` | `wywiad-gospodarczy` |

Każdy artykuł musi **linkować wewnętrznie** do swojej podstrony kategorii (anchor text z keywordem).

## Częstotliwość

Cel: **1 artykuł / tydzień** (changefreq: weekly w sitemap).

Optymalne tempo do SEO growth (~50 artykułów / rok = silny content cluster).

## Słowa kluczowe — focus

**Główne (high volume, high competition):**
- windykacja należności
- firma windykacyjna
- odzyskanie należności

**Niche (mid volume, lower competition — easier to rank):**
- skup wierzytelności B2B
- windykacja sądowa Wrocław
- eksmisja lokatorów krok po kroku
- windykacja międzynarodowa Niemcy
- pieczęć prewencyjna na fakturach

Każdy artykuł targetuje **1 main keyword + 2-3 long-tail variations**.

## Co Cowork robi automatycznie (przez `searchfit-seo:create-content`)

- ✅ Title + meta description optymalne długości
- ✅ Heading hierarchy (H1 → H2 → H3)
- ✅ Keyword density (~1-2%)
- ✅ Internal links do 2-3 podstron
- ✅ FAQ section z Schema FAQPage
- ✅ Reading time auto-calculated
- ✅ Article schema (JSON-LD) z autorem (Bartosz)
- ✅ Open Graph + Twitter Cards

## Co trzeba zrobić ręcznie (tylko 1x na początku)

- ☐ Zgłoś sitemap w Google Search Console → https://search.google.com/search-console
  - Property: `hadynski.github.io`
  - Sitemaps → wpisz: `https://hadynski.github.io/hadynski-strona/sitemap.xml`
  - Submit → 5-10 min do potwierdzenia
- ☐ (Opcjonalnie) Bing Webmaster Tools — to samo dla Bing

## Plik referencyjny

Wzorzec szablonu artykułu: `Hadynski - Blog Post.html` (już zawiera SEO_TAGS_v1, schemy, breadcrumb, FAQ). Cowork bierze go jako bazę przy każdym nowym wpisie.

## Jeśli coś idzie nie tak

Backup wszystkich plików HTML przed SEO update znajduje się w:
`~/Downloads/HIngo/_backup_pre_seo_20260513/`

Cofnij wszystko:
```bash
cp _backup_pre_seo_20260513/*.html .
```
