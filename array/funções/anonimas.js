//Função anonima
let saudacao = function(nome){
    console.log("Oi", nome)
}
saudacao("Juliana")
saudacao("Felipe")

//Arrow function (função da seta)
let cumprimento = (nome) => {
    console.log("oi", nome)
}
cumprimento("Luiz")
cumprimento("José")

//Função anonima
let soma = function(a,b){
    let resultado = a + b
    return resultado
}
console.log(soma(5,3))

//Arrow Fuction
let adicao = (a,b) => {
    let resultado = a + b 
    return resultado
}
console.log(adicao(6,4))

// Função anonima 
let dobro = function(numero){
    let resultado = numero * 2
    return resultado
}
console.log(dobro(5))

//Arrow Fuction 
let vezesdois = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(vezesDois(8))



// 1 
let saudacao1 = function(nome) {
    console.log(`Olá, ${nome}! Como vai?`);
};
saudacao1("Pedro");

// 2 
let soma1 = function(a, b) {
    return a + b;
};
console.log(soma1(5, 2));

// 3 
let area = function(base, altura) {
    return base * altura;
};
console.log(area(5, 19));

// 4 
let dobro1 = numero => numero * 2;
console.log(dobro(6));

// 5 
let quadrado = numero => numero ** 2;
console.log(quadrado(4));

// 6 
let verificarIdade = idade => {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
};
console.log(verificarIdade(20));
console.log(verificarIdade(15));

// 7 
let calcularMedia = (a, b, c) => {
    return (a + b + c) / 3;
};
console.log(calcularMedia(7, 8, 9));
