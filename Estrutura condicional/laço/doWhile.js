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