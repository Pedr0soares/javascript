//1
let num1 = 10;  // Primeiro número
let num2 = 5;   // Segundo número


console.log(num1 > num2);   
console.log(num1 <= num2);  
console.log(num1 === num2); 


//2 

let idade = 20;  // Você pode alterar esse valor para testar outras idades

let podeVotar = idade >= 16;

let obrigatorioVotar = idade >= 18 && idade <= 70;

console.log("O usuário pode votar? " + podeVotar);
console.log("O usuário é obrigado a votar? " + obrigatorioVotar);



//ex 3 
let idade2 = 23

let maior = idade2 >= 18
let idosa = idade2 >= 60

console.log(maior)
console.log(idosa)

//ex 4
let usuario = "admin"

let nomeUsuario = "usuario" == "admin"
let nomeUsuario1 = "usuario" != "admin"

console.log(nomeUsuario)
console.log(nomeUsuario1)

//ex 5
let numero = 15

let divisivel = 15 % 3
let divisive2 = 15 % 5

console.log(divisivel)
console.log(divisive2)

//ex 6
let saldo = 350
let saque = 200

let valorSaque = "saldo" <= "saque"
let saldoMaior = valorSaque > 100

console.log(valorSaque)
console.log(saldoMaior)