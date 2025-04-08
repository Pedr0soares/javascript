adicionar.addEventListener("click",function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo Item"
    lista.appendChild(novoItem)
})

remover.addEventListener("click",function(){
    if(lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})

function mudarCorBotao() {
    document.getElementById("botao").style.backgroundColor = "blue";
}