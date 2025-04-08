

// Jogo Pedra, Papel e Tesoura
// Variáveis para armazenar os pontos do jogador e pc
let placarjogador = 0 
let placarPC = 0

//Variável para armazenar as rodadas
let rodadas = NUmber(prompt("Quantas vezes deseja jogar?"))
// Laço de repetiçãp que fará as rodadas
for(let i = 0; i<rodadas; i++){



const escolhaJogador = prompt("EScolha pedra, papel ou tesoura: ")
// solicita que o usuário informe qual ele quer

const escolhaPC = [ "Pedra", "Papel", "Tesoura"]
[ Math.floor(Math.random ()* 3 )]

//Gera uma escolha aleatoria para o computador
// Criamos um array com as opções e usamos o radom para escolher uma de forma aleatoria

alert('Você escolheu $ {EscolhaJogador}')
alert('O computador escolheu ${EscolhaPC}')

// mostrando qual foi a nossa escolha e qual foi a escolha do computador

//Compara se a nossa escolha foi igual a do computador

if (EscolhaJpgador == EscolhaPC) {
    alert("Empate")
} else if (EscolhaJogador == "pedra" && EscolhaPC == "papel") {
    alert ("Você venceu")
    placarjogador++
} else if (EscolhaJogador == "papel" && EscolhaPC == "pedra") {
    alert ("Você venceu")  
    placarjogador++  
} else if (EscolhaJogador == "papel" && EscolhaPC == "Tesoura") {
    alert ("Você venceu")  
    placarjogador++  
} else {
    alert ("Você perdeu")
    placarPC++
}
//Exibe o placar no console
console.log("Placar jogador:", placarjogador)
console.log("Placar jogador:", placarPC)

//Placar final
alert('Dim de jogo! Plcar final: jogador ${placarjogador} X ${placarPC} computador')
}