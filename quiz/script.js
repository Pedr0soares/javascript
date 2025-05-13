const perguntas = [
    {
        pergunta: "Qual o nome da nossa escola?",
        opcoes: [
            "Luis Eulalio de Bueno Vidigal Filho",
            "Luis Eulalio",
            "Luis de Bueno",
            "Luis Eulalio de Vidigal"
        ],
        correta: 0
    },
    {
        pergunta: "Qual o nome do nosso curso?",
        opcoes: [
            "Analise e Desenvolvimento de Sistemas",
            "Sistemas de informação",
            "Desenvolvimento de sistemas",
            "Ciência da Computação"
        ],
        correta: 2
    },
    {
        pergunta: "Em que ano foi fundada a nossa escola?",
        opcoes: [
            "1999", "1942", "1985", "1970"
        ],
        correta: 1
    }
];

// Variáveis para controlar o quiz
let perguntaAtual = 0;
let pontuacao = 0;
let erros = 0;
let opcaoSelecionada = null;

// Seleciona os elementos do HTML
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const botaoProxima = document.getElementById("proxima");
const quiz = document.getElementById("quiz");
const pontuacaoFinal = document.getElementById("pontuacao");
const valorPontuacao = document.getElementById("valor-pontuacao");
const botaoReiniciar = document.getElementById("reiniciar");
const errosContador = document.getElementById("erros");
const acertos = document.getElementById("acertos");

// Atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao;
    errosContador.textContent = erros;
}

// Mostra a pergunta atual
function mostrarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual];
    pergunta.textContent = perguntaAtualObj.pergunta;
    opcoes.textContent = ""; // Limpa as opções anteriores

    // Cria os botões de opção
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.addEventListener("click", () => selecionarOpcao(indice));
        opcoes.appendChild(botao);
    });

    opcaoSelecionada = null;
    botaoProxima.disabled = true;
}

// Quando o usuário seleciona uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice;
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach((botao, i) => {
        botao.classList.toggle("selecionada", i === indice);
    });
    botaoProxima.disabled = false;
}

// Mostra a pontuação final
function mostrarPontuacao() {
    quiz.classList.add("esconder");
    pontuacaoFinal.classList.remove("esconder");
    valorPontuacao.textContent = pontuacao;
}

// Avança para a próxima pergunta
botaoProxima.addEventListener("click", () => {
    if (opcaoSelecionada === perguntas[perguntaAtual].correta) {
        pontuacao++;
    } else {
        erros++;
    }

    atualizarPlacar();

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarPontuacao();
    }
});

// Reinicia o quiz (caso tenha botão de reinício)
botaoReiniciar.addEventListener("click", () => {
    perguntaAtual = 0;
    pontuacao = 0;
    erros = 0;
    opcaoSelecionada = null;

    quiz.classList.remove("esconder");
    pontuacaoFinal.classList.add("esconder");

    atualizarPlacar();
    mostrarPergunta();
});

// Inicia o quiz na primeira pergunta
mostrarPergunta();
atualizarPlacar();
