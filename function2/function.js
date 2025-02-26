// Ex1 
function saudacao(nome) {
    console.log(`Olá, ${nome}! Como vai?`);
}

// Ex2 
function soma(a, b) {
    console.log(a + b);
}

// Ex3 
function areaRetangulo(base, altura) {
    return base * altura;
}

// Ex4 
function dobro(numero) {
    return numero * 2;
}

// Ex5 
function quadrado(numero) {
    console.log(numero ** 2);
}

// Ex6 
function maioridade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

// Ex7 
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// Exemplos de uso
saudacao("Gabriel");
soma(5, 3);
console.log(areaRetangulo(4, 5));
console.log(dobro(6));
quadrado(7);
console.log(maioridade(20));
console.log(media(8, 9, 10));
