const perguntas = [
    {
        pergunta: "Qual dessas alternativas representa uma fonte de energia renovável?",
        opcoes: [
           " A) Carvão mineral",
            "B) Petróleo",
            "C) Energia solar",
            "D) Gás natural"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a principal consequência do desmatamento da floresta amazônica para o clima global?",
        opcoes: [
            "A) Redução da biodiversidade apenas no Brasil",
            "B) Aumento da incidência de chuvas no Nordeste",
            "C) Redução da emissão de CO₂ para a atmosfera",
            "D) Aumento do efeito estufa por liberação de carbono"
        ],
        correta: 3
    },
    {
        pergunta: "O excesso de fertilizantes nitrogenados nas lavouras pode causar que problema em rios e lagos?",
        opcoes: [
            "A) Eutrofização", "B) Aumento da salinidade", "C) Redução do pH", "D) Sedimentação"
        ],
        correta: 0
    },
    {
        pergunta: "Qual organela celular é responsável pela produção de energia nas células eucariontes?",
        opcoes: [
            "A) Ribossomo", "B)  Núcleo", "C)  Mitocôndria", "D) Lisossomo"
        ],
        correta: 2
    },
    {
        pergunta: "Ao ligar uma lâmpada de 100W em uma voltagem de 220V, qual a corrente elétrica que passa por ela?",
        opcoes: [
            "A) 0,22 A", "B)  2,2 A", "C)  0,45 A", "D) 4,5 A"
        ],
        correta: 1
    },
    {
        pergunta: "Ao usar um chuveiro elétrico de 5500 W durante 10 minutos, qual a quantidade de energia consumida (em kWh)?",
        opcoes: [
            "A) 0,55 kWh", "B)   5,5 kWh", "C)  0,92 kWh", "D) 1,52 kWh"
        ],
        correta: 2
    },
    {
        pergunta: "O que acontece com as moléculas da água quando ela passa do estado líquido para o gasoso?",
        opcoes: [
            "A) Elas diminuem de volume", "B)  Elas perdem energia cinética", "C)   Elas se aproximam umas das outras", "D)  Elas se afastam e ganham energia cinética"
        ],
        correta: 3
    },
    {
        pergunta: "Se um casal heterozigoto para albinismo tiver filhos, qual a chance de nascer uma criança albina (genótipo aa)?",
        opcoes: [
            "A)100%", "B)  75%", "C)   50%", "D)  25%"
        ],
        correta: 3
    },
    {
        pergunta: "Uma solução com pH igual a 2 é considerada:",
        opcoes: [
            "A) Neutra", "B)  Levemente ácida", "C)   Fortemente ácida", "D)  Fortemente básica"
        ],
        correta: 2
    },
    {
        pergunta: "A camada de ozônio é importante para a vida na Terra porque:",
        opcoes: [
            "A) Impede a entrada de oxigênio", "B)  Permite maior radiação solar", "C)   Absorve a radiação ultravioleta", "D) Impede a chuva ácida"
        ],
        correta: 2
    }

];

// Variáveis de controle
let perguntaAtual = 0;
let pontuacao = 0;
let erros = 0;
let opcaoSelecionada = null;

// Elementos HTML
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

// Exibe a pergunta atual
function mostrarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual];
    pergunta.textContent = perguntaAtualObj.pergunta;
    opcoes.textContent = "";

    // Cria botões de opções
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

// Seleciona uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice;
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach((botao, i) => {
        botao.classList.toggle("selecionada", i === indice);
    });
    botaoProxima.disabled = false;
}

// Exibe a pontuação final
function mostrarPontuacao() {
    quiz.classList.add("esconder");
    pontuacaoFinal.classList.remove("esconder");
    valorPontuacao.textContent = pontuacao;
}

// Botão de próxima pergunta
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

// Botão de reinício
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

// Inicialização
mostrarPergunta();
atualizarPlacar();
