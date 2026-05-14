/* ============================================================
   JS FIXES: relokacja elementów mobilnych poza ancestor blocks
   ============================================================ */

(function () {
  // Fix: .nav-drawer i .nav-drawer-backdrop są w <header class="nav">,
  // który ma backdrop-filter. To tworzy containing block dla position: fixed
  // wewnątrz nav, więc drawer "fixed" zachowuje się jak "absolute" względem
  // headera. Po scrollu drawer ucieka poza ekran.
  // Fix: przenieś drawer i backdrop poza <header>, bezpośrednio do <body>.
  function relocateDrawer() {
    var drawer = document.getElementById('nav-drawer');
    var backdrop = document.getElementById('nav-drawer-backdrop');
    var body = document.body;
    if (drawer && drawer.parentElement !== body) {
      body.appendChild(drawer);
    }
    if (backdrop && backdrop.parentElement !== body) {
      body.appendChild(backdrop);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', relocateDrawer);
  } else {
    relocateDrawer();
  }

  // ===========================================================
  // Improved scroll lock for mobile drawer
  // overflow:hidden na body NIE działa na iOS Safari. Zamiast tego
  // używamy position:fixed + zapamiętujemy pozycję scroll.
  // ===========================================================
  var savedScrollY = 0;
  function lockBodyScroll() {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = '-' + savedScrollY + 'px';
  }
  function unlockBodyScroll() {
    document.body.style.top = '';
    window.scrollTo(0, savedScrollY);
  }

  // Hook into body class changes (mutation observer)
  function watchNavOpen() {
    var wasOpen = false;
    new MutationObserver(function () {
      var isOpen = document.body.classList.contains('nav-open');
      if (isOpen && !wasOpen) {
        lockBodyScroll();
      } else if (!isOpen && wasOpen) {
        unlockBodyScroll();
      }
      wasOpen = isOpen;
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  // ===========================================================
  // Inject drawer footer (CTA + telefon) — zapełnia puste pole
  // na dole drawera + daje szybką akcję
  // ===========================================================
  function injectDrawerFooter() {
    var drawer = document.getElementById('nav-drawer');
    if (!drawer) return;
    if (drawer.querySelector('.drawer-footer')) return;
    var footer = document.createElement('div');
    footer.className = 'drawer-footer';
    footer.innerHTML =
      '<a href="tel:+48717119966" class="drawer-footer-cta" aria-label="Zadzwoń: 71 711 99 66">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>' +
      '</svg>' +
      'Zadzwoń teraz</a>' +
      '<div class="drawer-footer-phone">lub <a href="tel:+48717119966">+48 71 711 99 66</a> · pon–pt 8:00–16:00</div>';
    drawer.appendChild(footer);
  }

  // ===========================================================
  // Login info toast — pokazuje "Faza testowa — brak dostępu"
  // gdy użytkownik kliknie linki "Logowanie do panelu"
  // ===========================================================
  function createLoginToast() {
    if (document.querySelector('.login-info-toast')) return document.querySelector('.login-info-toast');
    var toast = document.createElement('div');
    toast.className = 'login-info-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML =
      '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>' +
      '<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>' +
      '</svg>' +
      '<div class="toast-body">' +
      '<strong>Faza testowa</strong>' +
      '<span>Brak dostępu — panel jest aktywny tylko dla wybranych klientów. Zadzwoń, żeby dowiedzieć się więcej: <a href="tel:+48717119966" style="color:#fff;text-decoration:underline;">+48 71 711 99 66</a></span>' +
      '</div>';
    document.body.appendChild(toast);
    return toast;
  }
  var toastTimer = null;
  function showLoginToast() {
    var toast = createLoginToast();
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
      toast.classList.remove('is-visible');
    }, 5000);
  }

  function bindLoginLinks() {
    // Każdy link zawierający "Logowanie do panelu" pokazuje toast zamiast nawigacji
    var selectors = [
      '.login-link',
      '.drawer-login',
      'a[aria-label*="Logowanie"]',
      'a[aria-label*="logowanie"]'
    ];
    var links = document.querySelectorAll(selectors.join(','));
    links.forEach(function(link) {
      // Pomiń jeśli już bound
      if (link.dataset.loginToastBound) return;
      link.dataset.loginToastBound = '1';
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Zamknij drawer jeśli otwarty
        var drawer = document.getElementById('nav-drawer');
        if (drawer && drawer.classList.contains('open')) {
          var burger = document.getElementById('nav-burger');
          if (burger) burger.click();
        }
        showLoginToast();
      });
    });
  }

  function init() {
    relocateDrawer();
    injectDrawerFooter();
    watchNavOpen();
    bindLoginLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
