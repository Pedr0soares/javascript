    function mostrarNome() {
    let nome = document.getElementById("nome").value 
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "Oi, " + nome
    }



//Mostrar o inputde um tipo texto

function mostrarIdade(){
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
    resultado.innerText ="Voce tem" + idade + "anos."
} //mostrando o input de um tipo número

function mostrarComentario(){
    let comentario = document.getElementById("comentario").value
    let comentarioExibido = document.getElementById("comentarioExibido")
    comentarioExibido.innerText = "Comentário:" + comentario
} // mostrar o texto do textoarea


function atualizarTexto(){
let campoTexto = document.getElementById("campoTexto").value
let digitado = document.getElementById("textoDigitado")
digitado.innerText = "Voce digitou:" + campoTexto

} //mostrar o texto do inout em tempo real


