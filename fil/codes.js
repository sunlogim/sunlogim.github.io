window.CODES = {
 "Device offline": {
  "cat": "Account / Permissions",
  "alias": "offline 21 hindi online di makakonekta di mahanap ang device",
  "sym": "Lumalabas na \"offline\" ang host sa listahan ng controller, o sabi di mahanap ang device (log error code 21)",
  "l1": "Tiyakin na nakabukas, online, di natutulog ang host PC, tumatakbo ang SunLogin client at \"naka-login\"; kung di stable ang network i-restart ang router o magpalit ng network",
  "l2": "Offline = talagang hindi online ang host, huwag tingnan muna ang network: pagkatapos matulog madalas nadidiskonekta ang network card, ang pagsara ng lid ng laptop ay pumuputol ng WiFi, ang power-saving mode ng Android ay pinapatay ang background; sa Windows i-check sa services.msc kung tumatakbo ang serbisyong \"SunLogin\"",
  "tip": "Pangmatagalang unattended na host: i-on ang \"auto-start + auto-login + unattended access\", sa Android idagdag ang SunLogin sa power-saving whitelist",
  "scene": "Kinonekta ko ang home PC offline pala; nawalan ng WiFi ang laptop nang isara ang lid"
 },
 "Connection timeout": {
  "cat": "Network / Traversal",
  "alias": "timeout di makakonekta failed na koneksyon 15 3 channel",
  "sym": "Pagka-click ng connect umiikot tapos sa huli \"failed na koneksyon / di nabuo ang channel\" (code 3=walang network, 15=timeout sa pagbuo ng channel)",
  "l1": "Patayin muna ang firewall / antivirus sa dalawang dulo at subukan; mag-logout-login muli sa dalawa; i-update sa pinakabago; magpalit ng network environment (phone hotspot)",
  "l2": "90% ng \"failed na koneksyon\" ay naiipit sa phase 2 \"pagbuo ng channel\": 15=di tumatagos ang P2P at bigo rin ang relay (sobrang sama ng network), 3=hinarang ang network layer; kung sa hotspot kumokonekta, pangunahin itong problema ng network / firewall",
  "tip": "I-localize sa 3 phase: account verification → pagbuo ng channel → image transmission; ang timeout ay halos palaging nasa \"pagbuo ng channel\"",
  "scene": "Di makakonekta sa opisina, sa bahay o hotspot agad kumokonekta → problema ng network environment, hindi sirang software"
 },
 "Maling access password": {
  "cat": "Account / Permissions",
  "alias": "password bigong verification 10 access password",
  "sym": "Pagkatapos ilagay ang password may babala na bigong verification / maling password (log code 10)",
  "l1": "Tiyakin na ang inilagay ay \"access password\" at hindi login password ng SunLogin account; i-reset ang access password sa host tapos kumonekta",
  "l2": "Ang access password ay hiwalay na remote password na itinatakda ng host; madalas binago o napagkamalan sa login password; pagkatapos baguhin gamitin ng controller ang bago",
  "tip": "Access password ≠ login password: tingnan / i-reset sa \"Settings → Security\" ng host",
  "scene": "Laging ginagamit ang password ng login account para kumonekta; mali nga"
 },
 "Firewall block": {
  "cat": "Network / Traversal",
  "alias": "firewall defender antivirus whitelist block",
  "sym": "Agad nagti-timeout ang koneksyon na walang anumang popup (tahimik na hinarang ng security, mahigit kalahati ng failed na koneksyon)",
  "l1": "Idagdag ang SunLogin sa trust ng firewall / security: sa Windows Defender Firewall \"allow an app\" tikan ang SunloginClient; magdagdag ng trust sa third-party antivirus",
  "l2": "Ang whitelist ay dapat buong installation folder (hal. C:\\Program Files (x86)\\Oray\\SunLogin\\), hindi lang ang main exe—tumatawag ang SunLogin ng ilang component habang tumatakbo",
  "tip": "Mabilis na pag-verify: isara nang buo ang security (hindi lang ang real-time protection) at kumonekta; kung kumonekta 100% ito ang humarang",
  "scene": "Akala sira ang network; ang totoo tahimik na hinaharang ng antivirus ang network request ng SunLogin"
 },
 "Office network di makakonekta": {
  "cat": "Network / Traversal",
  "alias": "office network campus network enterprise dpi internet behavior management port 443",
  "sym": "Sa bahay kumokonekta, pagdating sa opisina / paaralan di makakonekta (dumadaan ang port pero pinipigilan ng deep packet inspection ang traffic)",
  "l1": "Hilingin sa company IT na payagan ang whitelist ng SunLogin; o pansamantalang gumamit ng phone hotspot sa host para lampasan; subukan ang SunLogin SOS version (ibang paraan ng koneksyon)",
  "l2": "Ang enterprise network ay madalas may internet behavior management device; ang SunLogin sa TCP 443 (parehong port ng HTTPS) ay nakikilala at hinaharang ng DPI; karanasan ng community: payagan ang TCP 51020–51030 + UDP 50000–50010 sa enterprise router, o palitan ang connection mode mula \"high-speed\" patungong \"compatible\" (80/443, mas generic)",
  "tip": "Para malaman kung office network: ilipat pareho sa phone hotspot; kung kumonekta 100% block ng office network",
  "scene": "Naglapat ng DPI ang kumpanya, itinuturing ang SunLogin na abnormal na HTTPS traffic kaya hinarang"
 },
 "Black screen": {
  "cat": "Display / Performance",
  "alias": "black screen walang larawan puro itim image transmission",
  "sym": "Kumokonekta pero puro itim ang screen / itim lang (naiipit sa phase 3 \"image transmission\")",
  "l1": "Bigyan ng permission ang SunLogin sa host: macOS \"System Settings → Privacy & Security\" tikan ang screen recording / accessibility / full disk access; sa Windows subukang magpalit ng desktop mode / kumonekta muli",
  "l2": "Ang black screen ay kadalasang kawalan ng capture permission o paglipat sa discrete GPU, lock screen protection; sa laptop na may discrete GPU maaaring iutos sa power policy na mag-capture ang SunLogin gamit ang iGPU",
  "tip": "Mula macOS Ventura lumipat sa \"System Settings\" ang permission path; ang paghanap ng \"screen recording\" sa search box ang pinakamabilis",
  "scene": "Bagong install na Mac host kumonekta puro itim, walang permission na \"screen recording\""
 },
 "Kita di makontrol": {
  "cat": "Display / Performance",
  "alias": "di makontrol mouse keyboard walang reaksyon control tingin lang accessibility",
  "sym": "Kita ang screen, pero ang pag-click ng mouse at keyboard ay walang reaksyon (kita di makontrol)",
  "l1": "I-on ang \"Allow remote control\" sa host; nangangailangan ang macOS ng permission na \"accessibility\", sa Windows mag-ingat sa UAC / admin window na nangangailangan ng katumbas na permission",
  "l2": "Ang kita-di-makontrol ay halos palaging problema ng input injection permission: di-tikan ang macOS accessibility, o naglabas ang host ng UAC secure desktop na nangangailangan ng admin (kailangang tumakbo ang SunLogin bilang admin para makontrol)",
  "tip": "Kapag read-only: tiyakin muna na naka-on ang \"Allow remote control\", sa macOS idagdag ang \"accessibility\", sa Windows patakbuhin ang SunLogin bilang admin",
  "scene": "Kontrolin ang PC ng iba kita ang screen, pagpindot walang silbi → di in-on ng iba ang \"Allow remote control\""
 },
 "Lag mataas na latency": {
  "cat": "Display / Performance",
  "alias": "lag latency delay trail di smooth mabagal",
  "sym": "Nauutal ang pag-drag ng window, lumalabas ang type pagkalipas ng 2–3 segundo, may mouse trail (halatang lumalala ang latency experience)",
  "l1": "Lumipat sa desktop mode na \"office / smooth\" para ibaba ang quality/fps; isara sa host ang download / video na sumisipsip ng bandwidth; unahin ang wired o 5GHz WiFi",
  "l2": "Proporsyon ng sanhi (sukat ng community): relay 35% > sobrang taas ng quality 25% > kulang ang performance ng host 20% > masamang network 15% > frame limit 5%; tier ng latency: <30ms halos lokal, 80–150ms halatang nauutal, >150ms halos click lang. Kapag lampas 100ms ang latency, walang silbi ang pag-adjust ng quality, ang bottleneck ay ang network",
  "tip": "Tingnan muna sa kaliwang ibaba kung P2P o relay; ang pagbaba ng color depth mula 32-bit nang isang tier ay maaaring mabawasan nang kalahati ang paggamit ng bandwidth",
  "scene": "Sa 120ms na latency di nakakahabol ang table selection sa mouse, paglipat sa wired + office mode naging smooth"
 },
 "Relay mode": {
  "cat": "Network / Traversal",
  "alias": "relay p2p di tumatagos nat upnp symmetric cross-carrier",
  "sym": "Ipinapakita ng client ang \"Relay\" sa halip na \"P2P\" sa kaliwang ibaba, mataas ang kabuuang latency, may mouse trail",
  "l1": "Awtomatikong pinipili ng SunLogin ang connection mode na di mababago nang manu-mano; idiskonekta at kumonekta muli (10 segundo o higit na agwat) para subukan muli ng system ang P2P",
  "l2": "Itaas ang P2P penetration rate: ① i-on ang router UPnP (madalas naka-off bilang default ang home router; pag naka-on tumataas nang husto ang rate); ② huwag hayaang nasa likod ng symmetric NAT ang dalawang dulo, palitan ang network ng isang dulo; ③ sa cross-carrier kahit tumagos ang P2P mataas pa rin ang latency, kung minsan mas stable ang sapilitang relay (may dedicated line ang server ng SunLogin sa cross-carrier)",
  "tip": "Naka-on ang UPnP pero relay pa rin, malamang symmetric NAT; sa cross-carrier na sitwasyon subukan ang relay",
  "scene": "Pinatay ang relay, in-on ang UPnP agad naging P2P, latency 120ms→35ms"
 },
 "Malabong larawan": {
  "cat": "Display / Performance",
  "alias": "quality malabo kalinawan resolution kulay true color bitrate",
  "sym": "Malabo ang larawan kapag gumagalaw, kulang sa linaw (lalo na kapag nagda-drag / video)",
  "l1": "Kapag kulang ang bandwidth awtomatikong ibinababa ng SunLogin ang quality para sa smoothness; para mas malinaw itaas ang quality / fps nang manu-mano, o lumipat sa mode na \"HD / quality\"",
  "l2": "Ang resolution ng pinakamataas na quality ay limitado ng pisikal na hangganan ng monitor ng host (kung 1080P lang ang host, walang remote 4K); para sa propesyonal na restoration true color 4:4:4; ang hardware decoding ay ibinibigay ang pagproseso sa GPU ng controller at ibinababa ang paggamit ng CPU",
  "tip": "Unahin ang linaw: itakda ang resolution sa \"follow controller\" + full screen, iwasan ang labo dahil sa pag-stretch",
  "scene": "Sa HD mode di nakahabol ang bandwidth kaya bumaba ang quality nang awtomatiko → malabo kapag gumagalaw, gumagaling kapag bumuti ang network"
 },
 "Libreng 30fps": {
  "cat": "Display / Performance",
  "alias": "30fps frame rate fps libreng bersyon 60fps 144fps bayad",
  "sym": "Di mataas ang latency pero halatang di smooth at may trail ang pag-drag ng window / scroll (hindi network, kundi frame cap)",
  "l1": "Ang free-tier account ay hanggang 30fps lang; para mas smooth itaas ang service tier ng account: bayad hanggang 60fps, gaming version hanggang 144fps",
  "l2": "Ang pinakamataas na frame rate ay limitado rin ng refresh rate ng monitor ng dalawang dulo: kung 60Hz ang isa, di lalampas ng 60FPS; ang 144fps ay nangangailangan ng GPU + monitor na sumusuporta ng 144Hz, at sumusuporta ng hardware encoding ang GPU ng host",
  "tip": "Malaki ang pagkakaiba ng 30fps at 60fps sa pakiramdam; sa Android bayad may 60fps din, mas sensitibo sa touch",
  "scene": "Sa libreng bersyon may trail ang pag-drag ng window, pagkatapos mag-upgrade sa 60fps halatang mas smooth"
 },
 "Failed na wake": {
  "cat": "Account / Permissions",
  "alias": "wake gising tulog sleep patay remote boot unattended",
  "sym": "Di makakonekta ang host pagkatapos matulog / sleep, o gusto mong i-boot nang remote pero ayaw magising",
  "l1": "Gisingin gamit ang \"Wake function\" ng SunLogin (kailangang i-enable muna sa host); itakda ang host na huwag matulog, i-on ang \"unattended access\"",
  "l2": "Ang remote wake ay umaasa sa WOL (Wake-on-LAN) + wake service ng SunLogin; kailangan ng suporta sa power / network card ng host at paunang configuration; kapag ganap na nawalan ng kuryente / shutdown di magigising sa pamamagitan ng software",
  "tip": "Mahalaga para sa unattended: auto-start + auto-login + huwag matulog + i-enable ang wake nang maaga",
  "scene": "Sa biyahe gustong ikonekta ang home PC, natutulog pala at di in-enable ang wake nang maaga → di makakonekta"
 },
 "Ibang account": {
  "cat": "Account / Permissions",
  "alias": "di-tugmang account device list di kita dalawang account token re-login",
  "sym": "Di kita sa listahan ang device na kokontrolin, o mukhang online pero bumagsak na talaga",
  "l1": "Kapag kinokontrol ang sariling device, naka-login ang controller at host sa parehong SunLogin account; buksan muli ang client ng host tingnan kung kailangang mag-relogin",
  "l2": "Di kita sa account B ang device ng account A; ang matagal na idle na device ay nag-e-expire ang token, mukhang online pero bumagsak, ang re-login ay nagbabalik; iwasan ang maraming device na gumagamit ng isang account nang sabay (madaling maging unstable ang service)",
  "tip": "Dapat parehong account ang dalawang dulo; mukhang online pero di makakonekta i-relogin muna ang host nang isang beses",
  "scene": "Host naka-login sa account A, controller naka-login sa account B, talagang di kita ang device sa listahan"
 },
 "Di-tugmang protocol version": {
  "cat": "Version / Protocol",
  "alias": "version protocol 30 di tugma update reinstall cache",
  "sym": "Malaking pagkakaiba ng version ay nagdudulot ng failed na koneksyon / anomalya ng compatibility (log code 30)",
  "l1": "I-update ang dalawang dulo sa pinakabago (client → about → tingnan ang version number), i-restart ang client; kung tumagal pa, i-restart ang device, i-clear ang cache",
  "l2": "Madalas ina-update ang protocol ng SunLogin; ang isang dulo sa lumang version (hal. 2024) ay madaling di tugma sa bago; marami ang nag-a-update lang sa controller, ang host buwan-buwang di nagagalaw",
  "tip": "Ganap na reinstall (kapag di pa rin makakonekta): i-uninstall tapos burahin ang %AppData%\\Oray\\SunLogin at %ProgramData%\\Oray\\SunLogin, tapos i-install ang pinakabagong version",
  "scene": "Kalahating taon na di-update ang host; pagkatapos mag-upgrade ng controller di tugma ang protocol → failed na koneksyon"
 },
 "Kulang ang performance ng host": {
  "cat": "Display / Performance",
  "alias": "performance cpu memory lag host resources encoding lumang pc",
  "sym": "Pabago-bago ang operation latency, nauutal ang larawan (puno ang resources ng host, di nakakahabol ang encoding)",
  "l1": "Isara sa host ang di-ginagamit na program para magbakante ng memory (madaming tab ng Chrome ay kumakain ng maraming memory); ibaba ang desktop mode sa \"ultra-fast / smooth\"",
  "l2": "Ang capture at encoding ng SunLogin ay nangangailangan ng CPU / memory: office mode ~CPU 5–15% / memory 150–200MB, HD / gaming ~CPU 20–40% / 200–400MB; kapag nagko-compile / may VM / antivirus scan / system update ang host halatang bumabagal",
  "tip": "Sa lumang PC: magdagdag ng memory (4G→8G), palitan ang HDD ng SSD, i-on ang \"prioritize hardware decoding\" para makibahagi ang GPU, lahat nakakatulong",
  "scene": "Nagda-download ang host ng Windows update, CPU 40%, nauutal ang remote na larawan"
 }
};
window.LABELS = {"miss": "Walang sintomas sa listahan; subukan ang ibang keyword o tingnan ang buong talahanayan sa ibaba."};
window.FIELDS = [["sym", "Sintomas / trigger"], ["l1", "L1 check muna (opisyal)"], ["l2", "L2 root cause (network)"], ["tip", "Tip"], ["scene", "Totoong kaso"]];
window.THEAD = ["Sintomas / error", "Kategorya", "L1 check muna (opisyal)", "L2 root cause"];
