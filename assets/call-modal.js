/**
 * Hadyński Inkaso — portable call modal
 * ======================================
 * Self-contained popup formularz "Zamów bezpłatną rozmowę".
 * Wstrzykuje markup, podpina handlery, wywołuje window.submitLead().
 *
 * Trigger: dowolny element z [data-modal-open] (button, link, etc.).
 * Tracking: każda strona może ustawić window.HADYNSKI_LEAD_SOURCE
 *           (np. 'blog:slug-artykulu') — trafi do formType w arkuszu.
 *
 * Wymaga: leads-config.js + leads.js + assets/call-modal.css.
 */
(function () {
  'use strict';

  const COUNTRIES_TOP = [
    { code: 'PL', dial: '+48', name: 'Polska', flag: '🇵🇱' },
    { code: 'DE', dial: '+49', name: 'Niemcy', flag: '🇩🇪' },
    { code: 'NL', dial: '+31', name: 'Holandia', flag: '🇳🇱' }
  ];
  const COUNTRIES_REST = [
    { code: 'AT', dial: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: 'BE', dial: '+32', name: 'Belgia', flag: '🇧🇪' },
    { code: 'BG', dial: '+359', name: 'Bułgaria', flag: '🇧🇬' },
    { code: 'HR', dial: '+385', name: 'Chorwacja', flag: '🇭🇷' },
    { code: 'CY', dial: '+357', name: 'Cypr', flag: '🇨🇾' },
    { code: 'CZ', dial: '+420', name: 'Czechy', flag: '🇨🇿' },
    { code: 'DK', dial: '+45', name: 'Dania', flag: '🇩🇰' },
    { code: 'EE', dial: '+372', name: 'Estonia', flag: '🇪🇪' },
    { code: 'FI', dial: '+358', name: 'Finlandia', flag: '🇫🇮' },
    { code: 'FR', dial: '+33', name: 'Francja', flag: '🇫🇷' },
    { code: 'GR', dial: '+30', name: 'Grecja', flag: '🇬🇷' },
    { code: 'ES', dial: '+34', name: 'Hiszpania', flag: '🇪🇸' },
    { code: 'IE', dial: '+353', name: 'Irlandia', flag: '🇮🇪' },
    { code: 'LT', dial: '+370', name: 'Litwa', flag: '🇱🇹' },
    { code: 'LU', dial: '+352', name: 'Luksemburg', flag: '🇱🇺' },
    { code: 'LV', dial: '+371', name: 'Łotwa', flag: '🇱🇻' },
    { code: 'MT', dial: '+356', name: 'Malta', flag: '🇲🇹' },
    { code: 'PT', dial: '+351', name: 'Portugalia', flag: '🇵🇹' },
    { code: 'RO', dial: '+40', name: 'Rumunia', flag: '🇷🇴' },
    { code: 'SK', dial: '+421', name: 'Słowacja', flag: '🇸🇰' },
    { code: 'SI', dial: '+386', name: 'Słowenia', flag: '🇸🇮' },
    { code: 'SE', dial: '+46', name: 'Szwecja', flag: '🇸🇪' },
    { code: 'HU', dial: '+36', name: 'Węgry', flag: '🇭🇺' },
    { code: 'IT', dial: '+39', name: 'Włochy', flag: '🇮🇹' },
    { code: 'US', dial: '+1', name: 'USA', flag: '🇺🇸' }
  ];

  const MODAL_HTML = `
<div class="modal-overlay" id="call-modal" role="dialog" aria-modal="true" aria-labelledby="call-modal-title" hidden>
  <div class="modal" role="document">
    <button class="modal-close" type="button" aria-label="Zamknij" data-modal-close>
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M1 1l12 12M13 1L1 13"/>
      </svg>
    </button>
    <div class="modal-body">
      <div class="modal-header">
        <h3 id="call-modal-title">Zamów bezpłatną rozmowę</h3>
        <p>Oddzwonimy, ocenimy szanse odzysku, przedstawimy plan. Bezpłatnie, bez zobowiązań.</p>
      </div>
      <form class="modal-form" id="call-form" novalidate>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" />
        <div class="field">
          <div class="phone-field" id="phone-field">
            <button type="button" class="phone-country-btn" id="phone-country-btn" aria-haspopup="listbox" aria-expanded="false">
              <span class="flag" id="selected-flag">🇵🇱</span>
              <span class="code" id="selected-code">+48</span>
              <svg class="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 4l3 3 3-3"/></svg>
            </button>
            <input type="tel" class="phone-input" id="modal-phone" placeholder="Numer telefonu" inputmode="numeric" autocomplete="tel-national" />
            <div class="phone-dropdown" id="phone-dropdown" role="listbox"></div>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Czy sprawa była u komornika? <span class="req">*</span></label>
          <div class="radio-group">
            <label><input type="radio" name="komornik" value="tak" /><span>Tak</span></label>
            <label><input type="radio" name="komornik" value="nie" /><span>Nie</span></label>
          </div>
        </div>
        <div class="field">
          <label class="field-label" for="amount-trigger">Jaka jest łączna kwota długu do odzyskania <span class="nb-end">(brutto)?&nbsp;<span class="req">*</span></span></label>
          <div class="custom-select" id="amount-select">
            <button type="button" class="custom-select-trigger" id="amount-trigger" aria-haspopup="listbox" aria-expanded="false">
              <span class="cs-value" id="amount-value">Kliknij i wybierz</span>
              <svg class="cs-caret" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l3 3 3-3"/></svg>
            </button>
            <div class="custom-select-menu" id="amount-menu" role="listbox">
              <button type="button" class="cs-option" role="option" data-value="<3k">Poniżej 3.000 zł</button>
              <button type="button" class="cs-option" role="option" data-value="3-6k">od 3.000 zł do 6.000 zł</button>
              <button type="button" class="cs-option" role="option" data-value="6-50k">od 6.000 zł do 50.000 zł</button>
              <button type="button" class="cs-option" role="option" data-value=">50k">Powyżej 50.000 zł</button>
            </div>
            <input type="hidden" id="modal-amount" required />
          </div>
        </div>
        <button type="submit" class="btn btn-primary modal-submit">Wyślij zgłoszenie</button>
        <p class="modal-disclaimer">Przesyłając formularz akceptujesz <a href="../Hadynski - Polityka Prywatnosci.html">Politykę prywatności</a>.</p>
      </form>
      <div class="modal-success" id="modal-success">
        <div class="tick-big">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l4 4L19 7"/></svg>
        </div>
        <h2>Dziękujemy za zgłoszenie.</h2>
        <p>Oddzwonimy maksymalnie w ciągu 24h w dni robocze (pon–pt). Zazwyczaj wcześniej.</p>
        <p>Zgłoszenia wysłane w weekend obsługujemy w poniedziałek rano.</p>
      </div>
    </div>
  </div>
</div>`;

  function init() {
    if (document.getElementById('call-modal')) return;

    const container = document.createElement('div');
    container.innerHTML = MODAL_HTML;
    document.body.appendChild(container.firstElementChild);

    const overlay = document.getElementById('call-modal');
    const phoneField = document.getElementById('phone-field');
    const countryBtn = document.getElementById('phone-country-btn');
    const dropdown = document.getElementById('phone-dropdown');
    const phoneInput = document.getElementById('modal-phone');
    const flagEl = document.getElementById('selected-flag');
    const codeEl = document.getElementById('selected-code');
    const form = document.getElementById('call-form');
    const successEl = document.getElementById('modal-success');
    const amountSelect = document.getElementById('amount-select');
    const amountTrigger = document.getElementById('amount-trigger');
    const amountMenu = document.getElementById('amount-menu');
    const amountValueEl = document.getElementById('amount-value');
    const amountHidden = document.getElementById('modal-amount');

    let selectedCountry = COUNTRIES_TOP[0];

    function renderDropdown() {
      const item = (c) => `<button type="button" class="phone-option ${c.code === selectedCountry.code ? 'is-selected' : ''}" role="option" data-code="${c.code}">
        <span class="flag">${c.flag}</span>
        <span class="name">${c.name}</span>
        <span class="dial">${c.dial}</span>
      </button>`;
      dropdown.innerHTML =
        COUNTRIES_TOP.map(item).join('') +
        '<div class="sep" role="separator"></div>' +
        COUNTRIES_REST.map(item).join('');
    }
    renderDropdown();

    function setCountry(code) {
      const all = [...COUNTRIES_TOP, ...COUNTRIES_REST];
      const c = all.find(x => x.code === code);
      if (!c) return;
      selectedCountry = c;
      flagEl.textContent = c.flag;
      codeEl.textContent = c.dial;
      renderDropdown();
    }

    countryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dropdown.classList.toggle('is-open');
      countryBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    dropdown.addEventListener('click', (e) => {
      const btn = e.target.closest('.phone-option');
      if (!btn) return;
      setCountry(btn.dataset.code);
      dropdown.classList.remove('is-open');
      countryBtn.setAttribute('aria-expanded', 'false');
      phoneInput.focus();
    });
    document.addEventListener('click', (e) => {
      if (!phoneField.contains(e.target)) {
        dropdown.classList.remove('is-open');
        countryBtn.setAttribute('aria-expanded', 'false');
      }
    });
    phoneInput.addEventListener('focus', () => phoneField.classList.add('is-focus'));
    phoneInput.addEventListener('blur', () => phoneField.classList.remove('is-focus'));
    phoneInput.addEventListener('input', (e) => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 12);
      e.target.value = raw.match(/.{1,3}/g)?.join(' ') || '';
      phoneField.querySelectorAll('.phone-country-btn, .phone-input').forEach(el => el.style.borderColor = '');
    });

    amountTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = amountSelect.classList.toggle('is-open');
      amountTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        const modalEl = amountTrigger.closest('.modal');
        if (modalEl) {
          const tRect = amountTrigger.getBoundingClientRect();
          const mRect = modalEl.getBoundingClientRect();
          const spaceBelow = mRect.bottom - tRect.bottom;
          const spaceAbove = tRect.top - mRect.top;
          if (spaceBelow < 260 && spaceAbove > spaceBelow) {
            amountSelect.classList.add('flip-up');
          } else {
            amountSelect.classList.remove('flip-up');
            if (spaceBelow < 260) modalEl.scrollTop += (260 - spaceBelow) + 16;
          }
        }
      } else {
        amountSelect.classList.remove('flip-up');
      }
    });
    amountMenu.addEventListener('click', (e) => {
      const opt = e.target.closest('.cs-option');
      if (!opt) return;
      amountMenu.querySelectorAll('.cs-option').forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      amountValueEl.textContent = opt.textContent;
      amountValueEl.classList.add('has-value');
      amountHidden.value = opt.dataset.value;
      amountSelect.classList.remove('is-open');
      amountTrigger.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', (e) => {
      if (!amountSelect.contains(e.target)) {
        amountSelect.classList.remove('is-open');
        amountTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    function openModal() {
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
      form.style.display = '';
      form.reset();
      phoneInput.value = '';
      amountValueEl.textContent = 'Kliknij i wybierz';
      amountValueEl.classList.remove('has-value');
      amountHidden.value = '';
      amountMenu.querySelectorAll('.cs-option').forEach(o => o.classList.remove('is-selected'));
      document.querySelectorAll('input[name="komornik"]').forEach(r => r.checked = false);
      phoneField.classList.remove('is-focus');
      phoneField.querySelectorAll('.phone-country-btn, .phone-input').forEach(el => el.style.borderColor = '');
      successEl.classList.remove('is-visible');
    }
    function closeModal() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { overlay.hidden = true; }, 250);
    }
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    overlay.querySelectorAll('[data-modal-close]').forEach(b => b.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal(); });

    window.openCallModal = openModal;

    document.querySelectorAll('[data-modal-open]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
    });
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-open]');
      if (trigger && !trigger.dataset.modalBound) {
        trigger.dataset.modalBound = '1';
        e.preventDefault();
        openModal();
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = phoneInput.value.replace(/\D/g, '');
      if (raw.length < 7) {
        phoneInput.focus();
        phoneField.querySelectorAll('.phone-country-btn, .phone-input').forEach(el => el.style.borderColor = 'var(--red, #B91C1C)');
        return;
      }
      const phone = `${selectedCountry.dial} ${raw}`;
      const amount = amountHidden.value;
      const komornik = document.querySelector('input[name="komornik"]:checked')?.value;
      if (!komornik || !amount) return;

      const source = window.HADYNSKI_LEAD_SOURCE || 'pop-up (zamow rozmowe)';
      const hpModal = form.querySelector('input[name="website"]');

      if (window.submitLead) {
        window.submitLead({
          formType: source,
          phone: phone,
          amount: amount,
          komornik: komornik,
          website: hpModal ? hpModal.value : ''
        });
      }
      form.style.display = 'none';
      successEl.classList.add('is-visible');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
