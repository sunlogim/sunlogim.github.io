window.CODES = {
 "Urządzenie offline": {
  "cat": "Konto / Uprawnienia",
  "alias": "offline 21 nie online brak połączenia urządzenie nie znalezione",
  "sym": "Host pokazuje „offline” na liście sterującego, albo komunikat, że urządzenia nie znaleziono (kod logu 21)",
  "l1": "Upewnij się, że PC-host jest włączony, online, nie śpi, klient SunLogin działa i jest „zalogowany”; przy niestabilnej sieci zrestartuj router lub zmień sieć",
  "l2": "Offline = host po prostu nie jest online, nie patrz najpierw na sieć: po uśpieniu karta sieciowa często się rozłącza, zamknięcie pokrywy laptopa zrywa WiFi, tryb oszczędzania Androida zabija tło; w Windows sprawdź w services.msc, czy usługa „SunLogin” działa",
  "tip": "Host bez nadzoru długoterminowo: włącz „autostart + automatyczne logowanie + dostęp bez nadzoru”, w Androidzie dodaj SunLogin do białej listy oszczędzania energii",
  "scene": "Łączę się ze domowym PC i jest offline; laptop stracił WiFi po zamknięciu pokrywy"
 },
 "Przekroczono limit czasu": {
  "cat": "Sieć / Traversal",
  "alias": "timeout limit czasu brak połączenia błąd połączenia 15 3 kanał",
  "sym": "Po kliknięciu połącz kręci się i w końcu „błąd połączenia / kanał nieustanowiony” (kod 3=brak sieci, 15=limit czasu ustanowienia kanału)",
  "l1": "Najpierw wyłącz zaporę / antywirus po obu stronach i spróbuj; wyloguj i zaloguj ponownie na obu; zaktualizuj do najnowszej; zmień środowisko sieci (hotspot telefonu)",
  "l2": "90% „błędów połączenia” blokuje się na fazie 2 „ustanowienie kanału”: 15=P2P nie przechodzi i relay też zawodzi (sieć za słaba), 3=warstwa sieci jest zablokowana; jeśli przez hotspot się łączy, to w zasadzie problem sieci / zapory",
  "tip": "Lokalizuj w 3 fazach: weryfikacja konta → ustanowienie kanału → transmisja obrazu; limit czasu prawie zawsze na „ustanowieniu kanału”",
  "scene": "Brak połączenia w pracy, w domu lub przez hotspot łączy się od razu → problem środowiska sieci, nie zepsute oprogramowanie"
 },
 "Błędne hasło dostępu": {
  "cat": "Konto / Uprawnienia",
  "alias": "hasło weryfikacja nieudana 10 access password",
  "sym": "Po wpisaniu hasła komunikat o nieudanej weryfikacji / błędnym haśle (kod logu 10)",
  "l1": "Upewnij się, że wpisujesz „hasło dostępu”, a nie hasło logowania do konta SunLogin; zresetuj hasło dostępu na hoście i połącz się ponownie",
  "l2": "Hasło dostępu to osobne zdalne hasło, które ustawia host; często zmienione lub mylone z hasłem logowania; po zmianie sterujący używa nowego",
  "tip": "Hasło dostępu ≠ hasło logowania: zobacz / zresetuj w „Ustawienia → Bezpieczeństwo” hosta",
  "scene": "Wciąż używasz hasła konta logowania do łączenia; oczywiście jest błąd"
 },
 "Blokada zapory": {
  "cat": "Sieć / Traversal",
  "alias": "zapora firewall defender antywirus biała lista blokada",
  "sym": "Połączenie od razu przekracza limit czasu bez żadnego okienka (po cichu zablokowane przez ochronę, ponad połowa błędów połączenia)",
  "l1": "Dodaj SunLogin do zaufania zapory / ochrony: w Zaporze Windows Defender „zezwól aplikacji” zaznacz SunloginClient; dodaj zaufanie w antywirusie innej firmy",
  "l2": "Biała lista musi obejmować cały folder instalacji (np. C:\\Program Files (x86)\\Oray\\SunLogin\\), nie tylko główny exe—SunLogin wywołuje przy działaniu kilka komponentów",
  "tip": "Szybka weryfikacja: zamknij całkowicie ochronę (nie tylko ochronę w czasie rzeczywistym) i połącz; jeśli się łączy, to w 100% ona blokowała",
  "scene": "Myślałeś, że sieć jest zepsuta; w rzeczywistości antywirus po cichu blokował żądanie sieciowe SunLogin"
 },
 "Sieć firmowa nie łączy": {
  "cat": "Sieć / Traversal",
  "alias": "sieć firmowa sieć kampusowa przedsiębiorstwo dpi zarządzanie zachowaniem internetowym port 443",
  "sym": "W domu się łączy, w pracy / szkole nie (port przechodzi, ale ruch hamuje głęboka inspekcja pakietów)",
  "l1": "Poproś firmowe IT o dopuszczenie białej listy SunLogin; albo użyj tymczasowo hotspotu telefonu na hoście, by ominąć; spróbuj SunLogin wersji SOS (inny sposób połączenia)",
  "l2": "Sieci firmowe często mają urządzenia zarządzania zachowaniem internetowym; SunLogin przez TCP 443 (ten sam port co HTTPS) jest rozpoznawany i blokowany przez DPI; doświadczenie społeczności: dopuść TCP 51020–51030 + UDP 50000–50010 na routerze firmowym, albo zmień tryb połączenia z „szybkiego” na „zgodny” (80/443, bardziej uniwersalny)",
  "tip": "Aby sprawdzić, czy to sieć firmowa: przełącz obie na hotspot telefonu; jeśli się łączy, to w 100% blokada sieci firmowej",
  "scene": "Firma stosuje DPI i traktuje SunLogin jako nietypowy ruch HTTPS i blokuje"
 },
 "Czarny ekran": {
  "cat": "Obraz / Wydajność",
  "alias": "czarny ekran black screen brak obrazu cały czarny transmisja obrazu",
  "sym": "Łączy się, ale ekran jest cały czarny / tylko czarny (zablokowane na fazie 3 „transmisja obrazu”)",
  "l1": "Nadaj SunLogin uprawnienia na hoście: macOS „Ustawienia systemowe → Prywatność i bezpieczeństwo” zaznacz nagrywanie ekranu / dostępność / pełny dostęp do dysku; Windows spróbuj zmienić tryb pulpitu / połączyć ponownie",
  "l2": "Czarny ekran to zwykle brak uprawnienia do przechwytywania lub przełączenie na dedykowany GPU, ochrona ekranu blokady; na laptopach z dedykowanym GPU można w polityce zasilania kazać SunLogin przechwytywać przez iGPU",
  "tip": "Od macOS Ventura ścieżka uprawnień przeniosła się do „Ustawień systemowych”; wpisanie „nagrywanie ekranu” w wyszukiwarce jest najszybsze",
  "scene": "Świeżo zainstalowany Mac-host łączy się cały czarny: brakowało uprawnienia „nagrywanie ekranu”"
 },
 "Widać bez sterowania": {
  "cat": "Obraz / Wydajność",
  "alias": "nie da się sterować mysz klawiatura brak reakcji control tylko widać dostępność",
  "sym": "Ekran widać, ale kliknięcia myszą i klawiaturą nie reagują (widać bez sterowania)",
  "l1": "Włącz „Zezwól na zdalne sterowanie” na hoście; macOS wymaga uprawnienia „dostępność”, w Windows uważaj na UAC / okna administratora, które potrzebują odpowiedniego uprawnienia",
  "l2": "„Widać bez sterowania” to prawie zawsze problem uprawnienia wstrzykiwania wejścia: dostępność macOS niezaznaczona, albo host wyświetlił bezpieczny pulpit UAC wymagający administratora (SunLogin musi działać jako administrator, by sterować)",
  "tip": "Przy trybie tylko do odczytu: najpierw potwierdź, że „Zezwól na zdalne sterowanie” jest włączone, w macOS dodaj „dostępność”, w Windows uruchom SunLogin jako administrator",
  "scene": "Sterujesz cudzym PC, ekran widać, ale kliknięcia nic nie robią → drugi nie włączył „Zezwól na zdalne sterowanie”"
 },
 "Lag i wysokie opóźnienie": {
  "cat": "Obraz / Wydajność",
  "alias": "lag opóźnienie ping smuga nie płynnie wolno",
  "sym": "Przeciąganie okien się tnie, wpisywanie pojawia się po 2–3 s, mysz zostawia smugę (doświadczenie opóźnienia wyraźnie się pogarsza)",
  "l1": "Przełącz na tryb pulpitu „biuro / płynnie”, by obniżyć jakość i fps; zamknij na hoście pobierania / wideo zjadające pasmo; preferuj kabel lub WiFi 5 GHz",
  "l2": "Rozkład przyczyn (pomiary społeczności): relay 35% > za wysoka jakość 25% > niewystarczająca wydajność hosta 20% > słaba sieć 15% > limit fps 5%; poziomy opóźnienia: <30 ms prawie lokalnie, 80–150 ms wyraźnie się tnie, >150 ms prawie tylko kliknięcia. Powyżej 100 ms regulacja jakości nic nie da; wąskie gardło to sieć",
  "tip": "Najpierw spójrz w lewy dolny róg, czy to P2P czy relay; obniżenie głębi koloru z 32 bitów o jeden poziom może o połowę zmniejszyć użycie pasma",
  "scene": "Przy 120 ms opóźnienia zaznaczanie w tabeli nie nadąża za myszą; z kablem + trybem biurowym staje się płynnie"
 },
 "Tryb relay": {
  "cat": "Sieć / Traversal",
  "alias": "relay przekazywanie p2p nie przechodzi nat upnp symetryczny między operatorami",
  "sym": "Klient pokazuje „Relay” zamiast „P2P” w lewym dolnym rogu, ogólne opóźnienie wysokie, mysz zostawia smugę",
  "l1": "SunLogin wybiera tryb połączenia automatycznie, nie da się przełączyć ręcznie; rozłącz i połącz ponownie (z odstępem 10 s i więcej), by system ponowił próbę P2P",
  "l2": "Zwiększenie skuteczności przebicia P2P: ① włącz UPnP routera (domowe routery często są domyślnie wyłączone; po włączeniu skuteczność mocno rośnie); ② nie zostawiaj obu stron za symetrycznym NAT, zmień sieć jednej strony; ③ między różnymi operatorami, nawet gdy P2P przechodzi, opóźnienie pozostaje wysokie, czasem wymuszony relay jest stabilniejszy (serwer SunLogin ma łącza dedykowane między operatorami)",
  "tip": "UPnP włączone, a nadal relay — prawdopodobnie symetryczny NAT; przy scenariuszach między operatorami spróbuj relay",
  "scene": "Wyłączyłem relay, włączyłem UPnP i od razu przeszło na P2P, opóźnienie 120 ms→35 ms"
 },
 "Rozmyty obraz": {
  "cat": "Obraz / Wydajność",
  "alias": "jakość rozmyte ostrość rozdzielczość kolor true color bitrate",
  "sym": "Obraz jest rozmyty w ruchu, mało ostry (zwłaszcza przy przeciąganiu / wideo)",
  "l1": "Gdy brakuje pasma SunLogin obniża jakość automatycznie dla płynności; dla większej ostrości podnieś jakość / fps ręcznie, albo przełącz na tryb „HD / jakość”",
  "l2": "Rozdzielczość najwyższej jakości jest ograniczona fizycznym limitem monitora hosta (jeśli host ma tylko 1080p, brak zdalnego 4K); do profesjonalnego odwzorowania użyj true color 4:4:4; dekodowanie sprzętowe przekazuje przetwarzanie GPU sterującego i obniża użycie CPU",
  "tip": "Priorytet ostrości: ustaw rozdzielczość na „podążaj za sterującym” + pełny ekran, unikaj rozmycia przez rozciąganie",
  "scene": "W trybie HD pasmo nie nadąża i jakość spada automatycznie → rozmyte w ruchu, wraca gdy sieć się poprawia"
 },
 "30 fps wersja darmowa": {
  "cat": "Obraz / Wydajność",
  "alias": "30fps liczba klatek fps wersja darmowa 60fps 144fps płatne",
  "sym": "Opóźnienie nie jest wysokie, ale przeciąganie okien / przewijanie wyraźnie nie jest płynne i ze smugą (to nie sieć, lecz limit klatek)",
  "l1": "Konto darmowego poziomu sięga 30 fps; dla większej płynności podnieś poziom usługi konta: płatnie do 60 fps, wersja gamingowa do 144 fps",
  "l2": "Maksymalna liczba klatek jest też ograniczona częstotliwością odświeżania monitorów obu stron: jeśli jeden ma 60 Hz, nie przekroczysz 60 FPS; 144 fps wymaga GPU + monitora 144 Hz oraz wsparcia kodowania sprzętowego przez GPU hosta",
  "tip": "Różnica między 30 a 60 fps jest bardzo odczuwalna; Android płatnie też ma 60 fps, bardziej czuły na dotyk",
  "scene": "W wersji darmowej przeciąganie okien daje smugę; po przejściu na 60 fps wyraźnie płynniej"
 },
 "Błąd wake": {
  "cat": "Konto / Uprawnienia",
  "alias": "wake wybudzanie uśpienie sleep wyłączenie zdalny rozruch bez nadzoru",
  "sym": "Host nie łączy się po uśpieniu / śnie, albo chcesz go uruchomić zdalnie, ale się nie budzi",
  "l1": "Wybudź „funkcją Wake” SunLogin (trzeba wcześniej włączyć na hoście); ustaw host na nieusypianie, włącz „dostęp bez nadzoru”",
  "l2": "Zdalny wake zależy od WOL (Wake-on-LAN) + usługi wake SunLogin; wymaga wsparcia zasilania / karty sieciowej hosta i wcześniejszej konfiguracji; przy całkowitym odcięciu zasilania / wyłączeniu nie da się wybudzić programowo",
  "tip": "Niezbędne dla bez nadzoru: autostart + automatyczne logowanie + nieusypianie + wcześniej włącz wake",
  "scene": "W podróży chcesz połączyć się z domowym PC, ale on śpi i nie włączyłeś wake wcześniej → brak połączenia"
 },
 "Inne konto": {
  "cat": "Konto / Uprawnienia",
  "alias": "konto się nie zgadza lista urządzeń niewidoczna dwa konta token ponowne logowanie",
  "sym": "Urządzenia do sterowania nie widać na liście, albo wygląda na online, choć już odpadło",
  "l1": "Sterując własnymi urządzeniami, sterujący i host logują się na to samo konto SunLogin; otwórz ponownie klienta hosta i sprawdź, czy prosi o ponowne logowanie",
  "l2": "Urządzenie konta A nie jest widoczne w koncie B; długo nieużywane urządzenia tracą token, wyglądają na online, ale odpadły, ponowne logowanie przywraca; unikaj wielu urządzeń na jednym koncie naraz (destabilizuje usługę)",
  "tip": "Obie strony obowiązkowo to samo konto; pokazuje online, ale nie łączy — niech host najpierw zaloguje się ponownie raz",
  "scene": "Host na koncie A, sterujący na koncie B: urządzenia po prostu nie widać na liście"
 },
 "Wersja protokołu się nie zgadza": {
  "cat": "Wersja / Protokół",
  "alias": "wersja protokół 30 się nie zgadza aktualizacja przeinstalowanie cache",
  "sym": "Duża różnica wersji powoduje błąd połączenia / anomalię zgodności (kod logu 30)",
  "l1": "Zaktualizuj obie strony do najnowszej (klient → o programie → zobacz numer wersji), zrestartuj klienta; jeśli nadal, zrestartuj urządzenie, wyczyść pamięć podręczną",
  "l2": "Protokół SunLogin aktualizuje się dość często; jedna strona w starej wersji (np. z 2024) łatwo jest niezgodna z nową; wielu aktualizuje tylko sterującego, a host miesiącami nietknięty",
  "tip": "Pełna reinstalacja (gdy nadal nie łączy): odinstaluj i usuń %AppData%\\Oray\\SunLogin oraz %ProgramData%\\Oray\\SunLogin, potem zainstaluj najnowszą wersję",
  "scene": "Host od pół roku bez aktualizacji; po upgrade sterującego protokół się nie zgadza → błąd połączenia"
 },
 "Niewystarczająca wydajność hosta": {
  "cat": "Obraz / Wydajność",
  "alias": "wydajność cpu pamięć lag host zasoby kodowanie stary pc",
  "sym": "Opóźnienie operacji faluje, obraz się tnie (zasoby hosta przeciążone, kodowanie nie nadąża)",
  "l1": "Zamknij na hoście nieużywane programy, by zwolnić pamięć (Chrome z wieloma kartami zjada dużo); obniż tryb pulpitu do „ultraszybko / płynnie”",
  "l2": "Przechwytywanie i kodowanie SunLogin wymagają CPU / pamięci: tryb biurowy ~CPU 5–15% / pamięć 150–200 MB, HD / gaming ~CPU 20–40% / 200–400 MB; jeśli host kompiluje / ma VM / skan antywirusa / aktualizację systemu, wyraźnie zwalnia",
  "tip": "Na starych PC: zwiększ pamięć (4G→8G), wymień HDD na SSD, włącz „priorytet dekodowania sprzętowego”, by GPU dzieliło obciążenie, wszystko pomaga",
  "scene": "Host pobiera aktualizację Windows, CPU na 40%, a zdalny obraz się tnie"
 }
};
window.LABELS = {"miss": "Objawu nie ma na liście; spróbuj innego słowa kluczowego lub zobacz pełną tabelę poniżej."};
window.FIELDS = [["sym", "Objaw / wyzwalacz"], ["l1", "L1 najpierw sprawdź (oficjalne)"], ["l2", "L2 przyczyna źródłowa (sieć)"], ["tip", "Wskazówka"], ["scene", "Realny przypadek"]];
window.THEAD = ["Objaw / błąd", "Kategoria", "L1 najpierw sprawdź (oficjalne)", "L2 przyczyna źródłowa"];
