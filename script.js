const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");

// Link do grupo
botaoSim.addEventListener("click", () => {
    window.location.href = "https://chat.whatsapp.com/GmAKvPOuZhY9vsuFPSZGiS";
});

const frases = [
    "💔 Não",
    "😅 Tem certeza?",
    "🥺 Pensa melhor...",
    "😭 Última chance!",
    "😢 Não faz isso comigo...",
    "🙏 Vai, clica no Sim!",
    "❤️ Deus está te chamando!",
    "😂 Você nunca vai conseguir!"
];

let tentativas = 0;

function moverBotao() {

    botaoNao.style.position = "fixed";

    const largura = botaoNao.offsetWidth;
    const altura = botaoNao.offsetHeight;

    const margem = 20;

    const x = Math.random() * (window.innerWidth - largura - margem);
    const y = Math.random() * (window.innerHeight - altura - margem);

    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

    // Muda o texto
    tentativas++;

    if (tentativas < frases.length) {
        botaoNao.textContent = frases[tentativas];
    } else {
        botaoNao.textContent = frases[frases.length - 1];
    }

    // Faz o botão Sim crescer
    const tamanho = 20 + tentativas * 4;

    botaoSim.style.fontSize = tamanho + "px";
    botaoSim.style.padding =
        (15 + tentativas * 2) + "px " +
        (35 + tentativas * 3) + "px";
}

// Computador
botaoNao.addEventListener("mouseenter", moverBotao);

// Celular
botaoNao.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBotao();
}, { passive: false });

// Caso alguém consiga clicar
botaoNao.addEventListener("click", (e) => {
    e.preventDefault();
    moverBotao();
});