window.CODES = {
 "Apparaat offline": {
  "cat": "Account / Rechten",
  "alias": "offline 21 niet online geen verbinding apparaat niet gevonden",
  "sym": "De host verschijnt \"offline\" in de lijst van de besturende, of meldt apparaat niet gevonden (logfoutcode 21)",
  "l1": "Bevestig dat de host-pc aan, online en niet in slaapstand is, de SunLogin-client draait en \"aangemeld\" toont; bij instabiel netwerk de router herstarten of van netwerk wisselen",
  "l2": "Offline = de host is gewoon niet online, kijk niet eerst naar het netwerk: na slaapstand verbreekt de netwerkkaart vaak, de laptopklep dichtdoen verbreekt de wifi, de energiebesparingsmodus van Android doodt de achtergrond; in Windows in services.msc controleren of de dienst \"SunLogin\" draait",
  "tip": "Langdurig onbeheerde host: \"automatisch opstarten + automatisch aanmelden + onbeheerde toegang\" inschakelen, in Android SunLogin aan de energiebesparings-whitelist toevoegen",
  "scene": "Ik verbind met de thuis-pc en die is offline; de laptop verloor de wifi toen de klep dichtging"
 },
 "Time-out bij verbinden": {
  "cat": "Netwerk / Traversal",
  "alias": "timeout geen verbinding verbindingsfout 15 3 kanaal",
  "sym": "Na klikken op verbinden draait het en uiteindelijk \"verbindingsfout / kanaal niet opgezet\" (code 3=geen netwerk, 15=time-out bij kanaalopzet)",
  "l1": "Schakel eerst firewall / antivirus aan beide kanten uit en probeer; meld beide opnieuw aan; werk bij naar de nieuwste; wissel van netwerkomgeving (telefoon-hotspot)",
  "l2": "90% van de \"verbindingsfouten\" hangt vast in fase 2 \"kanaal opzetten\": 15=P2P komt niet door en relay mislukt ook (netwerk te slecht), 3=de netwerklaag is geblokkeerd; verbindt het via hotspot, dan is het in principe een netwerk- / firewallprobleem",
  "tip": "Lokaliseer in 3 fasen: account verifiëren → kanaal opzetten → beeld overdragen; de time-out zit bijna altijd bij \"kanaal opzetten\"",
  "scene": "Geen verbinding op kantoor, thuis of via hotspot meteen wel → netwerkomgevingsprobleem, geen kapotte software"
 },
 "Fout toegangswachtwoord": {
  "cat": "Account / Rechten",
  "alias": "wachtwoord verificatie mislukt 10 access password",
  "sym": "Na invoer van het wachtwoord melding verificatie mislukt / fout wachtwoord (logcode 10)",
  "l1": "Bevestig dat je het \"toegangswachtwoord\" invoert en niet het inlogwachtwoord van het SunLogin-account; reset het toegangswachtwoord op de host en verbind opnieuw",
  "l2": "Het toegangswachtwoord is het aparte wachtwoord op afstand dat de host instelt; vaak gewijzigd of verward met het inlogwachtwoord; na wijziging gebruikt de besturende het nieuwe",
  "tip": "Toegangswachtwoord ≠ inlogwachtwoord: bekijk / reset in \"Instellingen → Beveiliging\" van de host",
  "scene": "Steeds het wachtwoord van het inlogaccount gebruiken om te verbinden; natuurlijk een fout"
 },
 "Firewall-blokkade": {
  "cat": "Netwerk / Traversal",
  "alias": "firewall defender antivirus whitelist blokkade",
  "sym": "De verbinding loopt meteen af zonder enige pop-up (stil geblokkeerd door de beveiliging, meer dan de helft van de verbindingsfouten)",
  "l1": "Voeg SunLogin toe aan het vertrouwen van firewall / beveiliging: in de Windows Defender Firewall \"app toestaan\" SunloginClient aanvinken; voeg vertrouwen toe in de antivirus van derden",
  "l2": "De whitelist moet de hele installatiemap omvatten (bv. C:\\Program Files (x86)\\Oray\\SunLogin\\), niet alleen de hoofd-exe—SunLogin roept bij het draaien meerdere componenten aan",
  "tip": "Snelle verificatie: sluit de beveiliging volledig (niet alleen de realtimebescherming) en verbind; verbindt het, dan blokkeerde zij voor 100%",
  "scene": "Je dacht dat het netwerk kapot was; in werkelijkheid blokkeerde de antivirus stil het netwerkverzoek van SunLogin"
 },
 "Bedrijfsnetwerk verbindt niet": {
  "cat": "Netwerk / Traversal",
  "alias": "bedrijfsnetwerk campusnetwerk onderneming dpi internetgedragsbeheer poort 443",
  "sym": "Thuis verbindt het, op kantoor / school niet (de poort gaat door maar het verkeer wordt geremd door deep packet inspection)",
  "l1": "Vraag de bedrijfs-IT om de whitelist van SunLogin toe te laten; of gebruik tijdelijk de telefoon-hotspot op de host om te omzeilen; probeer SunLogin SOS-versie (andere verbindingswijze)",
  "l2": "Bedrijfsnetwerken hebben vaak apparatuur voor internetgedragsbeheer; SunLogin via TCP 443 (zelfde poort als HTTPS) wordt door DPI herkend en geblokkeerd; community-ervaring: sta TCP 51020–51030 + UDP 50000–50010 toe op de bedrijfsrouter, of wissel de verbindingsmodus van \"hoge snelheid\" naar \"compatibel\" (80/443, algemener)",
  "tip": "Om te weten of het het bedrijfsnetwerk is: zet beide op de telefoon-hotspot; verbindt het, dan is het voor 100% de blokkade van het bedrijfsnetwerk",
  "scene": "Het bedrijf past DPI toe en behandelt SunLogin als afwijkend HTTPS-verkeer en blokkeert het"
 },
 "Zwart scherm": {
  "cat": "Beeld / Prestaties",
  "alias": "zwart scherm black screen geen beeld helemaal zwart beeldoverdracht",
  "sym": "Verbindt maar het scherm is helemaal zwart / alleen zwart (vast in fase 3 \"beeldoverdracht\")",
  "l1": "Geef SunLogin rechten op de host: macOS \"Systeeminstellingen → Privacy en beveiliging\" schermopname / toegankelijkheid / volledige schijftoegang aanvinken; Windows probeer van desktopmodus te wisselen / opnieuw te verbinden",
  "l2": "Zwart scherm is meestal ontbrekend opnamerecht of overschakeling naar de dedicated GPU, vergrendelschermbescherming; op laptops met dedicated GPU kun je SunLogin via de iGPU laten opnemen in het energiebeleid",
  "tip": "Sinds macOS Ventura is het rechtenpad verplaatst naar \"Systeeminstellingen\"; \"schermopname\" in de zoekbalk zoeken is het snelst",
  "scene": "Een vers geïnstalleerde Mac-host verbindt helemaal zwart: het recht \"schermopname\" ontbrak"
 },
 "Zichtbaar niet bestuurbaar": {
  "cat": "Beeld / Prestaties",
  "alias": "niet bestuurbaar muis toetsenbord geen reactie control alleen zien toegankelijkheid",
  "sym": "Het scherm is zichtbaar, maar muis- en toetsenbordklikken reageren niet (zichtbaar niet bestuurbaar)",
  "l1": "Schakel \"Afstandsbediening toestaan\" in op de host; macOS vereist het recht \"toegankelijkheid\", let in Windows op UAC / beheerdersvensters die het bijbehorende recht nodig hebben",
  "l2": "\"Zichtbaar niet bestuurbaar\" is bijna altijd een probleem met het invoerinjectierecht: macOS-toegankelijkheid niet aangevinkt, of de host toonde een UAC-beveiligd bureaublad dat beheerder vereist (SunLogin moet als beheerder draaien om te bedienen)",
  "tip": "Bij alleen-lezen: bevestig eerst dat \"Afstandsbediening toestaan\" aan staat, voeg in macOS \"toegankelijkheid\" toe, voer in Windows SunLogin als beheerder uit",
  "scene": "Je bestuurt de pc van de ander, het scherm is zichtbaar maar klikken doet niets → de ander schakelde \"Afstandsbediening toestaan\" niet in"
 },
 "Lag en hoge latentie": {
  "cat": "Beeld / Prestaties",
  "alias": "lag latentie vertraging spoor niet vloeiend traag",
  "sym": "Vensters slepen hapert, typen verschijnt na 2–3 s, de muis laat een spoor na (de latentie-ervaring verslechtert duidelijk)",
  "l1": "Wissel naar de desktopmodus \"kantoor / vloeiend\" om kwaliteit en fps te verlagen; sluit op de host downloads / video die bandbreedte opslokken; geef voorrang aan kabel of 5 GHz-wifi",
  "l2": "Oorzaakverdeling (community-meting): relay 35% > kwaliteit te hoog 25% > hostprestaties onvoldoende 20% > netwerk slecht 15% > fps-limiet 5%; latentieniveaus: <30 ms bijna lokaal, 80–150 ms duidelijk haperend, >150 ms bijna alleen klikken. Boven 100 ms heeft de kwaliteit aanpassen geen zin; de bottleneck is het netwerk",
  "tip": "Kijk eerst linksonder of het P2P of relay is; de kleurdiepte van 32 bit één niveau verlagen kan het bandbreedtegebruik halveren",
  "scene": "Bij 120 ms latentie volgt de tabelselectie de muis niet; met kabel + kantoormodus wordt het vloeiend"
 },
 "Relay-modus": {
  "cat": "Netwerk / Traversal",
  "alias": "relay doorsturen p2p komt niet door nat upnp symmetrisch tussen providers",
  "sym": "De client toont \"Relay\" in plaats van \"P2P\" linksonder, de totale latentie is hoog, de muis laat een spoor na",
  "l1": "SunLogin kiest de verbindingsmodus automatisch, niet handmatig te wisselen; verbreek en verbind opnieuw (met 10 s of meer tussenpoze) zodat het systeem P2P opnieuw probeert",
  "l2": "De P2P-doorslagkans verhogen: ① schakel router-UPnP in (thuisrouters staan vaak standaard uit; ingeschakeld stijgt de kans sterk); ② laat niet beide kanten achter symmetrische NAT, wissel het netwerk van één kant; ③ tussen verschillende providers blijft de latentie hoog, zelfs als P2P doorkomt, soms is geforceerd relay stabieler (de server van SunLogin heeft toegewijde lijnen tussen providers)",
  "tip": "UPnP aan en toch relay, dan waarschijnlijk symmetrische NAT; probeer bij provideroverstijgende scenario's relay",
  "scene": "Ik zette relay uit, UPnP aan en het werd meteen P2P, latentie 120 ms→35 ms"
 },
 "Wazig beeld": {
  "cat": "Beeld / Prestaties",
  "alias": "kwaliteit wazig scherpte resolutie kleur true color bitrate",
  "sym": "Het beeld is wazig in beweging, weinig scherp (vooral bij slepen / video)",
  "l1": "Bij te weinig bandbreedte verlaagt SunLogin de kwaliteit automatisch voor vloeiendheid; voor meer scherpte verhoog kwaliteit / fps handmatig, of wissel naar de modus \"HD / kwaliteit\"",
  "l2": "De resolutie van de hoogste kwaliteit is begrensd door het fysieke plafond van de hostmonitor (is de host slechts 1080p, dan geen remote 4K); voor professionele weergave true color 4:4:4; hardwaredecodering geeft de verwerking aan de GPU van de besturende en verlaagt het CPU-gebruik",
  "tip": "Geef voorrang aan scherpte: zet de resolutie op \"de besturende volgen\" + volledig scherm, vermijd waas door rekken",
  "scene": "In HD-modus komt de bandbreedte niet bij en de kwaliteit zakt automatisch → wazig in beweging, herstelt als het netwerk verbetert"
 },
 "30 fps gratis versie": {
  "cat": "Beeld / Prestaties",
  "alias": "30fps framerate fps gratis versie 60fps 144fps betaald",
  "sym": "De latentie is niet hoog maar vensters slepen / scrollen hapert duidelijk en laat een spoor na (niet het netwerk, maar het frameplafond)",
  "l1": "Het account van het gratis niveau gaat tot 30 fps; voor meer vloeiendheid verhoog het serviceniveau van het account: betaald tot 60 fps, de gaming-versie tot 144 fps",
  "l2": "De maximale framerate wordt ook begrensd door de verversingssnelheid van beide monitoren: is er één 60 Hz, dan kom je niet boven 60 FPS; 144 fps vereist GPU + monitor van 144 Hz, en dat de host-GPU hardwarecodering ondersteunt",
  "tip": "Het verschil tussen 30 en 60 fps is goed merkbaar; Android betaald heeft ook 60 fps, gevoeliger voor aanraking",
  "scene": "In de gratis versie laat het slepen van vensters een spoor na; na de overstap naar 60 fps duidelijk vloeiender"
 },
 "Wake mislukt": {
  "cat": "Account / Rechten",
  "alias": "wake wekken slaapstand sleep uitschakelen opstarten op afstand onbeheerd",
  "sym": "De host verbindt niet na slaapstand / sluimer, of je wilt hem op afstand starten maar hij wordt niet wakker",
  "l1": "Wek met de \"Wake-functie\" van SunLogin (vooraf op de host inschakelen); zet de host op niet in slaapstand, schakel \"onbeheerde toegang\" in",
  "l2": "Wake op afstand hangt af van WOL (Wake-on-LAN) + de wake-dienst van SunLogin; vereist ondersteuning van voeding / netwerkkaart van de host en voorafgaande configuratie; bij volledige stroomonderbreking / uitschakeling is wekken via software niet mogelijk",
  "tip": "Onmisbaar voor onbeheerd: automatisch opstarten + automatisch aanmelden + niet in slaapstand + wake vooraf inschakelen",
  "scene": "Op reis wil je de thuis-pc verbinden, maar hij slaapt en je hebt wake niet vooraf ingeschakeld → geen verbinding"
 },
 "Ander account": {
  "cat": "Account / Rechten",
  "alias": "account komt niet overeen apparatenlijst niet zichtbaar twee accounts token opnieuw aanmelden",
  "sym": "Het te besturen apparaat verschijnt niet in de lijst, of lijkt online terwijl het al is weggevallen",
  "l1": "Bij het besturen van je eigen apparaten melden besturende en host zich aan met hetzelfde SunLogin-account; heropen de host-client en kijk of die om opnieuw aanmelden vraagt",
  "l2": "Een apparaat van account A is niet zichtbaar in account B; lang inactieve apparaten laten de token verlopen, lijken online maar zijn weggevallen, opnieuw aanmelden herstelt; vermijd meerdere apparaten met hetzelfde account tegelijk (maakt de dienst instabiel)",
  "tip": "Beide kanten verplicht hetzelfde account; toont online maar verbindt niet, laat de host eerst één keer opnieuw aanmelden",
  "scene": "De host op account A, de besturende op account B: het apparaat verschijnt gewoon niet in de lijst"
 },
 "Protocolversie komt niet overeen": {
  "cat": "Versie / Protocol",
  "alias": "versie protocol 30 komt niet overeen update opnieuw installeren cache",
  "sym": "Een groot versieverschil veroorzaakt een verbindingsfout / compatibiliteitsafwijking (logcode 30)",
  "l1": "Werk beide kanten bij naar de nieuwste (client → over → versienummer bekijken), herstart de client; blijft het, herstart het apparaat, wis de cache",
  "l2": "Het protocol van SunLogin wordt vrij vaak bijgewerkt; één kant in een oude versie (bv. die van 2024) is makkelijk incompatibel met de nieuwe; velen werken alleen de besturende bij en laten de host maanden ongemoeid",
  "tip": "Volledige herinstallatie (als het nog steeds niet verbindt): verwijder en wis %AppData%\\Oray\\SunLogin en %ProgramData%\\Oray\\SunLogin, installeer dan de nieuwste versie",
  "scene": "De host is al een half jaar niet bijgewerkt; na de upgrade van de besturende komt het protocol niet overeen → verbindingsfout"
 },
 "Hostprestaties onvoldoende": {
  "cat": "Beeld / Prestaties",
  "alias": "prestaties cpu geheugen lag host bronnen codering oude pc",
  "sym": "De bedieningslatentie golft, het beeld hapert (de hostbronnen zijn verzadigd en de codering komt niet bij)",
  "l1": "Sluit op de host ongebruikte programma's om geheugen vrij te maken (Chrome met veel tabbladen vreet veel); verlaag de desktopmodus naar \"ultrasnel / vloeiend\"",
  "l2": "Opname en codering van SunLogin vereisen CPU / geheugen: kantoormodus ~CPU 5–15% / geheugen 150–200 MB, HD / gaming ~CPU 20–40% / 200–400 MB; draait de host net een compilatie / VM / virusscan / systeemupdate, dan vertraagt het duidelijk",
  "tip": "Op oude pc's: geheugen uitbreiden (4G→8G), HDD vervangen door SSD, \"hardwaredecodering voorrang geven\" inschakelen zodat de GPU meedeelt, alles helpt",
  "scene": "De host downloadt een Windows-update, CPU op 40%, en het beeld op afstand hapert"
 }
};
window.LABELS = {"miss": "Symptoom niet vermeld; probeer een ander trefwoord of bekijk de volledige tabel hieronder."};
window.FIELDS = [["sym", "Symptoom / trigger"], ["l1", "L1 eerst controleren (officieel)"], ["l2", "L2 grondoorzaak (netwerk)"], ["tip", "Tip"], ["scene", "Echt geval"]];
window.THEAD = ["Symptoom / fout", "Categorie", "L1 eerst controleren (officieel)", "L2 grondoorzaak"];
