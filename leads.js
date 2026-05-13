/**
 * Hadyński Inkaso — lead capture (frontend)
 * =========================================
 * Globalna funkcja window.submitLead(payload) — wywoływana z handlerów
 * formularzy (hero-form, call-form, contact-form). Wysyła POST na
 * Google Apps Script Web App (URL w leads-config.js).
 *
 * Funkcja jest "fire-and-forget" — nie blokuje UI, błąd sieci nie psuje
 * doświadczenia użytkownika (sukces pokazuje się normalnie).
 */
(function () {
  function getSectionLabel() {
    // Jeśli na stronie jest aktywna sekcja z data-screen-label — bierzemy ją
    try {
      var sections = document.querySelectorAll('[data-screen-label]');
      var midY = window.scrollY + window.innerHeight / 2;
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var bottom = top + rect.height;
        if (midY >= top && midY <= bottom) {
          return sections[i].getAttribute('data-screen-label');
        }
      }
    } catch (e) {}
    return '';
  }

  window.submitLead = function (payload) {
    var endpoint = window.HADYNSKI_LEADS_ENDPOINT;
    if (!endpoint) {
      console.warn('[lead] endpoint not configured — skipping send');
      console.log('[lead] payload (preview):', payload);
      return Promise.resolve({ ok: false, error: 'not_configured' });
    }

    var section = getSectionLabel();
    var sourceTitle = document.title;
    if (section) sourceTitle += ' — ' + section;

    var data = Object.assign({}, payload, {
      sourceUrl: window.location.href,
      sourceTitle: sourceTitle,
      referrer: document.referrer || 'bezpośrednio',
      userAgent: navigator.userAgent
    });

    // Apps Script — wysyłamy jako text/plain żeby uniknąć preflightu CORS.
    // no-cors bo Apps Script nie zwraca Access-Control-Allow-Origin.
    try {
      fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data)
      }).catch(function (err) {
        console.error('[lead] network error', err);
      });
      console.log('[lead] submitted', data);
      return Promise.resolve({ ok: true });
    } catch (err) {
      console.error('[lead] error', err);
      return Promise.resolve({ ok: false, error: String(err) });
    }
  };
})();
