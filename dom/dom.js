document.addEventListener("DOMContentLoaded", () => {
    // 1 - Mudar a cor de um botão
    const btnColor = document.createElement("button");
    btnColor.textContent = "Mudar Cor";
    document.body.appendChild(btnColor);
    let isRed = false;
    btnColor.addEventListener("click", () => {
        btnColor.style.backgroundColor = isRed ? "blue" : "red";
        isRed = !isRed;
    });

    // 2 - Sistema de likes
    const btnLike = document.createElement("button");
    let likes = 0;
    btnLike.textContent = `Curtir (${likes})`;
    document.body.appendChild(btnLike);
    btnLike.addEventListener("click", () => {
        likes++;
        btnLike.textContent = `Curtir (${likes})`;
    });

    // 3 - Amor e ódio
    const divTexts = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        let p = document.createElement("p");
        p.textContent = "Não gosto de JavaScript";
        divTexts.appendChild(p);
    }
    document.body.appendChild(divTexts);
    const btnChangeText = document.createElement("button");
    btnChangeText.textContent = "Mudar Texto";
    document.body.appendChild(btnChangeText);
    btnChangeText.addEventListener("click", () => {
        divTexts.querySelectorAll("p").forEach(p => {
            p.textContent = "Eu gosto de JavaScript";
        });
    });

    // 4 - Mensagem enviada
    const msg = document.createElement("p");
    msg.textContent = "Esta é uma mensagem";
    document.body.appendChild(msg);
    const btnSendMsg = document.createElement("button");
    btnSendMsg.textContent = "Enviar mensagem";
    document.body.appendChild(btnSendMsg);
    btnSendMsg.addEventListener("click", () => {
        msg.style.display = "none";
        btnSendMsg.textContent = "Mensagem enviada";
    });

    // 5 - Ajuste de display
    const divDisplay = document.createElement("div");
    const text1 = document.createElement("p");
    text1.textContent = "Texto 1";
    const text2 = document.createElement("p");
    text2.textContent = "Texto 2";
    divDisplay.appendChild(text1);
    divDisplay.appendChild(text2);
    document.body.appendChild(divDisplay);
    const btnAdjust = document.createElement("button");
    btnAdjust.textContent = "Ajustar";
    document.body.appendChild(btnAdjust);
    btnAdjust.addEventListener("click", () => {
        divDisplay.style.display = "flex";
        divDisplay.style.gap = "10px";
    });

    // 6 - Formas geométricas
    const shape = document.createElement("div");
    shape.style.width = "200px";
    shape.style.height = "200px";
    shape.style.backgroundColor = "blue";
    document.body.appendChild(shape);
    const btnCircle = document.createElement("button");
    btnCircle.textContent = "Círculo";
    document.body.appendChild(btnCircle);
    const btnSquare = document.createElement("button");
    btnSquare.textContent = "Quadrado";
    document.body.appendChild(btnSquare);
    btnCircle.addEventListener("click", () => {
        shape.style.borderRadius = "50%";
    });
    btnSquare.addEventListener("click", () => {
        shape.style.borderRadius = "0";
    });
})