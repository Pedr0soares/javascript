let contardor = 0
let contador1 = 0
while(contador != 5){
    //verifica primeiro, executa depois
    console.log("while:", contador)
    contador++
}
do{ //executa primeiro, verifica depois
    console.log("do while", contador)
    contador1++
} while (contador1 != 5)


    //segundo Exemplo 
    let numero = 5
    do {
        console.log(numero)
        numero -=2
    } while(contador >= 0)

        //terceiro exemplo 
        let idade = prompt("Qual sua idade? ")
        do {
            if (idade > 0 ){
                console.log("Idade valida ")
            }
        
        else{
            console.log("Idade invalida")
        }
        idade = promopt("Qual sua idade? ")
        } while(idade >= 0)


            //ex1
            let contador = 1;
while (contador <= 20) {
    console.log(contador);
    contador++;
}

//2 
let resposta = "s";
while (resposta === "s") {
    resposta = prompt("Deseja continuar? (s/n)");
}

//3 
let numeroFinal = parseInt(prompt("Digite um número até o qual você deseja ver a sequência:"));
let numeroInicial = 1;

while (numeroInicial <= numeroFinal) {
    console.log(numeroInicial);
    numeroInicial++;
}
//ex4 
let i = 1;
while (i <= 31) {
    console.log(i);
    i += 2;
}

//5 
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero > 0) {
        console.log("NÚMERO POSITIVO");
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO");
    } else {
        console.log("O NÚMERO É ZERO");
    }
}


//6 
let continuar = "s";
while (continuar === "s") {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    console.log("A soma dos números é: " + (num1 + num2));
    continuar = prompt("Deseja fazer outra conta? (s/n)");
}


            