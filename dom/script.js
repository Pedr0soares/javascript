function mudarCorTexto() {
    document.getElementById("texto").style.color = "red";
}

function mudarCorBotao() {
    document.getElementById("botao").style.backgroundColor = "blue";
}

function aumentarFonte() {
    document.getElementById("textoGrande").style.fontSize = "24px";
}

function hoverBloco() {
    document.getElementById("bloco").style.backgroundColor = "blue";
}

function sairBloco() {
    document.getElementById("bloco").style.backgroundColor = "white";
}

function aumentarImagem() {
    let img = document.getElementById("imagem");
    img.style.width = "200px";
    img.style.height = "200px";
}

function arredondarImagem() {
    document.getElementById("imagemRedonda").style.borderRadius = "50%";
}

function alterarParagrafo1() {
    let p = document.getElementById("paragrafo1");
    p.style.backgroundColor = "yellow";
    p.style.color = "blue";
}

function alterarParagrafo2() {
    let p = document.getElementById("paragrafo2");
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontSize = "20px";
}

function alterarParagrafo3() {
    let p = document.getElementById("paragrafo3");
    p.style.backgroundColor = "purple";
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.borderRadius = "10px";
}