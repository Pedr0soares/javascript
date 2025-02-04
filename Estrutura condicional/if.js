//Estrutura Condicionaç - if else 

//1
let idade = prompt("Qual sua idade?")
console.log("Sua idade é ", idade)

if (idade >= 18) {
    console.log("Voce é o maior de idade")
}
else {
    console.log("Voce é menor de idade")
}

//2
console.log("------------------------------")
// Verificando se um número é impar ou par 

let numero = prompt("Escolha um numero:")
let resultado = numero % 2 //resto
if (resultado == 0){
    console.log("O número é par")
}
else{
    console.log("O número é impar")
}

//3
console.log("----------------")
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt("Qual a Segunda nota:")
let total1 = (nota1 + noa2) /2 
if (total >=7){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}

//4
console.log("--------------")
let idade8 = prompt("Qual sua idade?")
console.log("Sua idade é ", idade8)

if (idade8 >= 18) {
    console.log("Voce pode ir no evento")
}
else {
    console.log("Voce não pode entrar no evento")
}

//5 
console.log("----------------")
let senha = prompt("Digite sua senha:")
console.log("Sua senha é:", senha)

if (senha == 1234) {
    console.log("Senha Correta")
}
else {
    console.log("Senha Incorreta")
}

//6
console.log("--------------")
let temperatura = prompt("Qual a temperatura?")
console.log("Sua temperatura é: ", temperatura)

if (temperatura >= 30) {
    console.log("Está quente")
}
else {
    console.log("Está frio")
}

//7
console.log("---------------")
let numero9 = prompt("Digite um número:")
console.log("O número é: ", numero9)

if (numero9 >= 0) {
    console.log("Número positivo")
}
else {
    console.log("Número negativo")
}