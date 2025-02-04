//Numero positivo, negativo ou zero 
let numero = Number(prompt("Escolha u, número:"))
if (numero > 0) {
    console.log("Positivo")
}
else if (numero < 0){
    console.log("Negativo")
}
else{
    console.log("Zero")
}
console.log("--------------------")
let nota = Number(prompt("Qual a nota?"))
if (nota >= 9){
    console.log("Exelente")
} else if (nota >=7){
    console.log("Bom")
} else if (nota >= 5){
    console.log("Regular")
} else {
    console.log("Ruim")
}

//1

console.log("--------------------")
let idade = Number(prompt("Qual sua idade?"))
if (idade < 12){
    console.log("Criança")
} else if (idade < 17){
    console.log("Adolecente")
} else if (idade < 59){
    console.log("Adulto")
} else if (idade >=60 ) {
    console.log("Idoso")
}

//2
console.log("--------------------")
let temperatura = Number(prompt("Qual a temperatura?"))
if (temperatura < 10){
    console.log("Muito Frio")
} else if (temperatura < 20){
    console.log("Frio")
} else if (temperatura < 30){
    console.log("Agrádavel")
} else if (temperatura >=30 ) {
    console.log("Muito Quente")
}

//3
console.log("--------------------")
let turno = "m"

if (turno === "m" || turno === "M") {
    console.log("Bom dia!")
} else if (turno === "v" || turno === "V") {
    console.log("Boa Tarde!")
} else if (turno === "n" || turno === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Turno inválido")
}


//4
console.log("--------------------");
let valorCompra = Number(prompt("Qual o valor da compra?"));

if (valorCompra <= 100) {
    console.log("Desconto de 5%");
} else if (valorCompra <= 200) {
    console.log("Desconto de 10%");
} else {
    console.log("Desconto de 15%");
}

//5
console.log("--------------------");
let nota5 = Number(prompt("Qual a nota do aluno?"));

if (nota5 > 90) {
    console.log("A");
} else if (nota5 > 80) {
    console.log("B");
} else if (nota5 > 70) {
    console.log("C");
} else if (nota5 > 60) {
    console.log("D");
} else {
    console.log("F");
}


//6 
console.log("--------------------");
let dia = Number(prompt("Digite um número de 1 a 7 para o dia da semana:"));

if (dia === 1) {
    console.log("Domingo");
} else if (dia === 2) {
    console.log("Segunda-feira");
} else if (dia === 3) {
    console.log("Terça-feira");
} else if (dia === 4) {
    console.log("Quarta-feira");
} else if (dia === 5) {
    console.log("Quinta-feira");
} else if (dia === 6) {
    console.log("Sexta-feira");
} else if (dia === 7) {
    console.log("Sábado");
} else {
    console.log("Número inválido! Digite um número de 1 a 7.");
}

//7
console.log("--------------------");
let distancia = Number(prompt("Qual a distância da pista de corrida em metros?"));

if (distancia < 400) {
    console.log("Pista curta");
} else if (distancia < 800) {
    console.log("Pista média");
} else if (distancia < 1500) {
    console.log("Pista longa");
} else {
    console.log("Pista muito longa");
}

//8
console.log("--------------------");
let pontuacao = Number(prompt("Qual a pontuação do jogador?"));

if (pontuacao < 1000) {
    console.log("Iniciante");
} else if (pontuacao < 5000) {
    console.log("Intermediário");
} else if (pontuacao < 10000) {
    console.log("Avançado");
} else {
    console.log("Mestre");
}
