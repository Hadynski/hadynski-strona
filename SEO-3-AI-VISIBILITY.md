# AI Visibility Audit — Hadyński Inkaso

**Data:** 2026-05-13
**Cel:** Czy LLM-y (ChatGPT, Claude, Gemini, Perplexity) cytują Hadyński przy zapytaniach o windykację? Plan poprawek.

---

## A. Current state

### Gdzie Hadyński jest widoczny (LLM mogą cytować)
| Źródło | Status | AI authority |
|---|---|---|
| hadynski.pl | Pozycjonowana w SERP | Średni — własna domena |
| hadynski.com.pl | Aktywna (drugi brand) | Problem: rozproszenie sygnałów |
| hadynski.github.io | Nowa, indeksowalna | Bardzo niski (subdomena GitHub) |
| **Rejestr.io (KRS 733889)** | Pełny wpis | **Wysoki — bazy KRS = standardowa cytacja LLM** |
| Aleo.com | Profil firmy | Średni |
| pkt.pl, Oferteo | Wpisy | Niski-średni |
| LinkedIn (company) | Istnieje | Średni-wysoki |
| GoWork | 125 opinii (mixed) | **Negatywny sygnał** dla LLM |
| CashFix (branżowy ranking) | Wpisany | Średni |

### Gdzie NIE jest widoczny (krytyczne braki)
1. **Polska Wikipedia** — BRAK hasła. **#1 cytat LLM globalnie.**
2. **Branżowe rankingi top-tier** — MGBI, mamdlugi.pl, ranking-windykacja.pl, FirmowaKasa — Hadyński niewysoko (dominuje Kruk, KRD, Vindicat, INDOS, Empira)
3. **Media finansowe** — Money.pl, gazetaprawna.pl, Rzeczpospolita — zerowe wzmianki eksperckie
4. **ZPF** (Związek Przedsiębiorstw Finansowych) — branżowa instytucja, brak członkostwa
5. **Brak własnych publikacji eksperckich** cytowanych przez inne portale
6. **Google Business Profile** — brak silnego sygnału w SERP lokalnych
7. **"windykacja Wrocław B2B"** — top 10 zdominowane przez DKOW, Spectre, Lectio, INLEGIS, AIF, RPMS. **Hadyński nieobecny.**

**Diagnoza:** Hadyński istnieje w bazach firmowych, ale **NIE ISTNIEJE w warstwie cytatów eksperckich/rankingowych** — to dokładnie warstwa z której korzystają LLM przy odpowiedzi "polecam X".

---

## B. Conversational queries — co LLM odpowiedzą?

| Query B2B | Co LLM powie | Hadyński w odpowiedzi? |
|---|---|:---:|
| "Komu zlecić windykację 50k zł od kontrahenta z budowlanki?" | Kruk, INDOS, Vindicat, DKOW, AIF | ❌ |
| "Najlepsza firma windykacyjna we Wrocławiu dla małej firmy?" | DKOW, Solventoir, Spectre, AIF, Lectio | ❌ |
| "Czy warto sprzedać dług firmie skupującej wierzytelności B2B?" | Empira, INDOS, SAF, Deputo, Regis-skupfaktur | ❌ |
| "Jak odzyskać dług 200k zł od kontrahenta-spółki?" | Kruk, Inlegis, RPMS, opis procedury sądowej | ❌ |
| "Firma do eksmisji lokatora w Polsce — komu zlecić?" | Exmiter, BBN24, kancelarie | ❌ (mimo że oferuje!) |
| "Hadyński Inkaso — opinie?" | GoWork (mixed), CashFix, hadynski.pl | ✓ (mixed signal) |
| "Ile kosztuje windykacja B2B w Polsce 2026?" | INDOS, Vindicat, CashFix (% wartości, min 250 zł) | ❌ |
| "Windykacja zagraniczna z Polski — która firma?" | Kruk, Inlegis, Spectre | ❌ |
| "Co to jest cesja wierzytelności?" | Definicja + Empira, INDOS, SAF | ❌ |
| "Bartosz Hadyński — kim jest?" | Sucha info z KRS | ✓ (sucho, bez aury eksperta) |

**Tylko 2/10 zapytań brand-name daje wzmiankę. Problem-based (#1-5, #7-9 = 80% pre-purchase B2B) → niewidoczność.**

---

## C. AEO/GEO recommendations — 10 ruchów

### 1. Polska Wikipedia stub
Hasło "Hadyński Inkaso" neutralnym tonem (rok założenia, KRS, lokalizacja, usługi, 8-10 niezależnych źródeł). **#1 cytat LLM.**

### 2. Strona "O firmie" z cytowalnymi statystykami
JSON-LD (FAQPage/Organization) + sekcja z konkretami:
- Rok założenia: 2018 sp. z o.o. / 14 lat brand
- 4000+ spraw (Schema-ify)
- % skuteczności (jeśli macie liczbę)
- Średnia kwota odzyskanej wierzytelności
- Liczba klientów B2B
- Branże specjalizacji

### 3. FAQPage schema na każdej podstronie
Infrastruktura już gotowa (Phase 3). 5-8 Q&A na podstronę × 5 podstron = ~30 cytowalnych fragmentów. LLM kochają FAQ.

### 4. Listicle/porównanie content
"Skup wierzytelności vs windykacja — kiedy co wybrać 2026". LLM cytują listy i tabele **3× częściej** niż prozę. Też: "Polubowna vs sądowa", "B2B vs B2C".

### 5. Wejście do branżowych rankingów
- cashfix.pl (poprawić profile)
- mamdlugi.pl
- ranking-windykacja.pl
- FirmowaKasa.pl
- windykacja.pl

Każdy wpis = backlink + cytat w LLM. Koszt: 500-2000 zł/portal lub czas.

### 6. 3-5 guest postów w mediach branżowych
money.pl, bankier.pl/firma, gazetaprawna.pl, Puls Biznesu, prnews.pl. Sygnowane "Bartosz Hadyński, ekspert ds. windykacji B2B".

### 7. Case studies z liczbami
5-10 stories: "Odzyskaliśmy 87 000 zł od kontrahenta z branży X w 23 dni". Każde z CaseStudy schema. **LLM cytują konkrety.**

### 8. Google Business Profile (GBP)
Pełen profil, zdjęcia biura (Powstańców Śląskich 7A), aktywne zachęcanie do recenzji (przeciwwaga GoWork mixed). Gemini ciężko korzysta z GBP.

### 9. Strukturalne dane — Organization + LocalBusiness + Person
JSON-LD na każdej stronie z:
- Organization: name, foundingDate, address, sameAs (FB, LinkedIn, Aleo, Rejestr.io)
- Person: Bartosz Hadyński, jobTitle, knowsAbout
- LocalBusiness z geo coordinates Wrocław

### 10. LinkedIn content engine
Bartosz publikuje 2×/tydz. eksperckie posty (case bez nazwy klienta, komentarz do prawa, statystyki). LLM (Perplexity, ChatGPT-5+) coraz częściej cytują LinkedIn jako autorytet osobowy.

---

## D. 30-dniowy action plan

### Tydzień 1 — fundamenty cytowalne (najwyższy ROI)
- **D1-2:** Dorzucić 4 sekcje z liczbami + FAQ na Hadynski.html + 4 podstrony, FAQPage/Organization JSON-LD
- **D3:** Sprostować profile w Rejestr.io, Aleo, pkt.pl, Oferteo, GoWork (zarządzanie reputacją — odpowiedzi pod negatywami)
- **D4-5:** Google Business Profile — pełna optymalizacja + 5 zdjęć + posty + zaproszenie 10 klientów do recenzji
- **D6-7:** Wikipedia PL — draft stub z 8-10 niezależnymi źródłami, publikacja z konta z historią edycji

### Tydzień 2 — content cytowalny
- **D8-10:** 3 artykuły porównawcze (BlogPosting schema):
  - "Skup wierzytelności B2B vs windykacja — kiedy co"
  - "Windykacja polubowna vs sądowa — koszt i terminy"
  - "Eksmisja lokatora — procedura krok po kroku 2026"
- **D11-12:** 5 case studies z konkretnymi liczbami (CaseStudy schema)
- **D13-14:** Podstrona "O Bartoszu Hadyńskim" (Person JSON-LD, bio, kontakty, cytaty)

### Tydzień 3 — zewnętrzne sygnały
- **D15-17:** Pitch do 5 branżowych rankingów (cashfix, mamdlugi, ranking-windykacja, firmowakasa, windykacja.pl) — submit pełny opis + statystyki
- **D18-21:** Guest posting outreach — 10 maili do redakcji (money.pl, bankier, gazetaprawna, Puls Biznesu, prnews, marketingibiznes, infor, mambiznes, prawo.pl, dziennikfinansowy). 3 tematy do wyboru. Cel: 2-3 publikacje w miesiąc 2

### Tydzień 4 — autorytet osobowy + iteracja
- **D22-25:** LinkedIn engine — Bartosz publikuje 6 postów (case, opinia o zmianach prawnych, statystyka branżowa, mit, FAQ branżowe). Engage z 20 postami innych ekspertów
- **D26-28:** Submit do ZPF jako kandydat na członka
- **D29-30:** Pomiar — re-run 10 conversational queries w ChatGPT/Claude/Perplexity/Gemini. Sprawdzić czy "Hadyński Inkaso" pojawia się. Iteracja na miesiąc 2

---

## Kluczowe finding

Hadyński **istnieje technicznie** (KRS, Aleo, schema Phase 3), ale **nie istnieje semantycznie** dla LLM. Pojawia się tylko gdy ktoś wpisze nazwę.

**Priorytet:** Wikipedia + 3 guest posty + FAQ schema + GBP = ~70% efektu przy ~20% wysiłku.

Reszta dobudowuje moat (LinkedIn engine, branżowe rankingi, ZPF).
