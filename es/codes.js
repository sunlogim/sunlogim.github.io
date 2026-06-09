window.CODES = {
 "Dispositivo sin conexión": {
  "cat": "Cuenta / Permisos",
  "alias": "offline sin conexión 21 no en linea no conecta no encuentra dispositivo",
  "sym": "El host aparece \"sin conexión\" en la lista del controlador, o avisa que no encuentra el dispositivo (código de log 21)",
  "l1": "Confirma que el PC host está encendido, en línea, sin suspender, con el cliente SunLogin ejecutándose y \"sesión iniciada\"; si la red es inestable reinicia el router o cambia de red",
  "l2": "Sin conexión = el host directamente no está en línea, no mires la red primero: tras suspender la tarjeta de red suele desconectarse, cerrar la tapa del portátil corta el WiFi, el modo de ahorro de Android mata el segundo plano; en Windows revisa en services.msc si el servicio \"SunLogin\" corre",
  "tip": "Host desatendido a largo plazo: activa \"autoarranque + inicio de sesión automático + acceso desatendido\", en Android añade SunLogin a la lista blanca de ahorro de energía",
  "scene": "Conecto al PC de casa y aparece sin conexión; resulta que el portátil perdió el WiFi al cerrar la tapa"
 },
 "Tiempo de espera agotado": {
  "cat": "Red / Traversal",
  "alias": "timeout tiempo de espera no conecta fallo de conexion 15 3 canal",
  "sym": "Tras pulsar conectar gira y al final \"fallo de conexión / no se establece el canal\" (código 3=sin red, 15=tiempo agotado al establecer canal)",
  "l1": "Primero apaga firewall / antivirus de ambos extremos y prueba; cierra sesión y reentra en ambos; actualiza a la última; cambia de entorno de red (hotspot del móvil)",
  "l2": "El 90% de los \"fallos de conexión\" se atasca en la fase 2 \"establecer el canal\": 15=P2P no atraviesa y el relay también falla (red muy mala), 3=la capa de red está bloqueada; si con hotspot conecta, es básicamente problema de red / firewall",
  "tip": "Localiza en 3 fases: verificar cuenta → establecer canal → transmitir imagen; el tiempo agotado casi siempre está en \"establecer el canal\"",
  "scene": "No conecta en la oficina, en casa o con hotspot conecta al momento → problema de entorno de red, no software roto"
 },
 "Contraseña de acceso incorrecta": {
  "cat": "Cuenta / Permisos",
  "alias": "contraseña verificacion fallida 10 access password",
  "sym": "Tras introducir la contraseña avisa de verificación fallida / contraseña incorrecta (código de log 10)",
  "l1": "Confirma que introduces la \"contraseña de acceso\" y no la de inicio de sesión de la cuenta SunLogin; reinicia la contraseña de acceso en el host y vuelve a conectar",
  "l2": "La contraseña de acceso es la contraseña remota que fija el host por separado; suele estar cambiada o confundida con la de inicio de sesión; tras cambiarla, el controlador usa la nueva",
  "tip": "Contraseña de acceso ≠ contraseña de inicio de sesión: mírala / reiníciala en \"Ajustes → Seguridad\" del host",
  "scene": "Siempre usa la contraseña de la cuenta de inicio de sesión para conectar; claro que da error"
 },
 "Bloqueo de firewall": {
  "cat": "Red / Traversal",
  "alias": "firewall cortafuegos defender antivirus lista blanca bloqueo",
  "sym": "La conexión agota el tiempo de inmediato sin ningún aviso (bloqueada en silencio por la seguridad, más de la mitad de los fallos de conexión)",
  "l1": "Añade SunLogin a la confianza del firewall / seguridad: en el Firewall de Windows Defender \"permitir aplicación\" marca SunloginClient; añade confianza en el antivirus de terceros",
  "l2": "La lista blanca debe incluir toda la carpeta de instalación (p. ej. C:\\Program Files (x86)\\Oray\\SunLogin\\), no solo el exe principal—SunLogin invoca varios componentes al ejecutarse",
  "tip": "Verificación rápida: cierra del todo la seguridad (no solo la protección en tiempo real) y conecta; si conecta es 100% que la bloqueaba",
  "scene": "Creías que la red estaba rota; en realidad el antivirus bloqueaba en silencio la petición de red de SunLogin"
 },
 "Red de empresa no conecta": {
  "cat": "Red / Traversal",
  "alias": "red de empresa red de campus corporativa dpi gestion de comportamiento internet puerto 443",
  "sym": "En casa conecta, al llegar a la oficina / escuela no conecta (el puerto pasa pero el tráfico lo frena la inspección profunda de paquetes)",
  "l1": "Pide a TI de la empresa que permita la lista blanca de SunLogin; o usa el hotspot del móvil temporalmente en el host para sortearlo; prueba SunLogin versión SOS (otra forma de conexión)",
  "l2": "La red corporativa suele tener equipos de gestión de comportamiento de internet; SunLogin por TCP 443 (mismo puerto que HTTPS) es identificado y bloqueado por DPI; experiencia de la comunidad: permite TCP 51020–51030 + UDP 50000–50010 en el router corporativo, o cambia el modo de conexión de \"alta velocidad\" a \"compatible\" (80/443, más genérico)",
  "tip": "Para saber si es la red de empresa: cambia ambos a hotspot del móvil; si conecta es 100% bloqueo de la red de empresa",
  "scene": "La empresa aplica DPI y considera a SunLogin tráfico HTTPS anómalo y lo bloquea"
 },
 "Pantalla negra": {
  "cat": "Imagen / Rendimiento",
  "alias": "pantalla negra black screen no se ve imagen todo negro transmision de imagen",
  "sym": "Conecta pero la pantalla está toda negra / solo negro (atascado en la fase 3 \"transmisión de imagen\")",
  "l1": "Da permisos a SunLogin en el host: macOS \"Ajustes del sistema → Privacidad y seguridad\" marca grabación de pantalla / accesibilidad / acceso a disco completo; Windows prueba cambiar de modo de escritorio / reconectar",
  "l2": "La pantalla negra suele ser falta de permiso de captura o cambio de GPU dedicada, protección de pantalla de bloqueo; en portátiles con GPU dedicada puedes hacer que SunLogin capture con la iGPU en la política de energía",
  "tip": "Desde macOS Ventura la ruta de permisos cambió a \"Ajustes del sistema\"; buscar \"grabación de pantalla\" en el buscador es lo más rápido",
  "scene": "Un Mac host recién instalado conecta todo negro: faltaba el permiso de \"grabación de pantalla\""
 },
 "Se ve sin controlar": {
  "cat": "Imagen / Rendimiento",
  "alias": "no controla raton teclado no responde control solo ver accesibilidad",
  "sym": "Se ve la pantalla, pero pulsar ratón y teclado no responde (se ve sin controlar)",
  "l1": "Activa \"Permitir control remoto\" en el host; macOS exige el permiso de \"accesibilidad\", en Windows cuidado con UAC / ventanas de administrador que necesitan el permiso correspondiente",
  "l2": "\"Se ve sin controlar\" casi siempre es un problema de permiso de inyección de entrada: accesibilidad de macOS sin marcar, o el host sacó un escritorio seguro UAC que requiere administrador (SunLogin debe ejecutarse como administrador para operar)",
  "tip": "Cuando esté en solo lectura: confirma primero que \"Permitir control remoto\" está activo, en macOS añade \"accesibilidad\", en Windows ejecuta SunLogin como administrador",
  "scene": "Controlas el PC del otro, se ve la pantalla pero pulsar no hace nada → el otro no activó \"Permitir control remoto\""
 },
 "Lag y latencia alta": {
  "cat": "Imagen / Rendimiento",
  "alias": "lag latencia retardo estela no fluido lento",
  "sym": "Arrastrar ventanas va a tirones, escribir tarda 2–3 s en aparecer, el ratón deja estela (la latencia empeora claramente)",
  "l1": "Cambia al modo de escritorio \"oficina / fluido\" para bajar calidad y fps; cierra descargas / vídeo que consumen ancho de banda en el host; prioriza cable o WiFi de 5 GHz",
  "l2": "Reparto de causas (medición de la comunidad): relay 35% > calidad muy alta 25% > rendimiento del host insuficiente 20% > red mala 15% > límite de fps 5%; niveles de latencia: <30 ms casi local, 80–150 ms claramente a tirones, >150 ms casi solo clic. Por encima de 100 ms, ajustar la calidad no sirve; el cuello de botella es la red",
  "tip": "Mira primero abajo a la izquierda si es P2P o relay; bajar la profundidad de color de 32 bits un nivel puede reducir a la mitad el uso de ancho de banda",
  "scene": "Con 120 ms de latencia la selección de tabla no sigue al ratón; con cable + modo oficina se vuelve fluido"
 },
 "Modo relay": {
  "cat": "Red / Traversal",
  "alias": "relay retransmision p2p no atraviesa nat upnp simetrica entre operadores",
  "sym": "El cliente muestra \"Relay\" en vez de \"P2P\" abajo a la izquierda, la latencia general es alta, el ratón deja estela",
  "l1": "SunLogin elige el modo de conexión automáticamente y no se puede cambiar a mano; desconecta y reconecta (con 10 s o más de intervalo) para que el sistema reintente P2P",
  "l2": "Subir la tasa de éxito de P2P: ① activa UPnP en el router (los routers domésticos suelen tenerlo apagado; activarlo dispara el éxito); ② que no estén ambos extremos tras NAT simétrica, cambia la red de un extremo; ③ entre operadores distintos aunque P2P atraviese la latencia sigue alta, a veces forzar relay es más estable (el servidor de SunLogin tiene líneas dedicadas entre operadores)",
  "tip": "Si UPnP está activo y sigue en relay, lo más probable es NAT simétrica; en escenarios entre operadores prueba el relay",
  "scene": "Apagué el relay, activé UPnP y pasó a P2P al instante, latencia 120 ms→35 ms"
 },
 "Imagen borrosa": {
  "cat": "Imagen / Rendimiento",
  "alias": "calidad borroso nitidez resolucion color true color bitrate",
  "sym": "La imagen se ve borrosa en movimiento, poco nítida (sobre todo al arrastrar / con vídeo)",
  "l1": "Cuando falta ancho de banda SunLogin baja la calidad automáticamente para mantener la fluidez; para más nitidez sube calidad / fps a mano, o cambia al modo \"HD / calidad\"",
  "l2": "La resolución de máxima calidad está limitada por el tope físico del monitor del host (si el host es solo 1080p no se puede remoto 4K); para restauración profesional usa true color 4:4:4; la decodificación por hardware da el procesado a la GPU del controlador y baja el uso de CPU",
  "tip": "Prioriza nitidez: pon la resolución \"seguir al controlador\" + pantalla completa, evita el borrón por estiramiento",
  "scene": "En modo HD el ancho de banda no llega y baja la calidad automáticamente → borroso en movimiento, se recupera al mejorar la red"
 },
 "30 fps versión gratis": {
  "cat": "Imagen / Rendimiento",
  "alias": "30fps fotogramas fps version gratis 60fps 144fps de pago",
  "sym": "La latencia no es alta pero arrastrar ventanas / desplazar va claramente a tirones y con estela (no es la red, es el tope de fotogramas)",
  "l1": "La cuenta de nivel gratuito llega a 30 fps; para más fluidez sube el nivel de servicio de la cuenta: de pago llega a 60 fps, la versión gaming hasta 144 fps",
  "l2": "El máximo de fotogramas también lo limita la frecuencia del monitor de ambos extremos: si uno es de 60 Hz no se superan 60 FPS; 144 fps requiere GPU + monitor de 144 Hz, y que la GPU del host soporte codificación por hardware",
  "tip": "La diferencia entre 30 y 60 fps se nota mucho; en Android de pago también hay 60 fps, más sensible al táctil",
  "scene": "En la versión gratis arrastrar ventanas deja estela; tras subir a 60 fps va claramente más fluido"
 },
 "Fallo de wake": {
  "cat": "Cuenta / Permisos",
  "alias": "wake despertar suspension sleep apagar arranque remoto desatendido",
  "sym": "El host no conecta tras suspender / dormir, o quieres arrancarlo en remoto pero no despierta",
  "l1": "Despierta con la \"función Wake\" de SunLogin (hay que activarla antes en el host); pon el host en no suspender, activa \"acceso desatendido\"",
  "l2": "El wake remoto depende de WOL (Wake-on-LAN) + el servicio de wake de SunLogin; requiere soporte de energía / tarjeta de red del host y configuración previa; con corte total / apagado no se puede despertar por software",
  "tip": "Imprescindible para desatendido: autoarranque + inicio de sesión automático + no suspender + activar wake con antelación",
  "scene": "De viaje quieres conectar al PC de casa, pero está dormido y no activaste el wake antes → no conecta"
 },
 "Cuenta distinta": {
  "cat": "Cuenta / Permisos",
  "alias": "cuenta no coincide lista de dispositivos no aparece dos cuentas token reiniciar sesion",
  "sym": "No aparece el dispositivo a controlar en la lista, o parece en línea cuando en realidad ya se cayó",
  "l1": "Al controlar tus propios dispositivos, controlador y host inician sesión en la misma cuenta SunLogin; vuelve a abrir el cliente del host y mira si pide reentrar",
  "l2": "Un dispositivo de la cuenta A no se ve en la cuenta B; los dispositivos parados mucho tiempo caducan el token, parecen en línea pero están caídos, reentrar los recupera; evita varios dispositivos con la misma cuenta a la vez (inestabiliza el servicio)",
  "tip": "Ambos extremos obligatoriamente la misma cuenta; si aparece en línea pero no conecta, que el host reinicie sesión una vez primero",
  "scene": "El host con la cuenta A, el controlador con la cuenta B: el dispositivo simplemente no aparece en la lista"
 },
 "Versión de protocolo no coincide": {
  "cat": "Versión / Protocolo",
  "alias": "version protocolo 30 no coincide actualizar reinstalar cache",
  "sym": "Gran diferencia de versión causa fallo de conexión / anomalía de compatibilidad (código de log 30)",
  "l1": "Actualiza ambos extremos a la última (cliente → acerca de → ver número de versión), reinicia el cliente; si sigue, reinicia el dispositivo, limpia la caché",
  "l2": "El protocolo de SunLogin se actualiza con frecuencia; un extremo en versión vieja (p. ej. la de 2024) es fácil que no sea compatible con la nueva; mucha gente solo actualiza el controlador y deja el host meses sin tocar",
  "tip": "Reinstalación total (cuando sigue sin conectar): desinstala y borra %AppData%\\Oray\\SunLogin y %ProgramData%\\Oray\\SunLogin, luego instala la última versión",
  "scene": "El host lleva medio año sin actualizar; tras actualizar el controlador el protocolo no coincide → fallo de conexión"
 },
 "Rendimiento del host insuficiente": {
  "cat": "Imagen / Rendimiento",
  "alias": "rendimiento cpu memoria lag host recursos codificacion ordenador viejo",
  "sym": "La latencia de operación va a rachas, la imagen se entrecorta (los recursos del host están saturados y la codificación no llega)",
  "l1": "Cierra programas que no uses en el host para liberar memoria (Chrome con muchas pestañas consume mucha); baja el modo de escritorio a \"ultrarrápido / fluido\"",
  "l2": "La captura y codificación de SunLogin necesitan CPU / memoria: modo oficina ~CPU 5–15% / memoria 150–200 MB, HD / gaming ~CPU 20–40% / 200–400 MB; si el host está compilando / con VM / escaneo antivirus / actualización del sistema, se ralentiza claramente",
  "tip": "En ordenadores viejos: ampliar memoria (4G→8G), cambiar HDD por SSD, activar \"priorizar decodificación por hardware\" para que la GPU reparta, todo ayuda",
  "scene": "El host está descargando una actualización de Windows, CPU al 40%, y la imagen remota se entrecorta"
 }
};
window.LABELS = {"miss": "Síntoma no listado; prueba otra palabra clave o mira la tabla completa abajo."};
window.FIELDS = [["sym", "Síntoma / disparador"], ["l1", "L1 comprueba primero (oficial)"], ["l2", "L2 causa raíz (capa de red)"], ["tip", "Truco"], ["scene", "Caso real"]];
window.THEAD = ["Síntoma / error", "Categoría", "L1 comprobar primero (oficial)", "L2 causa raíz"];
