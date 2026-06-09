window.CODES = {
 "Peranti luar talian": {
  "cat": "Akaun / Kebenaran",
  "alias": "luar talian offline 21 tak dalam talian tak sambung peranti tak dijumpai",
  "sym": "Hos nampak \"luar talian\" dalam senarai pengawal, atau amaran peranti tak dijumpai (kod log 21)",
  "l1": "Sahkan PC hos dihidupkan, dalam talian, tak tidur, klien SunLogin berjalan dan \"telah log masuk\"; jika rangkaian tak stabil mula semula penghala atau tukar rangkaian",
  "l2": "Luar talian = hos memang tak dalam talian, jangan lihat rangkaian dahulu: selepas tidur kad rangkaian selalu putus, tutup penutup laptop putus WiFi, mod jimat kuasa Android bunuh latar; di Windows semak services.msc sama ada perkhidmatan \"SunLogin\" berjalan",
  "tip": "Hos tanpa pengawasan jangka panjang: hidupkan \"mula automatik + log masuk automatik + akses tanpa pengawasan\", di Android tambah SunLogin ke senarai putih jimat kuasa",
  "scene": "Sambung ke PC rumah nampak luar talian, rupanya WiFi laptop putus selepas penutup ditutup"
 },
 "Tamat masa sambungan": {
  "cat": "Rangkaian / Lintasan",
  "alias": "timeout tamat masa tak sambung gagal sambung 15 3 saluran",
  "sym": "Selepas klik sambung berpusing lalu akhirnya \"gagal sambung / saluran tak terbina\" (kod 3=tiada rangkaian, 15=tamat masa bina saluran)",
  "l1": "Matikan tembok api / antivirus kedua-dua belah dahulu dan cuba; log keluar masuk semula kedua-dua; kemas kini ke terkini; tukar persekitaran rangkaian (hotspot telefon)",
  "l2": "90% \"gagal sambung\" tersangkut di fasa 2 \"bina saluran\": 15=P2P tak tembus dan geganti pun gagal (rangkaian terlalu teruk), 3=lapisan rangkaian disekat; jika dengan hotspot boleh sambung, pada dasarnya masalah rangkaian / tembok api",
  "tip": "Kenal pasti 3 fasa: sahkan akaun → bina saluran → hantar imej; tamat masa hampir selalu di \"bina saluran\"",
  "scene": "Tak sambung di pejabat, di rumah atau hotspot terus sambung → masalah persekitaran rangkaian, bukan perisian rosak"
 },
 "Kata laluan akses salah": {
  "cat": "Akaun / Kebenaran",
  "alias": "kata laluan pengesahan gagal 10 access password",
  "sym": "Selepas masukkan kata laluan amaran pengesahan gagal / kata laluan salah (kod log 10)",
  "l1": "Sahkan yang dimasukkan ialah \"kata laluan akses\" bukan kata laluan log masuk akaun SunLogin; tetap semula kata laluan akses di hos lalu sambung",
  "l2": "Kata laluan akses ialah kata laluan jauh berasingan yang ditetapkan hos; selalu ditukar atau dikelirukan dengan kata laluan log masuk; selepas tukar pengawal guna yang baharu",
  "tip": "Kata laluan akses ≠ kata laluan log masuk: lihat / tetap semula dalam \"Tetapan → Keselamatan\" hos",
  "scene": "Asyik guna kata laluan akaun log masuk untuk sambung; sudah tentu salah"
 },
 "Sekatan tembok api": {
  "cat": "Rangkaian / Lintasan",
  "alias": "tembok api firewall defender antivirus senarai putih sekatan",
  "sym": "Sambungan terus tamat masa tanpa sebarang pop timbul (disekat senyap oleh keselamatan, lebih separuh gagal sambung)",
  "l1": "Tambah SunLogin ke kepercayaan tembok api / keselamatan: dalam Tembok Api Windows Defender \"benarkan apl\" tanda SunloginClient; tambah kepercayaan dalam antivirus pihak ketiga",
  "l2": "Senarai putih perlu seluruh folder pemasangan (cth. C:\\Program Files (x86)\\Oray\\SunLogin\\), bukan hanya exe utama—SunLogin memanggil beberapa komponen semasa berjalan",
  "tip": "Sahkan pantas: tutup terus keselamatan (bukan hanya perlindungan masa nyata) dan sambung; jika boleh 100% ia menyekat",
  "scene": "Sangka rangkaian rosak, sebenarnya antivirus menyekat senyap permintaan rangkaian SunLogin"
 },
 "Rangkaian syarikat tak sambung": {
  "cat": "Rangkaian / Lintasan",
  "alias": "rangkaian syarikat rangkaian kampus perusahaan dpi pengurusan tingkah laku internet port 443",
  "sym": "Di rumah boleh, sampai pejabat / sekolah tak sambung (port lalu tapi trafik disekat pemeriksaan paket mendalam)",
  "l1": "Minta IT syarikat benarkan senarai putih SunLogin; atau hos guna hotspot telefon sementara untuk pintas; cuba SunLogin versi SOS (cara sambung berbeza)",
  "l2": "Rangkaian perusahaan selalu ada peranti pengurusan tingkah laku internet; SunLogin lalu TCP 443 (port sama dengan HTTPS) dikenali dan disekat DPI; pengalaman komuniti: benarkan TCP 51020–51030 + UDP 50000–50010 di penghala perusahaan, atau tukar mod sambungan dari \"laju tinggi\" ke \"serasi\" (80/443, lebih umum)",
  "tip": "Untuk tahu sama ada rangkaian syarikat: tukar kedua-dua ke hotspot telefon; jika boleh 100% sekatan rangkaian syarikat",
  "scene": "Syarikat guna DPI, anggap SunLogin trafik HTTPS luar biasa lalu sekat"
 },
 "Skrin hitam": {
  "cat": "Imej / Prestasi",
  "alias": "skrin hitam black screen tiada imej semua hitam hantar imej",
  "sym": "Sambung tapi skrin semua hitam / hanya hitam (tersangkut fasa 3 \"hantar imej\")",
  "l1": "Beri kebenaran SunLogin di hos: macOS \"Tetapan Sistem → Privasi & Keselamatan\" tanda rakam skrin / kebolehcapaian / akses cakera penuh; Windows cuba tukar mod desktop / sambung semula",
  "l2": "Skrin hitam biasanya kekurangan kebenaran tangkap atau peralihan GPU khusus, perlindungan skrin kunci; laptop GPU khusus boleh suruh SunLogin tangkap guna iGPU dalam dasar kuasa",
  "tip": "Sejak macOS Ventura laluan kebenaran beralih ke \"Tetapan Sistem\"; cari \"rakam skrin\" dalam kotak cari paling pantas",
  "scene": "Mac hos baru pasang sambung semua hitam, rupanya kebenaran \"rakam skrin\" belum diberi"
 },
 "Nampak tak boleh kawal": {
  "cat": "Imej / Prestasi",
  "alias": "tak boleh kawal tetikus papan kekunci tiada tindak balas control hanya lihat kebolehcapaian",
  "sym": "Skrin nampak, tapi klik tetikus papan kekunci tiada tindak balas (nampak tak boleh kawal)",
  "l1": "Hidupkan \"Benarkan kawalan jauh\" di hos; macOS wajib beri kebenaran \"kebolehcapaian\", Windows perhati UAC / tetingkap pentadbir perlu kebenaran sepadan",
  "l2": "Nampak tak boleh kawal hampir selalu masalah kebenaran suntikan input: kebolehcapaian macOS tak ditanda, atau hos timbul desktop selamat UAC perlu pentadbir (SunLogin perlu jalan sebagai pentadbir untuk operasi)",
  "tip": "Bila baca sahaja: sahkan dahulu \"Benarkan kawalan jauh\" hidup, macOS tambah \"kebolehcapaian\", Windows jalankan SunLogin sebagai pentadbir",
  "scene": "Kawal PC orang lain skrin nampak, klik apa pun tak guna → orang lain belum hidupkan \"Benarkan kawalan jauh\""
 },
 "Lag kependaman tinggi": {
  "cat": "Imej / Prestasi",
  "alias": "lag kependaman delay jejak tak lancar perlahan",
  "sym": "Seret tetingkap tersekat, taip baru muncul 2–3 saat, tetikus tinggalkan jejak (pengalaman kependaman jelas merosot)",
  "l1": "Tukar ke mod desktop \"pejabat / lancar\" untuk turunkan kualiti/bingkai; tutup muat turun / video penyita jalur lebar di hos; utamakan kabel atau WiFi 5GHz",
  "l2": "Nisbah punca (ujian komuniti): geganti 35% > kualiti terlalu tinggi 25% > prestasi hos tak cukup 20% > rangkaian teruk 15% > had bingkai 5%; tahap kependaman: <30ms hampir setempat, 80–150ms jelas tersekat, >150ms hampir hanya klik. Bila kependaman lebih 100ms, laras kualiti pun sia-sia, leher botol di rangkaian",
  "tip": "Lihat dahulu kiri bawah P2P atau geganti; turunkan kedalaman warna dari true color 32 bit satu tahap, guna jalur lebar boleh kurang separuh",
  "scene": "Kependaman 120ms pilihan kawasan jadual tak ikut tetikus, tukar kabel + mod pejabat jadi lancar"
 },
 "Mod geganti": {
  "cat": "Rangkaian / Lintasan",
  "alias": "geganti relay p2p tak tembus nat upnp simetri merentas operator",
  "sym": "Klien papar \"Relay\" bukan \"P2P\" di kiri bawah, kependaman keseluruhan tinggi, tetikus tinggalkan jejak",
  "l1": "SunLogin pilih mod sambungan automatik tak boleh tukar manual; putus lalu sambung semula (jeda 10 saat ke atas) supaya sistem cuba P2P semula",
  "l2": "Tingkatkan kadar tembus P2P: ① hidupkan UPnP penghala (penghala rumah selalu lalai mati, dihidupkan kadar tembus melonjak); ② jangan kedua-dua belah di belakang NAT simetri, tukar rangkaian satu belah; ③ merentas operator walau P2P tembus kependaman tetap tinggi, kadang paksa geganti lebih stabil (pelayan SunLogin ada talian khusus merentas operator)",
  "tip": "UPnP hidup tapi masih geganti, kemungkinan besar NAT simetri; untuk senario merentas operator cuba geganti",
  "scene": "Matikan geganti, hidupkan UPnP terus jadi P2P, kependaman 120ms→35ms"
 },
 "Imej kabur": {
  "cat": "Imej / Prestasi",
  "alias": "kualiti kabur ketajaman resolusi warna true color kadar bit",
  "sym": "Imej kabur bila bergerak, kurang tajam (terutama bila seret / video)",
  "l1": "Bila jalur lebar tak cukup SunLogin turunkan kualiti automatik demi kelancaran; mahu lebih jelas naikkan kualiti / bingkai manual, atau tukar mod \"HD / kualiti\"",
  "l2": "Resolusi kualiti tertinggi dihad oleh had fizikal monitor hos (hos hanya 1080P tak boleh jauh 4K); pemulihan profesional guna true color 4:4:4; penyahkodan perkakasan utamakan serah pemprosesan ke GPU pengawal, turunkan guna CPU",
  "tip": "Utamakan ketajaman: tetapkan resolusi \"ikut pengawal\" + skrin penuh, elak kabur akibat regangan",
  "scene": "Mod HD jalur lebar tak sempat turun kualiti automatik → kabur bila bergerak, pulih bila rangkaian baik"
 },
 "30fps versi percuma": {
  "cat": "Imej / Prestasi",
  "alias": "30fps kadar bingkai fps versi percuma 60fps 144fps berbayar",
  "sym": "Kependaman tak tinggi tapi seret tetingkap / tatal jelas tak lancar dan berjejak (bukan rangkaian, tapi had kadar bingkai)",
  "l1": "Akaun tahap percuma maksimum 30fps; mahu lebih lancar naikkan tahap perkhidmatan akaun: berbayar hingga 60fps, versi permainan hingga 144fps",
  "l2": "Kadar bingkai tertinggi juga dihad kadar segar monitor kedua-dua belah: salah satu 60Hz maka tak boleh lepas 60FPS; 144fps perlu GPU + monitor sokong 144Hz, dan GPU hos sokong pengekodan perkakasan",
  "tip": "Beza 30fps dan 60fps amat ketara; Android berbayar pun 60fps, lebih peka sentuh",
  "scene": "Versi percuma seret tetingkap berjejak, selepas naik taraf 60fps jelas lebih lancar"
 },
 "Wake gagal": {
  "cat": "Akaun / Kebenaran",
  "alias": "wake bangun tidur sleep tutup boot jauh tanpa pengawasan",
  "sym": "Hos tak sambung selepas tidur / lena, atau mahu boot jauh tapi tak bangun",
  "l1": "Bangunkan dengan \"fungsi Wake\" SunLogin (perlu aktif dahulu di hos); tetapkan hos tak tidur, hidupkan \"akses tanpa pengawasan\"",
  "l2": "Wake jauh bergantung WOL (Wake-on-LAN) + perkhidmatan wake SunLogin; perlu sokongan kuasa / kad rangkaian hos dan konfigurasi awal; putus kuasa penuh / tutup tak boleh wake dengan perisian",
  "tip": "Wajib untuk tanpa pengawasan: mula automatik + log masuk automatik + tak tidur + aktif wake awal",
  "scene": "Semasa bertugas mahu sambung PC rumah, rupanya lena dan wake tak diaktif awal → tak sambung"
 },
 "Akaun berbeza": {
  "cat": "Akaun / Kebenaran",
  "alias": "akaun tak sepadan senarai peranti tak nampak dua akaun token log masuk semula",
  "sym": "Peranti yang mahu dikawal tak nampak dalam senarai, atau nampak dalam talian sebenarnya sudah putus",
  "l1": "Bila kawal peranti sendiri, pengawal dan hos log masuk akaun SunLogin sama; buka semula klien hos lihat sama ada perlu log masuk semula",
  "l2": "Peranti akaun A tak nampak di akaun B; peranti lama terbiar token luput, nampak dalam talian sebenarnya putus, log masuk semula pulih; elak banyak peranti guna satu akaun serentak (mudah jadi perkhidmatan tak stabil)",
  "tip": "Kedua-dua belah wajib akaun sama; nampak dalam talian tapi tak sambung, suruh hos log masuk semula sekali dahulu",
  "scene": "Hos log masuk akaun A, pengawal log masuk akaun B, peranti langsung tak nampak dalam senarai"
 },
 "Versi protokol tak sepadan": {
  "cat": "Versi / Protokol",
  "alias": "versi protokol 30 tak sepadan kemas kini pasang semula cache",
  "sym": "Beza versi besar sebabkan gagal sambung / anomali keserasian (kod log 30)",
  "l1": "Kemas kini kedua-dua belah ke terkini (klien → perihal → lihat nombor versi), mula semula klien; jika masih, mula semula peranti, kosongkan cache",
  "l2": "Protokol SunLogin kerap dikemas kini; satu belah versi lama (cth. 2024) mudah tak serasi dengan baharu; ramai hanya kemas kini pengawal, hos berbulan tak disentuh",
  "tip": "Pasang semula penuh (bila masih tak sambung): nyahpasang lalu padam %AppData%\\Oray\\SunLogin dan %ProgramData%\\Oray\\SunLogin, kemudian pasang versi terkini",
  "scene": "Hos setengah tahun tak kemas kini, selepas pengawal naik taraf protokol tak sepadan → gagal sambung"
 },
 "Prestasi hos tak cukup": {
  "cat": "Imej / Prestasi",
  "alias": "prestasi cpu memori lag hos sumber pengekodan pc lama",
  "sym": "Kependaman operasi naik turun, imej tersekat (sumber hos penuh, pengekodan tak sempat)",
  "l1": "Tutup program tak digunakan di hos untuk bebaskan memori (Chrome banyak tab makan banyak memori); turunkan mod desktop ke \"ultra laju / lancar\"",
  "l2": "Tangkap & pengekodan SunLogin perlu CPU / memori: mod pejabat ~CPU 5–15% / memori 150–200MB, HD / permainan ~CPU 20–40% / 200–400MB; hos yang sedang kompil / VM / imbas antivirus / kemas kini sistem jelas perlahan",
  "tip": "PC lama tambah memori (4G→8G), HDD tukar SSD, hidupkan \"utamakan penyahkodan perkakasan\" supaya GPU berkongsi, semua membantu",
  "scene": "Hos sedang muat turun kemas kini Windows, CPU 40%, imej jauh tersekat"
 }
};
window.LABELS = {"miss": "Gejala tiada dalam senarai; cuba kata kunci lain atau lihat jadual penuh di bawah."};
window.FIELDS = [["sym", "Gejala / pencetus"], ["l1", "L1 semak dahulu (rasmi)"], ["l2", "L2 punca akar (rangkaian)"], ["tip", "Petua"], ["scene", "Kes sebenar"]];
window.THEAD = ["Gejala / ralat", "Kategori", "L1 semak dahulu (rasmi)", "L2 punca akar"];
