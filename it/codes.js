window.CODES = {
 "Dispositivo offline": {
  "cat": "Account / Permessi",
  "alias": "offline 21 non online non si connette dispositivo non trovato",
  "sym": "L'host appare \"offline\" nell'elenco del controllore, o segnala dispositivo non trovato (codice di log 21)",
  "l1": "Conferma che il PC host sia acceso, online, non in sospensione, con il client SunLogin in esecuzione e \"connesso\"; se la rete è instabile riavvia il router o cambia rete",
  "l2": "Offline = l'host semplicemente non è online, non guardare prima la rete: dopo la sospensione la scheda di rete spesso si disconnette, chiudere il coperchio del portatile taglia il WiFi, la modalità risparmio di Android uccide il background; in Windows controlla in services.msc se il servizio \"SunLogin\" gira",
  "tip": "Host non presidiato a lungo: attiva \"avvio automatico + accesso automatico + accesso non presidiato\", in Android aggiungi SunLogin alla whitelist di risparmio energetico",
  "scene": "Mi collego al PC di casa ed è offline; il portatile ha perso il WiFi chiudendo il coperchio"
 },
 "Timeout di connessione": {
  "cat": "Rete / Traversal",
  "alias": "timeout non si connette errore di connessione 15 3 canale",
  "sym": "Dopo aver cliccato connetti gira e alla fine \"errore di connessione / canale non stabilito\" (codice 3=nessuna rete, 15=timeout nello stabilire il canale)",
  "l1": "Prima spegni firewall / antivirus di entrambi i lati e prova; esci e rientra su entrambi; aggiorna all'ultima; cambia ambiente di rete (hotspot del telefono)",
  "l2": "Il 90% degli \"errori di connessione\" si blocca nella fase 2 \"stabilire il canale\": 15=P2P non attraversa e anche il relay fallisce (rete troppo scadente), 3=il livello di rete è bloccato; se con l'hotspot si connette, è praticamente un problema di rete / firewall",
  "tip": "Localizza in 3 fasi: verifica account → stabilire il canale → trasmissione immagine; il timeout è quasi sempre su \"stabilire il canale\"",
  "scene": "Non si connette in ufficio, a casa o con l'hotspot si connette subito → problema di ambiente di rete, non software rotto"
 },
 "Password di accesso errata": {
  "cat": "Account / Permessi",
  "alias": "password verifica fallita 10 access password",
  "sym": "Dopo aver inserito la password segnala verifica fallita / password errata (codice di log 10)",
  "l1": "Conferma di inserire la \"password di accesso\" e non quella di login dell'account SunLogin; reimposta la password di accesso sull'host e riconnettiti",
  "l2": "La password di accesso è la password remota che l'host imposta a parte; spesso è stata cambiata o confusa con quella di login; dopo il cambio il controllore usa la nuova",
  "tip": "Password di accesso ≠ password di login: guardala / reimpostala in \"Impostazioni → Sicurezza\" dell'host",
  "scene": "Continui a usare la password dell'account di login per connetterti; ovvio che dia errore"
 },
 "Blocco firewall": {
  "cat": "Rete / Traversal",
  "alias": "firewall defender antivirus whitelist blocco",
  "sym": "La connessione va in timeout subito senza alcun popup (bloccata in silenzio dalla sicurezza, oltre la metà degli errori di connessione)",
  "l1": "Aggiungi SunLogin alla fiducia del firewall / sicurezza: nel Firewall di Windows Defender \"consenti app\" spunta SunloginClient; aggiungi la fiducia nell'antivirus di terze parti",
  "l2": "La whitelist deve includere tutta la cartella di installazione (es. C:\\Program Files (x86)\\Oray\\SunLogin\\), non solo l'exe principale—SunLogin richiama più componenti all'esecuzione",
  "tip": "Verifica rapida: chiudi del tutto la sicurezza (non solo la protezione in tempo reale) e connetti; se si connette è al 100% lei che bloccava",
  "scene": "Pensavi che la rete fosse rotta; in realtà l'antivirus bloccava in silenzio la richiesta di rete di SunLogin"
 },
 "Rete aziendale non si connette": {
  "cat": "Rete / Traversal",
  "alias": "rete aziendale rete di campus impresa dpi gestione del comportamento internet porta 443",
  "sym": "A casa si connette, in ufficio / a scuola no (la porta passa ma il traffico è frenato dall'ispezione approfondita dei pacchetti)",
  "l1": "Chiedi all'IT aziendale di consentire la whitelist di SunLogin; o usa temporaneamente l'hotspot del telefono sull'host per aggirare; prova SunLogin versione SOS (altro modo di connessione)",
  "l2": "Le reti aziendali hanno spesso apparati di gestione del comportamento internet; SunLogin su TCP 443 (stessa porta di HTTPS) viene identificato e bloccato dal DPI; esperienza della comunità: consenti TCP 51020–51030 + UDP 50000–50010 sul router aziendale, o cambia la modalità di connessione da \"alta velocità\" a \"compatibile\" (80/443, più generica)",
  "tip": "Per capire se è la rete aziendale: passa entrambi all'hotspot del telefono; se si connette è al 100% il blocco della rete aziendale",
  "scene": "L'azienda applica il DPI e tratta SunLogin come traffico HTTPS anomalo e lo blocca"
 },
 "Schermo nero": {
  "cat": "Immagine / Prestazioni",
  "alias": "schermo nero black screen nessuna immagine tutto nero trasmissione immagine",
  "sym": "Si connette ma lo schermo è tutto nero / solo nero (bloccato nella fase 3 \"trasmissione immagine\")",
  "l1": "Dai i permessi a SunLogin sull'host: macOS \"Impostazioni di Sistema → Privacy e Sicurezza\" spunta registrazione schermo / accessibilità / accesso completo al disco; Windows prova a cambiare modalità desktop / riconnettere",
  "l2": "Lo schermo nero è di solito mancanza di permesso di acquisizione o passaggio a GPU dedicata, protezione schermo di blocco; sui portatili con GPU dedicata si può far acquisire SunLogin tramite iGPU nella politica di alimentazione",
  "tip": "Da macOS Ventura il percorso dei permessi è passato in \"Impostazioni di Sistema\"; cercare \"registrazione schermo\" nella ricerca è il più veloce",
  "scene": "Un Mac host appena installato si connette tutto nero: mancava il permesso di \"registrazione schermo\""
 },
 "Si vede ma non si controlla": {
  "cat": "Immagine / Prestazioni",
  "alias": "non si controlla mouse tastiera nessuna risposta control solo vedere accessibilita",
  "sym": "Lo schermo si vede, ma cliccare con mouse e tastiera non risponde (si vede ma non si controlla)",
  "l1": "Attiva \"Consenti controllo remoto\" sull'host; macOS richiede il permesso di \"accessibilità\", in Windows attenzione a UAC / finestre amministratore che richiedono il permesso corrispondente",
  "l2": "\"Si vede ma non si controlla\" è quasi sempre un problema di permesso di iniezione input: accessibilità di macOS non spuntata, o l'host ha mostrato un desktop sicuro UAC che richiede l'amministratore (SunLogin deve girare come amministratore per operare)",
  "tip": "Quando è in sola lettura: conferma prima che \"Consenti controllo remoto\" sia attivo, in macOS aggiungi \"accessibilità\", in Windows esegui SunLogin come amministratore",
  "scene": "Controlli il PC dell'altro, lo schermo si vede ma cliccare non fa nulla → l'altro non ha attivato \"Consenti controllo remoto\""
 },
 "Lag e latenza alta": {
  "cat": "Immagine / Prestazioni",
  "alias": "lag latenza ritardo scia non fluido lento",
  "sym": "Trascinare le finestre scatta, digitare appare dopo 2–3 s, il mouse lascia una scia (l'esperienza di latenza peggiora nettamente)",
  "l1": "Passa alla modalità desktop \"ufficio / fluida\" per abbassare qualità e fps; chiudi sull'host download / video che consumano banda; preferisci cavo o WiFi 5 GHz",
  "l2": "Distribuzione delle cause (misure della comunità): relay 35% > qualità troppo alta 25% > prestazioni host insufficienti 20% > rete scadente 15% > limite fps 5%; livelli di latenza: <30 ms quasi locale, 80–150 ms nettamente a scatti, >150 ms quasi solo clic. Oltre i 100 ms regolare la qualità non serve; il collo di bottiglia è la rete",
  "tip": "Guarda prima in basso a sinistra se è P2P o relay; abbassare la profondità di colore da 32 bit di un livello può dimezzare l'uso di banda",
  "scene": "A 120 ms di latenza la selezione della tabella non segue il mouse; con cavo + modalità ufficio diventa fluida"
 },
 "Modalità relay": {
  "cat": "Rete / Traversal",
  "alias": "relay inoltro p2p non attraversa nat upnp simmetrico tra operatori",
  "sym": "Il client mostra \"Relay\" invece di \"P2P\" in basso a sinistra, la latenza complessiva è alta, il mouse lascia una scia",
  "l1": "SunLogin sceglie la modalità di connessione automaticamente, non commutabile a mano; disconnetti e riconnetti (con 10 s o più di intervallo) perché il sistema riprovi il P2P",
  "l2": "Aumentare il tasso di attraversamento P2P: ① attiva l'UPnP del router (i router domestici sono spesso disattivati di default; attivandolo il tasso sale molto); ② non lasciare entrambi i lati dietro NAT simmetrico, cambia la rete di un lato; ③ tra operatori diversi, anche se il P2P attraversa la latenza resta alta, a volte forzare il relay è più stabile (il server di SunLogin ha linee dedicate tra operatori)",
  "tip": "Se l'UPnP è attivo e resta in relay, è probabile NAT simmetrico; per scenari tra operatori prova il relay",
  "scene": "Ho disattivato il relay, attivato l'UPnP ed è passato a P2P subito, latenza 120 ms→35 ms"
 },
 "Immagine sfocata": {
  "cat": "Immagine / Prestazioni",
  "alias": "qualita sfocato nitidezza risoluzione colore true color bitrate",
  "sym": "L'immagine è sfocata in movimento, poco nitida (soprattutto trascinando / con video)",
  "l1": "Quando la banda manca SunLogin abbassa la qualità automaticamente per la fluidità; per più nitidezza alza qualità / fps a mano, o passa alla modalità \"HD / qualità\"",
  "l2": "La risoluzione di massima qualità è limitata dal tetto fisico del monitor dell'host (se l'host è solo 1080p niente remoto 4K); per il ripristino professionale usa true color 4:4:4; la decodifica hardware affida l'elaborazione alla GPU del controllore e abbassa l'uso di CPU",
  "tip": "Priorità alla nitidezza: imposta la risoluzione su \"segui il controllore\" + schermo intero, evita la sfocatura da stiramento",
  "scene": "In modalità HD la banda non sta dietro e la qualità scende automaticamente → sfocato in movimento, recupera quando la rete migliora"
 },
 "30 fps versione gratis": {
  "cat": "Immagine / Prestazioni",
  "alias": "30fps frame rate fps versione gratis 60fps 144fps a pagamento",
  "sym": "La latenza non è alta ma trascinare le finestre / scorrere scatta nettamente e lascia scia (non è la rete, è il tetto di frame)",
  "l1": "L'account di livello gratuito arriva a 30 fps; per più fluidità alza il livello di servizio dell'account: a pagamento fino a 60 fps, la versione gaming fino a 144 fps",
  "l2": "Il massimo di frame è limitato anche dalla frequenza di aggiornamento dei monitor di entrambi i lati: se uno è a 60 Hz non si superano i 60 FPS; 144 fps richiede GPU + monitor a 144 Hz, e che la GPU dell'host supporti la codifica hardware",
  "tip": "La differenza tra 30 e 60 fps è molto percepibile; anche Android a pagamento ha 60 fps, più sensibile al tocco",
  "scene": "Nella versione gratis trascinare le finestre lascia scia; dopo il passaggio a 60 fps è nettamente più fluido"
 },
 "Wake fallito": {
  "cat": "Account / Permessi",
  "alias": "wake risveglio sospensione sleep spegnere avvio remoto non presidiato",
  "sym": "L'host non si connette dopo sospensione / sonno, o vuoi avviarlo da remoto ma non si sveglia",
  "l1": "Sveglia con la \"funzione Wake\" di SunLogin (da attivare prima sull'host); imposta l'host su non sospendere, attiva \"accesso non presidiato\"",
  "l2": "Il wake remoto dipende da WOL (Wake-on-LAN) + il servizio wake di SunLogin; richiede supporto alimentazione / scheda di rete dell'host e configurazione preventiva; con interruzione totale / spegnimento non si può svegliare via software",
  "tip": "Imprescindibile per il non presidiato: avvio automatico + accesso automatico + non sospendere + attivare il wake in anticipo",
  "scene": "In viaggio vuoi connetterti al PC di casa, ma è addormentato e non hai attivato il wake prima → non si connette"
 },
 "Account diverso": {
  "cat": "Account / Permessi",
  "alias": "account non coincide elenco dispositivi non visibile due account token nuovo accesso",
  "sym": "Il dispositivo da controllare non appare nell'elenco, o sembra online quando in realtà è già caduto",
  "l1": "Per controllare i propri dispositivi, controllore e host accedono allo stesso account SunLogin; riapri il client dell'host e vedi se chiede di riaccedere",
  "l2": "Un dispositivo dell'account A non è visibile nell'account B; i dispositivi fermi a lungo fanno scadere il token, sembrano online ma sono caduti, riaccedere li ripristina; evita più dispositivi con lo stesso account in contemporanea (rende il servizio instabile)",
  "tip": "Entrambi i lati obbligatoriamente lo stesso account; appare online ma non si connette, fai prima riaccedere l'host una volta",
  "scene": "L'host sull'account A, il controllore sull'account B: il dispositivo semplicemente non appare nell'elenco"
 },
 "Versione di protocollo non coincide": {
  "cat": "Versione / Protocollo",
  "alias": "versione protocollo 30 non coincide aggiornare reinstallare cache",
  "sym": "Una grande differenza di versione causa errore di connessione / anomalia di compatibilità (codice di log 30)",
  "l1": "Aggiorna entrambi i lati all'ultima (client → informazioni → vedi numero di versione), riavvia il client; se persiste, riavvia il dispositivo, svuota la cache",
  "l2": "Il protocollo di SunLogin si aggiorna abbastanza spesso; un lato in versione vecchia (es. quella del 2024) è facilmente incompatibile con la nuova; molti aggiornano solo il controllore e lasciano l'host per mesi senza toccarlo",
  "tip": "Reinstallazione totale (quando ancora non si connette): disinstalla e cancella %AppData%\\Oray\\SunLogin e %ProgramData%\\Oray\\SunLogin, poi installa l'ultima versione",
  "scene": "L'host è da mezzo anno senza aggiornamenti; dopo l'upgrade del controllore il protocollo non coincide → errore di connessione"
 },
 "Prestazioni host insufficienti": {
  "cat": "Immagine / Prestazioni",
  "alias": "prestazioni cpu memoria lag host risorse codifica pc vecchio",
  "sym": "La latenza di operazione va a ondate, l'immagine scatta (le risorse dell'host sono sature e la codifica non sta dietro)",
  "l1": "Chiudi sull'host i programmi non usati per liberare memoria (Chrome con molte schede consuma molto); abbassa la modalità desktop a \"ultraveloce / fluida\"",
  "l2": "L'acquisizione e codifica di SunLogin richiedono CPU / memoria: modalità ufficio ~CPU 5–15% / memoria 150–200 MB, HD / gaming ~CPU 20–40% / 200–400 MB; se l'host sta compilando / con VM / scansione antivirus / aggiornamento di sistema, rallenta nettamente",
  "tip": "Su PC vecchi: aumentare la memoria (4G→8G), sostituire l'HDD con un SSD, attivare \"priorità alla decodifica hardware\" perché la GPU condivida, tutto aiuta",
  "scene": "L'host sta scaricando un aggiornamento di Windows, CPU al 40%, e l'immagine remota scatta"
 }
};
window.LABELS = {"miss": "Sintomo non in elenco; prova un'altra parola chiave o guarda la tabella completa sotto."};
window.FIELDS = [["sym", "Sintomo / trigger"], ["l1", "L1 verifica prima (ufficiale)"], ["l2", "L2 causa radice (rete)"], ["tip", "Suggerimento"], ["scene", "Caso reale"]];
window.THEAD = ["Sintomo / errore", "Categoria", "L1 verifica prima (ufficiale)", "L2 causa radice"];
