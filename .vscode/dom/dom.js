let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover", function (){
    imagem.setAttribute("src","carro2.jpg")
})

imagem.addEventListener("mouseout", function (){
    imagem.setAttribute("src","carro1.jpg")
})

let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

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