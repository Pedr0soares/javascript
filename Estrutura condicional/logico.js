//Verifica se a pessoa pode votar 
let idade = 20
let tituloEleitor = true 

if(idade >= 18 && tituloEleitor == true){
    console.log("Pode votar")
} else{
    console.log("Não pode votar")
}
let numero = 15 
if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")
} else{
    console.log("O número está fora do intervalo")
}

//Compra com desconto 
let valor = 190
let clienteVip = False 

if(valor >= 100 || clienteVip == true) {
    console.log("Você ganhou frete grátis")
}
else {
    console.log("Tem que pagar o frete")
}


//Número no intervalo
let num = 10 
if (num >=5 || num <= 20){
    console.log("Funcionou")
} else {
    console.log("Não funcionou")
}


//1 


let idadec = Number(prompt("Quantos anos você tem?"))
let carteirademotorista= true 

if(idadec >= 18 && carteirademotorista == true){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}



//2 
let anos = Number(prompt("Quantos anos você trabalha nessa empresa?"))
let clienteVip1 = false

if(anos >= 5 || clienteVip1 == true) {
    console.log("Você está elegível para promoção ")
}
else {
    console.log("Você não está elegível para promoção")
}


//3
let idade2 = Number(prompt("Quantos anos você tem?"))
 
if (idade2 >= 18 && idade2 <= 30) {
    console.log("Você pode entrar no evento")
} else{
    console.log("Você não pode entrar no evento")
}

//4
let idade3 = Number(prompt("Quantos anos você tem?"))
let vaga = false

if (idade3 >= 21 || vaga == true) {
    console.log ("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}

//5
let nome1 = Number(prompt("Qual é o seu nome?"))
let login = false
let senha = false
if (nome1 == "admin" && senha == 1234){
              console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

//6
let num2 = Number(prompt("Digite um número"))

if (num2 >= 10 && num2 <= 20) {
           console.log("O número está dentro do intervalo entre 10 e 20")
} else if  (num2 >= 30 && num2 <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

//7 
let num5 = Number(prompt("Digite um número"))

if (num5 <= 10 || num5 >= 100 && num5 == 50 ){
    console.log("Esse número é aceito")
} else {
    console.log("O número não é aceito ")
}