window.CODES = {
 "Perangkat offline": {
  "cat": "Akun / Izin",
  "alias": "offline 21 tidak online tak terhubung perangkat tak ditemukan",
  "sym": "Host tampil \"offline\" di daftar pengontrol, atau perangkat tak ditemukan (kode error log 21)",
  "l1": "Pastikan PC host menyala, online, tidak tidur, klien SunLogin berjalan dan \"sudah login\"; jika jaringan tak stabil restart router atau ganti jaringan",
  "l2": "Offline = host memang belum online, jangan cek jaringan dulu: setelah tidur kartu jaringan sering putus, laptop tutup lid putus WiFi, mode hemat daya Android membunuh latar; di Windows cek services.msc apakah layanan \"SunLogin\" berjalan",
  "tip": "Host tanpa pengawasan jangka panjang: nyalakan \"auto-start + auto-login + akses tanpa pengawasan\", di Android masukkan SunLogin ke whitelist hemat daya",
  "scene": "Remote ke PC rumah ternyata offline, rupanya WiFi laptop putus setelah lid ditutup"
 },
 "Koneksi timeout": {
  "cat": "Jaringan / Traversal",
  "alias": "timeout gagal terhubung 15 3 kanal",
  "sym": "Setelah klik connect berputar lalu \"gagal terhubung / tak bisa bangun kanal\" (kode log 3=jaringan putus, 15=timeout bangun kanal)",
  "l1": "Matikan dulu firewall / antivirus kedua sisi lalu coba; logout-login ulang kedua sisi; update ke terbaru; ganti lingkungan jaringan (hotspot HP)",
  "l2": "90% \"gagal terhubung\" macet di tahap 2 \"membangun kanal\": 15=P2P tak tembus dan relay juga gagal (jaringan terlalu buruk), 3=lapisan jaringan diblokir; jika ganti hotspot bisa, pada dasarnya masalah jaringan / firewall",
  "tip": "Lokalisasi 3 tahap: verifikasi akun → bangun kanal → transmisi layar; timeout hampir selalu di \"bangun kanal\"",
  "scene": "Tak terhubung di kantor, langsung bisa di rumah atau hotspot → masalah lingkungan jaringan, bukan software rusak"
 },
 "Sandi akses salah": {
  "cat": "Akun / Izin",
  "alias": "sandi gagal verifikasi 10 access password",
  "sym": "Setelah memasukkan sandi muncul gagal verifikasi / sandi salah (kode log 10)",
  "l1": "Pastikan yang dimasukkan \"sandi akses\" bukan sandi login akun SunLogin; atur ulang sandi akses di host lalu hubungkan",
  "l2": "Sandi akses adalah sandi remote terpisah yang diset host, sering diubah atau tertukar dengan sandi login; setelah ubah, sisi pengontrol pakai sandi baru",
  "tip": "Sandi akses ≠ sandi login: lihat / reset di \"Pengaturan → Keamanan\" sisi host",
  "scene": "Terus memakai sandi akun login untuk menghubungkan, jelas muncul salah"
 },
 "Blokir firewall": {
  "cat": "Jaringan / Traversal",
  "alias": "firewall defender antivirus whitelist blokir",
  "sym": "Koneksi langsung timeout tanpa popup apa pun (diblokir diam-diam SW keamanan, lebih dari separuh gagal-terhubung)",
  "l1": "Tambahkan SunLogin ke trust firewall / SW keamanan: di Windows Defender Firewall \"izinkan aplikasi\" centang SunloginClient; tambah trust di antivirus pihak ketiga",
  "l2": "Whitelist harus seluruh folder instalasi (mis. C:\\Program Files (x86)\\Oray\\SunLogin\\), jangan hanya exe utama—SunLogin memanggil beberapa komponen saat berjalan",
  "tip": "Verifikasi cepat: tutup total SW keamanan (bukan hanya proteksi real-time) lalu hubungkan, jika bisa 100% itu yang memblokir",
  "scene": "Mengira jaringan rusak, padahal antivirus diam-diam memblokir permintaan jaringan SunLogin"
 },
 "Jaringan kantor gagal": {
  "cat": "Jaringan / Traversal",
  "alias": "jaringan kantor kampus perusahaan dpi manajemen perilaku internet port 443",
  "sym": "Bisa di rumah, begitu di kantor / sekolah tak terhubung (port lewat tapi trafik diblokir deep packet inspection)",
  "l1": "Minta IT kantor izinkan whitelist SunLogin; atau host pakai hotspot HP sementara untuk bypass; coba SunLogin versi SOS (cara koneksi berbeda)",
  "l2": "Jaringan perusahaan sering ada perangkat manajemen perilaku internet, SunLogin yang lewat TCP 443 (port sama dengan HTTPS) dikenali dan diblokir DPI; pengalaman komunitas: izinkan TCP 51020–51030 + UDP 50000–50010 di router perusahaan, atau ganti mode koneksi dari \"cepat\" ke \"kompatibel\" (80/443 lebih umum)",
  "tip": "Menilai apakah jaringan kantor: ganti keduanya ke hotspot HP, jika bisa 100% blokir jaringan kantor",
  "scene": "Kantor menerapkan DPI, SunLogin dianggap trafik HTTPS tak normal lalu diblokir"
 },
 "Layar hitam": {
  "cat": "Tampilan / Performa",
  "alias": "layar hitam black screen tak ada gambar serba hitam transmisi layar",
  "sym": "Terhubung tapi layar serba hitam / hanya hitam (macet di tahap 3 \"transmisi layar\")",
  "l1": "Beri izin SunLogin di host: macOS \"Pengaturan Sistem → Privasi & Keamanan\" centang rekam layar / aksesibilitas / akses disk penuh; Windows coba ganti mode desktop / hubungkan ulang",
  "l2": "Layar hitam umumnya izin capture hilang atau peralihan GPU diskret, proteksi layar kunci; laptop GPU diskret bisa atur SunLogin pakai iGPU untuk capture di kebijakan daya",
  "tip": "Sejak macOS Ventura jalur izin pindah ke \"Pengaturan Sistem\", cari \"rekam layar\" di kotak cari paling cepat",
  "scene": "Mac host baru pasang terhubung serba hitam, ternyata izin \"rekam layar\" belum diberi"
 },
 "Terlihat tak terkontrol": {
  "cat": "Tampilan / Performa",
  "alias": "tak bisa dikontrol mouse keyboard tak respons control hanya lihat aksesibilitas",
  "sym": "Layar terlihat, tapi klik mouse keyboard tak ada respons (terlihat tak terkontrol)",
  "l1": "Nyalakan \"Izinkan remote\" di host; macOS wajib beri izin \"aksesibilitas\", Windows perhatikan UAC / jendela admin perlu izin sesuai",
  "l2": "Terlihat tak terkontrol hampir selalu masalah izin injeksi input: aksesibilitas macOS belum dicentang, atau host memunculkan UAC secure desktop yang butuh admin (SunLogin perlu jalan sebagai admin agar bisa operasi)",
  "tip": "Saat read-only: pastikan dulu \"Izinkan remote\" menyala, macOS lengkapi \"aksesibilitas\", Windows jalankan SunLogin sebagai admin",
  "scene": "Remote PC lawan layar terlihat, klik apa pun tak guna → lawan belum nyalakan \"Izinkan remote\""
 },
 "Lag latensi tinggi": {
  "cat": "Tampilan / Performa",
  "alias": "lag latensi delay berbayang tak mulus lambat",
  "sym": "Geser jendela tersendat, ketik baru muncul 2–3 detik, mouse berbayang (pengalaman latensi jelas memburuk)",
  "l1": "Ganti ke mode desktop \"kantor / mulus\" untuk turunkan kualitas/frame; tutup unduhan / video penyita bandwidth di host; utamakan kabel atau WiFi 5GHz",
  "l2": "Proporsi penyebab (uji komunitas): relay 35% > kualitas terlalu tinggi 25% > performa host kurang 20% > jaringan buruk 15% > batas frame 5%; tingkat latensi: <30ms mendekati lokal, 80–150ms jelas tersendat, >150ms hampir hanya klik. Saat latensi di atas 100ms, atur kualitas pun percuma, botol leher di jaringan",
  "tip": "Lihat dulu kiri bawah P2P atau relay; turunkan kedalaman warna dari true color 32-bit satu tingkat, pemakaian bandwidth bisa separuh",
  "scene": "Latensi 120ms seleksi area tabel tak mengejar mouse, ganti kabel + mode kantor jadi mulus"
 },
 "Mode relay": {
  "cat": "Jaringan / Traversal",
  "alias": "relay 转发 p2p tak tembus nat upnp simetris lintas operator",
  "sym": "Klien menampilkan \"Relay\" bukan \"P2P\" di kiri bawah, latensi keseluruhan tinggi, mouse berbayang",
  "l1": "SunLogin memilih mode koneksi otomatis tak bisa manual; putus lalu hubungkan ulang (jeda 10 detik lebih) agar sistem mencoba P2P lagi",
  "l2": "Meningkatkan rasio tembus P2P: ① nyalakan UPnP router (router rumah default sering mati, dinyalakan rasio tembus melonjak); ② jangan kedua sisi di belakang NAT simetris, ganti jaringan satu sisi; ③ lintas operator meski P2P tembus latensi tetap tinggi, kadang paksa relay malah lebih stabil (server SunLogin punya jalur khusus lintas operator)",
  "tip": "UPnP nyala tapi tetap relay, kemungkinan besar NAT simetris; untuk skenario lintas operator coba relay",
  "scene": "Matikan relay, nyalakan UPnP langsung jadi P2P, latensi 120ms→35ms"
 },
 "Gambar buram": {
  "cat": "Tampilan / Performa",
  "alias": "kualitas buram ketajaman resolusi warna true color bitrate",
  "sym": "Gambar buram saat bergerak, kurang tajam (terutama saat geser / video)",
  "l1": "Saat bandwidth kurang SunLogin otomatis turunkan kualitas demi kelancaran; ingin lebih jelas naikkan kualitas / frame manual, atau ganti mode \"HD / kualitas\"",
  "l2": "Resolusi kualitas tertinggi dibatasi batas fisik monitor host (host hanya 1080P tak bisa remote 4K); restorasi profesional pakai true color 4:4:4; decoding hardware utamakan serahkan pemrosesan ke GPU pengontrol, turunkan pakai CPU",
  "tip": "Utamakan ketajaman: set resolusi \"ikuti pengontrol\" + layar penuh, hindari buram karena peregangan",
  "scene": "Mode HD bandwidth tak mengejar otomatis turun kualitas → buram saat bergerak, pulih saat jaringan membaik"
 },
 "30fps versi gratis": {
  "cat": "Tampilan / Performa",
  "alias": "30fps frame rate fps versi gratis 60fps 144fps berbayar",
  "sym": "Latensi tidak tinggi tapi geser jendela / scroll jelas tak mulus dan berbayang (bukan masalah jaringan, tapi batas frame rate)",
  "l1": "Akun tingkat gratis maksimal 30fps; ingin lebih mulus naikkan tingkat layanan akun: berbayar bisa 60fps, versi game maksimal 144fps",
  "l2": "Frame rate tertinggi juga dibatasi refresh rate monitor kedua sisi: salah satu 60Hz maka tak bisa lewat 60FPS; 144fps perlu GPU + monitor dukung 144Hz, dan GPU host dukung encoding hardware",
  "tip": "Selisih 30fps dan 60fps terasa besar; Android berbayar juga 60fps, lebih sensitif terhadap sentuh",
  "scene": "Versi gratis geser jendela berbayang, setelah upgrade 60fps jelas lebih mulus"
 },
 "Gagal wake": {
  "cat": "Akun / Izin",
  "alias": "wake bangun tidur sleep matikan boot remote tanpa pengawasan",
  "sym": "Host tak terhubung setelah tidur / sleep, atau ingin boot remote tapi tak bangun",
  "l1": "Bangunkan dengan \"fitur Wake\" SunLogin (perlu diaktifkan dulu di host); set host tidak tidur, nyalakan \"akses tanpa pengawasan\"",
  "l2": "Wake remote bergantung WOL (Wake-on-LAN) + layanan wake SunLogin, perlu dukungan daya / kartu jaringan host dan konfigurasi awal; mati total / shutdown tak bisa dibangunkan software",
  "tip": "Wajib untuk tanpa pengawasan: auto-start + auto-login + tidak tidur + aktifkan wake lebih awal",
  "scene": "Saat dinas ingin connect PC rumah, ternyata sleep dan wake belum diaktifkan → tak terhubung"
 },
 "Akun tak cocok": {
  "cat": "Akun / Izin",
  "alias": "akun tak cocok daftar perangkat tak terlihat dua akun token login ulang",
  "sym": "Perangkat yang mau dikontrol tak terlihat di daftar, atau tampak online padahal sudah putus",
  "l1": "Saat mengontrol perangkat sendiri, pengontrol dan host login akun SunLogin yang sama; buka ulang klien host lihat apakah perlu login ulang",
  "l2": "Perangkat di akun A tak terlihat di akun B; perangkat lama menganggur token kedaluwarsa, tampak online padahal putus, login ulang pulih; hindari banyak perangkat pakai satu akun bersamaan (mudah bikin layanan tak stabil)",
  "tip": "Kedua sisi wajib akun sama; tampil online tapi tak terhubung, suruh host login ulang sekali dulu",
  "scene": "Host login akun A, pengontrol login akun B, perangkat sama sekali tak terlihat di daftar"
 },
 "Versi protokol tak cocok": {
  "cat": "Versi / Protokol",
  "alias": "versi protokol 30 tak cocok update upgrade install ulang cache",
  "sym": "Selisih versi besar menyebabkan gagal terhubung / anomali adaptasi (kode log 30)",
  "l1": "Update kedua sisi ke terbaru (klien → tentang → lihat nomor versi), restart klien; jika tetap, restart perangkat, bersihkan cache",
  "l2": "Protokol SunLogin sering diupdate, satu sisi versi lama (mis. versi 2024) mudah tak kompatibel dengan baru; banyak yang hanya update pengontrol, host berbulan tak disentuh",
  "tip": "Install ulang total (saat masih tak terhubung): uninstall lalu hapus %AppData%\\Oray\\SunLogin dan %ProgramData%\\Oray\\SunLogin baru pasang versi terbaru",
  "scene": "Host setengah tahun tak update, setelah pengontrol upgrade protokol tak cocok → gagal terhubung"
 },
 "Performa host kurang": {
  "cat": "Tampilan / Performa",
  "alias": "performa cpu memori lag host sumber daya encoding pc tua",
  "sym": "Latensi operasi naik-turun, layar tersendat (sumber daya host penuh, encoding tak mengejar)",
  "l1": "Tutup program tak terpakai di host untuk bebaskan memori (Chrome banyak tab boros memori); turunkan mode desktop ke \"ultra cepat / mulus\"",
  "l2": "Capture & encoding SunLogin butuh CPU / memori: mode kantor ~CPU 5–15% / memori 150–200MB, HD / game ~CPU 20–40% / 200–400MB; host yang sedang compile / VM / scan antivirus / update sistem jelas melambat",
  "tip": "PC tua tambah memori (4G→8G), HDD ganti SSD, nyalakan \"utamakan decoding hardware\" agar GPU berbagi semuanya efektif",
  "scene": "Host sedang unduh update Windows, CPU 40%, layar remote tersendat"
 }
};
window.LABELS = {"miss": "Gejala tak terdaftar, coba kata kunci lain atau lihat tabel lengkap di bawah."};
window.FIELDS = [["sym", "Gejala / pemicu"], ["l1", "L1 cek resmi dulu"], ["l2", "L2 akar masalah (jaringan)"], ["tip", "Tips"], ["scene", "Kasus nyata"]];
window.THEAD = ["Gejala / error", "Kategori", "L1 cek dulu (resmi)", "L2 akar masalah"];
