const wordList = [
    { palavra: "guitarra", dica: "Um instrumento musical com cordas." },
    { palavra: "oxigênio", dica: "Um gás incolor e inodoro essencial para a vida." },
    { palavra: "montanha", dica: "Uma grande elevação natural da superfície da Terra." },
    { palavra: "pintura", dica: "Uma forma de arte que usa cores em uma superfície para criar imagens ou expressões." },
    { palavra: "astronomia", dica: "O estudo científico de objetos e fenômenos celestes." },
    { palavra: "futebol", dica: "Um esporte popular jogado com uma bola esférica." },
    { palavra: "chocolate", dica: "Um doce feito de grãos de cacau." },
    { palavra: "borboleta", dica: "Um inseto com asas coloridas e corpo esguio." },
    { palavra: "história", dica: "O estudo dos eventos passados e da civilização humana." },
    { palavra: "pizza", dica: "Um prato salgado que consiste em uma base achatada redonda com coberturas." },
    { palavra: "jazz", dica: "Um gênero musical caracterizado pela improvisação e sincopação." },
    { palavra: "câmera", dica: "Um dispositivo usado para capturar e gravar imagens ou vídeos." },
    { palavra: "diamante", dica: "Uma pedra preciosa conhecida por seu brilho e dureza." },
    { palavra: "aventura", dica: "Uma experiência emocionante ou ousada." },
    { palavra: "ciência", dica: "O estudo sistemático da estrutura e comportamento do mundo físico e natural." },
    { palavra: "bicicleta", dica: "Um veículo movido por força humana com duas rodas." },
    { palavra: "pôr do sol", dica: "O desaparecimento diário do sol abaixo do horizonte." },
    { palavra: "café", dica: "Uma bebida popular feita de grãos de café torrados." },
    { palavra: "dança", dica: "Um movimento rítmico do corpo geralmente realizado ao som de música." },
    { palavra: "galáxia", dica: "Um vasto sistema de estrelas, gás e poeira mantidos juntos pela gravidade." },
    { palavra: "orquestra", dica: "Um grande conjunto de músicos tocando vários instrumentos." },
    { palavra: "vulcão", dica: "Uma montanha ou colina com uma abertura pela qual lava, fragmentos de rocha, vapor quente e gás são expelidos." },
    { palavra: "romance", dica: "Uma longa obra de ficção, geralmente com uma trama complexa e personagens." },
    { palavra: "escultura", dica: "Uma forma de arte tridimensional criada moldando ou combinando materiais." },
    { palavra: "sinfonia", dica: "Uma longa composição musical para orquestra completa, geralmente em vários movimentos." },
    { palavra: "arquitetura", dica: "A arte e a ciência de projetar e construir edifícios." },
    { palavra: "balé", dica: "Uma forma de dança clássica caracterizada por movimentos precisos e graciosos." },
    { palavra: "astronauta", dica: "Uma pessoa treinada para viajar e trabalhar no espaço." },
    { palavra: "cachoeira", dica: "Uma queda de água que desce de uma altura." },
    { palavra: "tecnologia", dica: "A aplicação do conhecimento científico para fins práticos." },
    { palavra: "arco íris", dica: "Um fenômeno meteorológico causado pela reflexão, refração e dispersão da luz." },
    { palavra: "universo", dica: "Toda a matéria existente, espaço e tempo como um todo." },
    { palavra: "piano", dica: "Um instrumento musical tocado ao pressionar teclas que fazem martelos atingirem cordas." },
    { palavra: "férias", dica: "Um período de tempo dedicado ao lazer, descanso ou relaxamento." },
    { palavra: "floresta tropical", dica: "Uma floresta densa caracterizada por alta pluviosidade e biodiversidade." },
    { palavra: "teatro", dica: "Um prédio ou área ao ar livre onde peças, filmes ou outras apresentações são encenadas." },
    { palavra: "telefone", dica: "Um dispositivo usado para transmitir som a longas distâncias." },
    { palavra: "língua", dica: "Um sistema de comunicação que consiste em palavras, gestos e sintaxe." },
    { palavra: "deserto", dica: "Uma terra árida ou estéril com pouca ou nenhuma precipitação." },
    { palavra: "girassol", dica: "Uma planta alta com uma grande cabeça de flor amarela." },
    { palavra: "fantasia", dica: "Um gênero de ficção imaginativa envolvendo magia e elementos sobrenaturais." },
    { palavra: "telescópio", dica: "Um instrumento óptico usado para visualizar objetos distantes no espaço." },
    { palavra: "brisa", dica: "Um vento suave." },
    { palavra: "oásis", dica: "Um ponto fértil em um deserto onde há água." },
    { palavra: "fotografia", dica: "A arte, o processo ou a prática de criar imagens registrando a luz ou outras radiações eletromagnéticas." },
    { palavra: "safári", dica: "Uma expedição ou jornada, geralmente para observar a vida selvagem em seu habitat natural." },
    { palavra: "planeta", dica: "Um corpo celestial que orbita uma estrela e não produz luz própria." },
    { palavra: "rio", dica: "Um grande curso natural de água que flui em um canal para o mar, um lago ou outro curso de água." },
    { palavra: "tropical", dica: "Relacionado ou situado na região entre o Trópico de Câncer e o Trópico de Capricórnio." },
    { palavra: "misterioso", dica: "Difícil ou impossível de entender, explicar ou identificar." },
    { palavra: "enigma", dica: "Algo que é misterioso, intrigante ou difícil de entender." },
    { palavra: "paradoxo", dica: "Uma afirmação ou situação que se contradiz ou desafia a intuição." },
    { palavra: "quebra cabeça", dica: "Um jogo, brinquedo ou problema projetado para testar a engenhosidade ou o conhecimento." },
    { palavra: "sussurro", dica: "Falar muito suavemente ou baixinho, muitas vezes de maneira secreta." },
    { palavra: "sombra", dica: "Uma área escura ou forma produzida por um objeto bloqueando a luz." },
    { palavra: "segredo", dica: "Algo mantido escondido ou desconhecido para os outros." },
    { palavra: "curiosidade", dica: "Um forte desejo de saber ou aprender algo." },
    { palavra: "imprevisível", dica: "Não pode ser previsto ou conhecido de antemão; incerto." },
    { palavra: "obfuscar", dica: "Confundir ou desconcertar alguém; tornar algo obscuro ou difícil de entender." },
    { palavra: "revelar", dica: "Tornar conhecido ou revelar algo previamente secreto ou desconhecido." },
    { palavra: "ilusão", dica: "Uma falsa percepção ou crença; uma aparência ou impressão enganosa." },
    { palavra: "luz da lua", dica: "A luz da lua." },
    { palavra: "vibrante", dica: "Cheio de energia, brilho e vida." },
    { palavra: "nostalgia", dica: "Um anseio sentimental ou afeição melancólica pelo passado." },
    { palavra: "brilhante", dica: "Excepcionalmente inteligente, talentoso ou impressionante." },
    { palavra: "umbanda", dica: "Religião de matriz africana." },
];


let palavraAtual = "";
let dicaAtual = "";
let palavraExibida = [];
let letrasErradas = [];
let maxTentativas = 6;
let pontos = 0;

function iniciarJogo() {
    document.getElementById("jogar-novamente").style.display = "none"; 
    const palavraObj = wordList[Math.floor(Math.random() * wordList.length)];
    palavraAtual = palavraObj.palavra.toUpperCase();
    dicaAtual = palavraObj.dica;

    // Inicializa a palavra exibida, mantendo os espaços em branco
    palavraExibida = [];
    for (let i = 0; i < palavraAtual.length; i++) {
        if (palavraAtual[i] === " ") {
            palavraExibida.push(" ");
        } else {
            palavraExibida.push("_");
        }
    }

    letrasErradas = [];
    maxTentativas = 6;

    document.getElementById("dica").textContent = "Dica: " + dicaAtual;
    document.getElementById("palavra-container").textContent = palavraExibida.join(" ");
    document.getElementById("forca").textContent = "Tentativas restantes: " + maxTentativas;
    document.getElementById("resultado").textContent = "";

    const letrasContainer = document.getElementById("letras");
    letrasContainer.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        const letraBtn = document.createElement("button");
        letraBtn.textContent = String.fromCharCode(i);
        letraBtn.classList.add("letra-btn");
        letraBtn.addEventListener("click", function () {
            verificarLetra(letraBtn.textContent);
            letraBtn.disabled = true;
        });
        letrasContainer.appendChild(letraBtn);
    }
}

function verificarLetra(letra) {
    letra = letra.toUpperCase();
    const palavraNormalizada = palavraAtual.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const letraNormalizada = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    let acerto = false;

    // Percorre a palavra para verificar se a letra existe
    for (let i = 0; i < palavraAtual.length; i++) {
        if (palavraNormalizada[i] === letraNormalizada) {
            palavraExibida[i] = palavraAtual[i]; // Mantenha o acento original e os espaços
            acerto = true;
        }
    }

    if (!acerto) {
        letrasErradas.push(letra);
        maxTentativas--;
    }

    document.getElementById("palavra-container").textContent = palavraExibida.join(" ");
    document.getElementById("forca").textContent = "Tentativas restantes: " + maxTentativas;

    verificarFimJogo();
}

function verificarFimJogo() {
    const palavraExibidaSemEspacos = palavraExibida.join("").replace(/\s/g, "");
    const palavraAtualSemEspacos = palavraAtual.replace(/\s/g, "");

    if (palavraExibidaSemEspacos === palavraAtualSemEspacos) {
        document.getElementById("resultado").textContent = "Você venceu!";
        document.body.classList.add("win");
        pontos += 10; 
        document.getElementById("pontos").textContent = "Pontos: " + pontos;
        desabilitarBotoes();
        document.getElementById("jogar-novamente").style.display = "block"; 
    } else if (maxTentativas <= 0) {
        document.getElementById("resultado").textContent = "Você perdeu! A palavra era: " + palavraAtual;
        document.body.classList.add("lose");
        desabilitarBotoes();
        document.getElementById("jogar-novamente").style.display = "block"; 
    }
}

function desabilitarBotoes() {
    const botoes = document.getElementsByClassName("letra-btn");
    for (const botao of botoes) {
        botao.disabled = true;
    }
}

function jogarNovamente() {
    document.body.classList.remove("win", "lose");
    iniciarJogo();
}

function removeAnimation() {
    setTimeout(() => {
        document.body.classList.remove("win", "lose");
    }, 2000);
}

document.getElementById("jogar-novamente").addEventListener("click", jogarNovamente);

iniciarJogo();
removeAnimation();
