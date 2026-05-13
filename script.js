/* ============================================
   Hadyński — script
   ============================================ */

/* Tweaks defaults (editable via host) */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "v1"
}/*EDITMODE-END*/;

/* ---------- NAV scroll state ---------- */
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Hero variant switcher ---------- */
function setHeroVariant(v) {
  document.querySelectorAll('.hero-variant').forEach(s => {
    if (s.dataset.variant === v) s.removeAttribute('hidden');
    else s.setAttribute('hidden', '');
  });
  document.querySelectorAll('#hero-switcher button').forEach(b => {
    b.classList.toggle('active', b.dataset.variant === v);
  });
  // re-trigger reveals in the shown hero
  document.querySelectorAll(`[data-variant="${v}"] .reveal`).forEach(el => {
    el.classList.add('is-visible');
  });
}
setHeroVariant(TWEAK_DEFAULTS.heroVariant || 'v1');

document.querySelectorAll('#hero-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const v = btn.dataset.variant;
    setHeroVariant(v);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { heroVariant: v } }, '*');
  });
});

/* ---------- Edit-mode plumbing ---------- */
const switcher = document.getElementById('hero-switcher');
window.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.type === '__activate_edit_mode') switcher.classList.add('is-visible');
  if (d.type === '__deactivate_edit_mode') switcher.classList.remove('is-visible');
});
window.parent.postMessage({ type: '__edit_mode_available' }, '*');

/* ---------- Testimonials ---------- */
const testimonials = [
  { stars: 5, text: "Mieliśmy 180 tys. zł niezapłaconej faktury od generalnego wykonawcy. Inni powiedzieli, że sprawa na miesiące sądowe. Hadyński załatwił to w 3 tygodnie, bez sądu, bez stresu.", name: "Tomasz K.", role: "Właściciel firmy budowlanej, Wrocław", verified: true },
  { stars: 5, text: "Nie spodziewałem się, że dostanę z powrotem 150 tysięcy, które pożyczyłem na słowo koledze. Miałem tylko wiadomości z Messengera. Dla nich to wystarczyło — po 2 miesiącach miałem pieniądze na koncie.", name: "Marcin W.", role: "Przedsiębiorca prywatny", verified: true },
  { stars: 5, text: "Spedytor zalegał nam z 230 tys. zł przez 8 miesięcy. Próbowaliśmy sami — wezwania, monity — zero efektu. Po zgłoszeniu do Hadyński sprawa zamknięta w 27 dni. Pełna kwota.", name: "Paweł M.", role: "Prezes firmy transportowej, Wielkopolska", verified: true },
  { stars: 5, text: "Najcenniejsza była uczciwa analiza na starcie. Powiedzieli wprost, które faktury mają szansę, a którymi nie warto się zajmować. Żadnego naciągania, żadnych ukrytych opłat.", name: "Anna L.", role: "Dyrektor finansowy, hurtownia materiałów", verified: true },
  { stars: 5, text: "Byłem sceptyczny — wielokrotnie próbowałem sam odzyskać pieniądze od klienta. Bartosz i jego zespół zrobili w miesiąc to, czego ja nie zrobiłem w pół roku. Wracam z każdą kolejną sprawą.", name: "Krzysztof B.", role: "Właściciel firmy spedycyjnej", verified: true },
  { stars: 5, text: "Nie płacisz nic z góry, więc nie masz nic do stracenia. Odzyskali 95 tys., które uznałem już za stracone. Polecam każdemu, kto ma klienta-kontrahenta niepłacącego od dłuższego czasu.", name: "Robert S.", role: "Prezes zarządu, firma B2B", verified: true }
];

const star = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4L3.5 14.7l.9-5L.8 6.2l5-.7z"/></svg>`;
const checkIcon = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2 2 4-4"/></svg>`;

const testimonialsGrid = document.getElementById('testimonials-grid');
testimonialsGrid.innerHTML = testimonials.map(t => `
  <article class="testimonial">
    <div class="stars">${star.repeat(t.stars)}</div>
    <blockquote>„${t.text}"</blockquote>
    <div class="author">
      <span class="name">${t.name}</span>
      <span class="role">${t.role}</span>
    </div>
    ${t.verified ? `<span class="verified">${checkIcon} Opinia zweryfikowana — wystawiona z panelu klienta</span>` : ''}
  </article>
`).join('');

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Ile kosztuje windykacja?", a: "Zero opłat wstępnych. Prowizja tylko od odzyskanej kwoty (Success Fee). Co więcej — prowizję ostatecznie pokrywa dłużnik, bo masz prawo obciążyć go notą obciążeniową na koszty windykacji (art. 10 ustawy o transakcjach handlowych)." },
  { q: "Co jeśli nie odzyskacie pieniędzy?", a: "Nie płacisz nic. Model Success Fee oznacza, że ryzyko bierzemy my. Dlatego tak dokładnie analizujemy sprawy na wejściu — pracujemy tylko wtedy, gdy widzimy realne szanse odzysku." },
  { q: "Jak długo trwa odzyskanie?", a: "70% spraw zamykamy w pierwszym miesiącu. Reszta zależy od wypłacalności dłużnika, materiału dowodowego i wybranej strategii. W bezpłatnej analizie podamy Ci konkretny scenariusz czasowy dla Twojej sprawy." },
  { q: "Jak wygląda pierwszy kontakt?", a: "Zostawiasz numer lub zgłaszasz sprawę online przez panel Hingo. Oddzwaniamy tego samego dnia roboczego. Rozmowa jest bezpłatna i niezobowiązująca — przedstawiamy plan i wycenę; Ty decydujesz, czy ruszamy." },
  { q: "Jak podpisujemy umowę?", a: "Elektronicznie — podpis kwalifikowany lub ePUAP. Po podpisaniu startujemy tego samego dnia. Całość masz w panelu online: umowę, dokumenty, status sprawy, komunikację." },
  { q: "Czy mogę zlecić wiele spraw?", a: "Tak. Klienci portfolio mają dedykowany panel i opiekuna. Analizujemy wszystkie sprawy razem, priorytetyzujemy, dzielimy strategie. Dla większych portfeli oferujemy też skup wierzytelności hurtem." },
  { q: "Co z dłużnikami zagranicznymi?", a: "Prowadzimy windykację w całej UE — Niemcy, Holandia, Czechy, UK i inne. Sankcje wykonywane w kraju dłużnika, komunikacja w jego języku, znajomość lokalnego prawa windykacyjnego. Sieć partnerów lokalnych zapewnia skuteczność." },
  { q: "Co jeśli sprawa była już u komornika?", a: "Nie jesteśmy komornikami — jesteśmy firmą windykacyjną. Działamy inaczej i często skuteczniej: presja biznesowa, antyreklama, kontakt z otoczeniem dłużnika. Wiele spraw uznanych za przegrane z komornikiem zamykamy sukcesem." }
];

const faqList = document.getElementById('faq-list');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item" data-i="${i}">
    <button class="faq-q" aria-expanded="false">
      <span>${f.q}</span>
      <span class="plus" aria-hidden="true"></span>
    </button>
    <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
  </div>
`).join('');

faqList.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const open = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
