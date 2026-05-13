---
name: frontend-impeccable
description: Wytyczne projektowania frontendu w stylu Impeccable (Paul Bakaus) — animacje, motion design, responsive, mobile-first, typografia, kolory, anti-AI-slop patterns. Używaj zawsze gdy Mikołaj prosi o dodanie animacji, motion, micro-interactions, hover state, scroll animation, page load animation, modal animation, dopracowanie responsive/mobile UI, audyt design, krytykę layoutu, lepszą typografię, kolory, polish UI, lub gdy buduje frontend (HTML/CSS/JS/React/Vue/NextJS) i chce uniknąć generic AI aesthetics. Triggery: animacja, animuj, dodaj animację, motion, easing, scroll-triggered, hover, mobile UI, responsive, breakpointy, audyt design, krytyka UI, polish, dopracuj, popraw layout, lepsza typografia, dobry font, kolory, OKLCH, contrast, accessibility, mikrointerakcja, page load, fade-in, staggered reveal, button hover, modal slide-in, AI slop, generic design, no Inter, no purple gradients, editorial style. Domena: frontend (HTML/CSS/JS, React, Vue, NextJS, Tailwind). Nie używaj dla: backend, API, db, devops, copywriting bez kontekstu UI, SEO audit (od tego jest searchfit-seo).
---

# Skill: frontend-impeccable — anti-AI-slop frontend design

Bazuje na **Impeccable** (Paul Bakaus, GitHub: pbakaus/impeccable, 19k gwiazdek) i rozszerzeniu Anthropic frontend-design. Cel: tworzyć strony i komponenty z **wyraźnym charakterem**, bez generic AI lookalike.

---

## Krytyczny test "AI slop"

**Przed wysłaniem kodu zadaj pytanie:** „Czy pokazując ten interfejs komuś z napisem 'AI to zrobiło', uwierzyliby od razu?" Jeśli TAK — to jest problem. Distinctive interface ma wywoływać pytanie „jak to zrobiono?" a nie „które AI to zrobiło?".

**3 najczęstsze AI design tells (banowane bez wyjątków):**

### BAN 1: Side-stripe borders (border-left/right > 1px jako akcent)
- Zabronione: `border-left: 3px solid red`, `border-left: 4px solid var(--accent)`, `border-left: 5px solid oklch(...)` na cards/list items/callouts/alerts
- Dlaczego: najbardziej overużywany „design touch" w admin/dashboard/medical UI od 2024
- Zamiast tego: pełen border, tinted background, leading number/icon, lub brak indykatora

### BAN 2: Gradient text
- Zabronione: `background-clip: text` + gradient background (linear/radial/conic)
- Dlaczego: dekoracyjne bez znaczenia, top-3 AI tell
- Zamiast tego: solid color. Jak chcesz emphasis — waga lub rozmiar fontu

### BAN 3: Generic AI palette
- Zabronione: cyan-on-dark, purple-to-blue gradients, neon accents na dark
- Zabronione: pure `#000` lub `#fff` (always tinted neutrals)
- Zabronione: gray text on colored backgrounds (washed out)

---

## Design Context — projekt Hadyński Inkaso

Zanim zaaplikujesz cokolwiek, miej w głowie kontekst projektu:

- **Aesthetic direction:** **editorial / magazine / Forbes-luxury**. NIE: startup-techy, NIE: corporate, NIE: lawyer-blue-and-gold. TAK: warm off-white background, deep ink black text, brand red accent, big serif display font, lots of whitespace, asymmetric layouts.
- **Brand voice:** spokojny, kompetentny, oparty na liczbach (10 lat, 42 000+ spraw, 78%). Nie agresywny, nie naciągany.
- **Target:** B2B (firmy szukające windykatora) + B2C (osoby prywatne z fakturą). 50% mobile (z reklam), 50% desktop.
- **Fonty już używane:** Fraunces (display), Inter Tight (sans), Instrument Serif (italic cytaty), JetBrains Mono (eyebrows). **Ich nie zmieniaj** — są spójne.

---

## Typography

### Reguły zawsze stosowane
- **Modular type scale z fluid sizing (clamp)** dla headingów na marketing/content pages. Fixed `rem` dla app UI.
- **Mniej rozmiarów, większy kontrast.** 5-stopniowa skala z ratio ≥1.25 między stopniami > 8 rozmiarów po 1.1×
- **Line-height inversely scales z line-length.** Wąskie kolumny → tighter leading. Wide → more. Light text on dark bg → DODAJ 0.05–0.1 do line-height.
- **Cap line-length ~65–75ch** dla body. Wider = fatiguing.

### Anti-patterns
- Inter, Roboto, Arial, Open Sans, system defaults — banned
- Plus Jakarta Sans, DM Sans, Space Grotesk, Outfit, Instrument Sans, IBM Plex, Cormorant, Crimson, Newsreader, Lora, Playfair Display — wszystkie reflex defaults, banned
- Monospace jako lazy „technical/developer" shorthand
- Wielkie ikony z zaokrąglonymi rogami nad każdym headingiem
- Jeden font family na całą stronę (zawsze para display + body)
- Flat hierarchy (rozmiary za blisko siebie)
- Długie body w UPPERCASE (reserwed dla labels)

### Hadyński: zostajemy z Fraunces + Inter Tight + Instrument Serif — dobrze dopasowane, NIE zmieniaj.

---

## Color

### Zasady
- **OKLCH, nie HSL.** OKLCH jest perceptually uniform — equal lightness steps wyglądają equal. Przy ekstremach lightness REDUKUJ chroma.
- **Tinted neutrals.** Nawet chroma 0.005–0.01 toward brand hue = spójność. Dla Hadyńskiego — neutrals tinted toward warm (ink #17130f, line #e8e2d9 są lekko warm).
- **60-30-10 by weight** (nie pixel count). 60% neutral, 30% secondary, 10% accent (czerwień). Accents działają BO są rzadkie.
- **Dark vs light** = derived from context. Hadyński = LIGHT (warm off-white) bo: B2B trust, daytime browsing, editorial feel, Forbes vibe. Nie zmieniaj.

### Anti-patterns
- Gray text on colored bg
- Pure #000 / #fff
- Purple-to-blue gradients
- Cyan-on-dark, neon glows na dark
- Default dark mode „bo cool"
- Default light mode „bo safe"

---

## Layout & Space

### Zasady
- **4pt spacing scale z semantic tokens** (`--space-sm`, `--space-md`), nie pixel-named (`--spacing-8`). Skala: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **`gap` zamiast margins** dla sibling spacing.
- **Vary spacing dla hierarchy.** Heading z extra space above = more important.
- **`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`** = breakpoint-free responsive grid.
- **Container queries dla komponentów,** viewport queries dla page layout.

### Anti-patterns
- Wszystko w cards
- Cards w cards (visual noise)
- Identical card grids (icon + heading + text × infinity)
- Hero metric layout template (big number, small label, gradient accent — banned)
- Wszystko wycentrowane (left-aligned + asymmetric = more designed)
- Same spacing wszędzie
- Body wider than 80ch

---

## Motion (kluczowe dla naszego projektu)

### Zasady — KIEDY animować
- **High-impact moments:** jeden well-orchestrated page load z staggered reveals > scattered micro-interactions
- **State changes:** entrances, exits, feedback
- **Reveal sophistication** through interaction (basic first, advanced on demand)

### Timing (w ms)
- **100–200ms** — hover states, button feedback (instant)
- **200–400ms** — page load reveals, modal open/close (snappy)
- **400–600ms** — staggered hero reveals (cinematic)
- **600–800ms** — scroll-triggered section fade-ins (cinematic)
- Nigdy > 1000ms (wygląda na lag)

### Easing — TYLKO exponential
- OK: `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out-expo (najlepsza dla entrances)
- OK: `cubic-bezier(0.7, 0, 0.84, 0)` — ease-in-quart (dla exits)
- OK: `cubic-bezier(0.4, 0, 0.2, 1)` — Material standard (uniwersalny)
- BAN: `ease-in-out` (boring default)
- BAN: Bounce / elastic / cubic-bezier z overshoot — **DATED, FORBIDDEN**. Real objects decelerate smoothly.

### Co animować, czego NIE
- OK: `transform` (translate, scale, rotate) — GPU-accelerated
- OK: `opacity` — GPU-accelerated
- BAN: `width`, `height`, `padding`, `margin` — layout reflow, jank
- **Height animation:** używaj `grid-template-rows: 0fr → 1fr` z `overflow: hidden`, NIE `height: 0 → auto`

### Reduced motion
ZAWSZE:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Wzorce dla Hadyński (konkretne)
- **Hero text staggered reveal:** każdy element (eyebrow → headline → lede → CTA) z `animation-delay: 0, 100, 200, 300ms`, ease-out-expo, translateY(20px) → 0 + opacity 0 → 1
- **Stats counter:** rosnące cyfry przy wejściu w viewport (IntersectionObserver), 1200ms ease-out
- **Scroll-triggered section fade-in:** każda sekcja `opacity: 0; transform: translateY(40px)` → `is-visible` triggered przez IntersectionObserver
- **CTA hover:** `transform: translateY(-1px)` + cień, 200ms ease-out
- **Modal:** slide-up z `translateY(100%)` na mobile, scale 0.95 → 1 na desktop, 300ms
- **Mobile drawer:** slide-in z right (translateX(100%) → 0), 280ms ease-out
- **Cookie banner:** slide-up z bottom, 400ms ease-out
- **Dropdown nav:** fade + translateY(-4px) → 0, 180ms (snappy, bo to nie hero)

---

## Interaction

### Zasady
- **Optimistic UI:** update immediately, sync później
- **Progressive disclosure:** simple first, advanced behind expandable
- **Empty states teach the interface,** nie tylko „nothing here"
- **Every button intentional.** Hierarchia: primary > secondary > ghost > text link. Nie wszystko primary.

### Anti-patterns
- Repeat info (redundant headers, intros restating heading)
- Every button primary
- Loading spinners gdzie skeleton/optimistic UI lepsze

### Forms (Hadyński leady)
- **Touch targets ≥44px** na mobile
- **Autocomplete attributes:** `tel`, `email`, `name` (przeglądarka podpowiada)
- **Inline validation:** blur → check → red border + error message
- **Honeypot field:** `name="website"` ukryte, boty wypełniają, ludzie nie
- **Success state:** clear next step („Oddzwonimy w 24h"), nie generic „Thank you"

---

## Responsive — kluczowe dla Hadyński (50% mobile)

### Zasady
- **Mobile-first.** Base styles = mobile, modyfikatory dla wyżej (`sm:`, `md:`, `lg:`).
- **Container queries (@container) dla komponentów.** Card w sidebar powinien adaptować do sidebar width, nie viewport.
- **Adapt, not amputate.** Mobile UI ≠ shrunken desktop. Inna struktura informacji.
- **Touch targets ≥44px**, gap ≥16px między elementami klikalnymi
- **Fluid typography:** `clamp(min, prefer-vw, max)` dla headingów

### Breakpointy Tailwind (które używamy)
- base = mobile (≤639px)
- `sm:` ≥640px (tablet portrait)
- `md:` ≥768px (tablet landscape)
- `lg:` ≥1024px (desktop)
- `xl:` ≥1280px
- `2xl:` ≥1536px

### Wzorce dla Hadyński
- **Header:** mobile = logo + hamburger; desktop (`lg:`) = logo + nav + CTA
- **Hero:** mobile = stacked (text → portret pod spodem); desktop = grid 1.1fr 1fr
- **Footer:** mobile = accordion zwijane kolumny; desktop = grid 4 columns
- **CTA:** mobile = full-width stacked buttons; desktop = inline gap 12px
- **Modal:** mobile = bottom sheet full-width; desktop = centered max-w-md
- **FAQ:** mobile = single column; desktop = 2-col grid z border-right separator
- **Sticky mobile CTA bar:** widoczny po scroll 500px, ukryty na desktop (`lg:hidden`)

### Anti-patterns
- Hide critical functionality na mobile (utnij decoration, nie content)
- Tiny touch targets (<44px)
- Tabs które wymagają horizontal scroll bez visual hint
- Modal which fills only 80% mobile screen (clunky — full bottom sheet better)
- `display: none` na mobile dla ważnego CTA (Apple etc. używają sticky bottom bar zamiast)

---

## UX Writing

### Zasady
- **Every word earns its place.** Wycinaj redundancję.
- **No repetition** info które user widzi (heading + duplicate intro = no)
- **Buttons: action verbs.** „Zamów rozmowę" nie „Dalej". „Pobierz raport" nie „Click here".
- **Errors: specific + actionable.** „Wpisz numer telefonu (min. 9 cyfr)" nie „Invalid input".
- **Empty states: teach.** „Twoja pierwsza sprawa pojawi się tutaj. [Dodaj sprawę]" nie „Nothing yet".

### Hadyński specific
- **CTA wording:**
  - OK: „Zamów bezpłatną rozmowę"
  - OK: „Sprawdź szanse odzysku"
  - OK: „Pobierz analizę sprawy"
  - BAN: „Skontaktuj się" (generic)
  - BAN: „Dowiedz się więcej" (no value prop)
  - BAN: „Click here" (banned wszędzie)

---

## Praktyczne wzorce kodowe (do natychmiastowego użycia)

### Page load staggered reveal
```css
.hero-element {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-element:nth-child(1) { animation-delay: 0ms; }
.hero-element:nth-child(2) { animation-delay: 100ms; }
.hero-element:nth-child(3) { animation-delay: 200ms; }
.hero-element:nth-child(4) { animation-delay: 300ms; }
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-element { animation: none; opacity: 1; transform: none; }
}
```

### Scroll-triggered section fade-in (IntersectionObserver — React/NextJS)
```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

### CTA hover (subtle, no overshoot)
```css
.btn-primary {
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -4px rgba(185, 28, 28, 0.4);
}
.btn-primary:active {
  transform: translateY(0);
}
```

### Height animation bez animowania `height`
```css
.faq-item .faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-item.is-open .faq-answer {
  grid-template-rows: 1fr;
}
.faq-answer > * {
  overflow: hidden;
}
```

### Stats counter (rosnący licznik przy entry into viewport)
```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export function CounterStat({ end, suffix = '', duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const animate = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4); // ease-out-quart
          setN(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{n.toLocaleString('pl-PL')}{suffix}</span>;
}
```

---

## Workflow użycia tego skilla

Mikołaj mówi:
- **„dodaj animację"** / **„zrób motion"** / **„animuj hero"** → użyj sekcji **Motion** + konkretne wzorce kodowe
- **„popraw mobile"** / **„responsive"** / **„adapt"** → użyj sekcji **Responsive** + breakpointy
- **„audyt design"** / **„krytyka"** / **„polish"** → przejedź wszystkie sekcje, znajdź anti-patterns + zaproponuj fixy
- **„lepsza typografia"** → sekcja **Typography**
- **„kolory"** → sekcja **Color**
- **„UX copy"** / **„button labels"** → sekcja **UX Writing**

Po każdej akcji **wykonaj AI slop test**: pokazałbym to komuś z „AI made this" — uwierzyliby? Jeśli tak, zmień coś.

---

## Atrybucja

Treść oparta na [Impeccable](https://github.com/pbakaus/impeccable) (Paul Bakaus, Apache 2.0) + [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic). Adaptacja na polski, dopasowana do projektu Hadyński Inkaso (editorial / magazine direction, mobile-first, NextJS).
