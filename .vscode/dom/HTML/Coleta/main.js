// 1 
let num = parseFloat(prompt("Digite um número:"));
console.log("Arredondado:", Math.round(num));
console.log("Teto:", Math.ceil(num));
console.log("Piso:", Math.floor(num));

// 2 
let nome = prompt("Digite um nome:");
console.log("Maiúsculas:", nome.toUpperCase());
console.log("Minúsculas:", nome.toLowerCase());

// 3 
let numeroAleatorio = Math.floor(Math.random() * 101); // Entre 0 e 100
console.log("Número aleatório:", numeroAleatorio);

// 4 
let numDecimal = parseFloat(prompt("Digite um número decimal:"));
console.log("Com duas casas decimais:", numDecimal.toFixed(2));

// 5 
let frase = prompt("Digite uma frase:");
let palavraAntiga = prompt("Digite a palavra a ser substituída:");
let palavraNova = prompt("Digite a nova palavra:");
console.log("Nova frase:", frase.replace(palavraAntiga, palavraNova));

// 6 
let valor = prompt("Digite um valor:");
console.log(isNaN(valor) ? "Não é um número" : "É um número");

// 7 
let palavra = prompt("Digite uma palavra:");
let posicao = parseInt(prompt("Digite um número para ver a letra correspondente:"));
console.log(`A letra na posição ${posicao} é:`, palavra.charAt(posicao));

// 8 
let primeiroNome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");
console.log("Nome completo:", primeiroNome + " " + sobrenome);

// 9 
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("Soma:", num1 + num2);

// 10 
let idade = parseInt(prompt("Digite sua idade:"));
console.log(idade >= 18 ? "Você pode dirigir!" : "Você não pode dirigir.");
