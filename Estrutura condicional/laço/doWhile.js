// Exemplo 1
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 20);

// Exemplo 2
let resposta = "s";
do {
    resposta = prompt("Deseja continuar? (s/n)");
} while (resposta === "s");

// Exemplo 3
let numeroFinal = parseInt(prompt("Digite um número até o qual você deseja ver a sequência:"));
let numeroInicial = 1;
do {
    console.log(numeroInicial);
    numeroInicial++;
} while (numeroInicial <= numeroFinal);

// Exemplo 4
let i = 1;
do {
    console.log(i);
    i += 2;
} while (i <= 31);

// Exemplo 5
let  = 0;
do {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero > 0) {
        console.log("NÚMERO POSITIVO");
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO");
    } else {
        console.log("O NÚMERO É ZERO");
    }
    i++;
} while (i < 5);

// Exemplo 6
let continuar = "s";
do {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    console.log("A soma dos números é: " + (num1 + num2));
    continuar = prompt("Deseja fazer outra conta? (s/n)");
} while (continuar === "s");
