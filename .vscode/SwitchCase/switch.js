// 1 - Dias da Semana com Números Correspondentes
let dia = parseInt(prompt("Digite um número de 1 a 7 para ver o dia da semana correspondente:"));
switch (dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terça-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sábado"); break;
    default: console.log("Número inválido. Insira um valor entre 1 e 7.");
}

// 2 - Classificação de Idade
let idade = parseInt(prompt("Digite uma idade específica:"));
switch (idade) {
    case 5: console.log("Infantil A"); break;
    case 10: console.log("Infantil B"); break;
    case 15: console.log("Juvenil A"); break;
    case 20: console.log("Juvenil B"); break;
    case 30: console.log("Adulto"); break;
    default: console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.");
}

// 3 - Turno de Trabalho
let turno = prompt("Digite seu turno (M, V ou N):").toUpperCase();
switch (turno) {
    case "M": console.log("Bom dia!"); break;
    case "V": console.log("Boa tarde!"); break;
    case "N": console.log("Boa noite!"); break;
    default: console.log("Turno inválido. Insira M, V ou N.");
}

// 4 - Números e Mensagens
let numero = parseInt(prompt("Digite um número de 1 a 5:"));
switch (numero) {
    case 1: console.log("Mensagem 1"); break;
    case 2: console.log("Mensagem 2"); break;
    case 3: console.log("Mensagem 3"); break;
    case 4: console.log("Mensagem 4"); break;
    case 5: console.log("Mensagem 5"); break;
    default: console.log("Número fora do intervalo. Insira um valor entre 1 e 5.");
}

// 5 - Estações do Ano
let estacao = parseInt(prompt("Digite um número de 1 a 4 para ver a estação correspondente:"));
switch (estacao) {
    case 1: console.log("Primavera"); break;
    case 2: console.log("Verão"); break;
    case 3: console.log("Outono"); break;
    case 4: console.log("Inverno"); break;
    default: console.log("Estação inválida. Insira um número de 1 a 4.");
}
