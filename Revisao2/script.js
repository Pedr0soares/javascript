//script.js
//entrada de dados - prompt
let nome = prompt("Qual seu nome?")
console.log("Meu nom é", nome)
//entrada de dados - value
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = "Olá" + input.value
})
//-----------------------------------------------
//conversão de tipos
const valor = document.getElementById("valor")
const converter = document.getElementById("converter")
const resultado = document.getElementById("resultado")

converter.addEventListener("click", () => {
    let texto = valor.value
    let numero = Number(texto)
    let dobro = numero * 2
    resultado.innerText = "O dobro é" + dobro
})