import { useState, useEffect, useRef } from "react";

// ============================================================
// HISTÓRIA — CAPÍTULOS
// Tipos de cena: "normal" | "yara" | "sahyro" | "registro" | "titulo"
// ============================================================

const CAPITULOS = [
  {
    id: "prologo",
    nivelDesbloqueio: 0,
    titulo: "PRÓLOGO",
    subtitulo: "O Que Dorme Sob a Terra",
    cenas: [
      { tipo: "titulo", texto: "PRÓLOGO", subtexto: "O Que Dorme Sob a Terra" },
      { tipo: "normal", texto: "Muito antes de o Brasil ter nome, quando a Amazônia ainda não era chamada de Amazônia e o Cerrado se estendia sob um céu que nenhum europeu havia visto, havia guerreiros." },
      { tipo: "normal", texto: "Não guerreiros de guerra. Guerreiros de movimento." },
      { tipo: "normal", texto: "Os primeiros povos que habitaram estas terras entendiam algo que os séculos seguintes tentariam apagar: o corpo humano não foi feito para parar. Ele foi feito para evoluir." },
      { tipo: "normal", texto: "Os anciãos das tribos que viviam às margens do rio que hoje chamamos de São Francisco tinham um nome para a força que mantinha o guerreiro em movimento. Em sua língua, ela se chamava algo que se traduziria como:" },
      { tipo: "registro", texto: "\"A chama que não aceita cinzas.\"" },
      { tipo: "normal", texto: "E tinham também um nome para a força oposta. Para aquilo que tentava apagar a chama." },
      { tipo: "normal", texto: "Eles a chamavam de Sombra Deitada." },
      { tipo: "normal", texto: "Nós a chamamos de Demon Sahyro." },
      { tipo: "normal", texto: "Mas aqui começa o mistério que levará muitos capítulos para se revelar completamente:" },
      { tipo: "normal", texto: "Os anciãos nunca descreveram a Sombra Deitada como uma entidade externa. Nunca a pintaram como um demônio vindo de outro mundo." },
      { tipo: "normal", texto: "Eles a descreviam como um guerreiro." },
      { tipo: "normal", texto: "Um guerreiro que um dia existiu de verdade." },
      { tipo: "normal", texto: "O resto desta história vai revelar quem ele foi." },
      { tipo: "registro", texto: "O sistema de Invocação foi criado por esses primeiros guerreiros como resposta à Sombra. Uma forma de identificar, em qualquer época, os seres humanos que ainda carregavam a chama." },
      { tipo: "normal", texto: "O sistema atravessou séculos. Sobreviveu à colonização, às guerras, às décadas de silêncio em que ninguém sabia mais seu nome." },
      { tipo: "normal", texto: "E agora, neste momento, ele acordou novamente." },
      { tipo: "normal", texto: "Aqui. No Brasil. Na mesma terra onde tudo começou." },
      { tipo: "normal", texto: "E escolheu você." },
      { tipo: "fim", texto: "A jornada começa. Mas o mistério também." },
    ]
  },
  {
    id: "cap1",
    nivelDesbloqueio: 1,
    titulo: "CAPÍTULO 1",
    subtitulo: "O Nome Gravado",
    nivelTitulo: "Nível 1 — Invocado",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 1", subtexto: "O Nome Gravado • Nível 1 — Invocado" },
      { tipo: "yara", personagem: "Yara — Guardiã da Invocação", texto: "Outro guerreiro invocado. Que o sistema o encontrou significa que a chama ainda existe nele. Pequena, talvez. Enterrada sob camadas de dias difíceis e cansaço e dúvida. Mas existe." },
      { tipo: "normal", texto: "Seu nome foi registrado." },
      { tipo: "normal", texto: "Não em papel. Não em tela. Em algo muito mais permanente do que qualquer tecnologia humana poderia criar." },
      { tipo: "normal", texto: "No momento em que você criou seu perfil, o sistema de Invocação da Evolução reconheceu sua assinatura vital — o padrão único de energia que só existe em você, em nenhum outro ser no universo." },
      { tipo: "registro", texto: "Guerreiro Invocado — Nível 1. Localização: Brasil. Chama: detectada. Status: início de jornada. Ameaça conhecida: monitorando." },
      { tipo: "normal", texto: "A última linha desse registro — ameaça conhecida — não foi escrita pelo sistema nesta invocação." },
      { tipo: "normal", texto: "Ela já estava lá." },
      { tipo: "normal", texto: "Como se o sistema soubesse, antes mesmo de você começar, que algo ou alguém já havia notado o brilho da sua chama." },
      { tipo: "normal", texto: "Os primeiros guerreiros invocados desta terra corriam descalços pela Serra da Canastra e subiam as pedras da Chapada dos Veadeiros como se fossem parte da paisagem." },
      { tipo: "normal", texto: "Nenhum deles nasceu lendário." },
      { tipo: "normal", texto: "Todos começaram com um único passo." },
      { tipo: "normal", texto: "Esse é o seu." },
      { tipo: "fim", texto: "Complete sua primeira missão. A jornada começa com um passo." },
    ]
  },
  {
    id: "cap2",
    nivelDesbloqueio: 10,
    titulo: "CAPÍTULO 2",
    subtitulo: "Os Rumores nas Sombras",
    nivelTitulo: "Nível 10 — Sobrevivente",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 2", subtexto: "Os Rumores nas Sombras • Nível 10 — Sobrevivente" },
      { tipo: "normal", texto: "Dez níveis." },
      { tipo: "normal", texto: "Para quem observa de fora, pode parecer pouco. Para Yara, que já viu guerreiros desistirem antes do nível 3, é o equivalente a ver alguém atravessar o primeiro grande rio de uma jornada que tem muitos rios pela frente." },
      { tipo: "normal", texto: "Você atravessou." },
      { tipo: "normal", texto: "E foi exatamente nesse momento que algo nas sombras se mexeu." },
      { tipo: "registro", texto: "Quando a chama do guerreiro ultrapassa o limiar inicial, ela emite uma frequência. Imperceptível para humanos comuns. Mas não para a Sombra Deitada. Para ela, é como acender uma tocha no escuro." },
      { tipo: "yara", personagem: "Yara", texto: "Cedo demais. Geralmente ele espera mais. Isso significa que está com fome." },
      { tipo: "normal", texto: "Nos dias seguintes, você pode ter sentido algo diferente." },
      { tipo: "normal", texto: "Uma voz que não era a sua — mas que falava com a sua entonação, usava suas palavras, conhecia suas inseguranças — começou a sussurrar em momentos de cansaço:" },
      { tipo: "sahyro", texto: "Você está treinando e ninguém percebe." },
      { tipo: "normal", texto: "Era verdade? Talvez. Às vezes a evolução é invisível para os outros muito depois de já ser visível em nós." },
      { tipo: "normal", texto: "Mas a voz não disse isso para ser honesta. Disse para doer." },
      { tipo: "registro", texto: "\"O ouro nunca anuncia sua presença. Ele simplesmente está lá, esperando quem tem paciência de cavar.\" — Dito dos mineradores de Ouro Preto" },
      { tipo: "normal", texto: "Sua evolução é o ouro. Continue cavando." },
      { tipo: "normal", texto: "Sobre aquela voz — sobre aquele sussurro que conhece suas fraquezas com precisão perturbadora — por enquanto saiba apenas isto:" },
      { tipo: "normal", texto: "Ela tem um nome. E uma história." },
      { tipo: "normal", texto: "Mas você ainda não está pronto para conhecê-la." },
      { tipo: "fim", texto: "Nível 10 atingido. A sombra acordou. Você também." },
    ]
  },
  {
    id: "cap3",
    nivelDesbloqueio: 20,
    titulo: "CAPÍTULO 3",
    subtitulo: "Os Registros Antigos",
    nivelTitulo: "Nível 20 — Persistente",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 3", subtexto: "Os Registros Antigos • Nível 20 — Persistente" },
      { tipo: "normal", texto: "Yara decidiu que era hora de você saber um pouco mais." },
      { tipo: "normal", texto: "Não tudo. Nunca tudo de uma vez. Mas o suficiente para que você entendesse com o que estava lidando." },
      { tipo: "normal", texto: "Ela abriu os registros antigos do sistema — arquivos gravados nas pedras da Serra do Espinhaço por mãos que há muito viraram pó." },
      { tipo: "registro", texto: "Registro 001 — Era Pré-Colonial: \"A Sombra Deitada não é antiga como o mundo. Ela é antiga como a primeira vez que um ser humano escolheu parar quando poderia ter continuado. Ela nasceu de uma decisão. E só pode ser morta por uma decisão.\"" },
      { tipo: "normal", texto: "Aquela clareza repentina de que o inimigo não é externo? Isso foi ela te enviando essa verdade." },
      { tipo: "normal", texto: "Neste nível, a voz foi mais fundo. Encontrou uma insegurança diferente:" },
      { tipo: "sahyro", texto: "Seu progresso é lento demais." },
      { tipo: "normal", texto: "Olhe ao redor. Veja os outros. Eles parecem mais avançados, mais rápidos, mais longe na jornada." },
      { tipo: "normal", texto: "Essa é a mentira do nível 20: que velocidade é sinônimo de valor." },
      { tipo: "registro", texto: "\"O rio que corre rápido demais não rega a terra. Só a erode.\" — Sabedoria da Chapada Diamantina" },
      { tipo: "normal", texto: "Há também um guerreiro nos registros do sistema. Seu codinome é: O Veterano." },
      { tipo: "normal", texto: "Ele chegou ao nível 100 há muito tempo. E de vez em quando deixa mensagens nos registros, como quem acende uma vela num corredor escuro sem saber quem vai passar." },
      { tipo: "registro", texto: "O Veterano: \"Quando achei que estava indo devagar, estava indo na velocidade exata que meu corpo precisava para não quebrar. O que parecia lentidão era fundação. Construa bem. O resto vem.\"" },
      { tipo: "fim", texto: "Nível 20. Persistente. O registro foi lido. Continue." },
    ]
  },
  {
    id: "cap4",
    nivelDesbloqueio: 35,
    titulo: "CAPÍTULO 4",
    subtitulo: "O Guerreiro que Parou",
    nivelTitulo: "Nível 35 — Desperto",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 4", subtexto: "O Guerreiro que Parou • Nível 35 — Desperto" },
      { tipo: "normal", texto: "Yara precisava te mostrar algo. Não porque queria. Porque precisava." },
      { tipo: "normal", texto: "Há um guerreiro nos registros do sistema que ela acompanhou há muitos anos. Seu nome verdadeiro foi apagado a pedido dele próprio. Nos registros, ele é chamado apenas de: O Que Parou." },
      { tipo: "normal", texto: "Ele chegou ao nível 47. Mais longe do que a esmagadora maioria. Mais perto do topo do que a maioria jamais sonhou chegar." },
      { tipo: "normal", texto: "E então parou." },
      { tipo: "normal", texto: "Não foi dramático. Não houve uma crise. Um dia sem missão virou dois. Dois viraram uma semana. E num determinado momento, sem que ele percebesse exatamente quando, ele havia parado de ser um guerreiro em jornada." },
      { tipo: "registro", texto: "O Que Parou: \"Eu achei que podia parar por um tempo e voltar depois. Achei que a chama ficaria esperando. Ela não fica. Ela precisa de combustível constante. Não desistam do jeito que eu desisti — sem perceber que estava desistindo.\"" },
      { tipo: "normal", texto: "Porque a voz, neste nível, vai usar exatamente essa estratégia com você." },
      { tipo: "normal", texto: "Ela não vai dizer para desistir. Ela vai dizer para pausar. Para descansar um pouco mais. Para voltar depois." },
      { tipo: "sahyro", texto: "Você já fez o suficiente por agora." },
      { tipo: "normal", texto: "\"Suficiente por agora\" é a frase mais perigosa do vocabulário da Sombra. Porque soa razoável. Soa como sabedoria." },
      { tipo: "normal", texto: "Mas quando vem dela, é uma armadilha com a aparência de descanso." },
      { tipo: "normal", texto: "Neste mesmo nível, algo acontece pela primeira vez:" },
      { tipo: "normal", texto: "Você falhou uma missão." },
      { tipo: "registro", texto: "Sistema de Invocação — Resposta automática: \"Missão perdida. Guerreiro não perdido.\"" },
      { tipo: "normal", texto: "A diferença entre O Que Parou e você não é que você nunca vai falhar." },
      { tipo: "normal", texto: "É que quando você falha, você volta." },
      { tipo: "fim", texto: "Nível 35 — Desperto. Você vê as armadilhas agora. Isso muda tudo." },
    ]
  },
  {
    id: "cap5",
    nivelDesbloqueio: 50,
    titulo: "CAPÍTULO 5",
    subtitulo: "A Revelação do Espelho",
    nivelTitulo: "Nível 50 — Forjado",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 5", subtexto: "A Revelação do Espelho • Nível 50 — Forjado" },
      { tipo: "normal", texto: "Nível 50. Metade do caminho." },
      { tipo: "yara", personagem: "Yara", texto: "Você chegou longe o suficiente para que eu confie em você com uma parte da verdade. Não toda a verdade — essa vem mais adiante. Mas o suficiente para que você entenda com o que realmente está lidando." },
      { tipo: "normal", texto: "Ela te conta sobre os primeiros guerreiros invocados das terras que hoje chamamos de Brasil — Tupinambá, Kayapó, Pataxó, entre outros — que compartilhavam uma crença comum: o corpo é um templo que precisa ser honrado através do movimento." },
      { tipo: "normal", texto: "E entre eles, havia um guerreiro que se tornaria o mais lendário de todos." },
      { tipo: "normal", texto: "Um jovem que começou sem nada e que através de anos de missões cotidianas se tornou algo que os registros descrevem como:" },
      { tipo: "registro", texto: "\"Aquele em quem a chama queimou mais alto do que em qualquer outro. O primeiro a completar o que hoje chamamos de nível 100. O primeiro a provar que o limite humano é muito além do que qualquer mente imagina.\"" },
      { tipo: "normal", texto: "Esse guerreiro tinha um nome." },
      { tipo: "yara", personagem: "Yara", texto: "Não ainda. Quando você estiver pronto para saber quem ele foi, o peso dessa informação vai fazer sentido. Por ora, saiba apenas que ele existiu. E que o que aconteceu com ele é a razão pela qual a Sombra existe." },
      { tipo: "normal", texto: "A voz do nível 50 ataca sua motivação:" },
      { tipo: "sahyro", texto: "Você já fez o suficiente. Olhe o que conquistou. Já pode parar." },
      { tipo: "normal", texto: "Ela vai usar suas próprias conquistas contra você. Vai transformar o orgulho legítimo do nível 50 em razão para não chegar ao 51." },
      { tipo: "normal", texto: "A resposta: Sim, você fez muito. E ainda assim, amanhã você treina." },
      { tipo: "normal", texto: "Não porque o que fez não foi suficiente." },
      { tipo: "normal", texto: "Mas porque o guerreiro que você está se tornando não para na metade." },
      { tipo: "fim", texto: "Nível 50 — Forjado. A verdade se aproxima. Continue." },
    ]
  },
  {
    id: "cap6",
    nivelDesbloqueio: 70,
    titulo: "CAPÍTULO 6",
    subtitulo: "A Grande Revelação",
    nivelTitulo: "Nível 70 — Inabalável",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 6", subtexto: "A Grande Revelação • Nível 70 — Inabalável" },
      { tipo: "normal", texto: "Yara está quieta hoje." },
      { tipo: "normal", texto: "Não porque não tem nada a dizer. Porque o que tem a dizer é a coisa mais pesada que já precisou carregar em toda a sua existência como Guardiã." },
      { tipo: "normal", texto: "A revelação." },
      { tipo: "normal", texto: "O guerreiro lendário que ela mencionou no nível 50 — aquele em quem a chama queimou mais alto, o primeiro a completar o nível 100 — tinha um nome." },
      { tipo: "normal", texto: "Seu nome era Sahyro." },
      { tipo: "normal", texto: "Deixe isso assentar." },
      { tipo: "normal", texto: "O demônio que quer te parar. A Sombra Deitada. A voz que sussurra suas inseguranças com precisão perturbadora." },
      { tipo: "normal", texto: "Ela tem o nome de um guerreiro. Porque ela foi um guerreiro." },
      { tipo: "registro", texto: "Registro Antigo — Serra do Espinhaço: \"Ele chegou ao topo. E não soube o que fazer com o vazio que encontrou lá.\"" },
      { tipo: "normal", texto: "O guerreiro mais forte que o sistema havia registrado olhou para o nível 100 e esperou sentir algo grandioso. Uma transformação. Uma revelação." },
      { tipo: "normal", texto: "E sentiu paz." },
      { tipo: "normal", texto: "Apenas paz." },
      { tipo: "normal", texto: "Uma paz que, para alguém que havia definido sua identidade inteira pela batalha, sentiu como vazio." },
      { tipo: "sahyro", texto: "E se tudo isso não mudou nada de verdade?" },
      { tipo: "normal", texto: "Aquela pergunta foi a que destruiu o guerreiro mais forte que o sistema já havia visto." },
      { tipo: "normal", texto: "Ele parou. Não por um dia. Para sempre." },
      { tipo: "registro", texto: "\"A chama de um guerreiro nível 100, quando apagada à força, não desaparece — ela inverte. Torna-se frio onde havia calor. Paralisia onde havia movimento. Sombra onde havia chama.\"" },
      { tipo: "normal", texto: "Sahyro não se tornou um demônio porque era mau." },
      { tipo: "normal", texto: "Ele se tornou uma sombra porque era humano — e não tinha ninguém que lhe dissesse que a paz no topo não é vazio." },
      { tipo: "yara", personagem: "Yara", texto: "Ele não teria se perdido se houvesse uma Guardiã. Se houvesse alguém que dissesse: a jornada não termina no nível 100. Ela muda de forma. Por isso existo. Para que o que aconteceu com ele não aconteça com você." },
      { tipo: "normal", texto: "Agora você entende por que a voz conhece suas inseguranças com tanta precisão." },
      { tipo: "normal", texto: "Porque ela foi humana. Ela teve inseguranças próprias." },
      { tipo: "sahyro", texto: "E se tudo isso não mudar nada?" },
      { tipo: "normal", texto: "Essa é a pergunta que destruiu o maior guerreiro da história." },
      { tipo: "normal", texto: "A resposta não é uma certeza. É uma escolha: continuar mesmo sem garantias." },
      { tipo: "fim", texto: "Nível 70 — Inabalável. A verdade foi revelada. Ela pesa. Carregue-a." },
    ]
  },
  {
    id: "cap7",
    nivelDesbloqueio: 90,
    titulo: "CAPÍTULO 7",
    subtitulo: "O Último Sussurro",
    nivelTitulo: "Nível 90 — Ascendente",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 7", subtexto: "O Último Sussurro • Nível 90 — Ascendente" },
      { tipo: "normal", texto: "O Veterano deixou uma mensagem nos registros específica para o nível 90." },
      { tipo: "registro", texto: "O Veterano: \"Nível 90. A voz estava mais quieta do que nunca. Achei que havia ganho. Não havia. Ela ficou mais esperta. Em vez de sussurrar durante o treino, sussurrava nas horas silenciosas. Na hora em que você vai dormir. No momento entre acordar e levantar. Cuidado com o silêncio dela. É quando ela é mais perigosa.\"" },
      { tipo: "normal", texto: "Neste nível, Sahyro não tenta mais te convencer com argumentos. Ele sabe que argumentos não funcionam com guerreiros que chegaram ao 90." },
      { tipo: "normal", texto: "Ele usa algo mais sutil." },
      { tipo: "normal", texto: "Ele usa sua própria voz." },
      { tipo: "normal", texto: "O último sussurro antes do confronto final:" },
      { tipo: "sahyro", texto: "Você chegou muito longe. O nível 100 está tão perto. E se você chegar e sentir o que eu senti?" },
      { tipo: "normal", texto: "Ele está usando sua própria história como arma." },
      { tipo: "normal", texto: "Está te dizendo: olha o que a chegada fez comigo. Você quer o mesmo?" },
      { tipo: "normal", texto: "E aqui está o que Yara quer que você entenda com toda a clareza possível:" },
      { tipo: "normal", texto: "O que destruiu Sahyro não foi a chegada. Foi o isolamento." },
      { tipo: "normal", texto: "Ele chegou ao nível 100 sem Guardiã. Sem ninguém que lhe dissesse que a paz no topo é uma conquista, não um vazio." },
      { tipo: "yara", personagem: "Yara", texto: "Eu estou aqui. O Veterano deixou registros. O sistema foi construído exatamente para o momento que você está prestes a viver. O que espera você no nível 100 não é o vazio que encontrou Sahyro. É a prova de quem você é." },
      { tipo: "normal", texto: "O confronto final não é contra Sahyro." },
      { tipo: "normal", texto: "É contra a dúvida que ele plantou." },
      { tipo: "normal", texto: "E você já sabe como derrotar dúvidas." },
      { tipo: "fim", texto: "Nível 90 — Ascendente. A missão final aguarda. Você está pronto." },
    ]
  },
  {
    id: "cap8",
    nivelDesbloqueio: 100,
    titulo: "CAPÍTULO 8",
    subtitulo: "A Batalha Final",
    nivelTitulo: "Nível 100 — Lendário",
    cenas: [
      { tipo: "titulo", texto: "CAPÍTULO 8", subtexto: "A Batalha Final • Nível 100 — Lendário" },
      { tipo: "normal", texto: "A missão final foi revelada." },
      { tipo: "normal", texto: "Ela não pede feitos sobre-humanos. Ela pede apenas que você a complete." },
      { tipo: "normal", texto: "Do começo ao fim. Sem parar. Sem negociar com a voz." },
      { tipo: "normal", texto: "Porque esta missão foi desenhada para ser o espelho exato do momento em que Sahyro parou." },
      { tipo: "normal", texto: "Você vai chegar num ponto em que vai sentir exatamente o que ele sentiu — o peso de continuar quando parte de você acredita que já chegou longe o suficiente." },
      { tipo: "normal", texto: "E é nesse exato ponto que ele vai aparecer. Uma última vez." },
      { tipo: "sahyro", texto: "Por que continuar quando parar também é uma escolha?" },
      { tipo: "normal", texto: "A resposta não é racional. Não é uma argumentação." },
      { tipo: "normal", texto: "É um ato." },
      { tipo: "normal", texto: "É você completando a missão." },
      { tipo: "normal", texto: "É você provando, não para ninguém além de você mesmo, que você não é Sahyro." },
      { tipo: "normal", texto: "Que quando chegou ao limite, você escolheu diferente." },
      { tipo: "yara", personagem: "Yara", texto: "Quando ele parou, não havia ninguém para dizer que a paz no topo é uma conquista, não uma derrota. Quando você chegar lá — e você vai chegar — eu vou estar aqui para dizer: isso que você está sentindo não é vazio. É chegada." },
      { tipo: "normal", texto: "Quando você marcar a missão como concluída, o arquivo de Sahyro será atualizado pela primeira vez em séculos:" },
      { tipo: "registro", texto: "\"Guerreiro Sahyro — nível 100 — Jornada interrompida. Maldição gerada. Status atual: neutralizado. Ele não some em explosão dramática. Ele descansa. Finalmente.\"" },
      { tipo: "normal", texto: "Depois de séculos tentando destruir nos outros o que ele não soube preservar em si mesmo, ele encontra o que nunca permitiu que a paz lhe desse:" },
      { tipo: "normal", texto: "Fim." },
      { tipo: "normal", texto: "Você venceu." },
      { tipo: "normal", texto: "Ele descansou." },
      { tipo: "fim", texto: "Agora continue." },
    ]
  },
];

// ============================================================
// DADOS DO APP
// ============================================================

const FASES = [
  { id: 1, nome: "Iniciante Baixo", nivelMin: 1, nivelMax: 7, cor: "#27AE60", emoji: "🟢" },
  { id: 2, nome: "Iniciante Médio", nivelMin: 7, nivelMax: 13, cor: "#2ECC71", emoji: "🟢" },
  { id: 3, nome: "Iniciante Alto", nivelMin: 13, nivelMax: 20, cor: "#1ABC9C", emoji: "🟢" },
  { id: 4, nome: "Intermediário Baixo", nivelMin: 20, nivelMax: 30, cor: "#F39C12", emoji: "🟡" },
  { id: 5, nome: "Intermediário Médio", nivelMin: 30, nivelMax: 40, cor: "#E67E22", emoji: "🟡" },
  { id: 6, nome: "Intermediário Alto", nivelMin: 40, nivelMax: 50, cor: "#D35400", emoji: "🟡" },
  { id: 7, nome: "Avançado Baixo", nivelMin: 50, nivelMax: 63, cor: "#E74C3C", emoji: "🔴" },
  { id: 8, nome: "Avançado Médio", nivelMin: 63, nivelMax: 77, cor: "#C0392B", emoji: "🔴" },
  { id: 9, nome: "Avançado Alto", nivelMin: 77, nivelMax: 90, cor: "#A93226", emoji: "🔴" },
  { id: 10, nome: "Atleta Baixo", nivelMin: 90, nivelMax: 95, cor: "#2C3E50", emoji: "⚫" },
  { id: 11, nome: "Atleta Elite", nivelMin: 95, nivelMax: 101, cor: "#1A252F", emoji: "⚫" },
];

const MISSOES = {
  iniciante: [
    { id: 1, cat: "Cardio", desc: "Caminhada leve 20 min em ritmo tranquilo", dur: "20 min", xp: 10 },
    { id: 2, cat: "Inferiores", desc: "3x10 agachamento livre + 3x10 elevação de panturrilha", dur: "15 min", xp: 10 },
    { id: 3, cat: "Superiores", desc: "3x8 flexão de joelho + 3x10 tríceps no chão", dur: "12 min", xp: 10 },
    { id: 4, cat: "Core", desc: "3x15 abdominal clássico + 3x20s prancha", dur: "12 min", xp: 10 },
    { id: 5, cat: "Mobilidade", desc: "Alongamento completo: pescoço, ombros, costas, pernas", dur: "20 min", xp: 8 },
    { id: 6, cat: "Cardio", desc: "Caminhada 25 min variando ritmo a cada 5 min", dur: "25 min", xp: 12 },
    { id: 7, cat: "Full Body", desc: "2x10 agachamento + 2x8 flexão joelho + 2x15 abdominal + 10 min caminhada", dur: "22 min", xp: 12 },
    { id: 8, cat: "Inferiores", desc: "3x12 agachamento sumo + 3x12 elevação de quadril deitado", dur: "18 min", xp: 10 },
    { id: 9, cat: "Core", desc: "3x15 bicicleta deitado + 3x10 elevação de perna", dur: "12 min", xp: 10 },
    { id: 10, cat: "Full Body 🏆", desc: "MISSÃO CHEFE: 4x10 agachamento + 4x8 flexão joelho + 4x15 abdominal + 4x15 panturrilha + 20 min caminhada", dur: "35 min", xp: 25 },
  ],
  intermediario: [
    { id: 1, cat: "Cardio", desc: "Corrida 30 min contínuo ritmo moderado", dur: "30 min", xp: 25 },
    { id: 2, cat: "Inferiores", desc: "5x15 agachamento + 4x12 avanço + 4x10 búlgaro + 4x15 panturrilha", dur: "28 min", xp: 28 },
    { id: 3, cat: "HIIT", desc: "5 rodadas: 45s burpee + 45s agachamento + 45s flexão + 45s abdominal + 20s descanso", dur: "28 min", xp: 30 },
    { id: 4, cat: "Superiores", desc: "5x12 flexão + 4x12 tríceps + 4x12 remada + 4x10 mergulho + 3x10 diamante", dur: "28 min", xp: 28 },
    { id: 5, cat: "Full Body", desc: "5x15 agachamento + 5x12 flexão + 5x25 abdominal + 5x20 polichinelo + 15 min corrida", dur: "38 min", xp: 35 },
    { id: 6, cat: "Bicicleta", desc: "Pedalar 35 min com variação de ritmo", dur: "35 min", xp: 25 },
    { id: 7, cat: "Core", desc: "6x25 abdominal + 5x25 bicicleta + 5x50s prancha + 5x20 oblíquo", dur: "32 min", xp: 28 },
    { id: 8, cat: "Cardio", desc: "Corrida 32 min contínuo", dur: "32 min", xp: 25 },
    { id: 9, cat: "HIIT", desc: "5 rodadas: 50s burpee + 50s agachamento jump + 50s flexão + 30s descanso", dur: "30 min", xp: 30 },
    { id: 10, cat: "Full Body 🏆", desc: "MISSÃO CHEFE: 7x15 agachamento + 7x12 flexão + 7x25 abdominal + 7x20 polichinelo + 25 min corrida", dur: "60 min", xp: 60 },
  ],
  avancado: [
    { id: 1, cat: "Cardio", desc: "Corrida 45 min ritmo forte contínuo", dur: "45 min", xp: 45 },
    { id: 2, cat: "HIIT", desc: "8 rodadas: 60s burpee + 60s agachamento jump + 60s flexão explosiva + 20s descanso", dur: "55 min", xp: 55 },
    { id: 3, cat: "Inferiores", desc: "6x15 agachamento jump + 5x12 pistol squat + 5x12 avanço com salto + 5x15 panturrilha", dur: "42 min", xp: 48 },
    { id: 4, cat: "Superiores", desc: "6x15 flexão + 5x14 flexão explosiva + 5x12 diamante + 5x12 mergulho + 4x10 archer", dur: "42 min", xp: 48 },
    { id: 5, cat: "Full Body", desc: "8x15 agachamento jump + 8x15 flexão + 8x25 abdominal + 8x20 polichinelo + 30 min corrida", dur: "75 min", xp: 70 },
    { id: 6, cat: "Bicicleta", desc: "Pedalar 55 min com sprints de 3 min a cada 5 min", dur: "55 min", xp: 50 },
    { id: 7, cat: "Core", desc: "8x25 abdominal + 7x25 bicicleta + 7x1min prancha + 7x20 oblíquo + 6x15 elevação", dur: "50 min", xp: 52 },
    { id: 8, cat: "Cardio", desc: "Corrida 48 min ritmo forte", dur: "48 min", xp: 45 },
    { id: 9, cat: "HIIT", desc: "9 rodadas: 60s burpee + 60s agachamento jump + 60s flexão + 30s descanso", dur: "58 min", xp: 58 },
    { id: 10, cat: "Full Body 🏆", desc: "MISSÃO CHEFE: 10x15 agachamento jump + 10x15 flexão explosiva + 10x25 abdominal + 10x15 panturrilha + 38 min corrida", dur: "90 min", xp: 100 },
  ],
  atleta: [
    { id: 1, cat: "Cardio", desc: "Corrida 65 min ritmo forte contínuo", dur: "65 min", xp: 80 },
    { id: 2, cat: "HIIT", desc: "14 rodadas: 75s burpee + 75s agachamento jump + 75s flexão explosiva + 20s descanso", dur: "100 min", xp: 120 },
    { id: 3, cat: "Full Body", desc: "14x15 agachamento jump + 14x15 flexão + 14x25 abdominal + 14x20 polichinelo + 55 min corrida", dur: "138 min", xp: 150 },
    { id: 4, cat: "Inferiores", desc: "11x15 agachamento jump + 10x12 pistol squat + 9x12 avanço com salto + 7x15 panturrilha", dur: "92 min", xp: 100 },
    { id: 5, cat: "Superiores", desc: "11x15 flexão + 9x14 explosiva + 8x12 diamante + 8x12 mergulho + 7x10 archer", dur: "88 min", xp: 100 },
    { id: 6, cat: "Bicicleta", desc: "Pedalar 80 min com sprints de 5 min a cada 5 min", dur: "80 min", xp: 90 },
    { id: 7, cat: "Core", desc: "12x25 abdominal + 11x25 bicicleta + 11x1min prancha + 10x20 oblíquo + 9x20 superman", dur: "98 min", xp: 110 },
    { id: 8, cat: "Cardio", desc: "Corrida 68 min ritmo forte", dur: "68 min", xp: 80 },
    { id: 9, cat: "HIIT", desc: "15 rodadas: 75s burpee + 75s agachamento jump + 75s flexão explosiva + 30s descanso", dur: "108 min", xp: 120 },
    { id: 10, cat: "Full Body 🏆", desc: "MISSÃO CHEFE FINAL: 20x15 agachamento jump + 20x15 flexão explosiva + 20x25 abdominal + 20x20 polichinelo + 70 min corrida", dur: "200 min", xp: 300 },
  ],
};

const MICRO_HISTORIAS = [
  {
    nivel: 10, id: "mh10",
    titulo: "O Viajante Ferido",
    introducao: "No caminho, você encontra rastros recentes de luta. Um sussurro no vento — quase uma risada de Sahyro — indica que alguém foi deixado para trás, ferido, a alguns quilômetros daqui.",
    missao: { cat: "Resgate 🤝", desc: "Caminhe 3 km até o ponto indicado para encontrar o viajante ferido e trazê-lo para um lugar seguro.", dur: "30 min", xp: 40 },
    desfecho: "Você encontra o viajante, fraco mas vivo. Ele agradece em silêncio e murmura: \"Ele esteve aqui. Disse que eu não merecia continuar.\" Você o ajuda a se levantar. Sahyro errou — esse não foi o fim da história dele."
  },
  {
    nivel: 20, id: "mh20",
    titulo: "A Vila Sem Água",
    introducao: "Uma pequena vila no interior teve seu poço amaldiçoado pela sombra de Sahyro. As pessoas estão fracas, sem forças para buscar água na fonte mais distante.",
    missao: { cat: "Resgate 🤝", desc: "Corra 5 km até a fonte e volte, carregando água simbolicamente (em pensamento, mantenha o ritmo constante) para a vila.", dur: "35 min", xp: 60 },
    desfecho: "A vila recebe a notícia de que a fonte ainda corre. Um ancião sorri: \"Onde há movimento, a maldição não consegue se enraizar.\" Você sente que protegeu mais do que água — protegeu esperança."
  },
  {
    nivel: 30, id: "mh30",
    titulo: "O Aprendiz Perdido",
    introducao: "Um jovem guerreiro invocado, ainda no início da jornada, desapareceu nas trilhas próximas após ouvir os sussurros de Sahyro. Ele precisa ser encontrado antes que desista de tudo.",
    missao: { cat: "Resgate 🤝", desc: "Realize um circuito de busca: 4x15 agachamento + 4x12 flexão + 20 min de caminhada/corrida explorando o trajeto.", dur: "35 min", xp: 70 },
    desfecho: "Você encontra o aprendiz sentado, exausto, prestes a desistir. Você não diz muita coisa — só continua treinando ao lado dele. Aos poucos, ele se levanta e volta a se mover. Algumas batalhas se vencem apenas com presença."
  },
  {
    nivel: 40, id: "mh40",
    titulo: "A Ponte Quebrada",
    introducao: "A única ponte que liga duas comunidades foi destruída numa tempestade que os anciãos dizem ter sido provocada pela ira de Sahyro. Mensagens importantes não estão chegando.",
    missao: { cat: "Resgate 🤝", desc: "Corra 6 km contornando o vale para entregar a mensagem urgente do outro lado.", dur: "40 min", xp: 85 },
    desfecho: "A mensagem chega a tempo. As duas comunidades sabem agora: mesmo quando os caminhos se rompem, sempre existe outro jeito de chegar. Você aprendeu o mesmo sobre si mesmo."
  },
  {
    nivel: 50, id: "mh50",
    titulo: "O Guerreiro Que Quase Parou",
    introducao: "Você reconhece os sinais — alguém em algum lugar está prestes a se tornar como O Que Parou. A sensação é estranhamente familiar, como olhar para um espelho de um futuro possível.",
    missao: { cat: "Resgate 🤝", desc: "6x15 agachamento + 6x12 flexão + 6x25 abdominal + 25 min corrida, representando a urgência da busca.", dur: "45 min", xp: 100 },
    desfecho: "Você chega bem na hora. O guerreiro estava prestes a apagar seu próprio registro do sistema. Vocês não trocam muitas palavras — apenas treinam juntos por um momento. Isso é o suficiente para reacender a chama dele."
  },
  {
    nivel: 60, id: "mh60",
    titulo: "O Eco da Floresta",
    introducao: "Nas profundezas de uma mata fechada, ecos estranhos repetem sussurros de Sahyro para qualquer um que se aproxime sozinho. Animais da região estão inquietos, evitando a área.",
    missao: { cat: "Resgate 🤝", desc: "Corrida de 50 min através de terreno irregular, mantendo o ritmo apesar dos sussurros imaginários.", dur: "50 min", xp: 110 },
    desfecho: "Você atravessa a área sem hesitar. Os ecos enfraquecem com sua passagem — como se sua simples presença, determinada e contínua, drenasse o poder daquele lugar. A floresta volta a respirar normalmente."
  },
  {
    nivel: 70, id: "mh70",
    titulo: "A Carta Não Entregue",
    introducao: "Um mensageiro morreu de exaustão antes de entregar uma carta de aviso sobre os planos finais de Sahyro. A carta precisa chegar ao seu destino, ou informações cruciais se perdem.",
    missao: { cat: "Resgate 🤝", desc: "8x15 agachamento jump + 8x15 flexão + 8x25 abdominal + 35 min corrida para cobrir a distância que falta.", dur: "55 min", xp: 130 },
    desfecho: "A carta chega às mãos certas. Nela, detalhes sobre como Sahyro pretende usar a dúvida no momento do confronto final. Você guarda essa informação — vai precisar dela em breve."
  },
  {
    nivel: 80, id: "mh80",
    titulo: "O Templo Esquecido",
    introducao: "Um templo antigo dos primeiros guerreiros foi enterrado pelo tempo e pelo esquecimento. Dentro dele, dizem que há registros que podem ajudar guerreiros futuros — se alguém tiver força para escavar o caminho.",
    missao: { cat: "Resgate 🤝", desc: "10x15 agachamento jump + 10x15 flexão explosiva + 10x25 abdominal + 40 min corrida até o local esquecido.", dur: "65 min", xp: 150 },
    desfecho: "Você encontra o templo. Gravações na pedra confirmam tudo que Yara já havia contado — e adicionam um detalhe novo: outros guerreiros, antes de você, também enfrentaram Sahyro e sobreviveram. Você não é o primeiro. E não será o último."
  },
  {
    nivel: 90, id: "mh90",
    titulo: "O Último Refúgio",
    introducao: "Sahyro está reunindo o que resta de sua influência num único local — um vale onde a maldição se concentra mais forte do que em qualquer outro lugar do Brasil. Pessoas próximas precisam ser evacuadas antes do confronto final.",
    missao: { cat: "Resgate 🤝", desc: "12x15 agachamento jump + 12x15 flexão explosiva + 12x25 abdominal + 50 min corrida para guiar a evacuação.", dur: "80 min", xp: 200 },
    desfecho: "Todos chegam em segurança. O vale fica vazio, silencioso, esperando o que está por vir. Yara observa e diz apenas: \"Está quase no fim. Você está pronto.\""
  },
  {
    nivel: 100, id: "mh100",
    titulo: "O Eco Final de Sahyro",
    introducao: "Antes do confronto definitivo, um último eco da humanidade de Sahyro aparece — não para atacar, mas para implorar, em sua forma mais fraca e humana, que alguém o impeça antes que seja tarde demais para todos.",
    missao: { cat: "Resgate 🤝", desc: "15x15 agachamento jump + 15x15 flexão explosiva + 15x25 abdominal + 60 min corrida contínua — a última prova antes da missão final.", dur: "100 min", xp: 250 },
    desfecho: "Você entende, finalmente, com total clareza: Sahyro não quer ser derrotado por raiva. Ele quer ser derrotado por alguém melhor do que ele foi. Você está pronto para a missão final."
  },
];

const MISSOES_SEQUENCIA = [
  { dias: 7, nome: "Despertar do Guerreiro", emoji: "⚡", desc: "5x15 agachamento + 5x12 flexão + 5x20 abdominal + 20 min corrida", dur: "35 min", xp: 50, contadorBonus: 2 },
  { dias: 30, nome: "Prova do Mês", emoji: "🔥", desc: "8x15 agachamento jump + 8x12 flexão + 8x20 abdominal + 8x20 polichinelo + 30 min corrida", dur: "50 min", xp: 100, contadorBonus: 2 },
  { dias: 90, nome: "Desafio dos 3 Meses", emoji: "💪", desc: "10x15 agachamento jump + 10x12 flexão explosiva + 10x25 abdominal + 40 min corrida + 5x1min prancha", dur: "70 min", xp: 200, contadorBonus: 3 },
  { dias: 100, nome: "Centenário de Ferro", emoji: "🛡️", desc: "12x15 agachamento jump + 12x15 flexão + 12x25 abdominal + 12x20 polichinelo + 45 min corrida", dur: "80 min", xp: 250, contadorBonus: 3 },
  { dias: 300, nome: "Lenda Viva", emoji: "👑", desc: "15x15 agachamento jump + 15x15 flexão explosiva + 15x30 abdominal + 60 min corrida + 8x1min prancha", dur: "110 min", xp: 500, contadorBonus: 4 },
  { dias: 500, nome: "Imortal", emoji: "⚔️", desc: "18x15 agachamento jump + 18x15 flexão explosiva + 18x30 abdominal + 18x20 polichinelo + 70 min corrida", dur: "130 min", xp: 750, contadorBonus: 5 },
  { dias: 750, nome: "Mítico", emoji: "🌟", desc: "20x15 agachamento jump + 20x15 flexão explosiva + 20x30 abdominal + 20x20 polichinelo + 80 min corrida + 10x1min prancha", dur: "155 min", xp: 1000, contadorBonus: 6 },
  { dias: 1000, nome: "Supremo Absoluto", emoji: "💀", desc: "25x15 agachamento jump + 25x15 flexão explosiva + 25x30 abdominal + 25x20 polichinelo + 90 min corrida + 12x1min prancha", dur: "180 min", xp: 1500, contadorBonus: 8 },
];

const EVENTOS_BR = [
  { mes: 1, nome: "Ano Novo", emoji: "🎆", desc: "10x15 agachamento + 10x12 flexão + 10x20 abdominal + 30 min corrida — Comece o ano queimando!", dur: "55 min", xp: 60, contadorBonus: 2, medalhaId: "ev1" },
  { mes: 2, nome: "Carnaval", emoji: "🎭", desc: "8x20 polichinelo + 8x15 agachamento + 8x12 flexão + 20 min caminhada rápida — Samba Fitness!", dur: "45 min", xp: 50, contadorBonus: 2, medalhaId: "ev2" },
  { mes: 4, nome: "Páscoa", emoji: "🐣", desc: "Alongamento completo 20 min + caminhada 40 min + 5x20 abdominal — Renascimento!", dur: "65 min", xp: 45, contadorBonus: 2, medalhaId: "ev3" },
  { mes: 6, nome: "Festa Junina", emoji: "🎪", desc: "8x15 agachamento + 8x12 avanço + 8x20 polichinelo + 25 min corrida — Forró Fitness!", dur: "50 min", xp: 55, contadorBonus: 2, medalhaId: "ev4" },
  { mes: 7, nome: "Férias", emoji: "☀️", desc: "Corrida ou caminhada 60 min explorando a cidade + 5x15 agachamento — Explorador Urbano!", dur: "70 min", xp: 50, contadorBonus: 2, medalhaId: "ev5" },
  { mes: 9, nome: "7 de Setembro", emoji: "🇧🇷", desc: "7 exercícios x 22 repetições: agachamento, flexão, abdominal, polichinelo, avanço, prancha 22s, panturrilha!", dur: "40 min", xp: 70, contadorBonus: 2, medalhaId: "ev6" },
  { mes: 10, nome: "Dia das Crianças", emoji: "🎈", desc: "Corrida leve 20 min + 5x10 agachamento + 5x8 flexão + 5x15 abdominal — Resgate a criança em você!", dur: "35 min", xp: 40, contadorBonus: 2, medalhaId: "ev7" },
  { mes: 11, nome: "Black Fitness", emoji: "🖤", desc: "XP DOBRADO — Missão do seu nível com bônus especial de Black Friday!", dur: "Varia", xp: 80, contadorBonus: 2, medalhaId: "ev8" },
  { mes: 12, nome: "Natal", emoji: "🎄", desc: "10x12 flexão + 10x15 agachamento + 10x20 abdominal + 10x15 panturrilha + 30 min corrida!", dur: "60 min", xp: 65, contadorBonus: 2, medalhaId: "ev9" },
  { mes: 12, nome: "Réveillon", emoji: "🎇", desc: "12x15 agachamento + 12x12 flexão + 12x25 abdominal + 12x20 polichinelo + 40 min corrida — Missão 365!", dur: "70 min", xp: 75, contadorBonus: 2, medalhaId: "ev10" },
];

const MEDALHAS_FERIADO = [
  { id: "ev1", tier: "bronze", emoji: "🎆", nome: "Explosão de Janeiro", desc: "Completou a missão de Ano Novo. Começou o ano queimando!" },
  { id: "ev2", tier: "bronze", emoji: "🎭", nome: "Folião Fitness", desc: "Completou a missão de Carnaval. Suou a camisa na folia!" },
  { id: "ev3", tier: "bronze", emoji: "🐣", nome: "Renascido", desc: "Completou a missão de Páscoa. Renovou o corpo e a mente!" },
  { id: "ev4", tier: "bronze", emoji: "🌾", nome: "Forrozeiro de Ferro", desc: "Completou a missão de Festa Junina. Arrasou no arraiá fitness!" },
  { id: "ev5", tier: "bronze", emoji: "🏖️", nome: "Explorador de Verão", desc: "Completou a missão de Férias. Treinou explorando a própria cidade!" },
  { id: "ev6", tier: "bronze", emoji: "🇧🇷", nome: "Patriota Forjado", desc: "Completou a missão de 7 de Setembro. Treinou pela independência do próprio corpo!" },
  { id: "ev7", tier: "bronze", emoji: "🪁", nome: "Coração de Criança", desc: "Completou a missão do Dia das Crianças. Treinou com leveza e alegria!" },
  { id: "ev8", tier: "bronze", emoji: "🖤", nome: "Caçador de Ofertas", desc: "Completou a missão de Black Fitness. Aproveitou o XP em dobro!" },
  { id: "ev9", tier: "bronze", emoji: "🎅", nome: "Guerreiro do Gorro", desc: "Completou a missão de Natal. Treinou até debaixo da árvore!" },
  { id: "ev10", tier: "bronze", emoji: "🎇", nome: "Renovado", desc: "Completou a missão de Réveillon. Fechou o ano com chave de ouro!" },
];

const TODAS_MEDALHAS = [
  { id: "m1", tier: "bronze", emoji: "🥉", nome: "Primeiro Passo", desc: "Completou sua primeira missão. A jornada começa aqui!", cond: (s) => s.totalMissoes >= 1 },
  { id: "m2", tier: "bronze", emoji: "🥉", nome: "Guerreiro Iniciante", desc: "7 dias consecutivos. Você provou que tem compromisso!", cond: (s) => s.diasConsecutivos >= 7 },
  { id: "m3", tier: "bronze", emoji: "🥉", nome: "Aprendiz", desc: "Chegou ao nível 10. O corpo já sente a diferença.", cond: (s) => s.nivel >= 10 },
  { id: "m4", tier: "bronze", emoji: "🥉", nome: "Guerreiro Persistente", desc: "30 dias consecutivos. Um mês inteiro de dedicação!", cond: (s) => s.diasConsecutivos >= 30 },
  { id: "m5", tier: "bronze", emoji: "🥉", nome: "Hidratado", desc: "Completou sua primeira meta de hidratação.", cond: (s) => s.totalAgua >= 1 },
  { id: "m6", tier: "bronze", emoji: "🥉", nome: "Cadência", desc: "10 missões no bolso. Você está pegando o ritmo!", cond: (s) => s.totalMissoes >= 10 },
  { id: "m7", tier: "prata", emoji: "🥈", nome: "Guerreiro de Ferro", desc: "90 dias consecutivos. 3 meses sem parar.", cond: (s) => s.diasConsecutivos >= 90 },
  { id: "m8", tier: "prata", emoji: "🥈", nome: "Veterano", desc: "Nível 30 conquistado. Você já é levado a sério.", cond: (s) => s.nivel >= 30 },
  { id: "m9", tier: "prata", emoji: "🥈", nome: "Caçador de Chefes", desc: "Derrotou seu primeiro chefão. Isso dói, mas vale!", cond: (s) => s.missoesChefeFeitas >= 1 },
  { id: "m10", tier: "prata", emoji: "🥈", nome: "Meio Centenário", desc: "50 missões completas. Você é consistente!", cond: (s) => s.totalMissoes >= 50 },
  { id: "m11", tier: "ouro", emoji: "🥇", nome: "Guerreiro Lendário", desc: "300 dias consecutivos. Você virou referência.", cond: (s) => s.diasConsecutivos >= 300 },
  { id: "m12", tier: "ouro", emoji: "🥇", nome: "Meio Caminho", desc: "Nível 50 atingido. Metade da jornada máxima.", cond: (s) => s.nivel >= 50 },
  { id: "m13", tier: "ouro", emoji: "🥇", nome: "Centenário de Missões", desc: "100 missões completas. Lendário!", cond: (s) => s.totalMissoes >= 100 },
  { id: "m14", tier: "platina", emoji: "💎", nome: "Guerreiro Supremo", desc: "1000 dias consecutivos. Você é absoluto.", cond: (s) => s.diasConsecutivos >= 1000 },
  { id: "m15", tier: "platina", emoji: "💎", nome: "Nível Máximo", desc: "Chegou ao topo. Apenas os eleitos alcançam isso.", cond: (s) => s.nivel >= 100 },
  { id: "m16", tier: "platina", emoji: "💎", nome: "Meio Milênio", desc: "500 missões. Você redefiniu o que é possível.", cond: (s) => s.totalMissoes >= 500 },
  { id: "m17", tier: "suprema", emoji: "☠️", nome: "Deus Vivo", desc: "1.000 missões. Você transcendeu o limite humano.", cond: (s) => s.totalMissoes >= 1000 },
  { id: "m18", tier: "suprema", emoji: "👹", nome: "Reencarnação do Demônio", desc: "1.500 missões. Você não é mais humano. É uma força da natureza.", cond: (s) => s.totalMissoes >= 1500 },
  { id: "m19", tier: "suprema", emoji: "👑", nome: "Criador Supremo", desc: "2.000 missões. Você se tornou o próprio jogo.", cond: (s) => s.totalMissoes >= 2000 },
];

const TIER_CORES = { bronze: "#CD7F32", prata: "#A8A9AD", ouro: "#FFD700", platina: "#00CED1", suprema: "#9B59B6" };
const ORDEM_TIERS = ["bronze", "prata", "ouro", "platina", "suprema"];

function tierDesbloqueado(tier, medalhas) {
  const idx = ORDEM_TIERS.indexOf(tier);
  if (idx === 0) return true; // bronze sempre visível
  const tierAnterior = ORDEM_TIERS[idx - 1];
  return medalhas.some(m => m.tier === tierAnterior);
}

function medalhaSupremaVisivel(medalhaId, medalhas) {
  // Dentro de Supremas, cada uma só aparece após conquistar a anterior
  const ordemSupremas = ["m17", "m18", "m19"]; // Deus Vivo, Reencarnação, Criador Supremo
  const idx = ordemSupremas.indexOf(medalhaId);
  if (idx <= 0) return true; // primeira suprema aparece normalmente
  const anterior = ordemSupremas[idx - 1];
  return medalhas.some(m => m.id === anterior);
}
const TIER_NOMES = { bronze: "Bronze", prata: "Prata", ouro: "Ouro", platina: "Platina", suprema: "Suprema" };
const CAT_CORES = { "Cardio": "#E74C3C", "Inferiores": "#2ECC71", "Superiores": "#3498DB", "Core": "#9B59B6", "Full Body": "#E67E22", "Full Body 🏆": "#F1C40F", "HIIT": "#E91E63", "Bicicleta": "#00BCD4", "Mobilidade": "#1ABC9C" };

function calcIMC(peso, altura) {
  let alturaNum = parseFloat(String(altura).replace(",", "."));
  const p = parseFloat(String(peso).replace(",", "."));
  if (!alturaNum || !p || alturaNum <= 0 || p <= 0) return null;
  // Aceita tanto metros (1.71) quanto centímetros (171)
  if (alturaNum < 3) alturaNum = alturaNum * 100;
  // Valida intervalo realista
  if (alturaNum < 100 || alturaNum > 250 || p < 30 || p > 300) return null;
  const h = alturaNum / 100;
  const imc = p / (h * h);
  let cat = imc < 18.5 ? "Abaixo do peso" : imc < 25 ? "Peso normal ✅" : imc < 30 ? "Sobrepeso" : imc < 35 ? "Obesidade grau I" : imc < 40 ? "Obesidade grau II" : "Obesidade grau III";
  return { valor: imc.toFixed(1), cat };
}

function getSaudacao(nome) {
  const h = new Date().getHours();
  const s = h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  return `${s}, ${nome}! 👋`;
}

function getFase(nivel) {
  return FASES.find(f => nivel >= f.nivelMin && nivel < f.nivelMax) || FASES[FASES.length - 1];
}

function getMissoes(nivel) {
  if (nivel < 20) return MISSOES.iniciante;
  if (nivel < 50) return MISSOES.intermediario;
  if (nivel < 90) return MISSOES.avancado;
  return MISSOES.atleta;
}

function ehFimDeSemana() {
  const d = new Date().getDay();
  return d === 0 || d === 6;
}

function sortear(lista) { return lista[Math.floor(Math.random() * lista.length)]; }

function duracaoParaSegundos(dur) {
  if (!dur || dur === "Varia") return 60; // fallback de 1 minuto para casos sem duração definida
  const match = dur.match(/(\d+)/);
  if (!match) return 60;
  const minutos = parseInt(match[1], 10);
  return minutos * 60;
}

function formatarTempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatarDataCriacao(timestamp) {
  if (!timestamp) return null;
  const data = new Date(timestamp);
  return data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// ============================================================
// COMPONENTE: LEITOR DE HISTÓRIA
// ============================================================

function LeitorHistoria({ capitulo, onFim, onPular }) {
  const [cenaAtual, setCenaAtual] = useState(0);
  const [visivel, setVisivel] = useState(true);
  const [bloqueado, setBloqueado] = useState(false);
  const totalCenas = capitulo.cenas.length;
  const cena = capitulo.cenas[cenaAtual];

  function avancar() {
    if (bloqueado) return;
    if (cenaAtual >= totalCenas - 1) { onFim(); return; }
    setVisivel(false);
    setTimeout(() => {
      setCenaAtual(p => p + 1);
      setVisivel(true);
    }, 250);
  }

  // Pausa automática nas falas de Sahyro
  useEffect(() => {
    if (cena.tipo === "sahyro") {
      setBloqueado(true);
      const t = setTimeout(() => setBloqueado(false), 1800);
      return () => clearTimeout(t);
    }
    setBloqueado(false);
  }, [cenaAtual]);

  const isFim = cenaAtual >= totalCenas - 1;

  // Cores por tipo de cena
  const fundos = {
    normal: "linear-gradient(180deg, #0a0a1a 0%, #0d1b2a 100%)",
    yara: "linear-gradient(180deg, #0a1a0a 0%, #0d2a0d 100%)",
    sahyro: "linear-gradient(180deg, #1a0000 0%, #2a0505 100%)",
    registro: "linear-gradient(180deg, #0a0a1a 0%, #1a1a2e 100%)",
    titulo: "linear-gradient(180deg, #050510 0%, #0a0a20 100%)",
    fim: "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 100%)",
  };

  const corTexto = {
    normal: "#ccd6f6",
    yara: "#98e89a",
    sahyro: "#ff6b6b",
    registro: "#a8b4d8",
    titulo: "#ffffff",
    fim: "#c8a8e8",
  };

  const progresso = ((cenaAtual + 1) / totalCenas) * 100;

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: fundos[cena.tipo] || fundos.normal,
      display: "flex", flexDirection: "column",
      zIndex: 2000, maxWidth: 480, margin: "0 auto",
      transition: "background 0.5s ease"
    }}>
      {/* Barra de progresso */}
      <div style={{ height: 3, background: "#ffffff11" }}>
        <div style={{ height: "100%", background: "#6C0BA9", width: `${progresso}%`, transition: "width 0.4s ease" }} />
      </div>

      {/* Botão pular */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 16px 0" }}>
        <button onClick={onPular} style={{ background: "#ffffff11", border: "1px solid #ffffff22", borderRadius: 8, padding: "6px 14px", color: "#888", fontSize: 12, cursor: "pointer" }}>
          Pular ››
        </button>
      </div>

      {/* Conteúdo da cena */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px 28px" }}>
        {cena.tipo === "titulo" ? (
          <div style={{ textAlign: "center", opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            <div style={{ fontSize: 11, color: "#6C0BA9", fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>INVOCAÇÃO DA EVOLUÇÃO</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#ffffff", marginBottom: 12, lineHeight: 1.2 }}>{cena.texto}</div>
            <div style={{ width: 60, height: 2, background: "#6C0BA9", margin: "0 auto 16px" }} />
            <div style={{ fontSize: 15, color: "#888", fontStyle: "italic" }}>{cena.subtexto}</div>
          </div>
        ) : cena.tipo === "yara" ? (
          <div style={{ opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1A6B3A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🌿</div>
              <div style={{ color: "#98e89a", fontWeight: 700, fontSize: 13 }}>{cena.personagem || "Yara"}</div>
            </div>
            <div style={{ background: "#ffffff0a", border: "1px solid #98e89a33", borderRadius: 16, borderTopLeftRadius: 4, padding: "16px 18px" }}>
              <p style={{ color: "#98e89a", fontSize: 15, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{cena.texto}</p>
            </div>
          </div>
        ) : cena.tipo === "sahyro" ? (
          <div style={{ textAlign: "center", opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>👁️</div>
            <p style={{ color: "#ff6b6b", fontSize: 18, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontWeight: 600 }}>
              "{cena.texto}"
            </p>
            {bloqueado && (
              <div style={{ marginTop: 20, color: "#ff6b6b44", fontSize: 12 }}>...</div>
            )}
          </div>
        ) : cena.tipo === "registro" ? (
          <div style={{ opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            <div style={{ borderLeft: "3px solid #6C0BA9", paddingLeft: 16 }}>
              <div style={{ color: "#6C0BA9", fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>📜 REGISTRO DO SISTEMA</div>
              <p style={{ color: "#a8b4d8", fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{cena.texto}</p>
            </div>
          </div>
        ) : cena.tipo === "fim" ? (
          <div style={{ textAlign: "center", opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            <div style={{ width: 40, height: 2, background: "#6C0BA9", margin: "0 auto 20px" }} />
            <p style={{ color: "#c8a8e8", fontSize: 16, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{cena.texto}</p>
            <div style={{ width: 40, height: 2, background: "#6C0BA9", margin: "20px auto 0" }} />
          </div>
        ) : (
          <p style={{ color: corTexto[cena.tipo] || "#ccd6f6", fontSize: 16, lineHeight: 1.8, margin: 0, opacity: visivel ? 1 : 0, transition: "opacity 0.3s ease" }}>
            {cena.texto}
          </p>
        )}
      </div>

      {/* Botão continuar */}
      <div style={{ padding: "16px 28px 32px", display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={avancar}
          disabled={bloqueado}
          style={{
            background: bloqueado ? "#ffffff0a" : "linear-gradient(135deg, #6C0BA9, #9B59B6)",
            border: "none", borderRadius: 12,
            padding: "14px 28px",
            color: bloqueado ? "#444" : "#fff",
            fontWeight: 700, fontSize: 15,
            cursor: bloqueado ? "default" : "pointer",
            transition: "all 0.3s",
            display: "flex", alignItems: "center", gap: 8
          }}>
          {isFim ? "Começar ⚔️" : "Continuar"} {!isFim && !bloqueado && <span style={{ fontSize: 18 }}>›</span>}
        </button>
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTES AUXILIARES
// ============================================================

function BarraXP({ xpAtual, xpMax, cor }) {
  const pct = Math.min(100, (xpAtual / xpMax) * 100);
  return (
    <div style={{ background: "#111", borderRadius: 8, height: 12, overflow: "hidden", margin: "6px 0" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${cor}, ${cor}88)`, borderRadius: 8, transition: "width 0.6s ease", boxShadow: `0 0 8px ${cor}66` }} />
    </div>
  );
}

function Notif({ msg, tipo, onClose }) {
  useEffect(() => { if (msg) { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); } }, [msg]);
  if (!msg) return null;
  const cor = tipo === "sucesso" ? "#27AE60" : tipo === "erro" ? "#E74C3C" : tipo === "ouro" ? "#FFD700" : "#3498DB";
  return (
    <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", background: "#16213e", border: `2px solid ${cor}`, borderRadius: 12, padding: "12px 20px", color: cor, fontWeight: 700, fontSize: 14, zIndex: 9999, boxShadow: `0 4px 20px ${cor}44`, maxWidth: 320, textAlign: "center", whiteSpace: "pre-line" }}>
      {msg}
    </div>
  );
}

function StatusMusica({ musica, tela, ligado }) {
  if (!ligado) return null;
  const status = musica.statusMusica?.[tela];
  if (status === "carregando") {
    return <div style={{ color: "#888", fontSize: 11, marginBottom: 10 }}>⏳ Carregando música...</div>;
  }
  if (status === "erro") {
    return (
      <div style={{ background: "#E74C3C18", border: "1px solid #E74C3C44", borderRadius: 8, padding: "6px 10px", marginBottom: 10 }}>
        <div style={{ color: "#ff8a8a", fontSize: 11, fontWeight: 700 }}>⚠️ Música não carregou</div>
        <div style={{ color: "#ff8a8a99", fontSize: 10, marginTop: 2 }}>{musica.ultimoErro}</div>
      </div>
    );
  }
  return null;
}

function Modal({ children, onClose }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#000b", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 20, padding: 24, maxWidth: 380, width: "100%", maxHeight: "80vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

function CardMissao({ missao, onConcluir, onFalhar, status, multiplicador, restante, tempoTotal }) {
  const cor = CAT_CORES[missao.cat] || "#888";
  const isChefe = missao.cat?.includes("🏆");
  const xpReal = missao.xp * (multiplicador || 1);
  const liberado = restante <= 0;
  const pct = tempoTotal > 0 ? ((tempoTotal - restante) / tempoTotal) * 100 : 100;

  return (
    <div style={{ background: isChefe ? "linear-gradient(135deg,#1a1a2e,#2d1b69)" : "#16213e", border: `2px solid ${isChefe ? "#F1C40F" : cor}44`, borderRadius: 16, padding: 18, marginBottom: 14, position: "relative", overflow: "hidden" }}>
      {isChefe && <div style={{ position: "absolute", top: 0, right: 0, background: "#F1C40F", color: "#000", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: "0 14px 0 14px" }}>MISSÃO CHEFE</div>}
      {multiplicador > 1 && <div style={{ position: "absolute", top: 0, left: 0, background: "#E74C3C", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: "14px 0 14px 0" }}>XP x{multiplicador}</div>}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, marginTop: multiplicador > 1 ? 12 : 0 }}>
        <span style={{ background: `${cor}22`, color: cor, border: `1px solid ${cor}55`, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{missao.cat}</span>
        <span style={{ color: "#888", fontSize: 11 }}>⏱ {missao.dur}</span>
        <span style={{ marginLeft: "auto", color: "#F1C40F", fontSize: 13, fontWeight: 700 }}>+{xpReal} XP</span>
      </div>
      <p style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.6, margin: "0 0 14px" }}>{missao.desc}</p>

      {!status && !liberado && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ background: "#0d1b2a", borderRadius: 8, height: 8, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${cor}, ${cor}aa)`, transition: "width 1s linear" }} />
          </div>
          <div style={{ textAlign: "center", color: "#888", fontSize: 12 }}>
            ⏳ Realize a missão. Libera em <span style={{ color: cor, fontWeight: 700 }}>{formatarTempo(restante)}</span>
          </div>
        </div>
      )}

      {!status ? (
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => onConcluir(missao)} disabled={!liberado} style={{ flex: 1, padding: "11px 0", background: liberado ? "linear-gradient(135deg,#27AE60,#2ECC71)" : "#ffffff0a", border: liberado ? "none" : "1px solid #333", borderRadius: 10, color: liberado ? "#fff" : "#555", fontWeight: 700, fontSize: 14, cursor: liberado ? "pointer" : "not-allowed" }}>
            {liberado ? "✅ Concluí!" : "🔒 Concluí!"}
          </button>
          <button onClick={() => onFalhar(missao)} disabled={!liberado} style={{ flex: 1, padding: "11px 0", background: liberado ? "linear-gradient(135deg,#C0392B,#E74C3C)" : "#ffffff0a", border: liberado ? "none" : "1px solid #333", borderRadius: 10, color: liberado ? "#fff" : "#555", fontWeight: 700, fontSize: 14, cursor: liberado ? "pointer" : "not-allowed" }}>
            {liberado ? "❌ Não fiz" : "🔒 Não fiz"}
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: status === "concluida" ? "#2ECC71" : "#E74C3C", fontWeight: 700, fontSize: 15 }}>
          {status === "concluida" ? `✅ +${xpReal} XP conquistados!` : `❌ -${Math.floor(xpReal / 2)} XP perdidos`}
        </div>
      )}
    </div>
  );
}

function CardBonus({ tipo, meta, xpBonus, status, onConfirmar, onNegar }) {
  const isAgua = tipo === "agua";
  const cor = isAgua ? "#00BCD4" : "#9B59B6";
  const decidido = status === "sim" || status === "nao";
  return (
    <div style={{ background: "#16213e", border: `2px solid ${status === "sim" ? cor : status === "nao" ? "#E74C3C44" : "#333"}`, borderRadius: 12, padding: "12px 14px", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: decidido ? 0 : 10 }}>
        <span style={{ fontSize: 24 }}>{isAgua ? "💧" : "😴"}</span>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#ccd6f6", fontWeight: 700, fontSize: 13 }}>{isAgua ? "Hidratação" : "Sono"}</div>
          <div style={{ color: "#888", fontSize: 12 }}>Meta: {meta}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#F1C40F", fontSize: 12, fontWeight: 700 }}>+{xpBonus} XP</div>
        </div>
      </div>
      {!decidido ? (
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onConfirmar} style={{ flex: 1, padding: "9px 0", background: `linear-gradient(135deg,${cor},${cor}99)`, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>✅ Concluí</button>
          <button onClick={onNegar} style={{ flex: 1, padding: "9px 0", background: "#ffffff0a", border: "1px solid #444", borderRadius: 8, color: "#888", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>❌ Não fiz</button>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: status === "sim" ? cor : "#E74C3C99", fontSize: 12, fontWeight: 700, paddingTop: 4 }}>
          {status === "sim" ? `✅ Concluído! +${xpBonus} XP` : "❌ Não foi hoje. Sem bônus."}
        </div>
      )}
    </div>
  );
}

// ============================================================
// TELA DE CADASTRO (componente independente — evita re-render
// causado pelo componente pai, que causava perda de foco/digitação)
// ============================================================

function TelaCadastro({ formInicial, onSalvar, onLogin, onErro }) {
  const [modo, setModo] = useState("login"); // "login" | "cadastro"
  const [f, setF] = useState(formInicial);
  const [verificando, setVerificando] = useState(false);
  const imcLocal = calcIMC(f.peso, f.altura);

  async function fazerLogin() {
    if (!f.nick.trim() || !f.senha.trim()) {
      onErro("Preencha nick e senha!");
      return;
    }
    setVerificando(true);
    const resultado = await firebaseLogin(f.nick.trim(), f.senha.trim());
    setVerificando(false);

    if (!resultado.ok) {
      onErro("Não foi possível conectar agora. Tente novamente.");
      return;
    }
    if (!resultado.encontrado) {
      onErro(`Nick "${f.nick.trim()}" não encontrado. Cadastre-se!`);
      return;
    }
    if (!resultado.senhaCorreta) {
      onErro("Senha incorreta!");
      return;
    }
    onLogin(resultado.dados);
  }

  async function fazerCadastro() {
    if (!f.nick.trim() || !f.senha.trim() || !f.email.trim()) {
      onErro("Preencha nick, senha e email!");
      return;
    }
    setVerificando(true);
    const resultado = await firebaseBuscarJogador(f.nick.trim());
    setVerificando(false);

    if (!resultado.ok) {
      // Se o Firebase estiver indisponível, deixa passar sem bloquear o cadastro
      // (a sincronização será tentada novamente depois).
      onSalvar(f);
      return;
    }
    if (resultado.existe) {
      onErro(`O nick "${f.nick.trim()}" já está em uso. Escolha outro!`);
      return;
    }
    onSalvar(f);
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0a0a1a,#0d1b2a)", padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>⚔️</div>
        <div style={{ color: "#fff", fontSize: 24, fontWeight: 800 }}>INVOCAÇÃO DA EVOLUÇÃO</div>
        <div style={{ color: "#6C0BA9", fontSize: 13, marginTop: 4 }}>{modo === "login" ? "Entre na sua jornada" : "Crie seu guerreiro"}</div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button onClick={() => setModo("login")} style={{ flex: 1, padding: "10px 0", background: modo === "login" ? "#6C0BA9" : "#16213e", border: `1px solid ${modo === "login" ? "#6C0BA9" : "#1e3a5f"}`, borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Entrar</button>
        <button onClick={() => setModo("cadastro")} style={{ flex: 1, padding: "10px 0", background: modo === "cadastro" ? "#6C0BA9" : "#16213e", border: `1px solid ${modo === "cadastro" ? "#6C0BA9" : "#1e3a5f"}`, borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Criar conta</button>
      </div>

      {modo === "login" ? (
        <>
          {[
            { label: "Nick", key: "nick", type: "text", placeholder: "Seu apelido" },
            { label: "Senha", key: "senha", type: "password", placeholder: "Sua senha" },
          ].map(campo => (
            <div key={campo.key} style={{ marginBottom: 14 }}>
              <div style={{ color: "#888", fontSize: 12, marginBottom: 4 }}>{campo.label}</div>
              <input type={campo.type} placeholder={campo.placeholder} value={f[campo.key]} onChange={e => setF({ ...f, [campo.key]: e.target.value })}
                style={{ width: "100%", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 15 }} />
            </div>
          ))}
          <div style={{ color: "#666", fontSize: 11, marginBottom: 16, textAlign: "center" }}>
            Esqueceu a senha? Entre em contato usando o email cadastrado para recuperação manual por agora.
          </div>
          <button onClick={fazerLogin} disabled={verificando} style={{ width: "100%", padding: "14px 0", background: verificando ? "#444" : "linear-gradient(135deg,#6C0BA9,#9B59B6)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 800, fontSize: 16, cursor: verificando ? "default" : "pointer", marginTop: 6 }}>
            {verificando ? "Entrando..." : "⚔️ Entrar"}
          </button>
        </>
      ) : (
        <>
          {[
            { label: "Nick (apelido no jogo)", key: "nick", type: "text", placeholder: "Seu apelido" },
            { label: "Senha", key: "senha", type: "password", placeholder: "Crie uma senha" },
            { label: "Email (para recuperação)", key: "email", type: "email", placeholder: "seu@email.com" },
            { label: "Peso (kg)", key: "peso", type: "number", placeholder: "Ex: 70" },
            { label: "Altura (cm)", key: "altura", type: "number", placeholder: "Ex: 175" },
          ].map(campo => (
            <div key={campo.key} style={{ marginBottom: 14 }}>
              <div style={{ color: "#888", fontSize: 12, marginBottom: 4 }}>{campo.label}</div>
              <input type={campo.type} placeholder={campo.placeholder} value={f[campo.key]} onChange={e => setF({ ...f, [campo.key]: e.target.value })}
                style={{ width: "100%", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 15 }} />
            </div>
          ))}
          {imcLocal && (
            <div style={{ background: "#16213e", border: "1px solid #6C0BA944", borderRadius: 12, padding: 14, marginBottom: 14, textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 12 }}>Seu IMC</div>
              <div style={{ color: "#F1C40F", fontSize: 24, fontWeight: 800 }}>{imcLocal.valor}</div>
              <div style={{ color: "#ccd6f6", fontSize: 13 }}>{imcLocal.cat}</div>
              <div style={{ color: "#555", fontSize: 11, marginTop: 4 }}>⚠️ IMC é uma referência. Consulte um médico.</div>
            </div>
          )}
          <button onClick={fazerCadastro} disabled={verificando} style={{ width: "100%", padding: "14px 0", background: verificando ? "#444" : "linear-gradient(135deg,#6C0BA9,#9B59B6)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 800, fontSize: 16, cursor: verificando ? "default" : "pointer", marginTop: 6 }}>
            {verificando ? "Verificando nick..." : "⚔️ Iniciar Jornada!"}
          </button>
        </>
      )}
    </div>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================

// ============================================================
// SISTEMA DE ÁUDIO AMBIENTE (sintético, sem arquivos externos)
// ============================================================

function useAudioAmbiente() {
  const ctxRef = useRef(null);
  const nodesRef = useRef([]);
  const [ligado, setLigado] = useState(false);

  function criarContexto() {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AudioCtx();
    }
    return ctxRef.current;
  }

  function pararTudo() {
    nodesRef.current.forEach(n => {
      try { n.osc?.stop(); n.gain?.disconnect(); n.osc?.disconnect(); } catch (e) {}
    });
    nodesRef.current = [];
  }

  function iniciarDrone() {
    const ctx = criarContexto();
    if (ctx.state === "suspended") ctx.resume();
    pararTudo();

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.05; // volume bem baixo, ambiente
    masterGain.connect(ctx.destination);

    // Camada 1: drone grave (pad de fundo)
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 55; // Lá grave
    const gain1 = ctx.createGain();
    gain1.gain.value = 0.6;
    osc1.connect(gain1);
    gain1.connect(masterGain);
    osc1.start();

    // Camada 2: quinta acima, levemente dissonante (textura)
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 82.5; // quinta
    const gain2 = ctx.createGain();
    gain2.gain.value = 0.3;
    osc2.connect(gain2);
    gain2.connect(masterGain);
    osc2.start();

    // LFO para dar movimento orgânico ao volume (respiração sonora)
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.08; // muito lento
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain);
    lfoGain.connect(masterGain.gain);
    lfo.start();

    nodesRef.current = [
      { osc: osc1, gain: gain1 },
      { osc: osc2, gain: gain2 },
      { osc: lfo, gain: lfoGain },
      { osc: null, gain: masterGain },
    ];
  }

  function tocarEfeito(tipo) {
    const ctx = criarContexto();
    if (ctx.state === "suspended") ctx.resume();
    const agora = ctx.currentTime;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);

    if (tipo === "subir_nivel") {
      gain.gain.setValueAtTime(0.15, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 1.2);
      [440, 554, 659, 880].forEach((freq, i) => {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = freq;
        o.connect(gain);
        o.start(agora + i * 0.08);
        o.stop(agora + i * 0.08 + 0.3);
      });
    } else if (tipo === "missao_concluida") {
      gain.gain.setValueAtTime(0.12, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 0.6);
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.setValueAtTime(523, agora);
      o.frequency.exponentialRampToValueAtTime(784, agora + 0.3);
      o.connect(gain);
      o.start(agora);
      o.stop(agora + 0.6);
    } else if (tipo === "missao_falhou") {
      gain.gain.setValueAtTime(0.1, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 0.5);
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(180, agora);
      o.frequency.exponentialRampToValueAtTime(90, agora + 0.4);
      o.connect(gain);
      o.start(agora);
      o.stop(agora + 0.5);
    } else if (tipo === "medalha") {
      gain.gain.setValueAtTime(0.14, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 1.5);
      [523, 659, 784, 1046, 1318].forEach((freq, i) => {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = freq;
        o.connect(gain);
        o.start(agora + i * 0.1);
        o.stop(agora + i * 0.1 + 0.5);
      });
    } else if (tipo === "dado") {
      gain.gain.setValueAtTime(0.08, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 3.6);
      // Sequência de cliques simulando dado rolando, desacelerando ao longo de ~3.5s
      // Começa rápido (intervalo pequeno) e vai espaçando cada vez mais até parar
      const tempos = [];
      let t = 0;
      let intervalo = 0.045; // intervalo inicial entre cliques (rápido)
      while (t < 3.4) {
        tempos.push(t);
        t += intervalo;
        intervalo *= 1.13; // desacelera progressivamente, como um dado perdendo embalo
      }
      tempos.push(3.5); // "clique" final, mais forte, quando o dado para de vez
      tempos.forEach((tt, i) => {
        const ultimo = i === tempos.length - 1;
        const o = ctx.createOscillator();
        o.type = "square";
        o.frequency.value = ultimo ? 220 : 300 + Math.random() * 200;
        const g = ctx.createGain();
        g.gain.setValueAtTime(ultimo ? 0.09 : 0.06, agora + tt);
        g.gain.exponentialRampToValueAtTime(0.001, agora + tt + (ultimo ? 0.12 : 0.04));
        o.connect(g);
        g.connect(ctx.destination);
        o.start(agora + tt);
        o.stop(agora + tt + (ultimo ? 0.12 : 0.04));
      });
    } else if (tipo === "toque") {
      gain.gain.setValueAtTime(0.06, agora);
      gain.gain.exponentialRampToValueAtTime(0.001, agora + 0.15);
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = 600;
      o.connect(gain);
      o.start(agora);
      o.stop(agora + 0.15);
    }
  }

  function toggle() {
    if (ligado) {
      pararTudo();
      setLigado(false);
    } else {
      iniciarDrone();
      setLigado(true);
    }
  }

  useEffect(() => {
    return () => pararTudo();
  }, []);

  return { ligado, toggle, tocarEfeito, pararDrone: pararTudo, retomarDrone: iniciarDrone };
}

// ============================================================
// MÚSICA DE FUNDO REAL (arquivos do usuário, por tela)
// ============================================================

const MUSICA_AMBIENTE = "https://files.catbox.moe/yvfkly.mp3";
const MUSICAS_POR_TELA = {
  home: MUSICA_AMBIENTE,
  missao: MUSICA_AMBIENTE,
  progresso: MUSICA_AMBIENTE,
  rank: MUSICA_AMBIENTE,
  perfil: MUSICA_AMBIENTE,
  historia: "https://files.catbox.moe/gqebex.mp3",
  medalhas: "https://files.catbox.moe/j47l1z.mp3",
};

function useMusicaPorTela(telaAtual, ligado, pararDrone, retomarDrone) {
  const audioElRef = useRef(null);
  const srcAtualRef = useRef(null); // qual música (src) está tocando agora, para não recarregar à toa
  const [statusMusica, setStatusMusica] = useState({}); // { home: "carregando"|"tocando"|"erro", ... }
  const [ultimoErro, setUltimoErro] = useState(null);

  useEffect(() => {
    if (!audioElRef.current) {
      const el = new Audio();
      el.loop = true;
      el.volume = 0.35;
      el.preload = "auto";
      audioElRef.current = el;

      el.addEventListener("error", () => {
        const codigo = el.error?.code;
        const mensagens = {
          1: "Carregamento interrompido",
          2: "Erro de rede ao buscar o arquivo",
          3: "Erro ao decodificar o áudio (formato pode não ser suportado)",
          4: "Formato de áudio não suportado ou link inválido/bloqueado",
        };
        const msg = mensagens[codigo] || "Erro desconhecido ao carregar música";
        setUltimoErro(msg);
        setStatusMusica(prev => ({ ...prev, [telaAtual]: "erro" }));
      });
      el.addEventListener("canplay", () => {
        setStatusMusica(prev => ({ ...prev, [telaAtual]: "tocando" }));
      });
      el.addEventListener("waiting", () => {
        setStatusMusica(prev => ({ ...prev, [telaAtual]: "carregando" }));
      });
    }
  }, []);

  useEffect(() => {
    const el = audioElRef.current;
    if (!el) return;

    const src = MUSICAS_POR_TELA[telaAtual];

    if (!ligado) {
      el.pause();
      return;
    }

    if (src) {
      // Esta tela tem música própria: silencia o drone sintético e toca a faixa real.
      // Se a música já é a mesma que está tocando (ex: troca entre Início/Missão/Progresso,
      // que compartilham a mesma faixa ambiente), NÃO recarrega o arquivo — só garante
      // que está tocando. Isso elimina a demora/corte ao trocar entre essas telas.
      pararDrone?.();
      if (srcAtualRef.current !== src) {
        srcAtualRef.current = src;
        setStatusMusica(prev => ({ ...prev, [telaAtual]: "carregando" }));
        setUltimoErro(null);
        el.src = src;
        el.play().catch(err => {
          setUltimoErro(`Bloqueio de reprodução: ${err.message || "autoplay não permitido"}`);
          setStatusMusica(prev => ({ ...prev, [telaAtual]: "erro" }));
        });
      } else if (el.paused) {
        el.play().catch(err => {
          setUltimoErro(`Bloqueio de reprodução: ${err.message || "autoplay não permitido"}`);
          setStatusMusica(prev => ({ ...prev, [telaAtual]: "erro" }));
        });
      }
    } else {
      // Tela sem música própria definida: para a faixa real e retoma o drone ambiente
      el.pause();
      srcAtualRef.current = null;
      retomarDrone?.();
    }
  }, [telaAtual, ligado]);

  useEffect(() => {
    return () => {
      audioElRef.current?.pause();
    };
  }, []);

  return { statusMusica, ultimoErro };
}

// ============================================================
// FIREBASE — Rank de Jogadores (via REST API do Realtime Database)
// Usamos fetch direto à URL do banco, sem precisar instalar o SDK,
// o que funciona melhor dentro do ambiente de artifact.
// ============================================================

const FIREBASE_DB_URL = "https://invocacaodaevolucao-default-rtdb.firebaseio.com";

async function firebaseSalvarJogador(nick, dados) {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/jogadores/${encodeURIComponent(nick)}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
    return { ok: true };
  } catch (err) {
    return { ok: false, erro: err.message };
  }
}

async function firebaseBuscarJogador(nick) {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/jogadores/${encodeURIComponent(nick)}.json`);
    if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
    const data = await res.json();
    return { ok: true, existe: data !== null, dados: data };
  } catch (err) {
    return { ok: false, erro: err.message };
  }
}

// Tenta logar com nick + senha. Retorna o progresso salvo do jogador se a senha bater.
async function firebaseLogin(nick, senha) {
  const resultado = await firebaseBuscarJogador(nick);
  if (!resultado.ok) return { ok: false, erro: resultado.erro };
  if (!resultado.existe) return { ok: true, encontrado: false };
  if (resultado.dados?.senha !== senha) return { ok: true, encontrado: true, senhaCorreta: false };
  return { ok: true, encontrado: true, senhaCorreta: true, dados: resultado.dados };
}

async function firebaseBuscarTodosJogadores() {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/jogadores.json`);
    if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
    const data = await res.json();
    if (!data) return { ok: true, jogadores: [] };
    const lista = Object.entries(data).map(([nick, info]) => ({ nick, ...info }));
    return { ok: true, jogadores: lista };
  } catch (err) {
    return { ok: false, erro: err.message };
  }
}

export default function FitnessRPG() {
  const audio = useAudioAmbiente();
  const [tela, setTela] = useState("cadastro");
  const musica = useMusicaPorTela(tela, audio.ligado, audio.pararDrone, audio.retomarDrone);
  const [usuario, setUsuario] = useState(null);
  const [criadoEm, setCriadoEm] = useState(null); // timestamp (ms) de quando o perfil foi criado
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);
  const [xpTotal, setXpTotal] = useState(0);
  const [totalMissoes, setTotalMissoes] = useState(0);
  const [diasConsecutivos, setDiasConsecutivos] = useState(0);
  const [diasTreinados, setDiasTreinados] = useState(0);
  const [totalAgua, setTotalAgua] = useState(0);
  const [totalSono, setTotalSono] = useState(0);
  const [missoesChefeFeitas, setMissoesChefeFeitas] = useState(0);
  const [eventosBrCompletos, setEventosBrCompletos] = useState(0);
  const [medalhas, setMedalhas] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [capitulosLidos, setCapitulosLidos] = useState([]);
  const [microHistoriasVistas, setMicroHistoriasVistas] = useState([]); // ids já introduzidas
  const [microHistoriasFeitas, setMicroHistoriasFeitas] = useState([]); // ids já concluídas

  const [missaoAtual, setMissaoAtual] = useState(null);
  const [missaoExtra, setMissaoExtra] = useState(null);
  const [statusMissao, setStatusMissao] = useState(null);
  const [statusExtra, setStatusExtra] = useState(null);
  const [inicioMissao, setInicioMissao] = useState(null); // timestamp (ms) de quando a missão principal foi sorteada
  const [inicioExtra, setInicioExtra] = useState(null); // timestamp (ms) de quando a missão extra foi aceita
  const [agora, setAgora] = useState(Date.now()); // atualizado a cada segundo para recalcular cronômetros
  const [aguaStatus, setAguaStatus] = useState(null); // null | "sim" | "nao"
  const [sonoStatus, setSonoStatus] = useState(null);
  const [multiplicador, setMultiplicador] = useState(1);

  const [capituloAtivo, setCapituloAtivo] = useState(null);
  const [modalSequencia, setModalSequencia] = useState(null);
  const [modalMedalha, setModalMedalha] = useState(null);
  const [modalEvento, setModalEvento] = useState(null);
  const [modalNivel, setModalNivel] = useState(null);
  const [modalMedalhaFeriado, setModalMedalhaFeriado] = useState(null);
  const [modalMicroHistoriaIntro, setModalMicroHistoriaIntro] = useState(null);
  const [modalMicroHistoriaFim, setModalMicroHistoriaFim] = useState(null);
  const [creditosVistos, setCreditosVistos] = useState(false);
  const [mostrarCreditos, setMostrarCreditos] = useState(false);
  const [notif, setNotif] = useState({ msg: "", tipo: "" });

  const [form, setForm] = useState({ nick: "", senha: "", email: "", peso: "", altura: "" });

  const fase = getFase(nivel);
  const xpMax = nivel * 100;
  const missoes = getMissoes(nivel);
  const imc = usuario ? calcIMC(usuario.peso, usuario.altura) : null;
  // Meta de água calculada pela fórmula 35ml por kg de peso corporal,
  // usando o peso informado no cadastro. Se não houver peso válido, usa um valor padrão.
  const pesoNumerico = parseFloat(String(usuario?.peso).replace(",", "."));
  const metaAguaLitros = pesoNumerico > 0 ? (pesoNumerico * 35) / 1000 : 2.5;
  const metaAgua = `${metaAguaLitros.toFixed(1).replace(".", ",")}L`;
  const metaSono = nivel < 20 ? "7–8h" : nivel < 50 ? "7–9h" : nivel < 90 ? "8–9h" : "8–10h";
  const xpBonusAgua = nivel < 20 ? 15 : nivel < 50 ? 20 : nivel < 90 ? 25 : 30;
  const xpBonusSono = xpBonusAgua;

  function notificar(msg, tipo = "info") { setNotif({ msg, tipo }); }

  // Relógio: atualiza a cada segundo SOMENTE quando há uma missão com cronômetro
  // ativo aguardando decisão. Isso evita re-renderizar o app inteiro (e, com isso,
  // perder o foco dos campos de cadastro/perfil) quando não há timer rodando.
  const precisaContar = (missaoAtual && !statusMissao) || (missaoExtra && !statusExtra);
  useEffect(() => {
    if (!precisaContar) return;
    const t = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(t);
  }, [precisaContar]);

  function calcularRestante(inicioTimestamp, duracaoTexto) {
    if (!inicioTimestamp) return duracaoParaSegundos(duracaoTexto);
    const totalSeg = duracaoParaSegundos(duracaoTexto);
    const passados = Math.floor((agora - inicioTimestamp) / 1000);
    return Math.max(0, totalSeg - passados);
  }

  // Sincroniza o progresso completo do jogador com o Firebase sempre que algo
  // relevante mudar. Isso permite restaurar o jogo inteiro ao fazer login de novo
  // (em qualquer dispositivo), além de manter o rank atualizado.
  // Roda em segundo plano — se falhar (sem internet, Firebase fora do ar),
  // não afeta o uso normal do app, só a sincronização fica pendente até a próxima tentativa.
  useEffect(() => {
    if (!usuario?.nick) return;
    const progressoCompleto = {
      nick: usuario.nick,
      senha: usuario.senha,
      email: usuario.email,
      peso: usuario.peso,
      altura: usuario.altura,
      nivel, xp, xpTotal, totalMissoes, diasConsecutivos, diasTreinados,
      totalAgua, totalSono, missoesChefeFeitas, eventosBrCompletos,
      medalhas, historico, capitulosLidos, microHistoriasVistas, microHistoriasFeitas,
      creditosVistos,
      totalMedalhas: medalhas.length,
      criadoEm: criadoEm || Date.now(),
      atualizadoEm: Date.now(),
    };
    firebaseSalvarJogador(usuario.nick, progressoCompleto);
  }, [usuario, nivel, xp, xpTotal, totalMissoes, diasConsecutivos, diasTreinados, totalAgua, totalSono, missoesChefeFeitas, eventosBrCompletos, medalhas, historico, capitulosLidos, microHistoriasVistas, microHistoriasFeitas, creditosVistos, criadoEm]);

  // Restaura todo o progresso do jogador a partir dos dados salvos no Firebase
  // (chamado depois de um login bem-sucedido).
  function restaurarProgresso(dados) {
    setNivel(dados.nivel ?? 1);
    setXp(dados.xp ?? 0);
    setXpTotal(dados.xpTotal ?? 0);
    setTotalMissoes(dados.totalMissoes ?? 0);
    setDiasConsecutivos(dados.diasConsecutivos ?? 0);
    setDiasTreinados(dados.diasTreinados ?? 0);
    setTotalAgua(dados.totalAgua ?? 0);
    setTotalSono(dados.totalSono ?? 0);
    setMissoesChefeFeitas(dados.missoesChefeFeitas ?? 0);
    setEventosBrCompletos(dados.eventosBrCompletos ?? 0);
    setMedalhas(dados.medalhas ?? []);
    setHistorico(dados.historico ?? []);
    setCapitulosLidos(dados.capitulosLidos ?? []);
    setMicroHistoriasVistas(dados.microHistoriasVistas ?? []);
    setMicroHistoriasFeitas(dados.microHistoriasFeitas ?? []);
    setCreditosVistos(dados.creditosVistos ?? false);
    setCriadoEm(dados.criadoEm ?? Date.now());
  }

  // Verificar capítulos desbloqueados
  function verificarCapitulo(novoNivel) {
    const cap = CAPITULOS.find(c => c.nivelDesbloqueio === novoNivel && !capitulosLidos.includes(c.id));
    if (cap) setCapituloAtivo(cap);
  }

  function marcarCapituloLido(id) {
    setCapitulosLidos(prev => [...prev, id]);
    setCapituloAtivo(null);
    // Ao concluir o capítulo final (nível 100) com a história toda lida, mostra os créditos
    if (id === "cap8" && nivel >= 100 && !creditosVistos) {
      setTimeout(() => {
        setMostrarCreditos(true);
        setCreditosVistos(true);
      }, 500);
    }
  }

  function verificarMedalhas(stats) {
    const novas = TODAS_MEDALHAS.filter(m => !medalhas.find(x => x.id === m.id) && m.cond(stats));
    if (novas.length > 0) {
      setMedalhas(prev => [...prev, ...novas.map(m => ({ ...m, data: new Date().toLocaleDateString("pt-BR") }))]);
      setModalMedalha(novas[0]);
      audio.tocarEfeito("medalha");
    }
  }

  function ganharXP(qtd) {
    let novoXP = xp + qtd;
    let novoNivel = nivel;
    if (novoXP >= xpMax && nivel < 100) {
      novoNivel = nivel + 1;
      novoXP = novoXP - xpMax;
      notificar(`🎉 SUBIU PARA NÍVEL ${novoNivel}!`, "ouro");
      audio.tocarEfeito("subir_nivel");
      setModalNivel(novoNivel);
      setTimeout(() => verificarCapitulo(novoNivel), 1000);
      setTimeout(() => verificarMicroHistoria(novoNivel), 2200);
    }
    setXp(novoXP);
    setNivel(novoNivel);
    setXpTotal(p => p + qtd);
    return novoNivel;
  }

  function verificarMicroHistoria(novoNivel) {
    const mh = MICRO_HISTORIAS.find(m => m.nivel === novoNivel && !microHistoriasVistas.includes(m.id));
    if (mh) {
      setMicroHistoriasVistas(prev => [...prev, mh.id]);
      setModalMicroHistoriaIntro(mh);
    }
  }

  function aceitarMicroHistoria(mh) {
    setMissaoExtra({ ...mh.missao, microHistoriaId: mh.id });
    setModalMicroHistoriaIntro(null);
    setStatusExtra(null);
    setInicioExtra(Date.now());
    setTela("missao");
  }

  function confirmarAgua() {
    if (aguaStatus === "sim") return; // já confirmado, evita XP duplicado
    setAguaStatus("sim");
    setTotalAgua(p => p + 1);
    let xpGanho = xpBonusAgua;
    if (sonoStatus === "sim") xpGanho += Math.floor((xpBonusAgua + xpBonusSono) / 2); // bônus combo, já que sono foi confirmado antes
    ganharXP(xpGanho);
    notificar(`💧 +${xpGanho} XP de hidratação!`, "sucesso");
  }

  function negarAgua() {
    setAguaStatus("nao");
  }

  function confirmarSono() {
    if (sonoStatus === "sim") return; // já confirmado, evita XP duplicado
    setSonoStatus("sim");
    setTotalSono(p => p + 1);
    let xpGanho = xpBonusSono;
    if (aguaStatus === "sim") xpGanho += Math.floor((xpBonusAgua + xpBonusSono) / 2); // bônus combo, já que água foi confirmada antes
    ganharXP(xpGanho);
    notificar(`😴 +${xpGanho} XP de sono!`, "sucesso");
  }

  function negarSono() {
    setSonoStatus("nao");
  }

  function sortearMissao() {
    audio.tocarEfeito("dado");
    const disponiveis = missoes.filter(m => !historico.includes(m.id));
    const lista = disponiveis.length > 0 ? disponiveis : missoes;
    const nova = sortear(lista);
    const mes = new Date().getMonth() + 1;
    const evento = EVENTOS_BR.find(e => e.mes === mes);
    if (evento && !modalEvento) setModalEvento(evento);
    const mult = ehFimDeSemana() ? 2 : 1;
    setMissaoAtual(nova);
    setMissaoExtra(null);
    setStatusMissao(null);
    setStatusExtra(null);
    setInicioMissao(Date.now());
    setInicioExtra(null);
    setAguaStatus(null);
    setSonoStatus(null);
    setMultiplicador(mult);
    setTela("missao");
  }

  function verificarSequencia(novosDias) {
    const marco = MISSOES_SEQUENCIA.find(m => m.dias === novosDias);
    if (marco) setModalSequencia(marco);
  }

  function concluirMissao(missao, isExtra = false) {
    const isChefe = missao.cat?.includes("🏆");
    const xpBase = missao.xp * multiplicador;
    let xpGanho = xpBase;
    const novoTotal = totalMissoes + 1;
    const novosDias = diasConsecutivos + 1;
    const novoChefes = isChefe ? missoesChefeFeitas + 1 : missoesChefeFeitas;
    const novoNivel = ganharXP(xpGanho);
    setTotalMissoes(novoTotal);
    setDiasConsecutivos(novosDias);
    setDiasTreinados(p => p + 1);
    setMissoesChefeFeitas(novoChefes);
    setHistorico(p => [...p, missao.id]);
    if (isExtra) setStatusExtra("concluida"); else setStatusMissao("concluida");
    audio.tocarEfeito("missao_concluida");
    verificarSequencia(novosDias);
    verificarMedalhas({ nivel: novoNivel, totalMissoes: novoTotal, diasConsecutivos: novosDias, missoesChefeFeitas: novoChefes, totalAgua, totalSono, eventosBrCompletos });

    // Medalha temática de feriado (quando a missão concluída é de um evento brasileiro)
    if (missao.medalhaId) {
      const medalhaFeriado = MEDALHAS_FERIADO.find(m => m.id === missao.medalhaId);
      const jaTem = medalhas.find(m => m.id === missao.medalhaId);
      if (medalhaFeriado && !jaTem) {
        setMedalhas(prev => [...prev, { ...medalhaFeriado, data: new Date().toLocaleDateString("pt-BR") }]);
        setTimeout(() => {
          setModalMedalhaFeriado(medalhaFeriado);
          audio.tocarEfeito("medalha");
        }, 600);
      }
    }

    // Desfecho da micro-história (quando a missão concluída é de resgate/narrativa)
    if (missao.microHistoriaId) {
      const mh = MICRO_HISTORIAS.find(m => m.id === missao.microHistoriaId);
      if (mh && !microHistoriasFeitas.includes(mh.id)) {
        setMicroHistoriasFeitas(prev => [...prev, mh.id]);
        setTimeout(() => setModalMicroHistoriaFim(mh), 800);
      }
    }

    notificar(`+${xpGanho} XP!${multiplicador > 1 ? ` (x${multiplicador})` : ""}`, "sucesso");
  }

  function falharMissao(missao, isExtra = false) {
    const perda = Math.floor((missao.xp * multiplicador) / 2);
    setXp(p => Math.max(0, p - perda));
    setXpTotal(p => Math.max(0, p - perda));
    setDiasConsecutivos(0);
    setHistorico(p => [...p, missao.id]);
    if (isExtra) setStatusExtra("falhou"); else setStatusMissao("falhou");
    audio.tocarEfeito("missao_falhou");
    notificar(`❌ Missão perdida. Guerreiro não perdido.\n-${perda} XP`, "erro");
  }

  // ── TELA CADASTRO ──────────────────────────────────────────
  // (TelaCadastro agora é um componente independente, definido fora do FitnessRPG — ver abaixo)

  // ── TELA HOME ──────────────────────────────────────────────
  function TelaHome() {
    const capsPendentes = CAPITULOS.filter(c => nivel >= c.nivelDesbloqueio && !capitulosLidos.includes(c.id) && c.id !== "prologo");
    return (
      <>
        <div style={{ background: "linear-gradient(135deg,#0d1b2a,#16213e)", padding: "18px 18px 14px", borderBottom: "1px solid #1e3a5f" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div style={{ color: "#ccd6f6", fontSize: 15, fontWeight: 600 }}>{getSaudacao(usuario?.nick || "Guerreiro")}</div>
            <button onClick={audio.toggle} style={{ background: audio.ligado ? "#6C0BA933" : "#ffffff0a", border: `1px solid ${audio.ligado ? "#6C0BA9" : "#ffffff22"}`, borderRadius: 20, padding: "6px 10px", color: audio.ligado ? "#c8a8e8" : "#666", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
              {audio.ligado ? "🔊" : "🔇"}
            </button>
          </div>
          {audio.ligado && musica.statusMusica?.home === "carregando" && (
            <div style={{ color: "#888", fontSize: 11, marginBottom: 6 }}>⏳ Carregando música...</div>
          )}
          {audio.ligado && musica.statusMusica?.home === "erro" && (
            <div style={{ background: "#E74C3C18", border: "1px solid #E74C3C44", borderRadius: 8, padding: "6px 10px", marginBottom: 6 }}>
              <div style={{ color: "#ff8a8a", fontSize: 11, fontWeight: 700 }}>⚠️ Música não carregou</div>
              <div style={{ color: "#ff8a8a99", fontSize: 10, marginTop: 2 }}>{musica.ultimoErro}</div>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}>Nível {nivel}</div>
              <div style={{ color: fase.cor, fontSize: 13, fontWeight: 600 }}>{fase.emoji} {fase.nome}</div>
            </div>
            <div style={{ background: `${fase.cor}22`, border: `1px solid ${fase.cor}44`, borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 10 }}>XP Total</div>
              <div style={{ color: fase.cor, fontSize: 18, fontWeight: 800 }}>{xpTotal}</div>
            </div>
          </div>
          <BarraXP xpAtual={xp} xpMax={xpMax} cor={fase.cor} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#555" }}>
            <span>{xp} XP</span><span>Próximo: {xpMax - xp} XP</span>
          </div>
        </div>

        <div style={{ padding: "16px 16px 90px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
            {[
              { emoji: "🔥", val: diasConsecutivos, label: "Sequência" },
              { emoji: "✅", val: totalMissoes, label: "Missões" },
              { emoji: "🏅", val: medalhas.length, label: "Medalhas" },
              { emoji: "💪", val: diasTreinados, label: "Dias" },
            ].map(s => (
              <div key={s.label} style={{ background: "#16213e", borderRadius: 10, padding: "10px 4px", textAlign: "center", border: "1px solid #1e3a5f" }}>
                <div style={{ fontSize: 16 }}>{s.emoji}</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>{s.val}</div>
                <div style={{ color: "#666", fontSize: 10 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Capítulos pendentes */}
          {capsPendentes.length > 0 && (
            <button onClick={() => setCapituloAtivo(capsPendentes[0])} style={{ width: "100%", background: "linear-gradient(135deg,#6C0BA9,#4A0E8F)", border: "none", borderRadius: 14, padding: "14px 18px", marginBottom: 16, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>📖</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Novo capítulo disponível!</div>
                <div style={{ color: "#c8a8e8", fontSize: 12 }}>{capsPendentes[0].titulo} — {capsPendentes[0].subtitulo}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "#c8a8e8", fontSize: 20 }}>›</span>
            </button>
          )}

          {imc && (
            <div style={{ background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 12, padding: "12px 14px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#888", fontSize: 11 }}>IMC de {usuario?.nick}</div>
                <div style={{ color: "#ccd6f6", fontSize: 13 }}>{imc.cat}</div>
              </div>
              <div style={{ color: "#F1C40F", fontSize: 22, fontWeight: 800 }}>{imc.valor}</div>
            </div>
          )}

          <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 10px" }}>⚔️ Missão do Dia</h3>
          {missaoAtual && statusMissao ? (
            <div style={{ background: "#16213e", borderRadius: 14, padding: 18, textAlign: "center", marginBottom: 16, border: `1px solid ${statusMissao === "concluida" ? "#27AE6044" : "#E74C3C44"}` }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{statusMissao === "concluida" ? "✅" : "❌"}</div>
              <div style={{ color: "#ccd6f6", fontSize: 14, marginBottom: 14 }}>{statusMissao === "concluida" ? "Missão concluída! Você arrasou!" : "Amanhã você consegue!"}</div>
              <button onClick={sortearMissao} style={{ background: `linear-gradient(135deg,${fase.cor},${fase.cor}88)`, border: "none", borderRadius: 10, padding: "11px 22px", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>🎲 Próxima missão</button>
            </div>
          ) : missaoAtual ? (
            <button onClick={() => setTela("missao")} style={{ width: "100%", background: `${fase.cor}11`, border: `2px solid ${fase.cor}44`, borderRadius: 14, padding: 16, cursor: "pointer", textAlign: "left", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: fase.cor, fontWeight: 700, fontSize: 12 }}>{missaoAtual.cat}</span>
                <span style={{ color: "#F1C40F", fontSize: 12 }}>+{missaoAtual.xp * multiplicador} XP{multiplicador > 1 ? ` (x${multiplicador})` : ""}</span>
              </div>
              <p style={{ color: "#ccd6f6", fontSize: 12, margin: "0 0 6px", lineHeight: 1.5 }}>{missaoAtual.desc.slice(0, 90)}{missaoAtual.desc.length > 90 ? "..." : ""}</p>
              <div style={{ color: "#888", fontSize: 11 }}>⏱ {missaoAtual.dur} • Toque para ver</div>
            </button>
          ) : (
            <button onClick={sortearMissao} style={{ width: "100%", background: `linear-gradient(135deg,${fase.cor},${fase.cor}88)`, border: "none", borderRadius: 14, padding: 18, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer", marginBottom: 16, boxShadow: `0 4px 20px ${fase.cor}44` }}>
              🎲 Sortear Missão do Dia
            </button>
          )}

          {ehFimDeSemana() && (
            <div style={{ background: "#F1C40F22", border: "1px solid #F1C40F55", borderRadius: 12, padding: "10px 14px", marginBottom: 14, textAlign: "center", color: "#F1C40F", fontSize: 13, fontWeight: 700 }}>
              🎉 FIM DE SEMANA — XP Dobrado!
            </div>
          )}

          <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 10px" }}>🎯 Bônus do Dia</h3>
          <CardBonus tipo="agua" meta={metaAgua} xpBonus={xpBonusAgua} status={aguaStatus} onConfirmar={confirmarAgua} onNegar={negarAgua} />
          <CardBonus tipo="sono" meta={metaSono} xpBonus={xpBonusSono} status={sonoStatus} onConfirmar={confirmarSono} onNegar={negarSono} />
          {aguaStatus === "sim" && sonoStatus === "sim" && (
            <div style={{ background: "#F1C40F22", border: "1px solid #F1C40F44", borderRadius: 10, padding: "10px 14px", textAlign: "center", color: "#F1C40F", fontWeight: 700, fontSize: 13 }}>
              🏆 COMBO! Água + Sono = XP Dobrado!
            </div>
          )}
        </div>
      </>
    );
  }

  // ── TELA MISSÃO ────────────────────────────────────────────
  function TelaMissao() {
    if (!missaoAtual) return (
      <div style={{ padding: 24, textAlign: "center", paddingTop: 60 }}>
        <div style={{ fontSize: 60, marginBottom: 16 }}>⚔️</div>
        <p style={{ color: "#888", marginBottom: 20 }}>Nenhuma missão ativa.</p>
        <button onClick={sortearMissao} style={{ background: `linear-gradient(135deg,${fase.cor},${fase.cor}88)`, border: "none", borderRadius: 12, padding: "13px 26px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>🎲 Sortear Missão</button>
      </div>
    );
    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>⚔️ Missão Atual</h2>
        <CardMissao missao={missaoAtual} onConcluir={m => concluirMissao(m)} onFalhar={m => falharMissao(m)} status={statusMissao} multiplicador={multiplicador} restante={calcularRestante(inicioMissao, missaoAtual.dur)} tempoTotal={duracaoParaSegundos(missaoAtual.dur)} />
        {missaoExtra && (
          <>
            <h3 style={{ color: "#F1C40F", fontSize: 14, fontWeight: 700, margin: "16px 0 10px" }}>⚡ Missão Extra Especial</h3>
            <CardMissao missao={missaoExtra} onConcluir={m => concluirMissao(m, true)} onFalhar={m => falharMissao(m, true)} status={statusExtra} multiplicador={missaoExtra.contadorBonus || 2} restante={calcularRestante(inicioExtra, missaoExtra.dur)} tempoTotal={duracaoParaSegundos(missaoExtra.dur)} />
          </>
        )}
        {statusMissao && (
          <button onClick={sortearMissao} style={{ width: "100%", background: `linear-gradient(135deg,${fase.cor},${fase.cor}88)`, border: "none", borderRadius: 12, padding: "13px 0", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 8 }}>🎲 Próxima missão</button>
        )}
        <div style={{ marginTop: 18 }}>
          <h3 style={{ color: "#888", fontSize: 12, fontWeight: 600, margin: "0 0 8px" }}>BÔNUS DO DIA</h3>
          <CardBonus tipo="agua" meta={metaAgua} xpBonus={xpBonusAgua} status={aguaStatus} onConfirmar={confirmarAgua} onNegar={negarAgua} />
          <CardBonus tipo="sono" meta={metaSono} xpBonus={xpBonusSono} status={sonoStatus} onConfirmar={confirmarSono} onNegar={negarSono} />
        </div>
      </div>
    );
  }

  // ── TELA HISTÓRIA ──────────────────────────────────────────
  function TelaHistoria() {
    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 16px" }}>📖 História</h2>
        <StatusMusica musica={musica} tela="historia" ligado={audio.ligado} />
        {CAPITULOS.map(cap => {
          const lido = capitulosLidos.includes(cap.id);
          const desbloqueado = nivel >= cap.nivelDesbloqueio;
          return (
            <button key={cap.id} onClick={() => desbloqueado && setCapituloAtivo(cap)}
              style={{ width: "100%", background: !desbloqueado ? "#0d1b2a" : lido ? "#16213e" : "linear-gradient(135deg,#6C0BA922,#4A0E8F22)", border: `1px solid ${!desbloqueado ? "#1e3a5f" : lido ? "#6C0BA944" : "#6C0BA9"}`, borderRadius: 14, padding: "14px 16px", marginBottom: 10, cursor: desbloqueado ? "pointer" : "default", textAlign: "left", display: "flex", alignItems: "center", gap: 12, opacity: desbloqueado ? 1 : 0.4 }}>
              <span style={{ fontSize: 24 }}>{!desbloqueado ? "🔒" : lido ? "✅" : "📖"}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: !desbloqueado ? "#555" : lido ? "#888" : "#c8a8e8", fontWeight: 700, fontSize: 13 }}>{cap.titulo}</div>
                <div style={{ color: "#555", fontSize: 12 }}>{cap.subtitulo}</div>
                {cap.nivelTitulo && <div style={{ color: "#6C0BA9", fontSize: 11, marginTop: 2 }}>{cap.nivelTitulo}</div>}
              </div>
              {desbloqueado && <span style={{ color: "#6C0BA9", fontSize: 18 }}>›</span>}
            </button>
          );
        })}
      </div>
    );
  }

  // ── TELA MEDALHAS ──────────────────────────────────────────
  function TelaMedalhas() {
    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 6px" }}>🏅 Medalhas</h2>
        <div style={{ color: "#888", fontSize: 13, marginBottom: 18 }}>{medalhas.length} de {TODAS_MEDALHAS.length} conquistadas</div>
        <StatusMusica musica={musica} tela="medalhas" ligado={audio.ligado} />
        {ORDEM_TIERS.map(tier => {
          const desbloqueado = tierDesbloqueado(tier, medalhas);
          if (!desbloqueado) return null; // tier inteiro oculto até desbloquear

          const todasDoTier = TODAS_MEDALHAS.filter(m => m.tier === tier);
          // Para supremas, aplica revelação progressiva individual
          const todas = tier === "suprema"
            ? todasDoTier.filter(m => medalhaSupremaVisivel(m.id, medalhas))
            : todasDoTier;
          const conquistadas = medalhas.filter(m => m.tier === tier);
          const cor = TIER_CORES[tier];
          return (
            <div key={tier} style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ height: 1, flex: 1, background: `${cor}44` }} />
                <span style={{ color: cor, fontWeight: 700, fontSize: 12 }}>{TIER_NOMES[tier].toUpperCase()} ({conquistadas.length}/{todasDoTier.length})</span>
                <div style={{ height: 1, flex: 1, background: `${cor}44` }} />
              </div>
              {tier === "suprema" && todas.length < todasDoTier.length && (
                <div style={{ color: "#666", fontSize: 11, textAlign: "center", marginBottom: 10, fontStyle: "italic" }}>
                  ✨ Conquistas ainda mais lendárias aguardam além destas...
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {todas.map(m => {
                  const obtida = medalhas.find(x => x.id === m.id);
                  return (
                    <div key={m.id} style={{ background: obtida ? `${cor}11` : "#16213e", border: `1px solid ${obtida ? cor : "#1e3a5f"}`, borderRadius: 12, padding: 12, opacity: obtida ? 1 : 0.4 }}>
                      <div style={{ fontSize: 24, marginBottom: 4 }}>{m.emoji}</div>
                      <div style={{ color: obtida ? cor : "#888", fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{m.nome}</div>
                      <div style={{ color: "#666", fontSize: 10, lineHeight: 1.4 }}>{obtida ? m.desc : "🔒 Bloqueada"}</div>
                      {obtida?.data && <div style={{ color: cor, fontSize: 10, marginTop: 4 }}>📅 {obtida.data}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Medalhas temáticas de feriado */}
        {medalhas.some(m => m.id?.startsWith("ev")) && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ height: 1, flex: 1, background: "#3498DB44" }} />
              <span style={{ color: "#3498DB", fontWeight: 700, fontSize: 12 }}>🇧🇷 FERIADOS BRASILEIROS ({medalhas.filter(m => m.id?.startsWith("ev")).length}/{MEDALHAS_FERIADO.length})</span>
              <div style={{ height: 1, flex: 1, background: "#3498DB44" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {medalhas.filter(m => m.id?.startsWith("ev")).map(m => (
                <div key={m.id} style={{ background: "#3498DB11", border: "1px solid #3498DB66", borderRadius: 12, padding: 12 }}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{m.emoji}</div>
                  <div style={{ color: "#3498DB", fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{m.nome}</div>
                  <div style={{ color: "#666", fontSize: 10, lineHeight: 1.4 }}>{m.desc}</div>
                  {m.data && <div style={{ color: "#3498DB", fontSize: 10, marginTop: 4 }}>📅 {m.data}</div>}
                </div>
              ))}
            </div>
            <div style={{ color: "#555", fontSize: 11, textAlign: "center", marginTop: 10, fontStyle: "italic" }}>
              🎁 Complete missões de eventos brasileiros ao longo do ano para desbloquear todas!
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── TELA PROGRESSO ─────────────────────────────────────────
  function TelaProgresso() {
    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 16px" }}>📊 Jornada</h2>
        <div style={{ background: `${fase.cor}22`, border: `2px solid ${fase.cor}44`, borderRadius: 14, padding: 18, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div>
              <div style={{ color: fase.cor, fontWeight: 700, fontSize: 13 }}>{fase.emoji} {fase.nome}</div>
              <div style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}>Nível {nivel}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#888", fontSize: 11 }}>XP Total</div>
              <div style={{ color: "#F1C40F", fontSize: 20, fontWeight: 800 }}>{xpTotal}</div>
            </div>
          </div>
          <BarraXP xpAtual={xp} xpMax={xpMax} cor={fase.cor} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
          {[
            { emoji: "🔥", label: "Sequência", val: `${diasConsecutivos} dias`, cor: "#E74C3C" },
            { emoji: "✅", label: "Missões", val: totalMissoes, cor: "#27AE60" },
            { emoji: "💪", label: "Dias treinados", val: diasTreinados, cor: fase.cor },
            { emoji: "🏅", label: "Medalhas", val: `${medalhas.length}/${TODAS_MEDALHAS.length}`, cor: "#F1C40F" },
          ].map(s => (
            <div key={s.label} style={{ background: "#16213e", borderRadius: 12, padding: 14, border: `1px solid ${s.cor}33`, textAlign: "center" }}>
              <div style={{ fontSize: 22 }}>{s.emoji}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.cor }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#888" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: "0 0 10px" }}>🗺️ Mapa de Fases</h3>
        {FASES.map(f => {
          const concluida = nivel >= f.nivelMax;
          const atual = nivel >= f.nivelMin && nivel < f.nivelMax;
          return (
            <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", marginBottom: 6, background: atual ? `${f.cor}22` : "#16213e", border: `1px solid ${atual ? f.cor : concluida ? f.cor + "44" : "#1e3a5f"}`, borderRadius: 10, opacity: concluida || atual ? 1 : 0.5 }}>
              <span style={{ fontSize: 18 }}>{concluida ? "✅" : atual ? "⚔️" : "🔒"}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: atual ? f.cor : "#ccd6f6", fontWeight: 600, fontSize: 13 }}>{f.nome}</div>
                <div style={{ color: "#666", fontSize: 11 }}>Níveis {f.nivelMin}–{f.nivelMax}</div>
              </div>
              {atual && <span style={{ color: f.cor, fontSize: 11, fontWeight: 700 }}>ATUAL</span>}
            </div>
          );
        })}
      </div>
    );
  }

  // ── TELA RANK ──────────────────────────────────────────────
  function TelaRank() {
    const [jogadores, setJogadores] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [criterioOrdem, setCriterioOrdem] = useState("nivel"); // nivel | totalMissoes | diasConsecutivos | totalMedalhas

    async function carregar() {
      setCarregando(true);
      setErro(null);
      const resultado = await firebaseBuscarTodosJogadores();
      setCarregando(false);
      if (!resultado.ok) {
        setErro(resultado.erro || "Não foi possível carregar o rank agora.");
        return;
      }
      setJogadores(resultado.jogadores);
    }

    useEffect(() => { carregar(); }, []);

    const ordenados = [...jogadores].sort((a, b) => (b[criterioOrdem] || 0) - (a[criterioOrdem] || 0));
    const criterios = [
      { id: "nivel", label: "Nível", emoji: "⚔️" },
      { id: "totalMissoes", label: "Missões", emoji: "✅" },
      { id: "diasConsecutivos", label: "Sequência", emoji: "🔥" },
      { id: "totalMedalhas", label: "Medalhas", emoji: "🏅" },
    ];

    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: 0 }}>🏆 Rank dos Guerreiros</h2>
          <button onClick={carregar} style={{ background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 8, padding: "6px 10px", color: "#888", fontSize: 12, cursor: "pointer" }}>🔄</button>
        </div>
        <div style={{ color: "#666", fontSize: 12, marginBottom: 16 }}>Comparação entre todos os jogadores do app</div>

        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
          {criterios.map(c => (
            <button key={c.id} onClick={() => setCriterioOrdem(c.id)} style={{ flexShrink: 0, background: criterioOrdem === c.id ? "#6C0BA933" : "#16213e", border: `1px solid ${criterioOrdem === c.id ? "#6C0BA9" : "#1e3a5f"}`, borderRadius: 20, padding: "7px 14px", color: criterioOrdem === c.id ? "#c8a8e8" : "#888", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        {carregando && (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>⏳ Carregando rank...</div>
        )}

        {!carregando && erro && (
          <div style={{ background: "#E74C3C18", border: "1px solid #E74C3C44", borderRadius: 12, padding: 16, textAlign: "center" }}>
            <div style={{ color: "#ff8a8a", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>⚠️ Rank indisponível agora</div>
            <div style={{ color: "#ff8a8a99", fontSize: 12 }}>{erro}</div>
          </div>
        )}

        {!carregando && !erro && ordenados.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>Nenhum guerreiro no rank ainda. Seja o primeiro!</div>
        )}

        {!carregando && !erro && ordenados.map((j, i) => {
          const souEu = usuario?.nick === j.nick;
          const medalhaPosicao = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
          const dataCriacao = formatarDataCriacao(j.criadoEm);
          return (
            <div key={j.nick} style={{ display: "flex", alignItems: "center", gap: 12, background: souEu ? "#6C0BA922" : "#16213e", border: `1px solid ${souEu ? "#6C0BA9" : "#1e3a5f"}`, borderRadius: 12, padding: "12px 14px", marginBottom: 8 }}>
              <div style={{ width: 28, textAlign: "center", fontSize: medalhaPosicao ? 20 : 13, color: "#888", fontWeight: 700 }}>
                {medalhaPosicao || `#${i + 1}`}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: souEu ? "#c8a8e8" : "#ccd6f6", fontWeight: 700, fontSize: 14 }}>{j.nick} {souEu && "(você)"}</div>
                <div style={{ color: "#666", fontSize: 11 }}>Nível {j.nivel || 1} • {j.totalMissoes || 0} missões • 🔥{j.diasConsecutivos || 0} dias • 🏅{j.totalMedalhas || 0}</div>
                {dataCriacao && <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>🗓️ Guerreiro desde {dataCriacao}</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ── TELA PERFIL ────────────────────────────────────────────
  function TelaPerfil() {
    const [editando, setEditando] = useState(false);
    const [f, setF] = useState(usuario || {});
    const [confirmReset, setConfirmReset] = useState(false);
    const imcLocal = calcIMC(f.peso, f.altura);

    function resetarTudo() {
      setUsuario(null);
      setCriadoEm(null);
      setNivel(1); setXp(0); setXpTotal(0);
      setTotalMissoes(0); setDiasConsecutivos(0); setDiasTreinados(0);
      setTotalAgua(0); setTotalSono(0); setMissoesChefeFeitas(0);
      setEventosBrCompletos(0); setMedalhas([]); setHistorico([]);
      setCapitulosLidos([]); setMissaoAtual(null); setMissaoExtra(null);
      setStatusMissao(null); setStatusExtra(null);
      setInicioMissao(null); setInicioExtra(null);
      setAguaStatus(null); setSonoStatus(null);
      setCreditosVistos(false); setMostrarCreditos(false);
      setMicroHistoriasVistas([]); setMicroHistoriasFeitas([]);
      setTela("cadastro");
    }
    return (
      <div style={{ padding: "16px 16px 90px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: 0 }}>👤 Perfil</h2>
          <button onClick={() => setEditando(!editando)} style={{ background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 8, padding: "6px 14px", color: "#ccd6f6", fontSize: 13, cursor: "pointer" }}>{editando ? "Cancelar" : "Editar"}</button>
        </div>
        {editando ? (
          <>
            {[{ label: "Nick", key: "nick" }, { label: "Email", key: "email" }, { label: "Peso (kg)", key: "peso" }, { label: "Altura (cm)", key: "altura" }].map(c => (
              <div key={c.key} style={{ marginBottom: 12 }}>
                <div style={{ color: "#888", fontSize: 11, marginBottom: 4 }}>{c.label}</div>
                <input value={f[c.key] || ""} onChange={e => setF({ ...f, [c.key]: e.target.value })} style={{ width: "100%", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, padding: "10px 12px", color: "#fff", fontSize: 14 }} />
              </div>
            ))}
            <button onClick={() => { setUsuario(f); setEditando(false); notificar("Perfil atualizado!", "sucesso"); }} style={{ width: "100%", padding: "12px 0", background: "linear-gradient(135deg,#27AE60,#2ECC71)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Salvar</button>
          </>
        ) : (
          <>
            <div style={{ background: "#16213e", borderRadius: 14, padding: 18, marginBottom: 14 }}>
              <div style={{ fontSize: 40, textAlign: "center", marginBottom: 10 }}>⚔️</div>
              <div style={{ textAlign: "center", marginBottom: 14 }}>
                <div style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>{usuario?.nick}</div>
                <div style={{ color: "#555", fontSize: 12 }}>{usuario?.email}</div>
              </div>
              {[{ label: "Peso", val: `${usuario?.peso} kg` }, { label: "Altura", val: `${usuario?.altura} cm` }].map(i => (
                <div key={i.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid #1e3a5f" }}>
                  <span style={{ color: "#888", fontSize: 13 }}>{i.label}</span>
                  <span style={{ color: "#ccd6f6", fontSize: 13, fontWeight: 600 }}>{i.val}</span>
                </div>
              ))}
            </div>
            {imcLocal && (
              <div style={{ background: "#16213e", borderRadius: 14, padding: 16, textAlign: "center" }}>
                <div style={{ color: "#888", fontSize: 12, marginBottom: 4 }}>IMC</div>
                <div style={{ color: "#F1C40F", fontSize: 32, fontWeight: 800 }}>{imcLocal.valor}</div>
                <div style={{ color: "#ccd6f6", fontSize: 14, fontWeight: 600 }}>{imcLocal.cat}</div>
                <div style={{ color: "#555", fontSize: 11, marginTop: 6 }}>⚠️ Consulte um médico para avaliação completa.</div>
              </div>
            )}

            {/* Botão rever créditos, se já foram vistos */}
            {creditosVistos && (
              <button onClick={() => setMostrarCreditos(true)} style={{ width: "100%", padding: "12px 0", background: "linear-gradient(135deg,#6C0BA922,#9B59B622)", border: "1px solid #6C0BA944", borderRadius: 10, color: "#c8a8e8", fontWeight: 600, fontSize: 14, cursor: "pointer", marginTop: 14 }}>
                🏆 Rever créditos da jornada
              </button>
            )}

            {/* Botão resetar */}
            <div style={{ marginTop: 28, borderTop: "1px solid #1e3a5f", paddingTop: 20 }}>
              {!confirmReset ? (
                <button onClick={() => setConfirmReset(true)} style={{ width: "100%", padding: "12px 0", background: "transparent", border: "1px solid #E74C3C44", borderRadius: 10, color: "#E74C3C", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  🗑️ Resetar e começar do zero
                </button>
              ) : (
                <div style={{ background: "#1a0808", border: "1px solid #E74C3C44", borderRadius: 12, padding: 16 }}>
                  <div style={{ color: "#E74C3C", fontWeight: 700, fontSize: 14, marginBottom: 6, textAlign: "center" }}>⚠️ Tem certeza?</div>
                  <div style={{ color: "#888", fontSize: 13, textAlign: "center", marginBottom: 14 }}>Todo o progresso, medalhas e missões serão apagados. Isso não pode ser desfeito.</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={resetarTudo} style={{ flex: 1, padding: "11px 0", background: "linear-gradient(135deg,#C0392B,#E74C3C)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                      Sim, resetar tudo
                    </button>
                    <button onClick={() => setConfirmReset(false)} style={{ flex: 1, padding: "11px 0", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, color: "#888", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // ── MODAIS ─────────────────────────────────────────────────
  function ModalSequencia() {
    if (!modalSequencia) return null;
    return (
      <Modal onClose={() => setModalSequencia(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 10 }}>{modalSequencia.emoji}</div>
          <div style={{ color: "#F1C40F", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{modalSequencia.nome}</div>
          <div style={{ color: "#888", fontSize: 13, marginBottom: 16 }}>{modalSequencia.dias} dias consecutivos! 🔥</div>
          <div style={{ background: "#0d1b2a", borderRadius: 12, padding: 14, marginBottom: 18, textAlign: "left" }}>
            <div style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.6 }}>{modalSequencia.desc}</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
              <span style={{ color: "#888", fontSize: 12 }}>⏱ {modalSequencia.dur}</span>
              <span style={{ color: "#F1C40F", fontSize: 13, fontWeight: 700 }}>+{modalSequencia.xp} XP</span>
            </div>
          </div>
          <div style={{ color: "#ccd6f6", fontSize: 14, marginBottom: 18 }}>Você ganhou direito a uma <strong>missão extra especial</strong>. Aceita?</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => { setMissaoExtra({ ...modalSequencia, cat: "Especial ⚡" }); setModalSequencia(null); setStatusExtra(null); setInicioExtra(Date.now()); setTela("missao"); }} style={{ flex: 1, padding: "12px 0", background: "linear-gradient(135deg,#27AE60,#2ECC71)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>✅ Aceitar!</button>
            <button onClick={() => setModalSequencia(null)} style={{ flex: 1, padding: "12px 0", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, color: "#888", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>❌ Recusar</button>
          </div>
        </div>
      </Modal>
    );
  }

  function ModalMedalhaConquistada() {
    if (!modalMedalha) return null;
    const cor = TIER_CORES[modalMedalha.tier];
    return (
      <Modal onClose={() => setModalMedalha(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 10 }}>{modalMedalha.emoji}</div>
          <div style={{ color: cor, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>MEDALHA {TIER_NOMES[modalMedalha.tier]?.toUpperCase()}!</div>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{modalMedalha.nome}</div>
          <div style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{modalMedalha.desc}</div>
          <button onClick={() => setModalMedalha(null)} style={{ background: `linear-gradient(135deg,${cor},${cor}88)`, border: "none", borderRadius: 12, padding: "12px 28px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>🎉 Incrível!</button>
        </div>
      </Modal>
    );
  }

  function ModalSubiuNivel() {
    if (!modalNivel) return null;
    const faseNova = getFase(modalNivel);
    return (
      <Modal onClose={() => setModalNivel(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#888", marginBottom: 6, letterSpacing: 2 }}>⚔️ EVOLUÇÃO ⚔️</div>
          <div style={{ fontSize: 64, marginBottom: 6 }}>🎉</div>
          <div style={{ color: "#fff", fontSize: 16, marginBottom: 4 }}>Parabéns!</div>
          <div style={{ color: faseNova.cor, fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Você chegou ao</div>
          <div style={{ color: faseNova.cor, fontSize: 48, fontWeight: 800, marginBottom: 12, textShadow: `0 0 20px ${faseNova.cor}88` }}>NÍVEL {modalNivel}</div>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 20 }}>{faseNova.emoji} {faseNova.nome}</div>
          <button onClick={() => setModalNivel(null)} style={{ background: `linear-gradient(135deg,${faseNova.cor},${faseNova.cor}88)`, border: "none", borderRadius: 12, padding: "13px 32px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Continuar jornada ⚔️</button>
        </div>
      </Modal>
    );
  }

  function ModalMicroHistoriaIntro() {
    if (!modalMicroHistoriaIntro) return null;
    const mh = modalMicroHistoriaIntro;
    return (
      <Modal onClose={() => setModalMicroHistoriaIntro(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#3498DB", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>📖 HISTÓRIA PARALELA</div>
          <div style={{ fontSize: 48, marginBottom: 10 }}>🤝</div>
          <div style={{ color: "#fff", fontSize: 19, fontWeight: 800, marginBottom: 14 }}>{mh.titulo}</div>
          <div style={{ background: "#0d1b2a", borderRadius: 12, padding: 16, marginBottom: 18, textAlign: "left" }}>
            <p style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{mh.introducao}</p>
          </div>
          <div style={{ background: "#3498DB11", border: "1px solid #3498DB44", borderRadius: 12, padding: 14, marginBottom: 18, textAlign: "left" }}>
            <div style={{ color: "#3498DB", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>MISSÃO DE RESGATE</div>
            <div style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.5, marginBottom: 8 }}>{mh.missao.desc}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#888", fontSize: 12 }}>⏱ {mh.missao.dur}</span>
              <span style={{ color: "#F1C40F", fontSize: 13, fontWeight: 700 }}>+{mh.missao.xp} XP</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => aceitarMicroHistoria(mh)} style={{ flex: 1, padding: "12px 0", background: "linear-gradient(135deg,#3498DB,#2980B9)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>🤝 Ajudar agora</button>
            <button onClick={() => setModalMicroHistoriaIntro(null)} style={{ flex: 1, padding: "12px 0", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, color: "#888", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Depois</button>
          </div>
        </div>
      </Modal>
    );
  }

  function ModalMicroHistoriaFim() {
    if (!modalMicroHistoriaFim) return null;
    const mh = modalMicroHistoriaFim;
    return (
      <Modal onClose={() => setModalMicroHistoriaFim(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#27AE60", fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>✅ MISSÃO DE RESGATE CONCLUÍDA</div>
          <div style={{ fontSize: 48, marginBottom: 10 }}>🌿</div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 14 }}>{mh.titulo}</div>
          <div style={{ background: "#0d1b2a", borderRadius: 12, padding: 16, marginBottom: 20, textAlign: "left" }}>
            <p style={{ color: "#98e89a", fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{mh.desfecho}</p>
          </div>
          <button onClick={() => setModalMicroHistoriaFim(null)} style={{ background: "linear-gradient(135deg,#27AE60,#2ECC71)", border: "none", borderRadius: 12, padding: "12px 28px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Continuar ⚔️</button>
        </div>
      </Modal>
    );
  }

  function ModalMedalhaFeriado() {
    if (!modalMedalhaFeriado) return null;
    const cor = TIER_CORES.bronze;
    return (
      <Modal onClose={() => setModalMedalhaFeriado(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "#3498DB", fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>🇧🇷 MEDALHA DE FERIADO CONQUISTADA</div>
          <div style={{ fontSize: 64, marginBottom: 10 }}>{modalMedalhaFeriado.emoji}</div>
          <div style={{ color: cor, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>MEDALHA BRONZE</div>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{modalMedalhaFeriado.nome}</div>
          <div style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{modalMedalhaFeriado.desc}</div>
          <button onClick={() => setModalMedalhaFeriado(null)} style={{ background: `linear-gradient(135deg,${cor},${cor}88)`, border: "none", borderRadius: 12, padding: "12px 28px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>🎉 Viva o Brasil!</button>
        </div>
      </Modal>
    );
  }

  function ModalEventoBr() {
    if (!modalEvento) return null;
    return (
      <Modal onClose={() => setModalEvento(null)}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>{modalEvento.emoji}</div>
          <div style={{ color: "#3498DB", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>🇧🇷 MISSÃO ESPECIAL DO MÊS</div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 14 }}>{modalEvento.nome}</div>
          <div style={{ background: "#0d1b2a", borderRadius: 12, padding: 14, marginBottom: 16, textAlign: "left" }}>
            <div style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.6 }}>{modalEvento.desc}</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
              <span style={{ color: "#888", fontSize: 12 }}>⏱ {modalEvento.dur}</span>
              <span style={{ color: "#F1C40F", fontSize: 13, fontWeight: 700 }}>+{modalEvento.xp} XP</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => { setMissaoExtra({ ...modalEvento, cat: "🇧🇷 Evento Brasil" }); setModalEvento(null); setEventosBrCompletos(p => p + 1); setStatusExtra(null); setInicioExtra(Date.now()); setTela("missao"); }} style={{ flex: 1, padding: "12px 0", background: "linear-gradient(135deg,#3498DB,#2980B9)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>🇧🇷 Aceitar!</button>
            <button onClick={() => setModalEvento(null)} style={{ flex: 1, padding: "12px 0", background: "#16213e", border: "1px solid #1e3a5f", borderRadius: 10, color: "#888", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Deixar pra lá</button>
          </div>
        </div>
      </Modal>
    );
  }

  // ── RENDER ─────────────────────────────────────────────────

  if (tela === "cadastro") return (
    <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100vh", background: "#0a0a1a" }}>
      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } button:active { transform: scale(0.97); } input { outline: none; }`}</style>
      <Notif msg={notif.msg} tipo={notif.tipo} onClose={() => setNotif({ msg: "", tipo: "" })} />
      <TelaCadastro
        formInicial={form}
        onErro={(msg) => notificar(msg, "erro")}
        onSalvar={(f) => {
          setUsuario(f);
          setForm(f);
          setCriadoEm(Date.now());
          const prologo = CAPITULOS.find(c => c.id === "prologo");
          setCapituloAtivo(prologo);
          setTela("home");
        }}
        onLogin={(dados) => {
          setUsuario({ nick: dados.nick, senha: dados.senha, email: dados.email, peso: dados.peso, altura: dados.altura });
          setForm({ nick: dados.nick, senha: dados.senha, email: dados.email, peso: dados.peso, altura: dados.altura });
          restaurarProgresso(dados);
          notificar(`Bem-vindo de volta, ${dados.nick}!`, "sucesso");
          setTela("home");
        }}
      />
    </div>
  );

  const TELAS = { home: <TelaHome />, missao: <TelaMissao />, historia: <TelaHistoria />, medalhas: <TelaMedalhas />, progresso: <TelaProgresso />, rank: <TelaRank />, perfil: <TelaPerfil /> };
  const NAV = [
    { id: "home", emoji: "🏠", label: "Início" },
    { id: "missao", emoji: "⚔️", label: "Missão" },
    { id: "historia", emoji: "📖", label: "História" },
    { id: "medalhas", emoji: "🏅", label: "Medalhas" },
    { id: "progresso", emoji: "📊", label: "Progresso" },
    { id: "rank", emoji: "🏆", label: "Rank" },
  ];

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100vh", background: "linear-gradient(135deg,#0a0a1a,#0d1b2a)", fontFamily: "'Segoe UI',system-ui,sans-serif", color: "#ccd6f6", position: "relative" }}>
      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } button:active { transform: scale(0.97); } input { outline: none; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0a1a; } ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 4px; }`}</style>

      {/* Leitor de história — sobrepõe tudo */}
      {capituloAtivo && (
        <LeitorHistoria
          capitulo={capituloAtivo}
          onFim={() => marcarCapituloLido(capituloAtivo.id)}
          onPular={() => marcarCapituloLido(capituloAtivo.id)}
        />
      )}

      {/* Tela de créditos finais — ao concluir a história no nível 100 */}
      {mostrarCreditos && (
        <div style={{ position: "fixed", inset: 0, background: "linear-gradient(180deg, #000000 0%, #1a0a2e 50%, #0a0a1a 100%)", zIndex: 3000, maxWidth: 480, margin: "0 auto", overflowY: "auto", padding: "40px 28px 60px" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <div style={{ fontSize: 56, marginBottom: 10 }}>⚔️</div>
            <div style={{ color: "#9B59B6", fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 8 }}>INVOCAÇÃO DA EVOLUÇÃO</div>
            <div style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Jornada Completa</div>
            <div style={{ width: 50, height: 2, background: "#9B59B6", margin: "12px auto" }} />
          </div>

          <p style={{ color: "#c8a8e8", fontSize: 15, lineHeight: 1.8, textAlign: "center", marginBottom: 28, fontStyle: "italic" }}>
            Você venceu Sahyro. Você venceu a si mesmo. A Guardiã observa, em silêncio, o guerreiro que você se tornou.
          </p>

          <div style={{ background: "#ffffff08", border: "1px solid #9B59B944", borderRadius: 16, padding: 22, marginBottom: 24 }}>
            <div style={{ color: "#9B59B6", fontSize: 13, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>📜 SUA JORNADA EM NÚMEROS</div>
            {[
              { label: "Nível alcançado", val: nivel, emoji: "⚔️" },
              { label: "Missões concluídas", val: totalMissoes, emoji: "✅" },
              { label: "Maior sequência de dias", val: diasConsecutivos, emoji: "🔥" },
              { label: "Dias treinados no total", val: diasTreinados, emoji: "💪" },
              { label: "Medalhas conquistadas", val: `${medalhas.length} / ${TODAS_MEDALHAS.length + MEDALHAS_FERIADO.length}`, emoji: "🏅" },
              { label: "Missões Chefe derrotadas", val: missoesChefeFeitas, emoji: "👑" },
              { label: "Dias de hidratação", val: totalAgua, emoji: "💧" },
              { label: "Dias de sono cumprido", val: totalSono, emoji: "😴" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #ffffff0a" }}>
                <span style={{ color: "#aaa", fontSize: 13 }}>{s.emoji} {s.label}</span>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{s.val}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#9B59B611", border: "1px solid #9B59B944", borderRadius: 16, padding: 22, marginBottom: 24, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>🙏</div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Obrigado por jogar</div>
            <p style={{ color: "#c8a8e8", fontSize: 13, lineHeight: 1.7 }}>
              Cada missão que você completou, cada dia que você escolheu continuar — isso foi real. O corpo que você forjou e o caráter que você construiu não desaparecem quando a história termina.
            </p>
          </div>

          <div style={{ background: "#1A0A3E", border: "1px solid #6C0BA944", borderRadius: 16, padding: 22, marginBottom: 30, textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>♾️</div>
            <div style={{ color: "#F1C40F", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Mas a jornada não acaba aqui</div>
            <p style={{ color: "#ccd6f6", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              Você pode continuar treinando, acumulando missões e perseguindo as conquistas mais raras do sistema:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { emoji: "☠️", nome: "Deus Vivo", req: "1.000 missões" },
                { emoji: "👹", nome: "Reencarnação do Demônio", req: "1.500 missões" },
                { emoji: "👑", nome: "Criador Supremo", req: "2.000 missões" },
              ].map(c => (
                <div key={c.nome} style={{ display: "flex", justifyContent: "space-between", background: "#ffffff08", borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: "#ccd6f6", fontSize: 12 }}>{c.emoji} {c.nome}</span>
                  <span style={{ color: "#888", fontSize: 11 }}>{c.req}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setMostrarCreditos(false)} style={{ width: "100%", padding: "16px 0", background: "linear-gradient(135deg,#6C0BA9,#9B59B6)", border: "none", borderRadius: 14, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: "0 4px 24px #6C0BA966" }}>
            ⚔️ Continuar Jornada
          </button>

          <div style={{ textAlign: "center", marginTop: 24, color: "#444", fontSize: 11 }}>
            INVOCAÇÃO DA EVOLUÇÃO • Todos os direitos reservados
          </div>
        </div>
      )}

      <Notif msg={notif.msg} tipo={notif.tipo} onClose={() => setNotif({ msg: "", tipo: "" })} />
      <ModalSequencia />
      <ModalMedalhaConquistada />
      <ModalMedalhaFeriado />
      <ModalSubiuNivel />
      <ModalMicroHistoriaIntro />
      <ModalMicroHistoriaFim />
      <ModalEventoBr />

      <div style={{ paddingBottom: 65 }}>{TELAS[tela]}</div>

      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: "#0d1b2a", borderTop: "1px solid #1e3a5f", display: "flex", zIndex: 100 }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setTela(n.id)} style={{ flex: 1, padding: "10px 0", background: "none", border: "none", color: tela === n.id ? fase.cor : "#444", fontSize: 10, fontWeight: 700, cursor: "pointer", textAlign: "center", borderTop: tela === n.id ? `2px solid ${fase.cor}` : "2px solid transparent", transition: "all 0.2s" }}>
            <div style={{ fontSize: 18 }}>{n.emoji}</div>
            <div>{n.label}</div>
          </button>
        ))}
      </nav>
    </div>
  );
}
