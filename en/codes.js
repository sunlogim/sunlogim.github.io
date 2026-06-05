window.CODES = {
 "device offline": {
  "name": "Device offline",
  "cat": "Account / permission",
  "alias": "offline 21 not online cannot find device",
  "sym": "The host shows “offline” in the controller's device list, or “device not found” (log error 21)",
  "l1": "Confirm the host is powered on, online and not asleep, with the SunLogin client running and “logged in”; if the network is unstable, restart the router or switch networks",
  "l2": "Offline = the host simply isn't online, so don't debug the network first: sleep often drops the NIC, closing a laptop lid drops Wi-Fi, Android battery-saver kills the background; on Windows check services.msc for the “SunLogin RemoteControl” service",
  "tip": "For an unattended host: enable auto-start + auto-login + unattended access, and whitelist SunLogin in Android battery saver",
  "scene": "Connecting to your home PC shows offline - the laptop lid was closed and Wi-Fi dropped"
 },
 "connection timeout": {
  "name": "Connection timeout",
  "cat": "Network / traversal",
  "alias": "timeout cannot establish connect failed 15 3 channel",
  "sym": "It spins after you click connect and ends with “connect failed / cannot establish” (log error 3 = no network, 15 = channel timeout)",
  "l1": "First turn off the firewall / antivirus on both ends and retry; log out and back in on both; update both to the latest; switch network (phone hotspot)",
  "l2": "90% of “connect failed” stalls at stage 2 “establish channel”: 15 = P2P failed AND relay failed too (network too poor), 3 = blocked at the network layer; if a hotspot connects, it's basically a network / firewall issue",
  "tip": "Localize across three stages: account auth -> establish channel -> screen transfer; timeouts are almost always at “establish channel”",
  "scene": "Won't connect at the office but connects at home or on a hotspot -> a network issue, not broken software"
 },
 "wrong access password": {
  "name": "Wrong access password",
  "cat": "Account / permission",
  "alias": "password auth failed 10 access verify",
  "sym": "After entering the password it says auth failed / wrong password (log error 10)",
  "l1": "Make sure you entered the “access password”, not your SunLogin account login password; reset the access password on the host, then connect",
  "l2": "The access password is a separate remote password set on the host - it's often been changed or confused with the login password; after changing it the controller must use the new one",
  "tip": "Access password != login password: view / reset it under the host's “Settings -> Security”",
  "scene": "Kept using the account login password to connect - of course it errored"
 },
 "firewall block": {
  "name": "Firewall / security block",
  "cat": "Network / traversal",
  "alias": "firewall defender antivirus whitelist blocked 360",
  "sym": "The connection just times out with no popup (silently blocked by a security app - over half of all connect failures)",
  "l1": "Add SunLogin to the firewall / security trust list: in Windows Defender Firewall “Allow an app” tick SunloginClient; add it as trusted in other antivirus tools",
  "l2": "Whitelist the entire install folder (e.g. C:\\Program Files (x86)\\Oray\\SunLogin\\), not just the main exe - SunLogin calls several components at runtime",
  "tip": "Quick test: fully quit the security app (not just real-time protection) and retry; if it connects, it's 100% the blocker",
  "scene": "You think the network is broken, but the antivirus silently blocked SunLogin's network request"
 },
 "office network": {
  "name": "Office / campus network",
  "cat": "Network / traversal",
  "alias": "office campus enterprise dpi traffic management 443 port",
  "sym": "Connects at home but not at the office / school (the port is open but traffic is caught by deep packet inspection)",
  "l1": "Have company IT whitelist SunLogin; or put the host on a phone hotspot temporarily; try SunLogin SOS edition (uses a different connection path)",
  "l2": "Enterprise networks often run traffic-management gear (DPI); SunLogin uses TCP 443 (same as HTTPS) and can be identified and blocked by DPI; community tip: allow TCP 51020-51030 + UDP 50000-50010 on the enterprise router, or switch the connection mode from “Fast” to “Compatible” (uses the more universal 80/443)",
  "tip": "To confirm it's the office network: put both ends on a phone hotspot - if it connects, it's 100% the office block",
  "scene": "The office runs DPI and treats SunLogin as abnormal HTTPS traffic and blocks it"
 },
 "black screen": {
  "name": "Black screen",
  "cat": "Display / performance",
  "alias": "black screen blank no image screen transfer",
  "sym": "Connected but the screen is all black (stuck at stage 3 “screen transfer”)",
  "l1": "Grant SunLogin permission on the host: macOS “System Settings -> Privacy & Security” tick Screen Recording / Accessibility / Full Disk Access; on Windows try switching desktop mode / reconnecting",
  "l2": "Black screen is usually a missing capture permission, GPU / discrete-graphics switching, or lock-screen protection; on a host with a discrete GPU, set SunLogin to capture via the iGPU in the power policy",
  "tip": "After macOS Ventura the permission path moved to “System Settings” - searching “Screen Recording” is fastest",
  "scene": "A freshly set-up Mac host connects all black - Screen Recording permission wasn't granted"
 },
 "can't control": {
  "name": "Can see but can't control",
  "cat": "Display / performance",
  "alias": "cannot control mouse keyboard no response view only accessibility",
  "sym": "You can see the screen but mouse / keyboard do nothing (view only)",
  "l1": "Enable “Allow remote control” on the host; macOS must grant “Accessibility”; on Windows note that UAC / admin windows need matching privileges",
  "l2": "View-only is almost always an input-injection permission issue: macOS Accessibility unticked, or the host popped a UAC secure desktop needing admin (SunLogin must run as admin to operate it)",
  "tip": "For read-only: confirm “Allow remote control” is on, add macOS “Accessibility”, and run SunLogin as admin on Windows",
  "scene": "You can see the other PC but clicks do nothing -> they didn't enable “Allow remote control”"
 },
 "high latency": {
  "name": "Lag / high latency",
  "cat": "Display / performance",
  "alias": "lag latency ghosting slow choppy not smooth",
  "sym": "Dragging windows stutters, typing appears 2-3s late, the mouse ghosts (the experience clearly degrades)",
  "l1": "Switch to “Office / Smooth” desktop mode to lower quality and frame rate; close downloads / video that eat bandwidth on the host; prefer wired or 5GHz Wi-Fi",
  "l2": "Cause share (community measured): relay 35% > quality too high 25% > host underpowered 20% > poor network 15% > frame cap 5%; latency tiers: <30ms near-local, 80-150ms clearly laggy, >150ms basically click-only. Past ~100ms no quality tweak helps - the bottleneck is the network",
  "tip": "First check P2P vs relay in the lower-left; dropping color depth from true color (32-bit) one notch can halve bandwidth",
  "scene": "At 120ms a spreadsheet selection lags behind the mouse; wired + Office mode fixed it"
 },
 "relay mode": {
  "name": "On relay / P2P failed",
  "cat": "Network / traversal",
  "alias": "relay p2p failed nat upnp symmetric cross-carrier",
  "sym": "The client's lower-left shows “Relay” not “P2P”, with high latency and mouse ghosting",
  "l1": "SunLogin picks the mode automatically - you can't switch manually; disconnect and reconnect (wait 10s+) to let it retry P2P",
  "l2": "Raise the P2P success rate: (1) enable router UPnP (often off by default; turning it on helps a lot); (2) don't have both ends behind symmetric NAT - move one end to another network; (3) cross-carrier (e.g. Telecom <-> Unicom) keeps high latency even if P2P punches through, so relay can be steadier (the vendor's servers have cross-carrier lines)",
  "tip": "Still on relay after enabling UPnP? Likely symmetric NAT; for cross-carrier, try relay",
  "scene": "After enabling UPnP it flipped to P2P instantly: latency 120ms -> 35ms"
 },
 "blurry": {
  "name": "Blurry image",
  "cat": "Display / performance",
  "alias": "blurry quality resolution color true color bitrate",
  "sym": "The image gets blurry in motion (especially dragging / video)",
  "l1": "When bandwidth is short SunLogin auto-lowers quality for smoothness; for sharper output raise quality / frame rate manually, or use “HD / Quality” mode",
  "l2": "Max quality (resolution) is capped by the host monitor's physical limit (a 1080P host can't output remote 4K); for pro color fidelity use true-color 4:4:4; “prefer hardware decode” offloads to the controller GPU and cuts CPU",
  "tip": "For sharpness, set resolution to “Follow controller” + full screen to avoid stretch/compression blur",
  "scene": "HD mode out-runs bandwidth so it auto-lowers quality -> blurry in motion, restores when the network recovers"
 },
 "free 30fps": {
  "name": "Free-tier 30fps cap",
  "cat": "Display / performance",
  "alias": "30fps frame rate fps free 60fps 144fps paid",
  "sym": "Latency is fine but window drag / scrolling clearly isn't smooth, with ghosting (not network - it's the frame cap)",
  "l1": "Free accounts cap at 30fps; for smoother control raise your service tier: paid reaches 60fps, the gaming tier up to 144fps",
  "l2": "Max fps is also capped by both monitors' refresh rate: if either is 60Hz you can't exceed 60FPS; 144fps needs both GPU and monitor at 144Hz, and the host GPU to support hardware encoding",
  "tip": "30fps vs 60fps is a big gap; on Android paid also gets 60fps, which matters more for touch",
  "scene": "Free tier ghosts on window drag; 60fps after upgrading is clearly smoother"
 },
 "wake fail": {
  "name": "Wake / sleep failure",
  "cat": "Account / permission",
  "alias": "wake sleep shutdown remote power on unattended wol",
  "sym": "Can't connect after the host sleeps, or it won't wake for remote power-on",
  "l1": "Use SunLogin's “Wake” (enable it on the host in advance); set the host to never sleep and turn on “Unattended access”",
  "l2": "Remote wake relies on Wake-on-LAN + SunLogin's wake service, which needs host power / NIC support configured in advance; a fully powered-off host can't be woken by software",
  "tip": "Must-haves for unattended: auto-start + auto-login + no sleep + wake enabled ahead of time",
  "scene": "On a trip you want your home PC, but it slept and wake wasn't pre-enabled -> can't connect"
 },
 "account mismatch": {
  "name": "Account mismatch",
  "cat": "Account / permission",
  "alias": "account mismatch device list not visible two accounts token re-login",
  "sym": "The target device isn't in the list, or it looks online but actually dropped",
  "l1": "To control your own devices, log the controller and host into the same SunLogin account; re-open the client on the host to see if it needs re-login",
  "l2": "Devices under account A aren't visible under account B; a long-idle device's token expires (looks online but dropped) - re-login restores it; avoid running the same account concurrently on many devices (it destabilizes the service)",
  "tip": "Same account on both ends; if it shows online but won't connect, re-login the host first",
  "scene": "Host on account A, controller on account B - the device simply isn't in the list"
 },
 "version mismatch": {
  "name": "Protocol version mismatch",
  "cat": "Version / protocol",
  "alias": "version protocol 30 mismatch update upgrade reinstall cache",
  "sym": "A big version gap causes connect failure / compatibility errors (log error 30)",
  "l1": "Update both ends to the latest (client -> About -> version), restart the client; if it persists, restart the device and clear the cache",
  "l2": "SunLogin updates its protocol fairly often; an old end (e.g. a 2024 build) easily breaks with a new one; many people only update the controller while the host sat untouched for months",
  "tip": "Clean reinstall (when nothing else works): uninstall, delete %AppData%\\Oray\\SunLogin and %ProgramData%\\Oray\\SunLogin, then install the latest",
  "scene": "The host hadn't updated for half a year; after the controller upgraded, the protocol mismatched -> connect failed"
 },
 "host underpowered": {
  "name": "Host underpowered",
  "cat": "Display / performance",
  "alias": "performance cpu memory host resource encode old pc",
  "sym": "Latency comes and goes and the image stutters (the host's resources are maxed, encoding can't keep up)",
  "l1": "Close unused apps on the host to free memory (Chrome with many tabs is a hog); drop the desktop mode to “Fast / Smooth”",
  "l2": "SunLogin's screen capture & encode needs CPU / RAM: Office mode ~CPU 5-15% / RAM 150-200MB, HD / gaming ~CPU 20-40% / 200-400MB; it clearly slows if the host is compiling / running a VM / antivirus scan / Windows update",
  "tip": "On an old host, adding RAM (4G->8G), swapping HDD for SSD, and enabling “prefer hardware decode” all help",
  "scene": "The host was downloading a Windows update at 40% CPU, so the remote image stuttered"
 }
};
window.LABELS = {"miss": "Not listed - try another keyword or see the full table below."};
window.FIELDS = [["sym", "Symptom / trigger"], ["l1", "L1 official check"], ["l2", "L2 root cause (network)"], ["tip", "How to act"], ["scene", "Real case"]];
window.THEAD = ["Symptom / error", "Group", "L1 check first (official)", "L2 root cause"];
