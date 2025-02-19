// SEM PARAMERO
function mostraMaensagem (){
    console.log("Olá")
}
fuction contarAteTres(){
    for(let i = 1; i <= 3; i++){
        console.log(i)
    }
}
cortarAteTres()

function somar (a,b){
    let resultado = a + b
    return resultado
}

console.log(somar(3,7))
console.log(somar (10,3))
console.log(somar(8,125))

function aoQuadrado(numero){
    let quadrado = numero * numero
}

console.log(aoQuadrado(5))
console.log(aoQuadrado(8))
console.log(aoQuadrado(251))


//exc1
function javaScript(){
    console.log("Eu gosto de javaScript")
}

//exc2
function contarAteCinco(){
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
}

//exc3
function saudacao(){
    console.log("Olá, Pedro! Seja bem-vindo!")
}

//exc4
function multiplicarDoisNumeros (a,b){
    let resultado = a * b
    return resultado
}
console.log(multiplicarDoisNumeros(5,3))

//exc5
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
//exc6
function somar(num1, num2) {
    return num1 + num2;
}

//exc7
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

//exc8
function compararIdade(idades) {
    let maisVelho = idades[0];

    for (let i = 1; i < idades.length; i++) {
        if (idades[i] > maisVelho) {
            maisVelho = idades[i];
        }
    }

    return `A pessoa mais velha tem ${maisVelho} anos.`;
}