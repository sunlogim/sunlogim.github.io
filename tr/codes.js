window.CODES = {
 "Cihaz çevrimdışı": {
  "cat": "Hesap / İzinler",
  "alias": "çevrimdışı offline 21 çevrimiçi değil bağlanmıyor cihaz bulunamadı",
  "sym": "Ana makine kontrol edenin listesinde \"çevrimdışı\" görünür veya cihaz bulunamadı uyarısı (log hata kodu 21)",
  "l1": "Ana makine PC'sinin açık, çevrimiçi, uykuda olmadığını, SunLogin istemcisinin çalıştığını ve \"oturum açık\" gösterdiğini doğrulayın; ağ kararsızsa yönlendiriciyi yeniden başlatın veya ağ değiştirin",
  "l2": "Çevrimdışı = ana makine düpedüz çevrimiçi değil, önce ağa bakmayın: uykudan sonra ağ kartı sık kopar, dizüstü kapağını kapatmak WiFi'yi keser, Android güç tasarrufu arka planı öldürür; Windows'ta services.msc'den \"SunLogin\" hizmetinin çalışıp çalışmadığını kontrol edin",
  "tip": "Uzun süre gözetimsiz ana makine: \"otomatik başlatma + otomatik giriş + gözetimsiz erişim\"i açın, Android'de SunLogin'i güç tasarrufu beyaz listesine ekleyin",
  "scene": "Ev PC'sine bağlanıyorum çevrimdışı; dizüstü kapağı kapanınca WiFi koptu"
 },
 "Bağlantı zaman aşımı": {
  "cat": "Ağ / Geçiş",
  "alias": "zaman aşımı timeout bağlanmıyor bağlantı hatası 15 3 kanal",
  "sym": "Bağlan'a basınca döner ve sonunda \"bağlantı hatası / kanal kurulamadı\" (kod 3=ağ yok, 15=kanal kurma zaman aşımı)",
  "l1": "Önce iki taraftaki güvenlik duvarı / antivirüsü kapatıp deneyin; ikisinde de çıkıp yeniden girin; en sona güncelleyin; ağ ortamını değiştirin (telefon hotspot'u)",
  "l2": "\"Bağlantı hatası\"nın %90'ı 2. aşama \"kanal kurma\"da takılır: 15=P2P geçmiyor ve röle de başarısız (ağ çok kötü), 3=ağ katmanı engelli; hotspot ile bağlanıyorsa temelde ağ / güvenlik duvarı sorunudur",
  "tip": "3 aşamada konumlandırın: hesap doğrulama → kanal kurma → görüntü aktarımı; zaman aşımı neredeyse hep \"kanal kurma\"dadır",
  "scene": "Ofiste bağlanmıyor, evde veya hotspot'ta hemen bağlanıyor → ağ ortamı sorunu, bozuk yazılım değil"
 },
 "Hatalı erişim parolası": {
  "cat": "Hesap / İzinler",
  "alias": "parola doğrulama başarısız 10 access password",
  "sym": "Parola girişinden sonra doğrulama başarısız / parola hatalı uyarısı (log kodu 10)",
  "l1": "Girdiğinizin SunLogin hesabının oturum parolası değil \"erişim parolası\" olduğunu doğrulayın; ana makinede erişim parolasını sıfırlayıp yeniden bağlanın",
  "l2": "Erişim parolası ana makinenin ayrıca belirlediği uzak paroladır; sık değiştirilmiş veya oturum parolasıyla karıştırılmış olur; değişimden sonra kontrol eden yenisini kullanır",
  "tip": "Erişim parolası ≠ oturum parolası: ana makinenin \"Ayarlar → Güvenlik\"inden görüp sıfırlayın",
  "scene": "Sürekli oturum hesabının parolasıyla bağlanmaya çalışmak; elbette hata verir"
 },
 "Güvenlik duvarı engeli": {
  "cat": "Ağ / Geçiş",
  "alias": "güvenlik duvarı firewall defender antivirüs beyaz liste engel",
  "sym": "Bağlantı hiçbir açılır pencere olmadan hemen zaman aşımına uğrar (güvenlik yazılımınca sessizce engellenmiş, bağlantı hatalarının yarısından fazlası)",
  "l1": "SunLogin'i güvenlik duvarı / güvenlik güvenine ekleyin: Windows Defender Güvenlik Duvarı \"uygulamaya izin ver\"de SunloginClient'i işaretleyin; üçüncü taraf antivirüse güven ekleyin",
  "l2": "Beyaz listeye tüm kurulum klasörünü eklemek gerekir (örn. C:\\Program Files (x86)\\Oray\\SunLogin\\), sadece ana exe'yi değil—SunLogin çalışırken birkaç bileşen çağırır",
  "tip": "Hızlı doğrulama: güvenliği tamamen kapatın (sadece gerçek zamanlı korumayı değil) ve bağlanın; bağlanıyorsa %100 o engelliyordu",
  "scene": "Ağ bozuk sandın; aslında antivirüs SunLogin'in ağ isteğini sessizce engelliyordu"
 },
 "Kurum ağı bağlanmıyor": {
  "cat": "Ağ / Geçiş",
  "alias": "kurum ağı kampüs ağı işletme dpi internet davranış yönetimi port 443",
  "sym": "Evde bağlanıyor, ofis / okula gelince bağlanmıyor (port geçiyor ama trafik derin paket incelemesince frenleniyor)",
  "l1": "Kurum BT'sinden SunLogin beyaz listesine izin isteyin; ya da atlatmak için ana makinede geçici telefon hotspot'u kullanın; SunLogin SOS sürümünü deneyin (farklı bağlantı yolu)",
  "l2": "Kurum ağlarında sık sık internet davranış yönetimi cihazları olur; TCP 443 (HTTPS ile aynı port) üzerinden giden SunLogin DPI'ce tanınıp engellenir; topluluk deneyimi: kurum yönlendiricisinde TCP 51020–51030 + UDP 50000–50010'a izin verin, veya bağlantı modunu \"yüksek hız\"dan \"uyumlu\"ya (80/443, daha genel) geçirin",
  "tip": "Kurum ağı mı diye anlamak için: ikisini de telefon hotspot'una geçirin; bağlanıyorsa %100 kurum ağı engelidir",
  "scene": "Şirket DPI uygular, SunLogin'i anormal HTTPS trafiği sayıp engeller"
 },
 "Siyah ekran": {
  "cat": "Görüntü / Performans",
  "alias": "siyah ekran black screen görüntü yok hep siyah görüntü aktarımı",
  "sym": "Bağlanıyor ama ekran hep siyah / sadece siyah (3. aşama \"görüntü aktarımı\"nda takılı)",
  "l1": "Ana makinede SunLogin'e izin verin: macOS \"Sistem Ayarları → Gizlilik ve Güvenlik\"te ekran kaydı / erişilebilirlik / tam disk erişimini işaretleyin; Windows'ta masaüstü modunu değiştirmeyi / yeniden bağlanmayı deneyin",
  "l2": "Siyah ekran genelde yakalama izninin eksikliği veya ayrık GPU geçişi, kilit ekranı koruması; ayrık GPU'lu dizüstülerde güç politikasında SunLogin'in iGPU ile yakalamasını sağlayabilirsiniz",
  "tip": "macOS Ventura'dan beri izin yolu \"Sistem Ayarları\"na taşındı; arama kutusunda \"ekran kaydı\" aramak en hızlısı",
  "scene": "Yeni kurulan Mac ana makine hep siyah bağlanıyor: \"ekran kaydı\" izni eksikti"
 },
 "Görünür kontrol edilemez": {
  "cat": "Görüntü / Performans",
  "alias": "kontrol edilemez fare klavye tepkisiz control sadece görme erişilebilirlik",
  "sym": "Ekran görünüyor ama fare ve klavye tıklamaları yanıt vermiyor (görünür kontrol edilemez)",
  "l1": "Ana makinede \"Uzaktan kontrole izin ver\"i açın; macOS \"erişilebilirlik\" izni ister, Windows'ta ilgili izni gerektiren UAC / yönetici pencerelerine dikkat edin",
  "l2": "\"Görünür kontrol edilemez\" neredeyse hep girdi enjeksiyon izni sorunudur: macOS erişilebilirliği işaretsiz, ya da ana makine yönetici gerektiren bir UAC güvenli masaüstü açtı (SunLogin işlem yapmak için yönetici olarak çalışmalı)",
  "tip": "Salt okunurken: önce \"Uzaktan kontrole izin ver\"in açık olduğunu doğrulayın, macOS'ta \"erişilebilirlik\" ekleyin, Windows'ta SunLogin'i yönetici olarak çalıştırın",
  "scene": "Karşının PC'sini kontrol ediyorsun, ekran görünüyor ama tıklamalar işe yaramıyor → karşı taraf \"Uzaktan kontrole izin ver\"i açmamış"
 },
 "Takılma ve yüksek gecikme": {
  "cat": "Görüntü / Performans",
  "alias": "takılma gecikme lag iz akıcı değil yavaş",
  "sym": "Pencereleri sürüklemek takılıyor, yazı 2–3 sn sonra çıkıyor, fare iz bırakıyor (gecikme deneyimi belirgin kötüleşiyor)",
  "l1": "Kalite ve fps'yi düşürmek için \"ofis / akıcı\" masaüstü moduna geçin; ana makinede bant genişliği yiyen indirme / videoyu kapatın; kablo veya 5 GHz WiFi'yi tercih edin",
  "l2": "Neden dağılımı (topluluk ölçümü): röle %35 > kalite çok yüksek %25 > ana makine performansı yetersiz %20 > ağ kötü %15 > fps sınırı %5; gecikme kademeleri: <30 ms neredeyse yerel, 80–150 ms belirgin takılma, >150 ms neredeyse sadece tıklama. 100 ms üstünde kaliteyi ayarlamak fayda etmez; darboğaz ağdır",
  "tip": "Önce sol alta bakın P2P mi röle mi; renk derinliğini 32 bitten bir kademe düşürmek bant genişliği kullanımını yarıya indirebilir",
  "scene": "120 ms gecikmede tablo seçimi fareyi takip etmiyor; kablo + ofis modu ile akıcı oluyor"
 },
 "Röle modu": {
  "cat": "Ağ / Geçiş",
  "alias": "röle relay p2p geçmiyor nat upnp simetrik operatörler arası",
  "sym": "İstemci sol altta \"P2P\" yerine \"Relay\" gösterir, genel gecikme yüksek, fare iz bırakır",
  "l1": "SunLogin bağlantı modunu otomatik seçer, elle değiştirilemez; sistemin P2P'yi yeniden denemesi için bağlantıyı kesip yeniden bağlanın (10 sn ve üzeri arayla)",
  "l2": "P2P delme oranını artırma: ① yönlendirici UPnP'sini açın (ev yönlendiricileri çoğu kez varsayılan kapalı; açınca oran çok yükselir); ② iki tarafı da simetrik NAT arkasında bırakmayın, bir tarafın ağını değiştirin; ③ farklı operatörler arasında P2P geçse de gecikme yüksek kalır, bazen röleyi zorlamak daha kararlıdır (SunLogin sunucusunun operatörler arası özel hatları var)",
  "tip": "UPnP açık ama hâlâ röle ise muhtemelen simetrik NAT; operatörler arası senaryolarda röleyi deneyin",
  "scene": "Röleyi kapatıp UPnP'yi açtım, hemen P2P oldu, gecikme 120 ms→35 ms"
 },
 "Bulanık görüntü": {
  "cat": "Görüntü / Performans",
  "alias": "kalite bulanık netlik çözünürlük renk true color bit hızı",
  "sym": "Görüntü harekette bulanık, yeterince net değil (özellikle sürüklerken / videoda)",
  "l1": "Bant genişliği yetersizken SunLogin akıcılık için kaliteyi otomatik düşürür; daha net için kalite / fps'yi elle yükseltin, ya da \"HD / kalite\" moduna geçin",
  "l2": "En yüksek kalite çözünürlüğü ana makine monitörünün fiziksel sınırıyla kısıtlıdır (ana makine sadece 1080P ise uzaktan 4K olmaz); profesyonel geri verim için true color 4:4:4; donanım kod çözme işlemeyi kontrol edenin GPU'suna verir ve CPU kullanımını düşürür",
  "tip": "Netliği önceleyin: çözünürlüğü \"kontrol edeni izle\" + tam ekran yapın, esnetmeden kaynaklı bulanıklığı önleyin",
  "scene": "HD modunda bant genişliği yetişmez ve kalite otomatik düşer → harekette bulanık, ağ düzelince toparlar"
 },
 "Ücretsiz sürüm 30 fps": {
  "cat": "Görüntü / Performans",
  "alias": "30fps kare hızı fps ücretsiz sürüm 60fps 144fps ücretli",
  "sym": "Gecikme yüksek değil ama pencere sürükleme / kaydırma belirgin akıcı değil ve iz bırakıyor (ağ değil, kare tavanı sorunu)",
  "l1": "Ücretsiz seviye hesabı en fazla 30 fps; daha akıcı için hesap hizmet seviyesini yükseltin: ücretli 60 fps'ye, oyun sürümü 144 fps'ye kadar",
  "l2": "En yüksek kare hızı iki tarafın monitör yenileme hızıyla da kısıtlıdır: biri 60 Hz ise 60 FPS aşılamaz; 144 fps GPU + 144 Hz monitör ve ana makine GPU'sunun donanım kodlamasını desteklemesini gerektirir",
  "tip": "30 ile 60 fps farkı çok belirgindir; Android ücretli de 60 fps sunar, dokunmaya daha duyarlı",
  "scene": "Ücretsiz sürümde pencere sürükleme iz bırakır; 60 fps'ye yükseltince belirgin akıcı"
 },
 "Wake başarısız": {
  "cat": "Hesap / İzinler",
  "alias": "wake uyandırma uyku sleep kapatma uzaktan açma gözetimsiz",
  "sym": "Ana makine uyku / uykudan sonra bağlanmıyor, ya da uzaktan açmak istiyorsun ama uyanmıyor",
  "l1": "SunLogin'in \"Wake işlevi\"yle uyandırın (ana makinede önceden etkinleştirin); ana makineyi uyumayacak şekilde ayarlayın, \"gözetimsiz erişim\"i açın",
  "l2": "Uzaktan wake, WOL (Wake-on-LAN) + SunLogin wake hizmetine bağlıdır; ana makinenin güç / ağ kartı desteği ve önceden yapılandırma gerekir; tam güç kesintisi / kapatmada yazılımla uyandırılamaz",
  "tip": "Gözetimsiz için şart: otomatik başlatma + otomatik giriş + uyumama + wake'i önceden etkinleştirme",
  "scene": "Seyahatte ev PC'sine bağlanmak istiyorsun, ama uyumuş ve wake'i önceden açmamışsın → bağlanmıyor"
 },
 "Farklı hesap": {
  "cat": "Hesap / İzinler",
  "alias": "hesap uyuşmuyor cihaz listesi görünmüyor iki hesap token yeniden giriş",
  "sym": "Kontrol edilecek cihaz listede görünmüyor, ya da çevrimiçi gibi görünse de aslında düşmüş",
  "l1": "Kendi cihazlarını kontrol ederken kontrol eden ve ana makine aynı SunLogin hesabıyla giriş yapar; ana makine istemcisini yeniden açıp yeniden giriş isteyip istemediğine bakın",
  "l2": "A hesabındaki cihaz B hesabında görünmez; uzun süre boştaki cihazların jetonu dolar, çevrimiçi görünse de düşmüştür, yeniden giriş toparlar; aynı hesabı aynı anda birden çok cihazla kullanmaktan kaçının (hizmeti kararsızlaştırır)",
  "tip": "İki taraf da kesinlikle aynı hesap; çevrimiçi görünüp bağlanmıyorsa önce ana makineyi bir kez yeniden giriş yaptırın",
  "scene": "Ana makine A hesabında, kontrol eden B hesabında: cihaz listede hiç görünmüyor"
 },
 "Protokol sürümü uyuşmuyor": {
  "cat": "Sürüm / Protokol",
  "alias": "sürüm protokol 30 uyuşmuyor güncelleme yeniden kurulum önbellek",
  "sym": "Büyük sürüm farkı bağlantı hatası / uyumluluk anormalliğine yol açar (log kodu 30)",
  "l1": "İki tarafı da en sona güncelleyin (istemci → hakkında → sürüm numarasına bak), istemciyi yeniden başlatın; sürerse cihazı yeniden başlatın, önbelleği temizleyin",
  "l2": "SunLogin protokolü oldukça sık güncellenir; bir taraf eski sürümde (örn. 2024) ise yeniyle kolay uyumsuz olur; çoğu kişi sadece kontrol edeni günceller, ana makine aylarca dokunulmaz",
  "tip": "Tam yeniden kurulum (hâlâ bağlanmazsa): kaldırıp %AppData%\\Oray\\SunLogin ve %ProgramData%\\Oray\\SunLogin'i silin, sonra en son sürümü kurun",
  "scene": "Ana makine yarım yıldır güncellenmemiş; kontrol eden yükseltilince protokol uyuşmuyor → bağlantı hatası"
 },
 "Ana makine performansı yetersiz": {
  "cat": "Görüntü / Performans",
  "alias": "performans cpu bellek lag ana makine kaynak kodlama eski pc",
  "sym": "İşlem gecikmesi dalgalanır, görüntü takılır (ana makine kaynakları dolu, kodlama yetişemiyor)",
  "l1": "Belleği boşaltmak için ana makinede kullanılmayan programları kapatın (Chrome çok sekmeyle çok yer); masaüstü modunu \"ultra hızlı / akıcı\"ya düşürün",
  "l2": "SunLogin yakalama ve kodlamaya CPU / bellek gerekir: ofis modu ~CPU %5–15 / bellek 150–200 MB, HD / oyun ~CPU %20–40 / 200–400 MB; ana makine derleme / VM / antivirüs taraması / sistem güncellemesi yapıyorsa belirgin yavaşlar",
  "tip": "Eski PC'lerde: bellek artırın (4G→8G), HDD'yi SSD ile değiştirin, \"donanım kod çözmeye öncelik\"i açıp GPU'nun paylaşmasını sağlayın, hepsi yardımcı olur",
  "scene": "Ana makine Windows güncellemesi indiriyor, CPU %40'ta, uzak görüntü takılıyor"
 }
};
window.LABELS = {"miss": "Belirti listede yok; başka bir anahtar kelime deneyin veya aşağıdaki tam tabloya bakın."};
window.FIELDS = [["sym", "Belirti / tetikleyici"], ["l1", "L1 önce kontrol et (resmi)"], ["l2", "L2 kök neden (ağ)"], ["tip", "İpucu"], ["scene", "Gerçek vaka"]];
window.THEAD = ["Belirti / hata", "Kategori", "L1 önce kontrol et (resmi)", "L2 kök neden"];
