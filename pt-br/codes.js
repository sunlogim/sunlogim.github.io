window.CODES = {
 "Dispositivo offline": {
  "cat": "Conta / Permissões",
  "alias": "offline 21 nao online nao conecta nao encontra dispositivo",
  "sym": "O host aparece \"offline\" na lista do controlador, ou avisa que não encontra o dispositivo (código de log 21)",
  "l1": "Confirme que o PC host está ligado, online, sem suspender, com o cliente SunLogin rodando e \"conectado\"; se a rede estiver instável reinicie o roteador ou troque de rede",
  "l2": "Offline = o host simplesmente não está online, não olhe a rede primeiro: após suspender a placa de rede costuma desconectar, fechar a tampa do notebook corta o WiFi, o modo de economia do Android mata o segundo plano; no Windows verifique no services.msc se o serviço \"SunLogin\" está rodando",
  "tip": "Host não assistido de longo prazo: ligue \"autoinício + login automático + acesso não assistido\", no Android adicione o SunLogin à lista branca de economia de energia",
  "scene": "Conecto ao PC de casa e aparece offline; o notebook perdeu o WiFi ao fechar a tampa"
 },
 "Tempo esgotado": {
  "cat": "Rede / Traversal",
  "alias": "timeout tempo esgotado nao conecta falha de conexao 15 3 canal",
  "sym": "Após clicar conectar fica girando e no fim \"falha de conexão / não estabelece o canal\" (código 3=sem rede, 15=tempo esgotado ao estabelecer canal)",
  "l1": "Primeiro desligue firewall / antivírus dos dois lados e teste; saia e entre de novo nos dois; atualize para a última; troque o ambiente de rede (hotspot do celular)",
  "l2": "90% das \"falhas de conexão\" travam na fase 2 \"estabelecer o canal\": 15=P2P não atravessa e o relay também falha (rede muito ruim), 3=a camada de rede está bloqueada; se com hotspot conecta, é basicamente problema de rede / firewall",
  "tip": "Localize em 3 fases: verificar conta → estabelecer canal → transmitir imagem; o tempo esgotado quase sempre está em \"estabelecer o canal\"",
  "scene": "Não conecta no trabalho, em casa ou com hotspot conecta na hora → problema de ambiente de rede, não software quebrado"
 },
 "Senha de acesso errada": {
  "cat": "Conta / Permissões",
  "alias": "senha verificacao falhou 10 access password",
  "sym": "Após digitar a senha avisa verificação falhou / senha errada (código de log 10)",
  "l1": "Confirme que você digita a \"senha de acesso\" e não a de login da conta SunLogin; redefina a senha de acesso no host e conecte de novo",
  "l2": "A senha de acesso é a senha remota que o host define à parte; costuma estar trocada ou confundida com a de login; depois de mudar, o controlador usa a nova",
  "tip": "Senha de acesso ≠ senha de login: veja / redefina em \"Configurações → Segurança\" do host",
  "scene": "Fica usando a senha da conta de login para conectar; claro que dá erro"
 },
 "Bloqueio de firewall": {
  "cat": "Rede / Traversal",
  "alias": "firewall defender antivirus lista branca bloqueio",
  "sym": "A conexão esgota o tempo de imediato sem nenhum aviso (bloqueada em silêncio pela segurança, mais da metade das falhas de conexão)",
  "l1": "Adicione o SunLogin à confiança do firewall / segurança: no Firewall do Windows Defender \"permitir aplicativo\" marque o SunloginClient; adicione confiança no antivírus de terceiros",
  "l2": "A lista branca deve incluir toda a pasta de instalação (ex. C:\\Program Files (x86)\\Oray\\SunLogin\\), não só o exe principal—o SunLogin chama vários componentes ao rodar",
  "tip": "Verificação rápida: feche totalmente a segurança (não só a proteção em tempo real) e conecte; se conectar é 100% que ela bloqueava",
  "scene": "Achou que a rede estava quebrada; na verdade o antivírus bloqueava em silêncio a requisição de rede do SunLogin"
 },
 "Rede corporativa não conecta": {
  "cat": "Rede / Traversal",
  "alias": "rede corporativa rede de campus empresa dpi gestao de comportamento internet porta 443",
  "sym": "Em casa conecta, ao chegar no trabalho / escola não conecta (a porta passa mas o tráfego é barrado pela inspeção profunda de pacotes)",
  "l1": "Peça ao TI da empresa para liberar a lista branca do SunLogin; ou use o hotspot do celular temporariamente no host para contornar; tente o SunLogin versão SOS (outra forma de conexão)",
  "l2": "A rede corporativa costuma ter equipamentos de gestão de comportamento de internet; o SunLogin por TCP 443 (mesma porta do HTTPS) é identificado e bloqueado pelo DPI; experiência da comunidade: libere TCP 51020–51030 + UDP 50000–50010 no roteador corporativo, ou troque o modo de conexão de \"alta velocidade\" para \"compatível\" (80/443, mais genérico)",
  "tip": "Para saber se é a rede corporativa: troque ambos para hotspot do celular; se conectar é 100% bloqueio da rede corporativa",
  "scene": "A empresa aplica DPI e trata o SunLogin como tráfego HTTPS anômalo, bloqueando-o"
 },
 "Tela preta": {
  "cat": "Imagem / Desempenho",
  "alias": "tela preta black screen sem imagem tudo preto transmissao de imagem",
  "sym": "Conecta mas a tela fica toda preta / só preto (travado na fase 3 \"transmissão de imagem\")",
  "l1": "Dê permissões ao SunLogin no host: macOS \"Ajustes do Sistema → Privacidade e Segurança\" marque gravação de tela / acessibilidade / acesso total ao disco; Windows tente trocar de modo de desktop / reconectar",
  "l2": "Tela preta costuma ser falta de permissão de captura ou troca de GPU dedicada, proteção de tela de bloqueio; notebooks com GPU dedicada podem fazer o SunLogin capturar pela iGPU na política de energia",
  "tip": "Desde o macOS Ventura o caminho de permissões mudou para \"Ajustes do Sistema\"; buscar \"gravação de tela\" na busca é o mais rápido",
  "scene": "Um Mac host recém-instalado conecta tudo preto: faltava a permissão de \"gravação de tela\""
 },
 "Vê sem controlar": {
  "cat": "Imagem / Desempenho",
  "alias": "nao controla mouse teclado nao responde control so ver acessibilidade",
  "sym": "Vê a tela, mas clicar com mouse e teclado não responde (vê sem controlar)",
  "l1": "Ligue \"Permitir controle remoto\" no host; macOS exige a permissão de \"acessibilidade\", no Windows atenção ao UAC / janelas de administrador que precisam da permissão correspondente",
  "l2": "\"Vê sem controlar\" quase sempre é problema de permissão de injeção de entrada: acessibilidade do macOS não marcada, ou o host abriu um desktop seguro UAC que exige administrador (o SunLogin precisa rodar como administrador para operar)",
  "tip": "Quando estiver em somente leitura: confirme primeiro que \"Permitir controle remoto\" está ligado, no macOS adicione \"acessibilidade\", no Windows rode o SunLogin como administrador",
  "scene": "Controla o PC do outro, vê a tela mas clicar não faz nada → o outro não ligou \"Permitir controle remoto\""
 },
 "Lag e latência alta": {
  "cat": "Imagem / Desempenho",
  "alias": "lag latencia atraso rastro nao fluido lento",
  "sym": "Arrastar janelas trava, digitar demora 2–3 s para aparecer, o mouse deixa rastro (a latência piora claramente)",
  "l1": "Troque para o modo de desktop \"escritório / fluido\" para baixar qualidade e fps; feche downloads / vídeo que consomem banda no host; prefira cabo ou WiFi de 5 GHz",
  "l2": "Distribuição de causas (medição da comunidade): relay 35% > qualidade muito alta 25% > desempenho do host insuficiente 20% > rede ruim 15% > limite de fps 5%; níveis de latência: <30 ms quase local, 80–150 ms claramente travado, >150 ms quase só clique. Acima de 100 ms, ajustar a qualidade não adianta; o gargalo é a rede",
  "tip": "Veja primeiro no canto inferior esquerdo se é P2P ou relay; baixar a profundidade de cor de 32 bits um nível pode reduzir o uso de banda à metade",
  "scene": "Com 120 ms de latência a seleção da tabela não acompanha o mouse; com cabo + modo escritório fica fluido"
 },
 "Modo relay": {
  "cat": "Rede / Traversal",
  "alias": "relay retransmissao p2p nao atravessa nat upnp simetrico entre operadoras",
  "sym": "O cliente mostra \"Relay\" em vez de \"P2P\" no canto inferior esquerdo, a latência geral é alta, o mouse deixa rastro",
  "l1": "O SunLogin escolhe o modo de conexão automaticamente e não dá para trocar à mão; desconecte e reconecte (com 10 s ou mais de intervalo) para o sistema tentar P2P de novo",
  "l2": "Aumentar a taxa de sucesso do P2P: ① ligue o UPnP do roteador (roteadores domésticos costumam vir desligados; ligar dispara o sucesso); ② não deixe ambos os lados atrás de NAT simétrico, troque a rede de um lado; ③ entre operadoras diferentes mesmo que o P2P atravesse a latência continua alta, às vezes forçar relay é mais estável (o servidor do SunLogin tem linhas dedicadas entre operadoras)",
  "tip": "Se o UPnP está ligado e ainda fica em relay, é provável NAT simétrico; em cenários entre operadoras tente o relay",
  "scene": "Desliguei o relay, liguei o UPnP e passou a P2P na hora, latência 120 ms→35 ms"
 },
 "Imagem embaçada": {
  "cat": "Imagem / Desempenho",
  "alias": "qualidade embacado nitidez resolucao cor true color bitrate",
  "sym": "A imagem fica embaçada em movimento, pouco nítida (sobretudo ao arrastar / com vídeo)",
  "l1": "Quando falta banda o SunLogin baixa a qualidade automaticamente para manter a fluidez; para mais nitidez aumente qualidade / fps à mão, ou troque para o modo \"HD / qualidade\"",
  "l2": "A resolução de máxima qualidade é limitada pelo teto físico do monitor do host (se o host é só 1080p não dá remoto 4K); para restauração profissional use true color 4:4:4; a decodificação por hardware passa o processamento à GPU do controlador e baixa o uso de CPU",
  "tip": "Priorize nitidez: ponha a resolução \"seguir o controlador\" + tela cheia, evite o embaçamento por esticamento",
  "scene": "No modo HD a banda não acompanha e baixa a qualidade automaticamente → embaçado em movimento, recupera quando a rede melhora"
 },
 "30fps versão grátis": {
  "cat": "Imagem / Desempenho",
  "alias": "30fps quadros fps versao gratis 60fps 144fps pago",
  "sym": "A latência não é alta mas arrastar janelas / rolar trava claramente e deixa rastro (não é a rede, é o teto de quadros)",
  "l1": "A conta de nível grátis vai até 30fps; para mais fluidez aumente o nível de serviço da conta: pago chega a 60fps, a versão gaming até 144fps",
  "l2": "O máximo de quadros também é limitado pela frequência do monitor dos dois lados: se um é de 60 Hz não passa de 60 FPS; 144fps exige GPU + monitor de 144 Hz, e que a GPU do host suporte codificação por hardware",
  "tip": "A diferença entre 30 e 60fps é bem perceptível; no Android pago também há 60fps, mais sensível ao toque",
  "scene": "Na versão grátis arrastar janelas deixa rastro; após subir para 60fps fica claramente mais fluido"
 },
 "Falha de wake": {
  "cat": "Conta / Permissões",
  "alias": "wake despertar suspensao sleep desligar boot remoto nao assistido",
  "sym": "O host não conecta após suspender / dormir, ou você quer ligá-lo remotamente mas ele não acorda",
  "l1": "Acorde com a \"função Wake\" do SunLogin (precisa ativar antes no host); ponha o host para não suspender, ligue \"acesso não assistido\"",
  "l2": "O wake remoto depende de WOL (Wake-on-LAN) + o serviço de wake do SunLogin; exige suporte de energia / placa de rede do host e configuração prévia; com corte total / desligado não dá para acordar por software",
  "tip": "Imprescindível para não assistido: autoinício + login automático + não suspender + ativar wake com antecedência",
  "scene": "Em viagem quer conectar ao PC de casa, mas ele está dormindo e você não ativou o wake antes → não conecta"
 },
 "Conta diferente": {
  "cat": "Conta / Permissões",
  "alias": "conta nao bate lista de dispositivos nao aparece duas contas token novo login",
  "sym": "O dispositivo a controlar não aparece na lista, ou parece online quando na verdade já caiu",
  "l1": "Ao controlar seus próprios dispositivos, controlador e host entram na mesma conta SunLogin; reabra o cliente do host e veja se pede novo login",
  "l2": "Um dispositivo da conta A não aparece na conta B; dispositivos parados muito tempo expiram o token, parecem online mas caíram, novo login recupera; evite vários dispositivos com a mesma conta ao mesmo tempo (deixa o serviço instável)",
  "tip": "Os dois lados obrigatoriamente na mesma conta; se aparece online mas não conecta, faça o host reentrar uma vez primeiro",
  "scene": "O host na conta A, o controlador na conta B: o dispositivo simplesmente não aparece na lista"
 },
 "Versão de protocolo não bate": {
  "cat": "Versão / Protocolo",
  "alias": "versao protocolo 30 nao bate atualizar reinstalar cache",
  "sym": "Grande diferença de versão causa falha de conexão / anomalia de compatibilidade (código de log 30)",
  "l1": "Atualize ambos os lados para a última (cliente → sobre → ver número da versão), reinicie o cliente; se persistir, reinicie o dispositivo, limpe o cache",
  "l2": "O protocolo do SunLogin é atualizado com frequência; um lado em versão antiga (ex. a de 2024) facilmente não é compatível com a nova; muita gente só atualiza o controlador e deixa o host meses sem mexer",
  "tip": "Reinstalação total (quando ainda não conecta): desinstale e apague %AppData%\\Oray\\SunLogin e %ProgramData%\\Oray\\SunLogin, depois instale a última versão",
  "scene": "O host está há meio ano sem atualizar; depois que o controlador atualizou o protocolo não bate → falha de conexão"
 },
 "Desempenho do host insuficiente": {
  "cat": "Imagem / Desempenho",
  "alias": "desempenho cpu memoria lag host recursos codificacao pc velho",
  "sym": "A latência de operação vai por rajadas, a imagem trava (os recursos do host estão saturados e a codificação não acompanha)",
  "l1": "Feche programas que não usa no host para liberar memória (Chrome com muitas abas consome muito); baixe o modo de desktop para \"ultrarrápido / fluido\"",
  "l2": "A captura e codificação do SunLogin precisam de CPU / memória: modo escritório ~CPU 5–15% / memória 150–200 MB, HD / gaming ~CPU 20–40% / 200–400 MB; se o host está compilando / com VM / varredura de antivírus / atualização do sistema, fica claramente lento",
  "tip": "Em PCs velhos: ampliar memória (4G→8G), trocar HDD por SSD, ligar \"priorizar decodificação por hardware\" para a GPU dividir, tudo ajuda",
  "scene": "O host está baixando uma atualização do Windows, CPU em 40%, e a imagem remota trava"
 }
};
window.LABELS = {"miss": "Sintoma não listado; tente outra palavra-chave ou veja a tabela completa abaixo."};
window.FIELDS = [["sym", "Sintoma / gatilho"], ["l1", "L1 verifique primeiro (oficial)"], ["l2", "L2 causa raiz (camada de rede)"], ["tip", "Dica"], ["scene", "Caso real"]];
window.THEAD = ["Sintoma / erro", "Categoria", "L1 verificar primeiro (oficial)", "L2 causa raiz"];
