let texto = document.getElementById("texto");

        function mudarTexto() {
            texto.innerText = "Texto Alterado";
        }

        function mudarCor() {
            texto.style.color = "red";
            document.body.style.backgroundColor = "blue";
        }

        function trocarfundo() {
            let campo = document.getElementById("campo");
            campo.style.backgroundColor = "yellow";
        }

        function troca() {
            let imagem = document.getElementById("imagem");
            imagem.src = "carro1.jpg";
        }

        function destroca() {
            let imagem = document.getElementById("imagem");
            imagem.src = "carro2.jpg";
        }

        let mensagem = document.getElementById("mensagem");

        function outroTexto() {
            mensagem.innerText = "Texto Alterado";
        }

        function voltaTexto() {
            mensagem.innerText = "Passe o mouse aqui";
        }

        function aparece() {
            let sumir = document.getElementById("sumir");
            sumir.style.display = sumir.style.display === "none" ? "block" : "none";
        }

        function aleatorio() {
            let tamanho = document.getElementById("tamanho");
            let novoTamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10; // Entre 10px e 40px
            tamanho.style.fontSize = novoTamanho + "px";
        }