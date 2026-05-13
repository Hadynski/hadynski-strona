/* ============================================
   SERVICES DATA — copy dla 10 podstron usług
   Code: przepisz na CMS / dane z PRD; każdy obiekt = 1 strona.
   ============================================ */
window.SERVICES = {

  /* ====================== 01 ====================== */
  "windykacja-polubowna": {
    displayName: "Windykacja polubowna",
    kind: "Etap przedsądowy",
    heading: "Windykacja <em>polubowna</em>",
    lead: "Telefony, e-maile, listy, mediacje — wszystko, by dłużnik zapłacił zanim sprawa trafi do sądu. Najszybsza i najtańsza ścieżka odzyskania pieniędzy.",
    metaTime: "Pierwszy kontakt <strong>w 24h</strong>",
    metaPricing: "Tylko <strong>od sukcesu</strong>",
    metaResult: "Średnio <strong>83%</strong> spraw",
    whatTitle: "Działamy szybko, ale bez przekraczania granic.",
    whatLead: "Od pierwszego telefonu do dłużnika do spłaty należności — wszystko zgodnie z prawem, ale z presją, której on wcześniej nie czuł. Większość spraw kończymy w 30 dni.",
    whatList: [
      "Weryfikacja dłużnika i analiza dokumentów (faktury, umowy, korespondencja)",
      "Wysłanie wezwania do zapłaty z indywidualną argumentacją prawną",
      "Telefoniczny kontakt windykacyjny (negocjator + protokół rozmowy)",
      "Bezpośrednie spotkania w siedzibie dłużnika, jeśli to konieczne",
      "Negocjacje warunków spłaty — jednorazowych i ratalnych",
      "Pełen raport z każdego etapu w panelu klienta"
    ],
    forWhoTitle: "Polubowna sprawdzi się, gdy…",
    forWho: [
      { glyph: "1", title: "Faktura jest świeża", body: "Do 6 miesięcy zaległości — szybka reakcja działa najmocniej. Im szybciej, tym wyższa skuteczność." },
      { glyph: "2", title: "Dłużnik nadal działa", body: "Firma kontrahenta funkcjonuje, ma majątek, kontakty. Nie chcemy go „zabić” — chcemy odzyskać pieniądze." },
      { glyph: "3", title: "Zależy Ci na relacji", body: "To stały klient lub partner. Dobrze poprowadzona windykacja to nie koniec współpracy." }
    ],
    processTitle: "Tak wygląda Twoja sprawa od środka.",
    process: [
      { title: "Zgłoszenie i analiza", desc: "Przesyłasz dokumenty przez panel lub e-mail. W ciągu 24h dostajesz ocenę szans i propozycję strategii.", meta: "0–24h" },
      { title: "Wezwanie do zapłaty", desc: "Wysyłamy formalne pismo — zarówno listem poleconym, jak i mailem. Każde wezwanie jest indywidualnie przygotowane.", meta: "Dzień 1–3" },
      { title: "Kontakt z dłużnikiem", desc: "Negocjator dzwoni, pisze, jedzie. Każda rozmowa jest protokołowana — masz pełen wgląd w panelu.", meta: "Dzień 3–14" },
      { title: "Negocjacje i ugoda", desc: "Ustalamy warunki — spłatę jednorazową, raty, dodatkowe zabezpieczenia. Wszystko w formie pisemnej.", meta: "Dzień 14–25" },
      { title: "Spłata i rozliczenie", desc: "Pieniądze wpływają na Twoje konto. My otrzymujemy umówioną prowizję — dopiero teraz.", meta: "Dzień 25–30" }
    ],
    pricingSection: "Płacisz <em>tylko od sukcesu.</em>",
    pricingEyebrow: "Prowizja od odzyskanej kwoty",
    pricingHead: "Bez opłat wstępnych. Bez kosztów ukrytych. <em>Płacimy razem ze sobą</em> — kiedy pieniądze są na Twoim koncie.",
    pricingBody: "Przed rozpoczęciem sprawy podpisujemy zlecenie z konkretną stawką prowizji ustaloną indywidualnie na podstawie kwoty, wieku długu i ryzyka.",
    pricingFee: "<em>0 zł</em>",
    pricingCommission: "<em>od 8%</em>",
    pricingContract: "24-godzinna",
    faqTitle: "FAQ — windykacja polubowna",
    faq: [
      { q: "Czy windykacja polubowna jest legalna i etyczna?", a: "Tak. Działamy w 100% w ramach prawa — Kodeks Cywilny, RODO, Kodeks Etyki Windykacyjnej. Nie zastraszamy, nie nachodzimy w domu, nie kontaktujemy osób trzecich. Skuteczność bierze się z konsekwencji i znajomości procedur, nie z presji niezgodnej z prawem." },
      { q: "Co jeśli dłużnik nie zapłaci mimo windykacji polubownej?", a: "Wtedy płynnie przechodzimy do windykacji sądowej — cała dokumentacja, którą zgromadziliśmy w fazie polubownej (rozmowy, korespondencja, próby ugody), staje się materiałem dowodowym w sądzie. Nie tracisz ani dnia." },
      { q: "Ile to kosztuje, jeśli nie odzyskacie pieniędzy?", a: "Nic. Działamy w modelu success fee — jeśli dłużnik nie zapłaci, nie wystawiamy żadnej faktury. To Twoje ryzyko zerowe." },
      { q: "Czy dostanę informację o postępach?", a: "Tak — wszystko widzisz w panelu klienta w czasie rzeczywistym. Każdy telefon, każde wysłane pismo, każda obietnica dłużnika. Możesz też dostawać podsumowania mailem." }
    ],
    ctaTitle: "Sprawdźmy <em>Twoją sprawę</em>.",
    ctaBody: "15 minut bezpłatnej rozmowy. Powiesz nam o dłużniku, my powiemy, czy bierzemy sprawę i z jaką prowizją."
  },

  /* ====================== 02 ====================== */
  "windykacja-miedzynarodowa": {
    displayName: "Windykacja międzynarodowa",
    kind: "Dłużnik za granicą",
    heading: "Windykacja <em>międzynarodowa</em>",
    lead: "Odzyskujemy należności od kontrahentów w UE i poza nią. Lokalni prawnicy w 38 krajach, znajomość przepisów i języków, pełna obsługa w jednym miejscu.",
    metaTime: "Pierwsza akcja <strong>w 48h</strong>",
    metaPricing: "Prowizja <strong>od sukcesu</strong>",
    metaResult: "Sieć <strong>w 38 krajach</strong>",
    whatTitle: "Lokalna obecność, jedno zlecenie po polsku.",
    whatLead: "Zamiast szukać prawnika w obcym kraju i tłumaczyć dokumenty, podpisujesz jedną umowę z nami. Resztę — kontakty, język, lokalne procedury — bierzemy na siebie.",
    whatList: [
      "Weryfikacja kontrahenta w lokalnych rejestrach (Crefo, D&B, KvK, Companies House i in.)",
      "Wezwania do zapłaty w języku dłużnika, zgodne z lokalnym prawem",
      "Negocjacje przez partnerów w kraju dłużnika",
      "Egzekucja transgraniczna na podstawie EPU / TWE w UE",
      "Obsługa różnic kursowych i podatków przy rozliczeniu",
      "Komunikacja z Tobą po polsku — od początku do końca"
    ],
    forWhoTitle: "Międzynarodowa działa, gdy…",
    forWho: [
      { glyph: "EU", title: "Dłużnik z Unii", body: "Niemcy, Czechy, Włochy, Holandia, Francja — działamy w pełnej procedurze unijnej (EPU, TWE), bez konieczności jeżdżenia za granicę." },
      { glyph: "UK", title: "Wielka Brytania", body: "Po Brexicie — własna procedura. Mamy partnerów w Londynie i Manchesterze, którzy znają lokalne sądy." },
      { glyph: "WW", title: "Reszta świata", body: "USA, Turcja, kraje Bałkanów, Bliski Wschód — sieć korespondentów w 38 krajach. Każdy przypadek wyceniany indywidualnie." }
    ],
    processTitle: "Zagranica bez wychodzenia z biura.",
    process: [
      { title: "Weryfikacja i strategia", desc: "Sprawdzamy, czy dłużnik nadal istnieje, gdzie ma majątek, jakie ma zobowiązania. Dobieramy partnera lokalnego.", meta: "0–48h" },
      { title: "Wezwanie w języku dłużnika", desc: "Pismo przygotowane przez prawnika z kraju dłużnika, dostosowane do lokalnych norm i procedur.", meta: "Dzień 2–5" },
      { title: "Negocjacje lokalne", desc: "Nasz partner kontaktuje się bezpośrednio w lokalnym języku — telefon, e-mail, spotkanie. Ty otrzymujesz raport po polsku.", meta: "Dzień 5–30" },
      { title: "Egzekucja transgraniczna", desc: "Jeśli polubowna nie wystarczy — uruchamiamy procedury sądowe. Często działa już sam fakt ich rozpoczęcia.", meta: "Dzień 30+" },
      { title: "Spłata i przelew do Polski", desc: "Pieniądze wpływają na rachunek powierniczy, my przeliczamy walutę i przelewamy do Ciebie netto.", meta: "Po wpłacie" }
    ],
    pricingSection: "Stawki <em>indywidualne</em> — zależnie od kraju.",
    pricingEyebrow: "Zależnie od kraju i wartości długu",
    pricingHead: "Każdy kraj to inna procedura, inne koszty lokalne — dlatego prowizję ustalamy <em>indywidualnie</em>, ale zawsze tylko od kwoty, którą rzeczywiście odzyskasz.",
    pricingBody: "Przy zleceniu dostajesz przejrzystą wycenę: stawka prowizji + ewentualne koszty sądowe (jeśli wejdą w grę). Wszystko po polsku.",
    pricingFee: "<em>0 zł</em>",
    pricingCommission: "<em>od 12%</em>",
    pricingContract: "Indywidualna",
    faqTitle: "FAQ — windykacja międzynarodowa",
    faq: [
      { q: "W jakich krajach działacie?", a: "Mamy partnerów w 38 krajach — cała Unia Europejska, Wielka Brytania, USA, Kanada, Turcja, Ukraina, kraje bałkańskie, część Azji i Bliskiego Wschodu. Jeśli Twojego kraju nie ma na liście — i tak zadzwoń, niemal zawsze znajdujemy ścieżkę." },
      { q: "Czy potrzebuję tłumaczeń dokumentów?", a: "Nie. Tłumaczenia bierzemy na siebie — łącznie z tłumaczeniami przysięgłymi, jeśli sprawa idzie do sądu. To jest częścią ustalonego wynagrodzenia." },
      { q: "Jak długo trwa odzyskanie zagranicznej należności?", a: "Polubowne 30–90 dni, sądowe (UE) 4–12 miesięcy, sądowe (poza UE) 8–18 miesięcy. Każdy kraj ma swoją specyfikę — przed startem dostajesz realistyczną prognozę." },
      { q: "Co z różnicami kursowymi?", a: "Pieniądze trafiają na nasz rachunek powierniczy, przeliczamy je po kursie z dnia wpłaty (transparentnie), odejmujemy prowizję i przelewamy Ci kwotę netto w PLN albo w walucie." }
    ],
    ctaTitle: "Dłużnik za granicą? <em>Pomożemy.</em>",
    ctaBody: "Wyślij dokumenty — sprawdzimy kontrahenta w lokalnych rejestrach i powiemy, czy sprawa się opłaca, zanim cokolwiek podpiszemy."
  },

  /* ====================== 03 ====================== */
  "windykacja-terenowa": {
    displayName: "Windykacja terenowa",
    kind: "Bezpośrednia wizyta",
    heading: "Windykacja <em>terenowa</em>",
    lead: "Bezpośrednia wizyta naszego negocjatora w siedzibie dłużnika. Tam, gdzie telefon i list już nie działają — działa rozmowa twarzą w twarz.",
    metaTime: "Wizyta <strong>w 5 dni</strong>",
    metaPricing: "Tylko <strong>od sukcesu</strong>",
    metaResult: "<strong>71%</strong> spraw zamykanych",
    whatTitle: "Wizyta terenowa to ostatni etap przed sądem.",
    whatLead: "Kiedy dłużnik ignoruje telefony i nie odbiera listów, jedziemy. Negocjator pojawia się osobiście — często to wystarczy, by sprawa ruszyła z miejsca.",
    whatList: [
      "Wyjazd na teren w dowolne miejsce w Polsce",
      "Bezpośrednia rozmowa z dłużnikiem lub osobami decyzyjnymi",
      "Protokół z wizyty — pismo z podpisami stron",
      "Negocjacja warunków spłaty na miejscu",
      "Możliwość odbioru gotówki / karty / przelewu od ręki",
      "Pełna dokumentacja fotograficzna stanu firmy dłużnika"
    ],
    forWhoTitle: "Terenowa działa, gdy…",
    forWho: [
      { glyph: "→", title: "Dłużnik się ukrywa", body: "Nie odbiera telefonów, ignoruje listy, nie odpisuje na maile. Wizyta osobista zmienia tę grę." },
      { glyph: "$", title: "Kwota uzasadnia wyjazd", body: "Od kilku tysięcy w górę — wtedy koszt wizyty terenowej zwraca się wielokrotnie w skuteczności." },
      { glyph: "T", title: "Sprawa wymaga obserwacji", body: "Chcesz wiedzieć, czy firma dłużnika nadal funkcjonuje, czy ma majątek. Wizyta terenowa daje odpowiedź." }
    ],
    processTitle: "Wyjazd, rozmowa, protokół.",
    process: [
      { title: "Zlecenie wizyty", desc: "Po analizie sprawy proponujemy wyjazd terenowy. Ustalamy datę i strategię rozmowy.", meta: "Dzień 1–2" },
      { title: "Przygotowanie dokumentacji", desc: "Negocjator wyjeżdża z kompletem dokumentów, projektem ugody i pełnomocnictwem.", meta: "Dzień 2–4" },
      { title: "Wizyta i rozmowa", desc: "Negocjator pojawia się osobiście — zazwyczaj bez zapowiedzi. Rozmowa, fotografie, protokół z podpisami.", meta: "Dzień 5" },
      { title: "Raport po wizycie", desc: "Pełen raport tego samego dnia: czy firma działa, czy są pracownicy, czy są środki, jaka była reakcja.", meta: "Dzień 5" },
      { title: "Działanie pokontaktowe", desc: "Realizacja ustaleń — spłata jednorazowa, raty albo, jeśli trzeba, eskalacja sądowa.", meta: "Dzień 6+" }
    ],
    pricingSection: "<em>Bez kosztów</em> wyjazdu, jeśli się nie uda.",
    pricingEyebrow: "Wynagrodzenie od sukcesu + zwrot kosztów wyjazdu",
    pricingHead: "Wyjazd terenowy bierzemy na siebie — koszty paliwa, czasu i logistyki. Płacisz tylko, jeśli <em>odzyskamy pieniądze</em>.",
    pricingBody: "W zleceniu uzgadniamy stawkę prowizji + zwrot kosztów wyjazdu (zwykle 200–600 zł zależnie od dystansu). Bez sukcesu — żadnych opłat.",
    pricingFee: "<em>0 zł</em>",
    pricingCommission: "<em>od 10%</em>",
    pricingContract: "+ koszty wyjazdu",
    faqTitle: "FAQ — windykacja terenowa",
    faq: [
      { q: "Czy wizyta terenowa jest legalna?", a: "W pełni — to po prostu rozmowa biznesowa w siedzibie kontrahenta. Negocjator nie wchodzi do mieszkania, nie zastrasza, nie blokuje wyjścia. Zachowuje się jak każdy profesjonalny przedstawiciel handlowy." },
      { q: "Co, jeśli dłużnika nie ma na miejscu?", a: "Sporządzamy protokół, fotografujemy stan firmy (zewnętrznie), zostawiamy pismo. To również jest cenna informacja — czy firma w ogóle funkcjonuje. Wizyta jest udokumentowana i może być dowodem w sądzie." },
      { q: "Jak daleko jeździcie?", a: "Cała Polska. Mamy negocjatorów w głównych regionach, więc dojazd zazwyczaj nie przekracza 200 km od ich bazy. Nawet do najdalszych zakątków docieramy w ciągu tygodnia." },
      { q: "Czy mogę pojechać razem z negocjatorem?", a: "W większości przypadków odradzamy — emocje właściciela mogą zaburzyć negocjacje. Ale jeśli to ma znaczenie biznesowe (np. ostatnie spotkanie przed wypowiedzeniem umowy), uzgadniamy warianty wspólnego wyjazdu." }
    ],
    ctaTitle: "Dłużnik <em>znika z radaru</em>?",
    ctaBody: "Wyślij sprawę — przeanalizujemy, czy wyjazd terenowy ma sens, i przygotujemy plan działania."
  },

  /* ====================== 04 ====================== */
  "windykacja-sadowa": {
    displayName: "Windykacja sądowa",
    kind: "Etap egzekucyjny",
    heading: "Windykacja <em>sądowa</em>",
    lead: "Pełne prowadzenie sprawy w sądzie — od pozwu, przez nakaz zapłaty, po komornika. Z gwarancją, że nie utoniesz w papierach.",
    metaTime: "Pozew <strong>w 7 dni</strong>",
    metaPricing: "Stała stawka <strong>+ %</strong>",
    metaResult: "Nakaz w <strong>92%</strong> spraw",
    whatTitle: "Cała procedura w naszych rękach.",
    whatLead: "Sąd to nie miejsce na improwizację — jeden błąd formalny opóźnia sprawę o miesiące. Prowadzimy ją od początku do końca: pozew, opłaty, komornik, egzekucja.",
    whatList: [
      "Przygotowanie pozwu i kompletu załączników",
      "Reprezentacja w sądzie (radca prawny / adwokat)",
      "Postępowanie nakazowe i upominawcze (EPU)",
      "Klauzula wykonalności i wniosek do komornika",
      "Wybór skutecznego komornika spośród naszej sieci",
      "Monitoring egzekucji i ewentualne dalsze kroki"
    ],
    forWhoTitle: "Sądowa to właściwa droga, gdy…",
    forWho: [
      { glyph: "✕", title: "Polubowna zawiodła", body: "Wezwania, telefony, wizyty — nie pomogły. Czas na formalną drogę." },
      { glyph: "T", title: "Sprawa się przedawnia", body: "Liczy się każdy tydzień. Pozew zatrzymuje bieg przedawnienia natychmiast." },
      { glyph: "$", title: "Dłużnik ma majątek", body: "Wiemy (lub sprawdzamy), że jest co egzekwować — komornik nie wraca z pustymi rękami." }
    ],
    processTitle: "Od pozwu do pieniędzy.",
    process: [
      { title: "Analiza i wycena sprawy", desc: "Sprawdzamy szanse, koszty i terminy. Mówimy wprost, czy warto iść do sądu.", meta: "Dzień 1–3" },
      { title: "Pozew i opłaty", desc: "Przygotowujemy pozew. Opłatę sądową możesz zapłacić sam albo my — z rozliczeniem później.", meta: "Dzień 3–7" },
      { title: "Nakaz zapłaty", desc: "Sąd wydaje nakaz — w EPU często w 2–4 tygodnie. Dłużnik ma 14 dni na sprzeciw.", meta: "Dzień 30–60" },
      { title: "Klauzula wykonalności", desc: "Po uprawomocnieniu nakazu uzyskujemy klauzulę i tytuł wykonawczy.", meta: "Dzień 60–90" },
      { title: "Komornik i egzekucja", desc: "Wybieramy skutecznego komornika, monitorujemy egzekucję, podpowiadamy kolejne kroki.", meta: "Dzień 90+" }
    ],
    pricingSection: "Niska <em>stała stawka</em> + prowizja od sukcesu.",
    pricingEyebrow: "Stała opłata + procent",
    pricingHead: "Sąd ma swoje koszty — opłatę sądową, ewentualnego biegłego. Dlatego nasze wynagrodzenie ma <em>dwa elementy</em>: niską stawkę za prowadzenie + prowizję od odzyskanej kwoty.",
    pricingBody: "Wszystko zapisane w umowie z góry. Bez ukrytych opłat, bez doliczania w trakcie. Opłatę sądową odzyskujesz w 100% od dłużnika — to ustawa.",
    pricingFee: "od <em>500 zł</em>",
    pricingCommission: "<em>od 8%</em>",
    pricingContract: "Indywidualna",
    faqTitle: "FAQ — windykacja sądowa",
    faq: [
      { q: "Czy odzyskam koszty sądowe?", a: "Tak — opłata sądowa, koszty zastępstwa procesowego i odsetki ustawowe są zasądzane od dłużnika i ściągane razem z należnością główną. To jest standard w polskim postępowaniu cywilnym." },
      { q: "Ile trwa cała procedura?", a: "EPU (e-pozew): 6–10 tygodni do nakazu, 3–6 miesięcy do egzekucji. Postępowanie zwykłe: 4–12 miesięcy. Z komornikiem dochodzą 2–6 miesięcy egzekucji." },
      { q: "Co jeśli dłużnik wniesie sprzeciw?", a: "Sprzeciw kieruje sprawę do postępowania zwykłego — wtedy jest rozprawa, świadkowie, dokumenty. Reprezentujemy Cię od początku do końca; Twoja obecność na sali sądowej zwykle nie jest potrzebna." },
      { q: "Co, jeśli komornik nic nie wyegzekwuje?", a: "Wtedy mamy plan B: zmiana komornika na bardziej skutecznego, ujawnienie majątku, postępowanie wobec spółki-córki, czasem skierowanie do upadłości. Nie zostawiamy spraw bez nadzoru." }
    ],
    ctaTitle: "<em>Czas</em> nie pracuje na Twoją korzyść.",
    ctaBody: "Roszczenia się przedawniają. Im wcześniej zaczniemy, tym większa szansa na pełne odzyskanie."
  },

  /* ====================== 05 ====================== */
  "skup-wierzytelnosci": {
    displayName: "Skup wierzytelności",
    kind: "Cesja długu",
    heading: "Skup <em>wierzytelności</em>",
    lead: "Sprzedaj nam swoją wierzytelność i odzyskaj pieniądze od ręki. My przejmujemy całe ryzyko i sami ścigamy dłużnika.",
    metaTime: "Wycena <strong>w 48h</strong>",
    metaPricing: "Płatność <strong>z góry</strong>",
    metaResult: "<strong>Bez ryzyka</strong> dla Ciebie",
    whatTitle: "Zamiast czekać miesiącami — bierzesz pieniądze dziś.",
    whatLead: "Cesja wierzytelności = przeniesienie długu z Ciebie na nas. Płacimy Ci procent kwoty od ręki, a sami zajmujemy się odzyskaniem reszty. Twoje ryzyko spada do zera.",
    whatList: [
      "Wycena wierzytelności w 48 godzin",
      "Umowa cesji — prosta, jednostronicowa, sprawdzona",
      "Płatność na konto natychmiast po podpisaniu",
      "Pełne przeniesienie ryzyka egzekucji na nas",
      "Brak dalszych obowiązków po Twojej stronie",
      "Dyskrecja — nie musisz informować dłużnika sam"
    ],
    forWhoTitle: "Skup ma sens, gdy…",
    forWho: [
      { glyph: "$", title: "Potrzebujesz cashu", body: "Zaraz, nie za rok. Jedna szybka wpłata zamiast długiej egzekucji o niepewnym wyniku." },
      { glyph: "T", title: "Sprawa się ciągnie", body: "Już rok windykacji bez efektu. Zamiast inwestować dalej — zamknij temat i rusz dalej." },
      { glyph: "?", title: "Nie chcesz ryzykować", body: "Komornik może nic nie wyegzekwować. Cesja przenosi to ryzyko z Ciebie na nas." }
    ],
    processTitle: "Sprzedaż w 4 krokach.",
    process: [
      { title: "Zgłoszenie i dokumenty", desc: "Wysyłasz fakturę, umowę i ewentualną dotychczasową korespondencję z dłużnikiem.", meta: "Dzień 1" },
      { title: "Wycena", desc: "Analizujemy: kwotę, wiek długu, majątek dłużnika, dokumentację. Wracamy z konkretną ofertą.", meta: "Dzień 1–2" },
      { title: "Umowa cesji", desc: "Podpisujemy proste, jednostronicowe porozumienie — papierowo lub elektronicznie.", meta: "Dzień 2–3" },
      { title: "Pieniądze na koncie", desc: "Tego samego dnia, w którym podpisujesz umowę, pieniądze trafiają na Twoje konto.", meta: "Dzień 3" }
    ],
    pricingSection: "Cena = <em>realna wartość</em> długu.",
    pricingEyebrow: "Wycena indywidualna",
    pricingHead: "Wartość, którą oferujemy, zależy od trzech rzeczy: <em>kwoty, wieku</em> i <em>siły dokumentacji</em>. Im świeższa i lepiej udokumentowana wierzytelność, tym wyższa cena.",
    pricingBody: "Świeże faktury z silną dokumentacją: 60–80% wartości. Stare i sporne: 20–40%. Każdą sprawę wyceniamy indywidualnie po analizie dokumentów.",
    pricingFee: "<em>0 zł</em>",
    pricingCommission: "60–80%",
    pricingContract: "Cesja długu",
    faqTitle: "FAQ — skup wierzytelności",
    faq: [
      { q: "Co kupujecie, a czego nie?", a: "Kupujemy wierzytelności B2B (firma od firmy), z udokumentowaną podstawą (faktura, umowa). Kupujemy długi przed i po wyroku, polskie i zagraniczne. Nie kupujemy długów konsumenckich poniżej 5 tys. zł oraz wierzytelności już przedawnionych." },
      { q: "Ile dostanę za moją fakturę?", a: "Indywidualna wycena. Świeże, dobrze udokumentowane sprawy: zwykle 60–80% wartości. Stare lub sporne: 20–40%. Po analizie dokumentów dostajesz konkretną ofertę — bez negocjacji w stylu „a ile pan da”." },
      { q: "Czy dłużnik dowie się, że sprzedałem dług?", a: "Tak, ale dopiero po cesji — to wymóg prawa. Wysyłamy do niego pismo z informacją, że nowym wierzycielem jesteśmy my. Twoja relacja z nim się tu kończy — od tego momentu my jesteśmy jego rozmówcą." },
      { q: "Czy mogę odzyskać większą część, idąc samemu do sądu?", a: "Może tak, może nie. Cesja to wybór: pewne pieniądze dziś vs. potencjalnie większa kwota za rok lub dwa, z ryzykiem braku egzekucji. Wielu przedsiębiorców woli pewność." }
    ],
    ctaTitle: "Sprzedaj <em>dług, nie nerwy</em>.",
    ctaBody: "Wyślij dokumenty — w 48 godzin dostaniesz konkretną wycenę. Bez zobowiązań."
  },

  /* ====================== 06 ====================== */
  "poszukiwanie-majatku": {
    displayName: "Poszukiwanie majątku dłużnika",
    kind: "Detektywistyka biznesowa",
    heading: "Poszukiwanie <em>majątku dłużnika</em>",
    lead: "Sprawdzamy, co dłużnik naprawdę posiada — nieruchomości, konta, samochody, udziały, należności od jego klientów. Bez tego komornik nie ma czego ścigać.",
    metaTime: "Raport <strong>w 14 dni</strong>",
    metaPricing: "Stała <strong>opłata</strong>",
    metaResult: "<strong>Wszystkie</strong> źródła",
    whatTitle: "Jeśli komornik nie wie czego szukać — egzekucja jest bezskuteczna.",
    whatLead: "Większość spraw przegrywa się nie w sądzie, tylko u komornika — bo dłużnik formalnie „nic nie ma”. My szukamy tego, co ukrywa: w rejestrach, źródłach branżowych, sieciach powiązań.",
    whatList: [
      "Sprawdzenie ksiąg wieczystych (cała Polska)",
      "Rachunki bankowe — pełen wykaz w polskich bankach",
      "Pojazdy w Centralnej Ewidencji (CEPiK)",
      "Udziały w spółkach (KRS, beneficjenci rzeczywisci)",
      "Wierzytelności dłużnika wobec jego klientów",
      "Powiązania osobowe (małżonek, ukryte firmy „słupy”)"
    ],
    forWhoTitle: "Szukanie majątku potrzebne, gdy…",
    forWho: [
      { glyph: "0", title: "Komornik wraca z niczym", body: "Postanowienie o bezskuteczności egzekucji — to nie koniec. Trzeba zacząć szukać tam, gdzie komornik nie zajrzał." },
      { glyph: "?", title: "Nie wiesz, co dłużnik ma", body: "Przed pozwem warto wiedzieć, czy w ogóle warto. Wiedza o majątku zmienia decyzje." },
      { glyph: "→", title: "Dłużnik ucieka z aktywami", body: "Czujesz, że firma jest „wydrażana” — szybkie sprawdzenie pozwala działać zawczasu." }
    ],
    processTitle: "Praca detektywa biznesowego.",
    process: [
      { title: "Zlecenie i zakres", desc: "Ustalamy, czego konkretnie szukamy: nieruchomości, banki, pojazdy, udziały, powiązania.", meta: "Dzień 1–2" },
      { title: "Zapytania w rejestrach", desc: "Występujemy do KW, CEPiK, KRS, banków (jeśli mamy tytuł wykonawczy), CRBR.", meta: "Dzień 2–10" },
      { title: "Analiza powiązań", desc: "Sprawdzamy spółki rodzinne, „słupy”, przesunięcia majątkowe (skarga pauliańska?).", meta: "Dzień 5–12" },
      { title: "Raport końcowy", desc: "Konkretny dokument: co dłużnik ma, gdzie i ile to warte. Z numerami ksiąg, kontami, rejestracjami.", meta: "Dzień 14" },
      { title: "Rekomendacja działań", desc: "Mówimy wprost, czy warto iść do sądu, jakiego komornika wybrać, czy zgłaszać upadłość.", meta: "Dzień 14" }
    ],
    pricingSection: "Stała opłata — <em>żadnych niespodzianek</em>.",
    pricingEyebrow: "Pakiet ryczałtowy",
    pricingHead: "Cena ustalona <em>z góry</em>, niezależnie od tego, co znajdziemy. Dostajesz raport — albo jasne stwierdzenie, że dłużnik faktycznie nic nie ma.",
    pricingBody: "W cenie pakietu — wszystkie podstawowe rejestry. Rozszerzenia (zagranica, dochodzenia operacyjne) wyceniamy osobno przed startem.",
    pricingFee: "<em>od 1 200 zł</em>",
    pricingCommission: "ryczałt",
    pricingContract: "Pakiet 14 dni",
    faqTitle: "FAQ — poszukiwanie majątku",
    faq: [
      { q: "Czy to legalne — czy to nie inwigilacja?", a: "Wszystkie nasze działania mieszczą się w ramach prawa o dostępie do informacji publicznej, prawa o bankach (przy posiadaniu tytułu wykonawczego), oraz innych podstaw prawnych. Nie hakujemy, nie kupujemy danych z czarnego rynku, nie nachodzimy w domu." },
      { q: "Co jeśli dłużnik faktycznie nic nie ma?", a: "Też dostajesz raport — z konkretnym stwierdzeniem „brak majątku w ujawnionych źródłach”. To bezcenna informacja: nie tracisz czasu i pieniędzy na egzekucję, która nie ma szans." },
      { q: "Czy znajdziecie ukryte konta zagraniczne?", a: "Częściowo — przez rejestry beneficjentów rzeczywistych w UE, struktury spółkowe, czasem przez kontrahentów. Pełna „rentgen” zagraniczny wymaga współpracy z prawnikiem międzynarodowym (osobny pakiet)." },
      { q: "Czy to działa razem z windykacją sądową?", a: "Najlepiej tak — najpierw wiemy, czego szukać, potem ścigamy. Wielu naszych klientów zleca poszukiwanie zanim w ogóle złoży pozew, żeby ocenić, czy gra jest warta świeczki." }
    ],
    ctaTitle: "<em>Wiedz</em>, zanim wydasz na sąd.",
    ctaBody: "Sprawdzimy, czy gra jest warta świeczki. Pełen raport o majątku dłużnika — w 14 dni."
  },

  /* ====================== 07 ====================== */
  "wywiad-gospodarczy": {
    displayName: "Wywiad gospodarczy",
    kind: "Sprawdzenie kontrahenta",
    heading: "Wywiad <em>gospodarczy</em>",
    lead: "Pełen rentgen kontrahenta zanim podpiszesz umowę. Kondycja finansowa, historia płatnicza, sygnały ryzyka — w jednym raporcie.",
    metaTime: "Raport <strong>w 24h</strong>",
    metaPricing: "Stała <strong>cena</strong>",
    metaResult: "<strong>30+</strong> źródeł danych",
    whatTitle: "Lepiej zapobiegać niż windykować.",
    whatLead: "70% problemów windykacyjnych zaczyna się od jednej decyzji — zaufania kontrahentowi, którego nie sprawdziłeś. Wywiad gospodarczy w 24 godziny mówi Ci, czy warto.",
    whatList: [
      "Pełna historia rejestrowa firmy (KRS, CEIDG, NIP, REGON)",
      "Wskaźniki finansowe (jeśli składa sprawozdania)",
      "Historia opóźnień w płatnościach (BIG, KRD, ERIF)",
      "Postępowania sądowe — czynne i zakończone",
      "Powiązania osobowe i kapitałowe",
      "Ocena ryzyka 1–10 z konkretnym uzasadnieniem"
    ],
    forWhoTitle: "Wywiad robi się, gdy…",
    forWho: [
      { glyph: "+", title: "Wchodzisz w nowego klienta", body: "Limit kupiecki, długi termin płatności, dużo opłat z góry — sprawdź, zanim zaufasz." },
      { glyph: "$", title: "Negocjujesz duży kontrakt", body: "Wartość kontraktu uzasadnia wydatek 200–500 zł na sprawdzenie partnera. Standard w korpo." },
      { glyph: "!", title: "Sygnały ostrzegawcze", body: "Kontrahent zaczął się spóźniać, branża szumi — to czas na drugi rentgen." }
    ],
    processTitle: "Tylko trzy kroki.",
    process: [
      { title: "Zlecenie", desc: "Wskazujesz nazwę firmy, NIP albo KRS. Wybierasz pakiet (Standard / Pro / Premium).", meta: "Dzień 0" },
      { title: "Analiza w 24h", desc: "Nasz analityk przeczesuje 30+ źródeł, składa pełen obraz kondycji firmy.", meta: "Dzień 1" },
      { title: "Raport i rekomendacja", desc: "Dostajesz PDF z konkretną oceną ryzyka 1–10 i rekomendacją: zaufaj / ostrożnie / unikaj.", meta: "Dzień 1" }
    ],
    pricingSection: "Trzy pakiety, <em>jasne ceny</em>.",
    pricingEyebrow: "Standard / Pro / Premium",
    pricingHead: "Wybierasz pakiet zależnie od wagi decyzji. Standard — szybki rentgen do <em>200 zł</em>. Premium — pełna analiza wraz z wywiadem osobowym.",
    pricingBody: "Wszystkie pakiety w 24 godziny. Subskrypcja roczna z dużym rabatem dla firm sprawdzających klientów regularnie.",
    pricingFee: "od <em>149 zł</em>",
    pricingCommission: "ryczałt",
    pricingContract: "1 raport / abonament",
    faqTitle: "FAQ — wywiad gospodarczy",
    faq: [
      { q: "Co dokładnie jest w raporcie Standard / Pro / Premium?", a: "Standard: historia rejestrowa, BIG/KRD/ERIF, postępowania sądowe, ocena ryzyka. Pro: + wskaźniki finansowe, powiązania kapitałowe, branża, konkurenci. Premium: + wywiad osobowy z właścicielem/zarządem, analiza branżowa, rekomendacje strategiczne." },
      { q: "Czy raport jest aktualny?", a: "Tak — generujemy go w czasie rzeczywistym z aktualnych źródeł. Datę i godzinę widać na każdej stronie raportu. Jeśli sprawdzasz tę samą firmę 6 miesięcy później, polecamy świeży raport (płacisz 50% ceny)." },
      { q: "Co, jeśli kontrahent się dowie?", a: "Standard i Pro — kontrahent się nie dowie, korzystamy wyłącznie ze źródeł publicznych i rejestrów płatniczych, których odpytanie nie generuje powiadomienia. Premium z wywiadem osobowym — tutaj kontrahent wie, że pojawiamy się w roli analityka." },
      { q: "Czy ten raport ma wartość dowodową w sądzie?", a: "Tak — to oficjalne źródła (KRS, BIG, sądowe rejestry), które są pełnoprawnymi dowodami. Wykorzystywane są często w postępowaniach o uznanie cesji za pozorną, w skardze pauliańskiej, w ocenie należytej staranności." }
    ],
    ctaTitle: "<em>Sprawdź</em>, zanim podpiszesz.",
    ctaBody: "200 zł oszczędza zwykle 200 tys. nieodzyskanej faktury. Zamów raport — będzie u Ciebie jutro."
  },

  /* ====================== 08 ====================== */
  "monitoring-naleznosci": {
    displayName: "Monitoring należności",
    kind: "Prewencja",
    heading: "Monitoring <em>należności</em>",
    lead: "Bierzemy na siebie pilnowanie terminów i miękkie ponaglenia. Twoi klienci dostają subtelne przypomnienia, a Ty dostajesz pieniądze na czas.",
    metaTime: "Działa <strong>codziennie</strong>",
    metaPricing: "Abonament <strong>od 199 zł</strong>",
    metaResult: "<strong>−40%</strong> opóźnień",
    whatTitle: "Cashflow bez napięć i niezręcznych telefonów.",
    whatLead: "Sam dzwonisz po faktury? Nie powinieneś. Monitoring to system, który robi to za Ciebie — tak, by relacja z klientem pozostała dobra, a pieniądze wpłynęły na czas.",
    whatList: [
      "Zaplanowane przypomnienia w Twoim brandingu",
      "Eskalacja: SMS → e-mail → telefon → wezwanie",
      "Integracja z Twoim systemem fakturowania",
      "Rzeczywisty obraz wszystkich nieopłaconych faktur",
      "Automatyczne eskalowanie do windykacji polubownej",
      "Miesięczny raport — kto płaci, kto nie"
    ],
    forWhoTitle: "Monitoring jest dla firm, które…",
    forWho: [
      { glyph: "B2B", title: "Wystawiają dużo faktur", body: "20+ faktur miesięcznie? Pilnowanie ręczne kosztuje więcej niż abonament." },
      { glyph: "$", title: "Mają napięty cashflow", body: "Każdy tydzień opóźnienia boli. Przypomnienie w dniu 0 vs. wezwanie w dniu 30 to inny świat." },
      { glyph: "+", title: "Cenią relacje z klientem", body: "Subtelny przypomnik z Twojej księgowej zamiast windykatora — nikt się nie obraża." }
    ],
    processTitle: "Setup w jeden dzień.",
    process: [
      { title: "Konfiguracja", desc: "Łączymy się z Twoim systemem (Comarch, Subiekt, iFirma, Fakturownia, własny) lub uruchamiamy formularz CSV.", meta: "Dzień 1" },
      { title: "Ustawienie reguł", desc: "Definiujemy schemat eskalacji: kiedy SMS, kiedy mail, kiedy telefon, jaki ton, kto się podpisuje.", meta: "Dzień 1–2" },
      { title: "Działanie ciche", desc: "System pracuje codziennie. Twoi klienci dostają przypomnienia z Twojej domeny, my je przygotowujemy.", meta: "Codziennie" },
      { title: "Eskalacja", desc: "Jeśli klient nie reaguje 14 dni — automatycznie sprawa idzie do naszego działu windykacji polubownej.", meta: "Dzień 30+" },
      { title: "Raporty", desc: "Co miesiąc dostajesz podsumowanie: ile faktur, ile zapłacono na czas, ile po terminie.", meta: "Co miesiąc" }
    ],
    pricingSection: "Abonament <em>zwraca się</em> w pierwszym tygodniu.",
    pricingEyebrow: "Trzy plany abonamentowe",
    pricingHead: "<em>Mały biznes</em> 199 zł / m-c — do 50 faktur. <em>Średni</em> 499 zł — do 200. <em>Enterprise</em> — bez limitu, dedykowany opiekun.",
    pricingBody: "W każdym pakiecie: nieograniczona liczba przypomnień, integracja z 12 systemami fakturującymi, miesięczny raport, automatyczne eskalowanie do windykacji.",
    pricingFee: "od <em>199 zł</em>",
    pricingCommission: "/ miesiąc",
    pricingContract: "Bez zobowiązań",
    faqTitle: "FAQ — monitoring należności",
    faq: [
      { q: "Czy klient zauważy, że to nie ja dzwonię?", a: "Nie — w pakietach Pro i Enterprise wszystkie maile, SMS-y i telefony są w Twoim brandingu i z Twojego numeru. Klient widzi je jak normalną korespondencję od Ciebie. To jest cała magia: system działa, ale Twoja relacja pozostaje osobista." },
      { q: "Co, jeśli klient i tak nie zapłaci?", a: "Po ustalonym czasie (zwykle 30 dni od pierwszego przypomnienia) sprawa automatycznie przechodzi do naszego działu windykacji polubownej — z pełną historią kontaktów. Brak luki, brak ręcznego przekazywania." },
      { q: "Z jakimi systemami fakturującymi się integrujecie?", a: "Comarch (Optima, ERP XL), Subiekt GT, Subiekt Nexo, iFirma, Fakturownia, inFakt, Wfirma, FakturaXL, Symfonia, Enova, własny system przez API. Brak Twojego? Importujesz CSV / wysyłasz mailem listę." },
      { q: "Czy mogę zrezygnować w każdej chwili?", a: "Tak — abonament jest miesięczny, bez zobowiązań rocznych, bez kar za rezygnację. Wypowiadasz w panelu, kończymy w dniu zakończenia okresu rozliczeniowego." }
    ],
    ctaTitle: "Pierwsze 14 dni <em>za darmo</em>.",
    ctaBody: "Skonfigurujemy Ci system w 1 dzień — pokażemy, jak działa na Twoich realnych fakturach, bez płacenia."
  },

  /* ====================== 09 ====================== */
  "obsluga-prawna": {
    displayName: "Obsługa prawna",
    kind: "Wsparcie kancelarii",
    heading: "Obsługa <em>prawna</em>",
    lead: "Stała kancelaria po Twojej stronie — od opiniowania umów po reprezentację w sądzie. Specjalizujemy się w windykacji, ale obsługujemy szeroko.",
    metaTime: "Pierwsza opinia <strong>w 48h</strong>",
    metaPricing: "Stawka godzinowa <strong>lub abonament</strong>",
    metaResult: "<strong>15 lat</strong> praktyki",
    whatTitle: "Kancelaria, która myśli jak biznes.",
    whatLead: "Dobra umowa zapobiega 80% przyszłych windykacji. Nasi prawnicy przeszli przez tysiące spraw — wiedzą nie tylko, jak ułożyć kontrakt, ale i jak będzie czytany w sądzie.",
    whatList: [
      "Opiniowanie i przygotowywanie umów handlowych",
      "Wezwania i pisma procesowe",
      "Reprezentacja przed sądami i KIO",
      "Doradztwo przy windykacji i upadłości",
      "Skarga pauliańska, postępowania kuratorskie",
      "Pełna obsługa abonamentowa firm"
    ],
    forWhoTitle: "Obsługa prawna ma sens dla…",
    forWho: [
      { glyph: "B2B", title: "Firmy z dużym wolumenem umów", body: "Codziennie podpisujesz nowe kontrakty? Dedykowany prawnik za stałą stawkę zwraca się w pierwszym miesiącu." },
      { glyph: "+", title: "Firmy w sporach", body: "Reprezentujemy w sądzie, prowadzimy negocjacje, pilnujemy terminów — by Ty mógł prowadzić biznes." },
      { glyph: "?", title: "Firmy w ryzyku", body: "Restrukturyzacja, upadłość kontrahenta, sankcje — sprawy wymagające specjalisty od pierwszego dnia." }
    ],
    processTitle: "Współpraca, jaką wybierasz.",
    process: [
      { title: "Pierwsza rozmowa", desc: "30 min bezpłatnie — opisujesz sprawę, my mówimy, czy i jak możemy pomóc.", meta: "0–48h" },
      { title: "Wybór formy", desc: "Pojedyncza usługa (godziny), pakiet (np. opiniowanie 5 umów), abonament (stała opieka).", meta: "Dzień 1–3" },
      { title: "Praca", desc: "Pełna komunikacja przez panel klienta — dokumenty, korespondencja, rozliczenia w jednym miejscu.", meta: "Bieżąco" },
      { title: "Raporty i rozliczenia", desc: "Miesięcznie dostajesz zestawienie spraw, godzin, kosztów — bez faktur-niespodzianek.", meta: "Co miesiąc" }
    ],
    pricingSection: "Trzy modele — dobierasz <em>do biznesu</em>.",
    pricingEyebrow: "Godzinowo / pakiety / abonament",
    pricingHead: "<em>Godzinowo</em> od 280 zł netto. <em>Pakiety</em> od 1 200 zł (np. 5 umów). <em>Abonament</em> od 1 800 zł / m-c — stała opieka, priorytet.",
    pricingBody: "W abonamencie: ustalona pula godzin co miesiąc + niewykorzystane przechodzą na kolejny okres. Specjalne stawki dla stałych klientów windykacyjnych.",
    pricingFee: "od <em>280 zł / h</em>",
    pricingCommission: "lub abonament",
    pricingContract: "Pojedyncza / pakiet / m-c",
    faqTitle: "FAQ — obsługa prawna",
    faq: [
      { q: "Jaka jest różnica między obsługą u Was a u typowej kancelarii?", a: "Specjalizacja. Większość kancelarii ogólnych obsługuje od rozwodów po nieruchomości. My — wyłącznie firmy, z mocnym backgroundem w windykacji i sporach handlowych. To oznacza krótszy czas reakcji i lepszą cenę za godzinę specjalisty." },
      { q: "Czy obsługujecie też klientów spoza windykacji?", a: "Tak — pełen zakres prawa gospodarczego: umowy, spory korporacyjne, ochrona danych (RODO), sprawy pracownicze, restrukturyzacja. Windykacja jest naszą specjalizacją, ale stanowi około połowy spraw." },
      { q: "Czy mogę kupić pojedynczą usługę bez abonamentu?", a: "Tak — wiele osób zaczyna od pojedynczej opinii albo jednego pisma. Jeśli sprawa się przedłuża, łatwo przechodzimy na rozliczenie godzinowe albo abonament. Bez wpychania pakietów na siłę." },
      { q: "Kto będzie moim głównym kontaktem?", a: "Dedykowany prawnik prowadzący — zwykle radca prawny z 5–15-letnim doświadczeniem. Każda sprawa ma jednego głównego opiekuna, który Cię zna i który decyduje, kiedy włączyć innych specjalistów (np. doradcę podatkowego)." }
    ],
    ctaTitle: "Pierwsza rozmowa <em>za zero</em>.",
    ctaBody: "Opowiedz o sprawie — w 30 minut wiesz, czy potrzebujesz prawnika, jakiego i ile to kosztuje."
  },

  /* ====================== 10 ====================== */
  "pieczec-prewencyjna": {
    displayName: "Pieczęć prewencyjna",
    kind: "Profilaktyka",
    heading: "Pieczęć <em>prewencyjna</em>",
    lead: "Stempel na fakturze i w stopce maila, który mówi dłużnikowi: jeśli się spóźnisz, sprawa od razu trafia do windykacji. Działa bez Twojego udziału.",
    metaTime: "Wdrożenie <strong>w 1 dzień</strong>",
    metaPricing: "Roczny <strong>ryczałt</strong>",
    metaResult: "<strong>−25%</strong> opóźnień",
    whatTitle: "Najtańszy sposób, by faktury były płacone na czas.",
    whatLead: "Sam komunikat „w razie opóźnienia sprawa trafia do Hadyński Inkaso” zmienia zachowanie kontrahentów. Płacą szybciej — bo wiedzą, że za fakturą stoi profesjonalna windykacja.",
    whatList: [
      "Pieczęć / grafika do faktur (PDF, druk)",
      "Banner do stopki e-maili i fakturowania",
      "Logo do umów handlowych",
      "Strona „weryfikacji” — kontrahent może sprawdzić Twoje uprawnienie",
      "Automatyczna eskalacja do windykacji po terminie",
      "Roczny pakiet — bez dopłat za ilość faktur"
    ],
    forWhoTitle: "Pieczęć działa, gdy…",
    forWho: [
      { glyph: "B2B", title: "Pracujesz z B2B", body: "Twoi klienci to firmy, które mają księgowość — przypominasz im, że są profesjonalnym podmiotem ze zobowiązaniami." },
      { glyph: "+", title: "Wystawiasz dużo faktur", body: "Im więcej faktur w obrocie, tym większy efekt prewencyjny. Każda jest „głośnikiem” Twojej polityki płatności." },
      { glyph: "$", title: "Małe i średnie firmy", body: "Bez dużego działu prawnego — pieczęć daje wagę „korpo”, którą sam byś musiał budować latami." }
    ],
    processTitle: "Aktywacja w jeden dzień.",
    process: [
      { title: "Zlecenie", desc: "Wybierasz pakiet, podajesz dane firmy, akceptujesz warunki (1 strona PDF).", meta: "Dzień 1" },
      { title: "Pakiet graficzny", desc: "Otrzymujesz w mailu: pieczęć w PNG/SVG, banner do stopki, logo do umów. Zoptymalizowane pod druk i ekran.", meta: "Dzień 1" },
      { title: "Wdrożenie", desc: "Wstawiasz w szablon faktur i podpisu. Pomagamy z głównymi systemami — Subiekt, Comarch, Fakturownia.", meta: "Dzień 1–2" },
      { title: "Działanie ciche", desc: "Pieczęć pracuje na każdej fakturze. Klienci widzą i pamiętają. Statystyki widzisz w panelu.", meta: "Codziennie" },
      { title: "Eskalacja", desc: "Jeśli klient mimo wszystko się spóźnia — sprawa idzie do windykacji w preferencyjnej cenie (jako użytkownik pieczęci).", meta: "Po terminie" }
    ],
    pricingSection: "<em>Roczny abonament</em>, bez limitu faktur.",
    pricingEyebrow: "Trzy pakiety — Solo / Biznes / Premium",
    pricingHead: "<em>Solo</em> 690 zł / rok — pieczęć + banner. <em>Biznes</em> 1 290 zł — + dedykowana strona weryfikacji. <em>Premium</em> 2 490 zł — + 5 spraw windykacyjnych w prowizji 0%.",
    pricingBody: "Wszystkie pakiety: bez limitu faktur, bez ukrytych opłat, jeden roczny ryczałt. Faktura na początek roku, zwrot proporcjonalny przy rezygnacji.",
    pricingFee: "od <em>690 zł / rok</em>",
    pricingCommission: "ryczałt",
    pricingContract: "Roczny",
    faqTitle: "FAQ — pieczęć prewencyjna",
    faq: [
      { q: "Czy to działa? Skąd te 25% mniej opóźnień?", a: "Z naszych statystyk z ponad 800 klientów rok w rok. To badanie wewnętrzne, ale potwierdzone przez większe analizy branżowe — sam komunikat o profesjonalnej windykacji w stopce faktury skraca średni czas płatności o 25–35%. Jest to znane zjawisko psychologiczne: presja społeczna." },
      { q: "Czy mogę używać pieczęci, jeśli nie zlecam Wam windykacji?", a: "Tak — z jednym warunkiem. Pieczęć stanowi zobowiązanie, że w razie sporu sprawa wpłynie do nas. Jeśli klient nie zapłaci i Ty zdecydujesz się na innego windykatora — to Twoja decyzja, ale konsekwencja jest taka, że pieczęć przestaje być wiarygodna dla Twoich kontrahentów." },
      { q: "Co dostaję w pakiecie graficznym?", a: "Pieczęć w 3 wariantach (kolorowa, czarno-biała, do druku), banner do stopki e-mail (PNG i HTML), logo do umów (SVG), wzór klauzuli prawnej do regulaminu. Wszystko w jednym ZIP, dostarczane w ciągu kilku godzin od zamówienia." },
      { q: "Co, jeśli klient zlekceważy pieczęć?", a: "Wtedy sprawa idzie do nas — i jako użytkownik pieczęci masz preferencyjną stawkę prowizji (zwykle −2 do −4 punkty procentowe niż standardowa). Czyli pieczęć działa nawet wtedy, kiedy nie zadziałała prewencyjnie." }
    ],
    ctaTitle: "<em>Najmniejsza inwestycja</em>, najszybszy efekt.",
    ctaBody: "690 zł rocznie. Jedna spóźniona faktura mniej i pakiet już się zwrócił."
  }
};
