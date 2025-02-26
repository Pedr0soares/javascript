// 1 - Contador
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2 - Tabuada
let num = parseInt(prompt("Digite um número para ver a tabuada:"));
let j = 1;
while (j <= 10) {
    console.log(`${num} x ${j} = ${num * j}`);
    j++;
}

// 3 - Contagem Regressiva
let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}

// 4 - Verificação de senha
let senha;
while (senha !== "12345") {
    senha = prompt("Digite a senha:");
}
console.log("Acesso permitido!");

// 5 - Contador de 50 a 100
let l = 50;
while (l <= 100) {
    console.log(l);
    l++;
}

// 6 - Sequência numérica de 5 em 5
let m = 0;
while (m <= 100) {
    console.log(m);
    m += 5;
}

// 7 - Mostrando mensagem
let n = 0;
while (n < 5) {
    console.log("Eu gosto de JavaScript");
    n++;
}

// 8 - Exibindo o nome
let nome = prompt("Digite seu nome:");
let vezes = parseInt(prompt("Digite um número:"));
let o = 0;
while (o < vezes) {
    console.log(nome);
    o++;
}
