# Lead capture — instrukcja deploy (5 min)

Każdy lead z formularza (pop up i strona kontaktowa) trafia jako nowy wiersz do Twojego arkusza Google Sheets. Twoje dane, Twój arkusz, zero pośredników, zero kosztów.

## Krok 1 — Stwórz arkusz

1. Wejdź na [sheets.new](https://sheets.new) — stworzy się nowy arkusz Google Sheets
2. Nazwij go np. **Hadyński — Leady ze strony**
3. Pierwszą zakładkę zostaw pustą (skrypt sam dorobi nagłówki przy pierwszym leadzie)

## Krok 2 — Wklej Apps Script

1. W arkuszu: **Extensions → Apps Script** (Rozszerzenia → Apps Script)
2. Otworzy się nowa karta z edytorem kodu
3. Usuń cały kod, który tam jest (zwykle puste `function myFunction()`)
4. Otwórz plik `apps-script.gs` z folderu `_leads-setup` (na Twoim dysku — obok tej instrukcji)
5. Skopiuj cały zawartość i wklej do edytora Apps Script
6. **Save** (ikona dyskietki lub Ctrl+S) — nadaj nazwę projektu np. „Hadyński Leady"

## Krok 3 — Deploy jako Web App

1. W Apps Script: **Deploy → New deployment**
2. Kliknij ikonkę koła zębatego obok „Select type" → wybierz **Web app**
3. Wypełnij:
   - **Description:** `Hadyński Leady v1`
   - **Execute as:** `Me (twój.email@gmail.com)`
   - **Who has access:** `Anyone` ← WAŻNE (inaczej strona nie będzie mogła wysyłać)
4. **Deploy** → Google poprosi o autoryzację → **Authorize access** → wybierz swoje konto → **Advanced** → **Go to ... (unsafe)** → **Allow**
   (Ostrzeżenie „unsafe" jest normalne — to Twój własny kod, nie publiczna aplikacja)
5. Po deploy zobaczysz **Web app URL** — kończy się na `/exec`
6. **Skopiuj ten URL**

## Krok 4 — Wklej URL do strony

1. Otwórz plik `leads-config.js` w folderze HIngo (obok plików HTML)
2. Wklej URL między apostrofy:
   ```js
   window.HADYNSKI_LEADS_ENDPOINT = 'https://script.google.com/macros/s/.../exec';
   ```
3. Zapisz plik

To wszystko. Od tej chwili każde wypełnienie formularza na stronie wpada do arkusza.

## Test

1. Otwórz stronę lokalnie (np. Hadynski.html w przeglądarce)
2. Wypełnij pop up — telefon, kwota, czy komornik — kliknij wyślij
3. Otwórz arkusz Google Sheets → powinien pojawić się nowy wiersz w zakładce „Leady" z Twoim testowym leadem

Jeśli wiersza nie ma:
- Sprawdź w konsoli przeglądarki (F12) czy są błędy z prefiksem `[lead]`
- Najczęstsza przyczyna: zła kopia URL (np. brak `/exec` na końcu) albo Apps Script nie został zdeployowany z `Anyone` w Who has access
- Mogę pomóc zdiagnozować — wklej mi błąd z konsoli

## Co jest w arkuszu

Każdy lead = 1 wiersz:

| Kolumna | Co tam jest |
|---|---|
| **Data i godzina** | `2026-05-12 14:32:18` (Europe/Warsaw) |
| **Typ formularza** | `pop up` lub `strona kontaktowa` |
| **Skąd (URL)** | pełny URL podstrony |
| **Tytuł strony** | tytuł strony + sekcja w której kliknięto (np. „Skup — 05 CTA dolne") |
| **Imię i nazwisko** | tylko ze strony kontaktowej |
| **Telefon** | z każdego formularza |
| **Email** | tylko ze strony kontaktowej |
| **Kwota** | tylko z pop upa |
| **Komornik** | tylko z pop upa (tak/nie) |
| **Opis sprawy** | tylko ze strony kontaktowej |
| **Referrer** | skąd przyszedł użytkownik (Google, Facebook, bezpośrednio) |
| **User agent** | przeglądarka |

## Zmiana / redeploy

Jeśli będziesz chciał coś zmienić w Apps Script (np. dodać kolumnę):
- Edytuj kod
- **Deploy → Manage deployments** → ikonka ołówka przy deployu → **New version** → **Deploy**
- URL pozostaje TEN SAM — nie musisz nic zmieniać w `leads-config.js`

Jeśli robisz **New deployment** zamiast nowej wersji — dostajesz NOWY URL i musisz go podmienić w `leads-config.js`.

## Bezpieczeństwo

- **Honeypot** — ukryte pole `website` w formularzu. Boty wypełniają, ludzie nie. Wszystko z honeypotem skrypt ignoruje.
- **CORS** — strona wysyła z trybem `no-cors`, więc Apps Script przyjmuje POST bez problemu.
- **Brak haseł / kluczy w kodzie** — URL Apps Script jest pseudo-tajny (długi token), ale każdy kto go dostanie może wysyłać dane. Jak ktoś zacznie spamować, robisz redeploy z nową wersją → stary URL przestaje działać (lub dodajemy weryfikację po stronie skryptu).
