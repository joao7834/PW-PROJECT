const div_cat = document.getElementById("catalogo");
const buttons = document.querySelectorAll(".categ button");
const input = document.getElementById("input");
const trilho = document.getElementById("trilho");
const body = document.querySelector("body");
const ordenador = document.getElementById("ordenador")

const catalogoProdutos = [
  [
    "Sandálias de Hermes",
    "Sandálias aladas capazes de conduzir seu portador pelos caminhos do mundo.",
    "src/assets/sandalias-hermes.png",
    "Artefato",
    "420 ₯",
  ],
  [
    "Kerykeion",
    "Bastão dourado associado ao mensageiro dos deuses e aos caminhos.",
    "src/assets/kerykeion.png",
    "Artefato",
    "750 ₯",
  ],
  [
    "Lira de Apolo",
    "Instrumento divino cuja música ecoa pelos salões dos deuses.",
    "src/assets/lira-apolo.png",
    "Artefato",
    "680 ₯",
  ],
  [
    "Cálice de Dionísio",
    "Cálice utilizado em celebrações dedicadas ao deus do vinho e do êxtase.",
    "src/assets/calice-dionisio.png",
    "Artefato",
    "530 ₯",
  ],
  [
    "Forja Portátil de Hefesto",
    "Pequena forja capaz de aquecer metais para trabalhos de precisão.",
    "src/assets/forja-hefesto.png",
    "Artefato",
    "910 ₯",
  ],
  [
    "Moeda de Caronte",
    "Uma antiga moeda destinada ao pagamento da passagem pelo rio dos mortos.",
    "src/assets/moeda-caronte.png",
    "Relíquia",
    "120 ₯",
  ],
  [
    "Ânfora de Dionísio",
    "Ânfora antiga utilizada para armazenar vinho durante festividades.",
    "src/assets/anfora-dionisio.png",
    "Relíquia",
    "340 ₯",
  ],
  [
    "Ampulheta de Hypnos",
    "Antiga ampulheta associada ao deus do sono e ao descanso dos mortais.",
    "src/assets/ampulheta-hypnos.png",
    "Relíquia",
    "460 ₯",
  ],
  [
    "Tocha de Héstia",
    "Relíquia simbólica associada ao fogo doméstico e à proteção do lar.",
    "src/assets/tocha-hestia.png",
    "Relíquia",
    "390 ₯",
  ],
  [
    "Olho de Atena",
    "Pequeno amuleto dedicado à deusa da sabedoria e da estratégia.",
    "src/assets/olho-atena.png",
    "Relíquia",
    "510 ₯",
  ],
  [
    "Lança de Ares",
    "Lança forjada para representar a força e o espírito da batalha.",
    "src/assets/lanca-ares.png",
    "Arma",
    "1.100 ₯",
  ],
  [
    "Arco de Ártemis",
    "Arco associado à deusa da caça e aos caminhos selvagens.",
    "src/assets/arco-artemis.png",
    "Arma",
    "980 ₯",
  ],
  [
    "Martelo de Hefesto",
    "Pesado martelo utilizado por ferreiros e artesãos do Olimpo.",
    "src/assets/martelo-hefesto.png",
    "Arma",
    "1.250 ₯",
  ],
  [
    "Espada de Perseu",
    "Espada inspirada nas armas utilizadas pelo herói em suas jornadas.",
    "src/assets/espada-perseu.png",
    "Arma",
    "870 ₯",
  ],
  [
    "Tridente de Poseidon",
    "Réplica cerimonial inspirada no poderoso tridente do senhor dos mares.",
    "src/assets/tridente-poseidon.png",
    "Arma",
    "1.400 ₯",
  ],
  [
    "Égide de Atena",
    "Escudo lendário associado à proteção e à estratégia da deusa.",
    "src/assets/egide-atena.png",
    "Defesa",
    "1.300 ₯",
  ],
  [
    "Escudo de Aquiles",
    "Escudo inspirado na lendária armadura do maior guerreiro grego.",
    "src/assets/escudo-aquiles.png",
    "Defesa",
    "1.180 ₯",
  ],
  [
    "Elmo de Ares",
    "Elmo cerimonial dedicado ao deus da guerra.",
    "src/assets/elmo-ares.png",
    "Defesa",
    "760 ₯",
  ],
  [
    "Couraça de Hércules",
    "Armadura pesada inspirada nas façanhas do lendário herói.",
    "src/assets/couraca-heracles.png",
    "Defesa",
    "1.050 ₯",
  ],
  [
    "Manto de Hermes",
    "Manto leve utilizado por viajantes que desejam proteção durante seus caminhos.",
    "src/assets/manto-hermes.png",
    "Defesa",
    "620 ₯",
  ],
  [
    "Anel de Hermes",
    "Anel simbólico dedicado ao deus dos viajantes, comerciantes e mensageiros.",
    "src/assets/anel-hermes.png",
    "Acessório",
    "280 ₯",
  ],
  [
    "Coroa de Louros",
    "Coroa tradicional associada à vitória, honra e glória.",
    "src/assets/coroa-louros.png",
    "Acessório",
    "190 ₯",
  ],
  [
    "Colar de Afrodite",
    "Adorno inspirado na deusa do amor e da beleza.",
    "src/assets/colar-afrodite.png",
    "Acessório",
    "360 ₯",
  ],
  [
    "Bracelete de Zeus",
    "Bracelete decorativo marcado com símbolos associados ao senhor do Olimpo.",
    "src/assets/bracelete-zeus.png",
    "Acessório",
    "430 ₯",
  ],
  [
    "Dados de Hermes",
    "Pequeno conjunto de dados para viajantes, jogadores e comerciantes.",
    "src/assets/dados-hermes.png",
    "Acessório",
    "150 ₯",
  ],
  [
    "Chave dos Caminhos",
    "Uma chave simbólica destinada aos viajantes que nunca permanecem no mesmo lugar.",
    "src/assets/chave-caminhos.png",
    "Artefato",
    "315 ₯",
  ],
  [
    "Lâmpada de Héstia",
    "Lâmpada decorativa inspirada no fogo eterno do lar.",
    "src/assets/lampada-hestia.png",
    "Artefato",
    "270 ₯",
  ],
  [
    "Máscara de Dionísio",
    "Máscara ritual inspirada nas celebrações e no teatro dedicados ao deus.",
    "src/assets/mascara-dionisio.png",
    "Artefato",
    "480 ₯",
  ],
  [
    "Balança de Têmis",
    "Balança cerimonial que representa equilíbrio, lei e justiça.",
    "src/assets/balanca-temis.png",
    "Artefato",
    "730 ₯",
  ],
  [
    "Fragmento do Labirinto",
    "Fragmento de pedra atribuído às antigas construções de Creta.",
    "src/assets/fragmento-labirinto.png",
    "Relíquia",
    "240 ₯",
  ],
  [
    "Pena de Ícaro",
    "Pena preservada como lembrança de uma das histórias mais famosas da Grécia.",
    "src/assets/pena-icaro.png",
    "Relíquia",
    "175 ₯",
  ],
  [
    "Taça de Pátroclo",
    "Antiga taça cerimonial associada às tradições dos heróis aqueus.",
    "src/assets/taca-patroclo.png",
    "Relíquia",
    "410 ₯",
  ],
  [
    "Estátua de Orfeu",
    "Pequena escultura representando o lendário músico e poeta.",
    "src/assets/estatua-orfeu.png",
    "Relíquia",
    "520 ₯",
  ],
  [
    "Pergaminho de Homero",
    "Reprodução artesanal inspirada nos antigos poemas épicos gregos.",
    "src/assets/pergaminho-homero.png",
    "Relíquia",
    "380 ₯",
  ],
  [
    "Kopis de Aquiles",
    "Espada curva inspirada nas armas utilizadas pelos guerreiros da Grécia antiga.",
    "src/assets/kopis-aquiles.png",
    "Arma",
    "890 ₯",
  ],
  [
    "Arpão de Poseidon",
    "Arma cerimonial inspirada no domínio de Poseidon sobre os mares.",
    "src/assets/arpao-poseidon.png",
    "Arma",
    "940 ₯",
  ],
  [
    "Adaga de Hermes",
    "Pequena lâmina associada aos viajantes e mensageiros dos caminhos.",
    "src/assets/adaga-hermes.png",
    "Arma",
    "610 ₯",
  ],
  [
    "Foice de Cronos",
    "Réplica cerimonial da famosa arma associada ao antigo titã.",
    "src/assets/foice-cronos.png",
    "Arma",
    "1.350 ₯",
  ],
  [
    "Lança de Atena",
    "Lança cerimonial inspirada na estratégia e na disciplina da deusa.",
    "src/assets/lanca-atena.png",
    "Arma",
    "1.020 ₯",
  ],
  [
    "Escudo de Hefesto",
    "Escudo reforçado inspirado nas armas produzidas pelo deus ferreiro.",
    "src/assets/escudo-hefesto.png",
    "Defesa",
    "1.170 ₯",
  ],
  [
    "Elmo de Aquiles",
    "Elmo inspirado na armadura utilizada pelo lendário guerreiro grego.",
    "src/assets/elmo-aquiles.png",
    "Defesa",
    "820 ₯",
  ],
  [
    "Braçadeiras de Hércules",
    "Proteções resistentes inspiradas na força do maior dos heróis.",
    "src/assets/bracadeiras-heracles.png",
    "Defesa",
    "680 ₯",
  ],
  [
    "Escudo de Hércules",
    "Grande escudo cerimonial dedicado às jornadas do herói.",
    "src/assets/escudo-heracles.png",
    "Defesa",
    "1.090 ₯",
  ],
  [
    "Capuz de Hermes",
    "Capuz leve criado para viajantes que preferem discrição durante suas jornadas.",
    "src/assets/capuz-hermes.png",
    "Defesa",
    "340 ₯",
  ],
  [
    "Pingente de Apolo",
    "Pingente dourado inspirado no deus da música, da luz e das artes.",
    "src/assets/pingente-apolo.png",
    "Acessório",
    "290 ₯",
  ],
  [
    "Brinco de Ártemis",
    "Adorno inspirado na deusa da caça e dos territórios selvagens.",
    "src/assets/brinco-artemis.png",
    "Acessório",
    "210 ₯",
  ],
  [
    "Pulseira de Dionísio",
    "Pulseira decorativa inspirada nas festividades e nos mistérios do deus.",
    "src/assets/pulseira-dionisio.png",
    "Acessório",
    "260 ₯",
  ],
  [
    "Broche de Héstia",
    "Broche decorativo inspirado no fogo e na proteção do lar.",
    "src/assets/broche-hestia.png",
    "Acessório",
    "180 ₯",
  ],
  [
    "Colar de Hypnos",
    "Adorno associado ao deus do sono e às noites tranquilas.",
    "src/assets/colar-hypnos.png",
    "Acessório",
    "325 ₯",
  ],
];


const msgsOlmp = [
  "Zeus: Descontos relâmpago ativados em todo o catálogo!",
  "Poseidon: Frete grátis via rotas marítimas para todo o reino.",
  "Atena: +10% de desconto extra para quem usa a estratégia de comprar em lote.",
  "Apolo: Itens de iluminação e artes com preços abençoados.",
  "Ártemis: Artefatos de caça e caminhos selvagens em promoção especial.",
  "Dionísio: Festival no Olimpo! Ganhe um brinde em compras acima de 500 ₯.",
  "Hefesto: Todos os equipamentos de metal forjados com resistência máxima.",
  "Deméter: Ofertas fartas nesta estação dos caminhos.",
  "Ares: Armas e defesas preparadas para qualquer batalha.",
  "Afrodite: Acessórios com encanto divino e brilho irresistível.",
  "Héstia: Proteção para o seu lar e entrega garantida pela chama do Olimpo.",
  "Hermes: Compra relâmpago!!! Compre hoje e receba em até 2 horas..",
];

function mostrarProdutos(Lista) {
  div_cat.innerHTML = "";

  Lista.forEach((produto) => {
    const [nome, descricao, imagem, categoria, preco] = produto;

    const div_card = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const h4 = document.createElement("h4");

    h3.innerHTML = nome;
    img.src = imagem;
    img.alt = nome;
    p.innerHTML = descricao;
    span.innerHTML = categoria;
    h4.innerHTML = preco;

    div_card.className = "card";

    div_card.append(h3, img, p, span, h4);
    div_cat.append(div_card);
  });
}

let newCat;

mostrarProdutos(catalogoProdutos);

input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();

  if (value === "") {
    newCat = null;
    mostrarProdutos(catalogoProdutos);
  } else {
    newCat = catalogoProdutos.filter(
      (produto) =>
        produto[0].toLowerCase().includes(value) ||
        produto[1].toLowerCase().includes(value) ||
        produto[3].toLowerCase().includes(value),
    );

    if (newCat.length === 0) {
      div_cat.innerHTML =
        "<h3 style='color: silver;'>Produto não encontrado</h3>";
    } else {
      mostrarProdutos(newCat);
    }
  }
});

buttons.forEach((botao) => {
  botao.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    botao.classList.add("active");

    const categoria = botao.dataset.categ;
    if (categoria === "todos") {
      newCat = null;
      mostrarProdutos(catalogoProdutos);
      return;
    }

    newCat = catalogoProdutos.filter((produto) => produto[3] === categoria);
    mostrarProdutos(newCat);
  });
});

function ItemDoDia() {
  const divDay = document.getElementById("destaqueDia");

  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth();
  const day = data.getDay();

  const dataSeed = (year * 1000) + (month * 100) + day;

  const index = dataSeed % catalogoProdutos.length;
  const item = catalogoProdutos[index];

  const [nome, desc, imagm, , price] = item;

  divDay.className = "destaqueDay";

  const badge = document.createElement("span");
  badge.className = "destaqueBadge";
  badge.innerHTML = "ITEM DO DIA";

  const container = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const precoDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const p = document.createElement("p");

  container.className = "dayItemContainer";
  img.src = imagm;
  img.alt = nome;
  img.className = "destaqueImg";
  infoDiv.className = "destaqueInfo";
  h3.innerHTML = nome;
  p.innerHTML = desc;
  
  precoDiv.className = "destaquePrice";
  precoDiv.innerHTML = price;

  infoDiv.append(h3, p, precoDiv);
  container.append(img, infoDiv);
  divDay.innerHTML = "";
  divDay.append(badge, container);
}

ItemDoDia();

function mensagemOlimpo() {
  const elemMsg = document.getElementById("mensagemOlimpo");
  if (!elemMsg) return;

  const mensagemSorteada =
    msgsOlmp[Math.floor(Math.random() * msgsOlmp.length)];
  elemMsg.textContent = mensagemSorteada;
}

mensagemOlimpo();