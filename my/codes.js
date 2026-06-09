window.CODES = {
 "စက်ပစ္စည်း offline": {
  "cat": "အကောင့် / ခွင့်ပြုချက်",
  "alias": "offline 21 online မဟုတ် ချိတ်ဆက်မရ စက်ရှာမတွေ့",
  "sym": "ထိန်းချုပ်သူ၏ စာရင်းတွင် host \"offline\" ပြ၊ သို့မဟုတ် စက်ရှာမတွေ့ဟု သတိပေး (log error code 21)",
  "l1": "Host PC ဖွင့်၊ online၊ မအိပ်၊ SunLogin client အလုပ်လုပ်နေပြီး \"login\" ပြနေကြောင်း အတည်ပြုပါ; ကွန်ရက် မတည်ငြိမ်လျှင် router restart သို့မဟုတ် ကွန်ရက်ပြောင်းပါ",
  "l2": "Offline = host online မဟုတ်သေး၊ ကွန်ရက်ကို အရင်မကြည့်ပါနှင့်: အိပ်ပြီးနောက် network card မကြာခဏ ပြတ်၊ laptop အဖုံးပိတ်လျှင် WiFi ပြတ်၊ Android power saving က background သတ်; Windows တွင် services.msc ၌ \"SunLogin\" service အလုပ်လုပ်/မလုပ် စစ်ပါ",
  "tip": "ရေရှည် ကြီးကြပ်မှုမရှိ host: \"auto-start + auto-login + ကြီးကြပ်မှုမရှိ ဝင်ရောက်ခွင့်\" ဖွင့်ပါ၊ Android တွင် SunLogin ကို power-saving whitelist ထည့်ပါ",
  "scene": "အိမ် PC ချိတ်ဆက်တော့ offline; အဖုံးပိတ်လို့ laptop WiFi ပြတ်သွား"
 },
 "ချိတ်ဆက် timeout": {
  "cat": "ကွန်ရက် / Traversal",
  "alias": "timeout ချိတ်ဆက်မရ ချိတ်ဆက်မအောင် 15 3 channel",
  "sym": "ချိတ်ဆက် နှိပ်ပြီးနောက် လည်ပြီး နောက်ဆုံး \"ချိတ်ဆက်မအောင် / channel မတည်ဆောက်နိုင်\" (code 3=ကွန်ရက်မရှိ၊ 15=channel တည်ဆောက် timeout)",
  "l1": "နှစ်ဖက် firewall / antivirus အရင်ပိတ်ပြီး စမ်းပါ; နှစ်ဖက် logout-login; နောက်ဆုံးသို့ update; ကွန်ရက်ပတ်ဝန်းကျင် ပြောင်းပါ (ဖုန်း hotspot)",
  "l2": "\"ချိတ်ဆက်မအောင်\" ၏ 90% သည် အဆင့် 2 \"channel တည်ဆောက်\" တွင် ပိတ်: 15=P2P မဖောက်ထွင်းနိုင် relay လည်း မအောင် (ကွန်ရက် အလွန်ဆိုး)၊ 3=ကွန်ရက်အလွှာ ပိတ်; hotspot ဖြင့် ချိတ်ဆက်ရလျှင် အခြေခံအားဖြင့် ကွန်ရက် / firewall ပြဿနာ",
  "tip": "အဆင့် 3 ဖြင့် နေရာရှာ: အကောင့် အတည်ပြု → channel တည်ဆောက် → ပုံ ပို့; timeout သည် အမြဲနီးပါး \"channel တည်ဆောက်\" တွင်",
  "scene": "ရုံးတွင် ချိတ်ဆက်မရ၊ အိမ် သို့မဟုတ် hotspot တွင် ချက်ချင်း → ကွန်ရက်ပတ်ဝန်းကျင် ပြဿနာ၊ software ပျက်မဟုတ်"
 },
 "access password မှား": {
  "cat": "အကောင့် / ခွင့်ပြုချက်",
  "alias": "password အတည်ပြု မအောင် 10 access password",
  "sym": "password ထည့်ပြီးနောက် အတည်ပြု မအောင် / password မှား ပြ (log code 10)",
  "l1": "ထည့်သည်မှာ \"access password\" ဖြစ်ပြီး SunLogin အကောင့် login password မဟုတ်ကြောင်း အတည်ပြုပါ; host တွင် access password reset ပြီး ချိတ်ဆက်ပါ",
  "l2": "Access password သည် host က သီးခြား သတ်မှတ်သော remote password; မကြာခဏ ပြောင်း သို့မဟုတ် login password နှင့် ရောထွေး; ပြောင်းပြီးနောက် ထိန်းချုပ်သူ အသစ်ကို သုံး",
  "tip": "Access password ≠ login password: host ၏ \"Settings → Security\" တွင် ကြည့် / reset",
  "scene": "login အကောင့် password ဖြင့် ချိတ်ဆက်နေသည်; မှားသည်မှာ သေချာ"
 },
 "firewall ပိတ်": {
  "cat": "ကွန်ရက် / Traversal",
  "alias": "firewall defender antivirus whitelist ပိတ်",
  "sym": "ချိတ်ဆက်မှု popup မရှိဘဲ ချက်ချင်း timeout (security က တိတ်တဆိတ် ပိတ်၊ ချိတ်ဆက်မအောင်၏ ထက်ဝက်ကျော်)",
  "l1": "SunLogin ကို firewall / security ယုံကြည်မှုသို့ ထည့်ပါ: Windows Defender Firewall \"app ခွင့်ပြု\" တွင် SunloginClient tick; third-party antivirus တွင် ယုံကြည်မှု ထည့်ပါ",
  "l2": "Whitelist တွင် installation folder အပြည့် ထည့်ရမည် (ဥပမာ C:\\Program Files (x86)\\Oray\\SunLogin\\)၊ main exe သာ မဟုတ်—SunLogin အလုပ်လုပ်စဉ် component များစွာ ခေါ်",
  "tip": "မြန်ဆန်စွာ အတည်ပြု: security အပြည့် ပိတ်ပါ (real-time protection သာ မဟုတ်) ပြီး ချိတ်ဆက်; ချိတ်ဆက်ရလျှင် 100% ၎င်းက ပိတ်",
  "scene": "ကွန်ရက် ပျက်ဟု ထင်; တကယ်က antivirus က SunLogin ၏ ကွန်ရက်တောင်းဆိုမှုကို တိတ်တဆိတ် ပိတ်နေ"
 },
 "ရုံးကွန်ရက် ချိတ်ဆက်မရ": {
  "cat": "ကွန်ရက် / Traversal",
  "alias": "ရုံးကွန်ရက် ကျောင်းကွန်ရက် enterprise dpi internet behavior management port 443",
  "sym": "အိမ်တွင် ချိတ်ဆက်၊ ရုံး / ကျောင်းရောက်လျှင် မရ (port ဖြတ်ပေမယ့် traffic ကို deep packet inspection တားဆီး)",
  "l1": "ကုမ္ပဏီ IT ကို SunLogin whitelist ခွင့်ပြုရန် တောင်းပါ; သို့မဟုတ် ကျော်ဖြတ်ရန် host တွင် ဖုန်း hotspot ယာယီ; SunLogin SOS version စမ်းပါ (ကွဲပြားသော ချိတ်ဆက်နည်း)",
  "l2": "Enterprise ကွန်ရက်တွင် internet behavior management device များ မကြာခဏ ရှိ; TCP 443 (HTTPS နှင့် တူ port) ဖြင့် သွားသော SunLogin ကို DPI က ဖော်ထုတ်ပြီး ပိတ်; အသိုင်းအဝိုင်း အတွေ့အကြုံ: enterprise router တွင် TCP 51020–51030 + UDP 50000–50010 ခွင့်ပြုပါ၊ သို့မဟုတ် ချိတ်ဆက် mode ကို \"high-speed\" မှ \"compatible\" (80/443၊ ပိုအထွေထွေ) သို့ ပြောင်းပါ",
  "tip": "ရုံးကွန်ရက်ဟုတ်/မဟုတ် သိရန်: နှစ်ခုလုံး ဖုန်း hotspot သို့ ပြောင်းပါ; ချိတ်ဆက်ရလျှင် 100% ရုံးကွန်ရက် ပိတ်ဆို့",
  "scene": "ကုမ္ပဏီ DPI သုံး၊ SunLogin ကို ပုံမှန်မဟုတ်သော HTTPS traffic ဟု သတ်မှတ်ပြီး ပိတ်"
 },
 "မျက်နှာပြင်မည်း": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "မျက်နှာပြင်မည်း black screen ပုံမရှိ မည်းအားလုံး ပုံပို့",
  "sym": "ချိတ်ဆက်ပေမယ့် မျက်နှာပြင် မည်းအားလုံး / မည်းသာ (အဆင့် 3 \"ပုံပို့\" တွင် ပိတ်)",
  "l1": "Host တွင် SunLogin ကို ခွင့်ပြုပါ: macOS \"System Settings → Privacy & Security\" တွင် screen recording / accessibility / full disk access tick; Windows desktop mode ပြောင်း / ပြန်ချိတ်ဆက် စမ်းပါ",
  "l2": "မျက်နှာပြင်မည်း များသောအားဖြင့် capture ခွင့်ပြုချက် ချို့တဲ့ သို့မဟုတ် discrete GPU ပြောင်း၊ lock screen ကာကွယ်မှု; discrete GPU laptop တွင် power policy ၌ SunLogin ကို iGPU ဖြင့် capture လုပ်စေနိုင်",
  "tip": "macOS Ventura မှစ၍ ခွင့်ပြုချက်လမ်းကြောင်း \"System Settings\" သို့ ရွှေ့; search box တွင် \"screen recording\" ရှာခြင်း အမြန်ဆုံး",
  "scene": "အသစ်တင်ထားသော Mac host ချိတ်ဆက်တော့ မည်းအားလုံး: \"screen recording\" ခွင့်ပြုချက် မရှိ"
 },
 "မြင်ရ မထိန်းနိုင်": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "မထိန်းနိုင် mouse keyboard မတုံ့ပြန် control ကြည့်ရုံ accessibility",
  "sym": "မျက်နှာပြင် မြင်ရ၊ ဒါပေမယ့် mouse keyboard နှိပ်တာ မတုံ့ပြန် (မြင်ရ မထိန်းနိုင်)",
  "l1": "Host တွင် \"အဝေးထိန်းချုပ်ခွင့်ပြု\" ဖွင့်ပါ; macOS \"accessibility\" ခွင့်ပြုချက် မဖြစ်မနေ၊ Windows တွင် သက်ဆိုင်ရာ ခွင့်ပြုချက် လိုသော UAC / admin window ကို သတိထားပါ",
  "l2": "မြင်ရ-မထိန်းနိုင်သည် အမြဲနီးပါး input injection ခွင့်ပြုချက် ပြဿနာ: macOS accessibility မ tick၊ သို့မဟုတ် host က admin လိုသော UAC secure desktop ပြ (SunLogin ကို လုပ်ဆောင်ရန် admin အဖြစ် run ရမည်)",
  "tip": "Read-only ဖြစ်လျှင်: \"အဝေးထိန်းချုပ်ခွင့်ပြု\" ဖွင့်ထားကြောင်း အရင် အတည်ပြု၊ macOS တွင် \"accessibility\" ထည့်၊ Windows တွင် SunLogin ကို admin အဖြစ် run",
  "scene": "တစ်ဖက်လူ PC ထိန်းချုပ်တော့ မျက်နှာပြင် မြင်ရ၊ နှိပ်တာ အလကား → တစ်ဖက်လူ \"အဝေးထိန်းချုပ်ခွင့်ပြု\" မဖွင့်"
 },
 "ကြန့်ကြာ latency မြင့်": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "ကြန့် latency delay အရိပ် မချောမွေ့ နှေး",
  "sym": "Window ဆွဲတာ ကြန့်၊ ရိုက်တာ 2–3 စက္ကန့်မှ ပေါ်၊ mouse အရိပ်ချန် (latency အတွေ့အကြုံ သိသိသာသာ ဆိုးလာ)",
  "l1": "အရည်အသွေး/frame လျှော့ရန် \"office / ချောမွေ့\" desktop mode သို့ ပြောင်း; host တွင် bandwidth စားသော download / video ပိတ်; wired သို့မဟုတ် 5GHz WiFi ဦးစားပေး",
  "l2": "အကြောင်းရင်း အချိုး (အသိုင်းအဝိုင်း တိုင်းတာ): relay 35% > အရည်အသွေးမြင့်လွန်း 25% > host စွမ်းဆောင်ရည် မလုံလောက် 20% > ကွန်ရက်ဆိုး 15% > frame ကန့်သတ် 5%; latency အဆင့်: <30ms local နီးပါး၊ 80–150ms ကြန့်တာ သိသာ၊ >150ms နှိပ်ရုံနီးပါး။ 100ms ကျော်လျှင် အရည်အသွေး ညှိလည်း အလကား၊ bottleneck သည် ကွန်ရက်",
  "tip": "အောက်ဘယ်ဘက် အရင်ကြည့် P2P လား relay လား; color depth ကို 32 bit မှ တစ်ဆင့် လျှော့လျှင် bandwidth သုံးစွဲမှု တစ်ဝက် လျှော့နိုင်",
  "scene": "latency 120ms တွင် table ရွေးချယ်မှု mouse မမီ၊ wired + office mode ပြောင်းတော့ ချောမွေ့"
 },
 "relay mode": {
  "cat": "ကွန်ရက် / Traversal",
  "alias": "relay p2p မဖောက်ထွင်း nat upnp symmetric carrier ဖြတ်",
  "sym": "Client အောက်ဘယ်ဘက်တွင် \"P2P\" အစား \"Relay\" ပြ၊ latency အလုံးစုံ မြင့်၊ mouse အရိပ်ချန်",
  "l1": "SunLogin သည် ချိတ်ဆက် mode ကို auto ရွေး၊ လက်ဖြင့် မပြောင်းနိုင်; ဖြတ်ပြီး ပြန်ချိတ်ဆက် (10 စက္ကန့်အထက် ကြား) system က P2P ပြန်စမ်းစေရန်",
  "l2": "P2P ဖောက်ထွင်းနှုန်း မြှင့်: ① router UPnP ဖွင့်ပါ (အိမ် router များ default ပိတ်; ဖွင့်လျှင် နှုန်း များစွာ မြင့်); ② နှစ်ဖက်လုံး symmetric NAT နောက်တွင် မထား၊ တစ်ဖက် ကွန်ရက်ပြောင်း; ③ carrier ဖြတ်တွင် P2P ဖောက်ထွင်းရလည်း latency မြင့်ဆဲ၊ တစ်ခါတစ်ရံ relay အတင်း ပိုတည်ငြိမ် (SunLogin server တွင် carrier ဖြတ် dedicated line ရှိ)",
  "tip": "UPnP ဖွင့်ထား relay ဖြစ်ဆဲ၊ symmetric NAT ဖြစ်နိုင်; carrier ဖြတ် အခြေအနေတွင် relay စမ်းပါ",
  "scene": "relay ပိတ်၊ UPnP ဖွင့်တော့ ချက်ချင်း P2P ဖြစ်၊ latency 120ms→35ms"
 },
 "ပုံဝါး": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "အရည်အသွေး ဝါး ထက်မြက်မှု resolution အရောင် true color bitrate",
  "sym": "ပုံ ရွေ့လျားစဉ် ဝါး၊ လုံလောက်စွာ မထက်မြက် (အထူးသဖြင့် ဆွဲစဉ် / video တွင်)",
  "l1": "Bandwidth မလုံလောက်လျှင် SunLogin သည် ချောမွေ့မှုအတွက် အရည်အသွေး auto လျှော့; ပိုထက်မြက်လို အရည်အသွေး / frame လက်ဖြင့် တိုး၊ သို့မဟုတ် \"HD / quality\" mode သို့ ပြောင်း",
  "l2": "အရည်အသွေးမြင့်ဆုံး resolution သည် host monitor ၏ ရုပ်ပိုင်း အကန့်အသတ်ဖြင့် ကန့်သတ် (host 1080P သာဆိုလျှင် remote 4K မဖြစ်); professional ပြန်လည်ထုတ်လုပ်မှုအတွက် true color 4:4:4; hardware decoding က processing ကို ထိန်းချုပ်သူ GPU သို့ ပေးပြီး CPU သုံးစွဲမှု လျှော့",
  "tip": "ထက်မြက်မှု ဦးစားပေး: resolution ကို \"ထိန်းချုပ်သူ လိုက်\" + full screen သတ်မှတ်၊ ဆွဲဆန့်မှုကြောင့် ဝါးခြင်း ရှောင်",
  "scene": "HD mode တွင် bandwidth မမီ အရည်အသွေး auto ကျ → ရွေ့လျားစဉ် ဝါး၊ ကွန်ရက်ကောင်းလျှင် ပြန်ကောင်း"
 },
 "အခမဲ့ 30fps": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "30fps frame rate fps အခမဲ့ version 60fps 144fps ငွေပေး",
  "sym": "latency မမြင့်ပေမယ့် window ဆွဲ / scroll သိသိသာသာ မချောမွေ့ပြီး အရိပ်ပါ (ကွန်ရက်မဟုတ်၊ frame ကန့်သတ်)",
  "l1": "အခမဲ့-tier အကောင့် အများဆုံး 30fps; ပိုချောမွေ့လို အကောင့် service tier တိုး: ငွေပေး 60fps အထိ၊ gaming version 144fps အထိ",
  "l2": "frame rate အမြင့်ဆုံးသည် နှစ်ဖက် monitor refresh rate ဖြင့်လည်း ကန့်သတ်: တစ်ဖက် 60Hz ဆိုလျှင် 60FPS မကျော်; 144fps သည် GPU + 144Hz monitor နှင့် host GPU ၏ hardware encoding ပံ့ပိုးမှု လို",
  "tip": "30fps နှင့် 60fps ကွာဟမှု အလွန် ခံစားရ; Android ငွေပေးတွင်လည်း 60fps၊ touch ကို ပိုနုံ့",
  "scene": "အခမဲ့ version window ဆွဲ အရိပ်ချန်၊ 60fps upgrade ပြီး သိသိသာသာ ပိုချောမွေ့"
 },
 "wake မအောင်": {
  "cat": "အကောင့် / ခွင့်ပြုချက်",
  "alias": "wake နှိုး အိပ် sleep ပိတ် remote boot ကြီးကြပ်မှုမရှိ",
  "sym": "Host အိပ် / sleep ပြီးနောက် ချိတ်ဆက်မရ၊ သို့မဟုတ် remote boot လုပ်လို နှိုးမနိုး",
  "l1": "SunLogin ၏ \"Wake function\" ဖြင့် နှိုးပါ (host တွင် ကြိုဖွင့်ပါ); host ကို မအိပ်ရန် သတ်မှတ်၊ \"ကြီးကြပ်မှုမရှိ ဝင်ရောက်ခွင့်\" ဖွင့်ပါ",
  "l2": "Remote wake သည် WOL (Wake-on-LAN) + SunLogin wake service အပေါ် မူတည်; host ၏ power / network card ပံ့ပိုးမှု နှင့် ကြိုတင် config လို; power အပြည့် ဖြတ် / shutdown တွင် software ဖြင့် မနှိုးနိုင်",
  "tip": "ကြီးကြပ်မှုမရှိ အတွက် မဖြစ်မနေ: auto-start + auto-login + မအိပ် + wake ကြိုဖွင့်",
  "scene": "ခရီးသွားစဉ် အိမ် PC ချိတ်ဆက်လို၊ sleep ဖြစ်နေ & wake ကြိုမဖွင့် → ချိတ်ဆက်မရ"
 },
 "အကောင့်ကွဲ": {
  "cat": "အကောင့် / ခွင့်ပြုချက်",
  "alias": "အကောင့်မကိုက် စက်စာရင်း မမြင် အကောင့်နှစ်ခု token ပြန်login",
  "sym": "ထိန်းချုပ်ရမည့် စက် စာရင်းတွင် မမြင်ရ၊ သို့မဟုတ် online ပုံပေါ်ပေမယ့် တကယ် ကျသွားပြီ",
  "l1": "ကိုယ်ပိုင် စက် ထိန်းချုပ်စဉ် ထိန်းချုပ်သူနှင့် host တူညီ SunLogin အကောင့် login; host client ပြန်ဖွင့် ပြန်login လိုမလို ကြည့်",
  "l2": "အကောင့် A ၏ စက် အကောင့် B တွင် မမြင်; ကြာရှည် idle စက် token သက်တမ်းကုန်၊ online ပုံပေါ်ပေမယ့် ကျ၊ ပြန်login ပြန်ကောင်း; အကောင့်တစ်ခုဖြင့် စက်များစွာ တစ်ပြိုင်တည်း ရှောင် (service မတည်ငြိမ်စေ)",
  "tip": "နှစ်ဖက် မဖြစ်မနေ အကောင့်တူ; online ပြ ချိတ်ဆက်မရ၊ host ကို တစ်ကြိမ် ပြန်login အရင်လုပ်",
  "scene": "Host အကောင့် A၊ ထိန်းချုပ်သူ အကောင့် B: စက် စာရင်းတွင် လုံးဝ မမြင်"
 },
 "protocol version မကိုက်": {
  "cat": "Version / Protocol",
  "alias": "version protocol 30 မကိုက် update ပြန်တင် cache",
  "sym": "version ကွာဟမှု ကြီးခြင်းက ချိတ်ဆက်မအောင် / compatibility ပုံမှန်မဟုတ် (log code 30)",
  "l1": "နှစ်ဖက် နောက်ဆုံးသို့ update (client → about → version number ကြည့်)၊ client restart; ဆက်ဖြစ်လျှင် စက် restart၊ cache ရှင်း",
  "l2": "SunLogin protocol မကြာခဏ update; တစ်ဖက် version ဟောင်း (ဥပမာ 2024) အသစ်နှင့် မကိုက်ညီ လွယ်; အများက ထိန်းချုပ်သူသာ update၊ host လ ပေါင်းများစွာ မထိ",
  "tip": "အပြည့်ပြန်တင် (ဆက်ချိတ်ဆက်မရလျှင်): uninstall ပြီး %AppData%\\Oray\\SunLogin နှင့် %ProgramData%\\Oray\\SunLogin ဖျက်၊ ထို့နောက် နောက်ဆုံး version တင်",
  "scene": "Host နှစ်ဝက် မ update; ထိန်းချုပ်သူ upgrade ပြီး protocol မကိုက် → ချိတ်ဆက်မအောင်"
 },
 "host စွမ်းဆောင်ရည် မလုံလောက်": {
  "cat": "ပုံ / စွမ်းဆောင်ရည်",
  "alias": "စွမ်းဆောင်ရည် cpu memory lag host resource encoding pc ဟောင်း",
  "sym": "လုပ်ဆောင်မှု latency အတက်အကျ၊ ပုံ ကြန့် (host resource ပြည့်၊ encoding မမီ)",
  "l1": "Memory လွတ်စေရန် host တွင် မသုံးသော program ပိတ် (Chrome tab များ memory များစွာ စား); desktop mode ကို \"အလွန်မြန် / ချောမွေ့\" သို့ လျှော့",
  "l2": "SunLogin capture & encoding သည် CPU / memory လို: office mode ~CPU 5–15% / memory 150–200MB၊ HD / gaming ~CPU 20–40% / 200–400MB; host က compile / VM / antivirus scan / system update လုပ်နေလျှင် သိသိသာသာ နှေး",
  "tip": "PC ဟောင်း: memory တိုး (4G→8G)၊ HDD ကို SSD ပြောင်း၊ \"hardware decoding ဦးစားပေး\" ဖွင့် GPU မျှဝေစေ၊ အားလုံး အထောက်အကူ",
  "scene": "Host Windows update download နေ၊ CPU 40%၊ remote ပုံ ကြန့်"
 }
};
window.LABELS = {"miss": "လက္ခဏာ စာရင်းတွင် မရှိ; အခြား keyword စမ်းပါ သို့မဟုတ် အောက်ရှိ ဇယားအပြည့် ကြည့်ပါ။"};
window.FIELDS = [["sym", "လက္ခဏာ / အစပျိုး"], ["l1", "L1 အရင်စစ် (တရားဝင်)"], ["l2", "L2 အရင်းခံအကြောင်းရင်း (ကွန်ရက်)"], ["tip", "အကြံပြုချက်"], ["scene", "တကယ့်ဖြစ်ရပ်"]];
window.THEAD = ["လက္ခဏာ / error", "အမျိုးအစား", "L1 အရင်စစ် (တရားဝင်)", "L2 အရင်းခံအကြောင်းရင်း"];
