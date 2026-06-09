window.CODES = {
 "Gerät offline": {
  "cat": "Konto / Berechtigungen",
  "alias": "offline 21 nicht online keine verbindung gerät nicht gefunden",
  "sym": "Der Host erscheint in der Steuerliste \"offline\", oder es heißt Gerät nicht gefunden (Log-Fehlercode 21)",
  "l1": "Bestätige, dass der Host-PC eingeschaltet, online und nicht im Ruhezustand ist, der SunLogin-Client läuft und \"angemeldet\" zeigt; bei instabilem Netz Router neu starten oder Netzwerk wechseln",
  "l2": "Offline = der Host ist schlicht nicht online, schau nicht zuerst aufs Netz: nach dem Ruhezustand trennt sich oft die Netzwerkkarte, Laptop-Deckel zu trennt das WLAN, Android-Energiesparmodus killt den Hintergrund; unter Windows in services.msc prüfen, ob der Dienst \"SunLogin\" läuft",
  "tip": "Langfristig unbeaufsichtigter Host: \"Autostart + automatische Anmeldung + unbeaufsichtigter Zugriff\" aktivieren, unter Android SunLogin zur Energiespar-Whitelist hinzufügen",
  "scene": "Fernzugriff auf den Heim-PC zeigt offline; das Laptop verlor beim Schließen des Deckels das WLAN"
 },
 "Zeitüberschreitung": {
  "cat": "Netzwerk / Traversal",
  "alias": "timeout zeitüberschreitung keine verbindung verbindungsfehler 15 3 kanal",
  "sym": "Nach Klick auf Verbinden dreht es und schließlich \"Verbindungsfehler / Kanal nicht aufgebaut\" (Code 3=kein Netz, 15=Zeitüberschreitung beim Kanalaufbau)",
  "l1": "Zuerst Firewall / Antivirus beider Seiten ausschalten und testen; beide ab- und neu anmelden; auf die neueste Version aktualisieren; Netzwerkumgebung wechseln (Handy-Hotspot)",
  "l2": "90 % der \"Verbindungsfehler\" hängen in Phase 2 \"Kanalaufbau\": 15=P2P kommt nicht durch und das Relay scheitert auch (Netz zu schlecht), 3=die Netzwerkschicht ist blockiert; verbindet es per Hotspot, ist es im Grunde ein Netzwerk- / Firewall-Problem",
  "tip": "In 3 Phasen lokalisieren: Konto prüfen → Kanal aufbauen → Bild übertragen; die Zeitüberschreitung liegt fast immer beim \"Kanalaufbau\"",
  "scene": "Keine Verbindung im Büro, zu Hause oder per Hotspot sofort → Problem der Netzwerkumgebung, keine kaputte Software"
 },
 "Falsches Zugangspasswort": {
  "cat": "Konto / Berechtigungen",
  "alias": "passwort prüfung fehlgeschlagen 10 access password",
  "sym": "Nach Eingabe des Passworts heißt es Prüfung fehlgeschlagen / falsches Passwort (Log-Code 10)",
  "l1": "Bestätige, dass du das \"Zugangspasswort\" eingibst und nicht das Login-Passwort des SunLogin-Kontos; am Host das Zugangspasswort zurücksetzen und neu verbinden",
  "l2": "Das Zugangspasswort ist das separate Fernpasswort, das der Host festlegt; oft geändert oder mit dem Login-Passwort verwechselt; nach der Änderung nutzt der Steuernde das neue",
  "tip": "Zugangspasswort ≠ Login-Passwort: am Host unter \"Einstellungen → Sicherheit\" ansehen / zurücksetzen",
  "scene": "Immer das Passwort des Login-Kontos zum Verbinden benutzt; natürlich kommt ein Fehler"
 },
 "Firewall-Blockade": {
  "cat": "Netzwerk / Traversal",
  "alias": "firewall defender antivirus whitelist blockade",
  "sym": "Die Verbindung läuft sofort ohne jedes Popup ab (still von der Security blockiert, mehr als die Hälfte der Verbindungsfehler)",
  "l1": "SunLogin der Firewall- / Security-Vertrauensliste hinzufügen: in der Windows-Defender-Firewall \"App zulassen\" SunloginClient anhaken; im Drittanbieter-Antivirus Vertrauen hinzufügen",
  "l2": "Die Whitelist muss den ganzen Installationsordner umfassen (z. B. C:\\Program Files (x86)\\Oray\\SunLogin\\), nicht nur die Haupt-exe—SunLogin ruft beim Laufen mehrere Komponenten auf",
  "tip": "Schnelltest: die Security ganz schließen (nicht nur den Echtzeitschutz) und verbinden; verbindet es, blockierte sie zu 100 %",
  "scene": "Dachtest, das Netz sei kaputt; in Wahrheit blockierte der Antivirus still die Netzanfrage von SunLogin"
 },
 "Firmennetz keine Verbindung": {
  "cat": "Netzwerk / Traversal",
  "alias": "firmennetz campusnetz unternehmen dpi internet-verhaltensmanagement port 443",
  "sym": "Zu Hause verbindet es, im Büro / in der Schule nicht (der Port geht durch, aber der Traffic wird von Deep Packet Inspection gebremst)",
  "l1": "Bitte die Firmen-IT um Whitelist-Freigabe für SunLogin; oder am Host vorübergehend den Handy-Hotspot zum Umgehen nutzen; SunLogin SOS-Version probieren (andere Verbindungsart)",
  "l2": "Firmennetze haben oft Geräte fürs Internet-Verhaltensmanagement; SunLogin über TCP 443 (gleicher Port wie HTTPS) wird von DPI erkannt und blockiert; Community-Erfahrung: am Firmenrouter TCP 51020–51030 + UDP 50000–50010 freigeben, oder den Verbindungsmodus von \"Hochgeschwindigkeit\" auf \"Kompatibel\" (80/443, generischer) umstellen",
  "tip": "Ob es das Firmennetz ist: beide auf Handy-Hotspot wechseln; verbindet es, ist es zu 100 % die Firmennetz-Blockade",
  "scene": "Die Firma nutzt DPI und behandelt SunLogin als anormalen HTTPS-Traffic und blockiert ihn"
 },
 "Schwarzer Bildschirm": {
  "cat": "Bild / Leistung",
  "alias": "schwarzer bildschirm black screen kein bild alles schwarz bildübertragung",
  "sym": "Verbindet, aber der Bildschirm ist ganz schwarz / nur schwarz (hängt in Phase 3 \"Bildübertragung\")",
  "l1": "Dem SunLogin am Host Berechtigungen geben: macOS \"Systemeinstellungen → Datenschutz & Sicherheit\" Bildschirmaufnahme / Bedienungshilfen / vollständiger Festplattenzugriff anhaken; Windows Desktop-Modus wechseln / neu verbinden",
  "l2": "Schwarzer Bildschirm ist meist fehlende Aufnahmeberechtigung oder Umschalten auf dedizierte GPU, Sperrbildschirm-Schutz; bei Laptops mit dedizierter GPU kann man SunLogin in der Energierichtlinie über die iGPU aufnehmen lassen",
  "tip": "Seit macOS Ventura liegt der Berechtigungspfad in den \"Systemeinstellungen\"; \"Bildschirmaufnahme\" in der Suche einzugeben ist am schnellsten",
  "scene": "Ein frisch installierter Mac-Host verbindet ganz schwarz: die Berechtigung \"Bildschirmaufnahme\" fehlte"
 },
 "Sichtbar nicht steuerbar": {
  "cat": "Bild / Leistung",
  "alias": "nicht steuerbar maus tastatur ohne reaktion control nur sehen bedienungshilfen",
  "sym": "Der Bildschirm ist sichtbar, aber Maus- und Tastaturklicks reagieren nicht (sichtbar, nicht steuerbar)",
  "l1": "Am Host \"Fernsteuerung erlauben\" aktivieren; macOS verlangt die Berechtigung \"Bedienungshilfen\", unter Windows auf UAC / Admin-Fenster achten, die die passende Berechtigung brauchen",
  "l2": "\"Sichtbar nicht steuerbar\" ist fast immer ein Problem der Eingabe-Injektionsberechtigung: macOS-Bedienungshilfen nicht angehakt, oder der Host zeigte einen UAC-Sicherheitsdesktop, der Admin verlangt (SunLogin muss als Administrator laufen, um zu bedienen)",
  "tip": "Bei Nur-Lesen: zuerst prüfen, ob \"Fernsteuerung erlauben\" an ist, unter macOS \"Bedienungshilfen\" ergänzen, unter Windows SunLogin als Administrator ausführen",
  "scene": "Du steuerst den PC des anderen, siehst den Bildschirm, aber Klicks bewirken nichts → der andere hat \"Fernsteuerung erlauben\" nicht aktiviert"
 },
 "Lag und hohe Latenz": {
  "cat": "Bild / Leistung",
  "alias": "lag latenz verzögerung schlieren nicht flüssig langsam",
  "sym": "Fenster ziehen ruckelt, Tippen erscheint erst nach 2–3 s, die Maus zieht Schlieren (die Latenz wird deutlich schlechter)",
  "l1": "In den Desktop-Modus \"Büro / flüssig\" wechseln, um Qualität und fps zu senken; am Host Downloads / Videos schließen, die Bandbreite fressen; Kabel oder 5-GHz-WLAN bevorzugen",
  "l2": "Ursachenverteilung (Community-Messung): Relay 35 % > Qualität zu hoch 25 % > Host-Leistung zu gering 20 % > Netz schlecht 15 % > fps-Limit 5 %; Latenzstufen: <30 ms fast lokal, 80–150 ms deutlich ruckelig, >150 ms fast nur Klicken. Über 100 ms bringt das Anpassen der Qualität nichts; der Flaschenhals ist das Netz",
  "tip": "Zuerst unten links schauen, ob P2P oder Relay; die Farbtiefe von 32 Bit um eine Stufe senken kann die Bandbreitennutzung halbieren",
  "scene": "Bei 120 ms Latenz folgt die Tabellenauswahl der Maus nicht; mit Kabel + Büromodus wird es flüssig"
 },
 "Relay-Modus": {
  "cat": "Netzwerk / Traversal",
  "alias": "relay weiterleitung p2p kommt nicht durch nat upnp symmetrisch netzbetreiberübergreifend",
  "sym": "Der Client zeigt unten links \"Relay\" statt \"P2P\", die Gesamtlatenz ist hoch, die Maus zieht Schlieren",
  "l1": "SunLogin wählt den Verbindungsmodus automatisch, manuell nicht umschaltbar; trennen und neu verbinden (mit 10 s oder mehr Abstand), damit das System P2P erneut versucht",
  "l2": "P2P-Durchschlagrate erhöhen: ① Router-UPnP aktivieren (Heimrouter sind oft standardmäßig aus; aktiviert steigt die Rate stark); ② nicht beide Seiten hinter symmetrischem NAT, eine Seite ins andere Netz; ③ netzbetreiberübergreifend bleibt die Latenz hoch, selbst wenn P2P durchkommt, manchmal ist erzwungenes Relay stabiler (SunLogins Server hat betreiberübergreifende Standleitungen)",
  "tip": "UPnP an und trotzdem Relay, dann wahrscheinlich symmetrisches NAT; bei betreiberübergreifenden Szenarien Relay probieren",
  "scene": "Relay aus, UPnP an und sofort P2P, Latenz 120 ms→35 ms"
 },
 "Unscharfes Bild": {
  "cat": "Bild / Leistung",
  "alias": "qualität unscharf schärfe auflösung farbe true color bitrate",
  "sym": "Das Bild ist in Bewegung unscharf, zu wenig scharf (besonders beim Ziehen / bei Video)",
  "l1": "Bei zu wenig Bandbreite senkt SunLogin die Qualität automatisch zugunsten der Flüssigkeit; für mehr Schärfe Qualität / fps manuell erhöhen oder in den Modus \"HD / Qualität\" wechseln",
  "l2": "Die Auflösung höchster Qualität ist durch die physische Obergrenze des Host-Monitors begrenzt (ist der Host nur 1080p, kein 4K-Fernzugriff); für professionelle Wiedergabe true color 4:4:4; Hardware-Dekodierung gibt die Verarbeitung an die GPU des Steuernden und senkt die CPU-Nutzung",
  "tip": "Schärfe priorisieren: Auflösung auf \"dem Steuernden folgen\" + Vollbild, Unschärfe durch Strecken vermeiden",
  "scene": "Im HD-Modus kommt die Bandbreite nicht mit und senkt die Qualität automatisch → unscharf in Bewegung, erholt sich bei besserem Netz"
 },
 "30 fps Gratisversion": {
  "cat": "Bild / Leistung",
  "alias": "30fps bildrate fps gratisversion 60fps 144fps bezahlt",
  "sym": "Die Latenz ist nicht hoch, aber Fenster ziehen / Scrollen ruckelt deutlich und zieht Schlieren (nicht das Netz, sondern das Bildraten-Limit)",
  "l1": "Das Gratis-Konto geht bis 30 fps; für mehr Flüssigkeit die Service-Stufe des Kontos erhöhen: bezahlt bis 60 fps, die Gaming-Version bis 144 fps",
  "l2": "Die maximale Bildrate ist auch durch die Bildwiederholrate beider Monitore begrenzt: ist einer 60 Hz, geht es nicht über 60 FPS; 144 fps braucht GPU + Monitor mit 144 Hz und dass die Host-GPU Hardware-Kodierung unterstützt",
  "tip": "Der Unterschied zwischen 30 und 60 fps ist deutlich spürbar; auch Android bezahlt hat 60 fps, empfindlicher für Touch",
  "scene": "In der Gratisversion zieht das Ziehen von Fenstern Schlieren; nach dem Upgrade auf 60 fps deutlich flüssiger"
 },
 "Wake fehlgeschlagen": {
  "cat": "Konto / Berechtigungen",
  "alias": "wake aufwecken ruhezustand sleep herunterfahren fernstart unbeaufsichtigt",
  "sym": "Der Host verbindet nach Ruhezustand / Schlaf nicht, oder du willst ihn fern starten, aber er wacht nicht auf",
  "l1": "Mit der \"Wake-Funktion\" von SunLogin aufwecken (am Host vorher aktivieren); den Host auf nicht ruhen stellen, \"unbeaufsichtigten Zugriff\" aktivieren",
  "l2": "Fern-Wake hängt von WOL (Wake-on-LAN) + dem Wake-Dienst von SunLogin ab; braucht Strom- / Netzwerkkarten-Unterstützung des Hosts und Vorkonfiguration; bei völliger Stromtrennung / Herunterfahren kein Aufwecken per Software möglich",
  "tip": "Unverzichtbar für unbeaufsichtigt: Autostart + automatische Anmeldung + nicht ruhen + Wake vorab aktivieren",
  "scene": "Auf Reisen willst du den Heim-PC verbinden, aber er schläft und du hast Wake nicht vorab aktiviert → keine Verbindung"
 },
 "Anderes Konto": {
  "cat": "Konto / Berechtigungen",
  "alias": "konto passt nicht geräteliste nicht sichtbar zwei konten token neu anmelden",
  "sym": "Das zu steuernde Gerät erscheint nicht in der Liste, oder es wirkt online, ist aber schon abgefallen",
  "l1": "Beim Steuern eigener Geräte melden sich Steuernder und Host mit demselben SunLogin-Konto an; den Host-Client neu öffnen und prüfen, ob er ein erneutes Anmelden verlangt",
  "l2": "Ein Gerät im Konto A ist im Konto B nicht sichtbar; lang ungenutzte Geräte lassen den Token ablaufen, wirken online, sind aber abgefallen, erneutes Anmelden stellt es wieder her; vermeide mehrere Geräte gleichzeitig mit einem Konto (macht den Dienst instabil)",
  "tip": "Beide Seiten zwingend dasselbe Konto; zeigt online aber verbindet nicht, den Host zuerst einmal neu anmelden lassen",
  "scene": "Der Host im Konto A, der Steuernde im Konto B: das Gerät erscheint schlicht nicht in der Liste"
 },
 "Protokollversion passt nicht": {
  "cat": "Version / Protokoll",
  "alias": "version protokoll 30 passt nicht update neu installieren cache",
  "sym": "Große Versionsdifferenz führt zu Verbindungsfehler / Kompatibilitätsanomalie (Log-Code 30)",
  "l1": "Beide Seiten auf die neueste Version aktualisieren (Client → Über → Versionsnummer ansehen), Client neu starten; bleibt es, Gerät neu starten, Cache leeren",
  "l2": "Das SunLogin-Protokoll wird recht häufig aktualisiert; eine Seite in alter Version (z. B. die von 2024) ist leicht inkompatibel mit der neuen; viele aktualisieren nur den Steuernden und lassen den Host monatelang unangetastet",
  "tip": "Komplette Neuinstallation (wenn es weiter nicht verbindet): deinstallieren und %AppData%\\Oray\\SunLogin sowie %ProgramData%\\Oray\\SunLogin löschen, dann die neueste Version installieren",
  "scene": "Der Host ist seit einem halben Jahr nicht aktualisiert; nach dem Upgrade des Steuernden passt das Protokoll nicht → Verbindungsfehler"
 },
 "Host-Leistung zu gering": {
  "cat": "Bild / Leistung",
  "alias": "leistung cpu ram lag host ressourcen kodierung alter pc",
  "sym": "Die Bedienlatenz schwankt, das Bild ruckelt (die Host-Ressourcen sind ausgelastet und die Kodierung kommt nicht nach)",
  "l1": "Am Host nicht genutzte Programme schließen, um RAM freizugeben (Chrome mit vielen Tabs frisst viel); den Desktop-Modus auf \"ultraschnell / flüssig\" senken",
  "l2": "Aufnahme & Kodierung von SunLogin brauchen CPU / RAM: Büromodus ~CPU 5–15 % / RAM 150–200 MB, HD / Gaming ~CPU 20–40 % / 200–400 MB; läuft am Host gerade Kompilieren / VM / Virenscan / Systemupdate, wird es deutlich langsamer",
  "tip": "Bei alten PCs: RAM aufrüsten (4G→8G), HDD durch SSD ersetzen, \"Hardware-Dekodierung bevorzugen\" aktivieren, damit die GPU mitträgt, alles hilft",
  "scene": "Der Host lädt gerade ein Windows-Update, CPU bei 40 %, und das Fernbild ruckelt"
 }
};
window.LABELS = {"miss": "Symptom nicht gelistet; ein anderes Stichwort versuchen oder die vollständige Tabelle unten ansehen."};
window.FIELDS = [["sym", "Symptom / Auslöser"], ["l1", "L1 zuerst prüfen (offiziell)"], ["l2", "L2 Ursache (Netzwerk)"], ["tip", "Tipp"], ["scene", "Realer Fall"]];
window.THEAD = ["Symptom / Fehler", "Kategorie", "L1 zuerst prüfen (offiziell)", "L2 Ursache"];
