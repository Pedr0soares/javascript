for(let contador = 0; contador <= 5; contador++){
    console.log (contador)
}
    /////////////////////////////
    for (let c = 5; c >= 0; c--){
        console.log(c)
    }
    /////////////////////////////
    let numero = 4
    for (let mult = 1; mult <= 5; mult++){
        let resultado = mult * numero
        console.log (resultado)
    }
    //tabuada com for


    //ex1
    for (let contador = 1; contador <= 30; contador++) {
        console.log(contador);
    }

    //ex2
    for(let contagem = 30; contagem <= 1; contagem++){
        console.log(contagem)
    }

    //3
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Digite um número:"));
        
        if (numero > 50) {
            console.log("ACIMA DA MÉDIA");
        } else if (numero < 50) {
            console.log("ABAIXO DA MÉDIA");
        } else {
            console.log("NA MÉDIA");
        }
    }
    

  //ex4

  let numero1 = parseInt(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero1} x ${i} = ${numero1 * i}`);
}


//ex 5
let patinhos = prompt("Digite o número inicial de patinhos: ")
for (let num1 = patinhos; num1 > 0; num1--) {
    console.log(num1 + " patinho(s) foram passear");
    console.log("Além das montanhas");
    console.log("Para brincar");
    console.log("A mamãe gritou: Quá, quá, quá, quá");
    console.log("Mas só " + (num1 - 1) + " patinho(s) voltaram de lá.");
}
console.log("A mamãe patinha foi procurar");
console.log("Além das montanhas");
console.log("Na beira do mar");
console.log("A mamãe gritou: Quá, quá, quá, quá");
console.log("E os patinhos voltaram de lá.");

//ex 6
let i = prompt("Digite sua idade: ")
for (let i = 0; i < 10; i++) {
    let idade = prompt("Digite uma idade: ")
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

//ex 7
let votos = [];

for (let i = 0; i < 5; i++) {
let votos = prompt("Digite o voto (1-4 para candidatos, 5 para nulo, 6 para branco):")
}
for (let i = 0; i < 5; i++) {
  if (votos[i] == 1) {
    console.log("Voto " + (i + 1) + ": Candidato 1");
  } else if (votos[i] == 2) {
    console.log("Voto " + (i + 1) + ": Candidato 2");
  } else if (votos[i] == 3) {
    console.log("Voto " + (i + 1) + ": Candidato 3");
  } else if (votos[i] == 4) {
    console.log("Voto " + (i + 1) + ": Candidato 4");
  } else if (votos[i] == 5) {
    console.log("Voto " + (i + 1) + ": Nulo");
  } else if (votos[i] == 6) {
    console.log("Voto " + (i + 1) + ": Branco");
  } else {
    console.log("Voto " + (i + 1) + ": Inválido");
  }
}

