window.CODES = {
 "Appareil hors ligne": {
  "cat": "Compte / Autorisations",
  "alias": "hors ligne offline 21 pas en ligne pas de connexion appareil introuvable",
  "sym": "L'hôte apparaît « hors ligne » dans la liste du contrôleur, ou il indique appareil introuvable (code de log 21)",
  "l1": "Vérifiez que le PC hôte est allumé, en ligne, pas en veille, le client SunLogin en cours et « connecté » ; si le réseau est instable redémarrez le routeur ou changez de réseau",
  "l2": "Hors ligne = l'hôte n'est tout simplement pas en ligne, ne regardez pas le réseau d'abord : après la veille la carte réseau se déconnecte souvent, fermer le capot du portable coupe le WiFi, le mode économie d'Android tue l'arrière-plan ; sous Windows vérifiez dans services.msc si le service « SunLogin » tourne",
  "tip": "Hôte sans surveillance à long terme : activez « démarrage auto + connexion auto + accès sans surveillance », sous Android ajoutez SunLogin à la liste blanche d'économie d'énergie",
  "scene": "Je me connecte au PC de la maison et il est hors ligne ; le portable a perdu le WiFi en fermant le capot"
 },
 "Délai dépassé": {
  "cat": "Réseau / Traversée",
  "alias": "timeout delai depasse pas de connexion echec de connexion 15 3 canal",
  "sym": "Après avoir cliqué connecter ça tourne puis « échec de connexion / canal non établi » (code 3=pas de réseau, 15=délai dépassé à l'établissement du canal)",
  "l1": "Coupez d'abord pare-feu / antivirus des deux côtés et testez ; déconnectez et reconnectez les deux ; mettez à la dernière version ; changez d'environnement réseau (partage du téléphone)",
  "l2": "90 % des « échecs de connexion » bloquent à la phase 2 « établir le canal » : 15=P2P ne traverse pas et le relais échoue aussi (réseau trop mauvais), 3=la couche réseau est bloquée ; si ça se connecte en partage, c'est en gros un problème de réseau / pare-feu",
  "tip": "Localisez en 3 phases : vérifier le compte → établir le canal → transmettre l'image ; le délai dépassé est presque toujours à « établir le canal »",
  "scene": "Pas de connexion au bureau, à la maison ou en partage ça se connecte aussitôt → problème d'environnement réseau, pas un logiciel cassé"
 },
 "Mot de passe d'accès erroné": {
  "cat": "Compte / Autorisations",
  "alias": "mot de passe echec de verification 10 access password",
  "sym": "Après avoir saisi le mot de passe, il indique échec de vérification / mot de passe erroné (code de log 10)",
  "l1": "Vérifiez que vous saisissez le « mot de passe d'accès » et non celui de connexion du compte SunLogin ; réinitialisez le mot de passe d'accès sur l'hôte puis reconnectez-vous",
  "l2": "Le mot de passe d'accès est le mot de passe distant que l'hôte définit à part ; souvent changé ou confondu avec celui de connexion ; après changement, le contrôleur utilise le nouveau",
  "tip": "Mot de passe d'accès ≠ mot de passe de connexion : voyez / réinitialisez dans « Paramètres → Sécurité » de l'hôte",
  "scene": "Toujours utiliser le mot de passe du compte de connexion pour se connecter ; forcément une erreur"
 },
 "Blocage pare-feu": {
  "cat": "Réseau / Traversée",
  "alias": "pare-feu firewall defender antivirus liste blanche blocage",
  "sym": "La connexion expire aussitôt sans aucune fenêtre (bloquée en silence par la sécurité, plus de la moitié des échecs de connexion)",
  "l1": "Ajoutez SunLogin à la confiance du pare-feu / sécurité : dans le Pare-feu Windows Defender « autoriser une application » cochez SunloginClient ; ajoutez la confiance dans l'antivirus tiers",
  "l2": "La liste blanche doit inclure tout le dossier d'installation (ex. C:\\Program Files (x86)\\Oray\\SunLogin\\), pas seulement l'exe principal—SunLogin appelle plusieurs composants à l'exécution",
  "tip": "Vérification rapide : fermez complètement la sécurité (pas seulement la protection en temps réel) et connectez ; si ça se connecte c'est à 100 % elle qui bloquait",
  "scene": "On croyait le réseau cassé ; en fait l'antivirus bloquait en silence la requête réseau de SunLogin"
 },
 "Réseau d'entreprise échoue": {
  "cat": "Réseau / Traversée",
  "alias": "reseau d'entreprise reseau de campus entreprise dpi gestion du comportement internet port 443",
  "sym": "À la maison ça se connecte, au bureau / à l'école non (le port passe mais le trafic est freiné par l'inspection approfondie des paquets)",
  "l1": "Demandez à l'IT de l'entreprise d'autoriser la liste blanche de SunLogin ; ou utilisez temporairement le partage du téléphone sur l'hôte pour contourner ; essayez SunLogin version SOS (autre mode de connexion)",
  "l2": "Les réseaux d'entreprise ont souvent des équipements de gestion du comportement internet ; SunLogin via TCP 443 (même port que HTTPS) est identifié et bloqué par le DPI ; expérience de la communauté : autorisez TCP 51020–51030 + UDP 50000–50010 sur le routeur d'entreprise, ou passez le mode de connexion de « haute vitesse » à « compatible » (80/443, plus générique)",
  "tip": "Pour savoir si c'est le réseau d'entreprise : passez les deux au partage du téléphone ; si ça se connecte c'est à 100 % le blocage du réseau d'entreprise",
  "scene": "L'entreprise applique du DPI et traite SunLogin comme un trafic HTTPS anormal et le bloque"
 },
 "Écran noir": {
  "cat": "Image / Performance",
  "alias": "ecran noir black screen pas d'image tout noir transmission d'image",
  "sym": "Ça se connecte mais l'écran est tout noir / seulement noir (bloqué à la phase 3 « transmission d'image »)",
  "l1": "Donnez les autorisations à SunLogin sur l'hôte : macOS « Réglages Système → Confidentialité et sécurité » cochez enregistrement d'écran / accessibilité / accès complet au disque ; Windows essayez de changer de mode bureau / reconnecter",
  "l2": "L'écran noir est souvent un manque d'autorisation de capture ou un basculement de GPU dédié, protection d'écran de verrouillage ; sur les portables à GPU dédié on peut faire capturer SunLogin par l'iGPU dans la politique d'alimentation",
  "tip": "Depuis macOS Ventura le chemin des autorisations est passé dans « Réglages Système » ; chercher « enregistrement d'écran » dans la recherche est le plus rapide",
  "scene": "Un Mac hôte fraîchement installé se connecte tout noir : l'autorisation « enregistrement d'écran » manquait"
 },
 "Visible non contrôlable": {
  "cat": "Image / Performance",
  "alias": "non controlable souris clavier sans reponse control voir seulement accessibilite",
  "sym": "On voit l'écran, mais cliquer souris et clavier ne répond pas (visible non contrôlable)",
  "l1": "Activez « Autoriser le contrôle à distance » sur l'hôte ; macOS exige l'autorisation « accessibilité », sous Windows attention à l'UAC / aux fenêtres administrateur qui demandent l'autorisation correspondante",
  "l2": "« Visible non contrôlable » est presque toujours un problème d'autorisation d'injection d'entrée : accessibilité macOS non cochée, ou l'hôte a affiché un bureau sécurisé UAC qui exige l'administrateur (SunLogin doit s'exécuter en administrateur pour agir)",
  "tip": "En lecture seule : confirmez d'abord que « Autoriser le contrôle à distance » est activé, sous macOS ajoutez « accessibilité », sous Windows exécutez SunLogin en administrateur",
  "scene": "Vous contrôlez le PC de l'autre, l'écran s'affiche mais cliquer ne fait rien → l'autre n'a pas activé « Autoriser le contrôle à distance »"
 },
 "Lag et latence élevée": {
  "cat": "Image / Performance",
  "alias": "lag latence retard trainee pas fluide lent",
  "sym": "Déplacer les fenêtres saccade, taper apparaît après 2–3 s, la souris laisse une traînée (la latence se dégrade nettement)",
  "l1": "Passez au mode bureau « bureautique / fluide » pour baisser qualité et fps ; fermez sur l'hôte les téléchargements / vidéos qui consomment la bande passante ; privilégiez le câble ou le WiFi 5 GHz",
  "l2": "Répartition des causes (mesure communautaire) : relais 35 % > qualité trop haute 25 % > performance de l'hôte insuffisante 20 % > réseau mauvais 15 % > limite de fps 5 % ; paliers de latence : <30 ms quasi local, 80–150 ms nettement saccadé, >150 ms quasi clic seulement. Au-delà de 100 ms, ajuster la qualité ne sert à rien ; le goulot est le réseau",
  "tip": "Regardez d'abord en bas à gauche si c'est P2P ou relais ; baisser la profondeur de couleur de 32 bits d'un cran peut réduire de moitié l'usage de bande passante",
  "scene": "À 120 ms de latence la sélection de tableau ne suit pas la souris ; avec câble + mode bureautique ça devient fluide"
 },
 "Mode relais": {
  "cat": "Réseau / Traversée",
  "alias": "relais relay p2p ne traverse pas nat upnp symetrique inter-operateurs",
  "sym": "Le client affiche « Relais » au lieu de « P2P » en bas à gauche, la latence globale est élevée, la souris laisse une traînée",
  "l1": "SunLogin choisit le mode de connexion automatiquement, non commutable à la main ; déconnectez et reconnectez (10 s ou plus d'intervalle) pour que le système retente le P2P",
  "l2": "Augmenter le taux de traversée P2P : ① activez l'UPnP du routeur (les routeurs domestiques sont souvent désactivés par défaut ; activé le taux grimpe) ; ② ne laissez pas les deux côtés derrière un NAT symétrique, changez le réseau d'un côté ; ③ entre opérateurs différents, même si le P2P traverse la latence reste élevée, parfois forcer le relais est plus stable (le serveur SunLogin a des lignes dédiées inter-opérateurs)",
  "tip": "UPnP activé et toujours en relais, c'est probablement un NAT symétrique ; pour les scénarios inter-opérateurs essayez le relais",
  "scene": "J'ai coupé le relais, activé l'UPnP et c'est passé en P2P aussitôt, latence 120 ms→35 ms"
 },
 "Image floue": {
  "cat": "Image / Performance",
  "alias": "qualite flou nettete resolution couleur true color debit",
  "sym": "L'image est floue en mouvement, peu nette (surtout en glissant / en vidéo)",
  "l1": "Quand la bande passante manque SunLogin baisse la qualité automatiquement pour la fluidité ; pour plus de netteté augmentez qualité / fps à la main, ou passez au mode « HD / qualité »",
  "l2": "La résolution de qualité maximale est limitée par le plafond physique de l'écran de l'hôte (si l'hôte n'est qu'en 1080p, pas de distant 4K) ; pour une restitution professionnelle, true color 4:4:4 ; le décodage matériel confie le traitement au GPU du contrôleur et baisse l'usage CPU",
  "tip": "Priorisez la netteté : réglez la résolution sur « suivre le contrôleur » + plein écran, évitez le flou par étirement",
  "scene": "En mode HD la bande passante ne suit pas et la qualité baisse automatiquement → flou en mouvement, récupère quand le réseau s'améliore"
 },
 "30 fps version gratuite": {
  "cat": "Image / Performance",
  "alias": "30fps frequence d'images fps version gratuite 60fps 144fps payant",
  "sym": "La latence n'est pas élevée mais déplacer les fenêtres / défiler saccade nettement et laisse une traînée (pas le réseau, mais le plafond de fréquence d'images)",
  "l1": "Le compte de niveau gratuit va jusqu'à 30 fps ; pour plus de fluidité montez le niveau de service du compte : payant jusqu'à 60 fps, version gaming jusqu'à 144 fps",
  "l2": "La fréquence d'images maximale est aussi limitée par le taux de rafraîchissement des deux écrans : si l'un est en 60 Hz, pas plus de 60 FPS ; 144 fps exige GPU + écran 144 Hz, et que le GPU de l'hôte supporte l'encodage matériel",
  "tip": "L'écart entre 30 et 60 fps est très perceptible ; Android payant a aussi 60 fps, plus sensible au tactile",
  "scene": "En version gratuite déplacer les fenêtres laisse une traînée ; après passage à 60 fps nettement plus fluide"
 },
 "Échec de wake": {
  "cat": "Compte / Autorisations",
  "alias": "wake reveil veille sleep eteindre demarrage a distance sans surveillance",
  "sym": "L'hôte ne se connecte pas après veille / sommeil, ou vous voulez le démarrer à distance mais il ne se réveille pas",
  "l1": "Réveillez avec la « fonction Wake » de SunLogin (à activer au préalable sur l'hôte) ; réglez l'hôte sur ne pas se mettre en veille, activez « accès sans surveillance »",
  "l2": "Le wake à distance dépend du WOL (Wake-on-LAN) + du service wake de SunLogin ; nécessite la prise en charge alimentation / carte réseau de l'hôte et une configuration préalable ; en coupure totale / extinction, pas de réveil par logiciel",
  "tip": "Indispensable pour le sans surveillance : démarrage auto + connexion auto + pas de veille + activer le wake à l'avance",
  "scene": "En déplacement vous voulez connecter le PC de la maison, mais il dort et vous n'avez pas activé le wake avant → pas de connexion"
 },
 "Compte différent": {
  "cat": "Compte / Autorisations",
  "alias": "compte ne correspond pas liste d'appareils invisible deux comptes token reconnexion",
  "sym": "L'appareil à contrôler n'apparaît pas dans la liste, ou il semble en ligne alors qu'il est déjà tombé",
  "l1": "Pour contrôler vos propres appareils, contrôleur et hôte se connectent au même compte SunLogin ; rouvrez le client de l'hôte et voyez s'il demande de se reconnecter",
  "l2": "Un appareil du compte A n'est pas visible dans le compte B ; les appareils longtemps inactifs voient le jeton expirer, semblent en ligne mais sont tombés, la reconnexion les rétablit ; évitez plusieurs appareils avec le même compte en même temps (rend le service instable)",
  "tip": "Les deux côtés obligatoirement le même compte ; affiche en ligne mais ne se connecte pas, faites d'abord se reconnecter l'hôte une fois",
  "scene": "L'hôte sur le compte A, le contrôleur sur le compte B : l'appareil n'apparaît tout simplement pas dans la liste"
 },
 "Version de protocole incompatible": {
  "cat": "Version / Protocole",
  "alias": "version protocole 30 incompatible mettre a jour reinstaller cache",
  "sym": "Un grand écart de version cause un échec de connexion / une anomalie de compatibilité (code de log 30)",
  "l1": "Mettez les deux côtés à la dernière version (client → à propos → voir le numéro de version), redémarrez le client ; si ça persiste, redémarrez l'appareil, videz le cache",
  "l2": "Le protocole SunLogin est mis à jour assez souvent ; un côté en vieille version (ex. celle de 2024) est facilement incompatible avec la nouvelle ; beaucoup ne mettent à jour que le contrôleur et laissent l'hôte des mois sans y toucher",
  "tip": "Réinstallation complète (quand ça ne se connecte toujours pas) : désinstallez et supprimez %AppData%\\Oray\\SunLogin et %ProgramData%\\Oray\\SunLogin, puis installez la dernière version",
  "scene": "L'hôte n'a pas été mis à jour depuis six mois ; après la mise à jour du contrôleur le protocole ne correspond plus → échec de connexion"
 },
 "Performance de l'hôte insuffisante": {
  "cat": "Image / Performance",
  "alias": "performance cpu memoire lag hote ressources encodage vieux pc",
  "sym": "La latence d'opération va par à-coups, l'image saccade (les ressources de l'hôte sont saturées et l'encodage ne suit pas)",
  "l1": "Fermez sur l'hôte les programmes inutilisés pour libérer la mémoire (Chrome à nombreux onglets consomme beaucoup) ; baissez le mode bureau à « ultra-rapide / fluide »",
  "l2": "La capture et l'encodage de SunLogin demandent CPU / mémoire : mode bureautique ~CPU 5–15 % / mémoire 150–200 Mo, HD / gaming ~CPU 20–40 % / 200–400 Mo ; si l'hôte compile / a une VM / un scan antivirus / une mise à jour système, il ralentit nettement",
  "tip": "Sur les vieux PC : augmenter la mémoire (4 G→8 G), remplacer le HDD par un SSD, activer « privilégier le décodage matériel » pour que le GPU partage, tout aide",
  "scene": "L'hôte télécharge une mise à jour Windows, CPU à 40 %, et l'image à distance saccade"
 }
};
window.LABELS = {"miss": "Symptôme non listé ; essayez un autre mot-clé ou voyez le tableau complet ci-dessous."};
window.FIELDS = [["sym", "Symptôme / déclencheur"], ["l1", "L1 vérifier d'abord (officiel)"], ["l2", "L2 cause racine (réseau)"], ["tip", "Astuce"], ["scene", "Cas réel"]];
window.THEAD = ["Symptôme / erreur", "Catégorie", "L1 vérifier d'abord (officiel)", "L2 cause racine"];
