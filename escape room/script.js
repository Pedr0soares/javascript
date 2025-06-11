const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,
    livro: false,
    janela: false,
    armario: false
}

function menuPrincipal(){
    console.log("\n🔐 Você está em uma sala misteriosa e trancada.")
    console.log("Ao seu redor, você vê:")
    console.log("1️⃣ Um grampeador velho")
    console.log("2️⃣ Um monte de papéis amassados na mesa")
    console.log("3️⃣ Uma almofada fora do lugar")
    console.log("4️⃣ Um livro antigo e empoeirado na estante")
    console.log("5️⃣ Uma janela embaçada e trancada")
    console.log("6️⃣ Um armário de metal com cadeado")
    console.log("7️⃣ Tentar abrir a porta 🚪")

    rl.question("\nO que você deseja investigar? ", (resposta) => {
        switch (resposta.trim()){
            case "1":
                investigarGrampeador()
                break
            case "2":
                investigarPapeis()
                break
            case "3":
                investigarAlmofada()
                break
            case "4":
                investigarLivro()
                break
            case "5":
                investigarJanela()
                break
            case "6":
                investigarArmario()
                break
            case "7":
                VerificarSaida()
                break
            default:
                console.log("❌ Escolha inválida. Tente novamente.")
                menuPrincipal()
        }
    })
}

// grampeador
function investigarGrampeador(){
    if(resolvidos.grampeador){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n📎 Dentro do grampeador há um bilhete: 'Sou cheio de buracos, mas seguro a água. O que sou?' ", (resposta) => {
        if(resposta.trim().toLowerCase() === "esponja") {
            console.log("🎉 Acertou! Você desbloqueou a chave escondida no grampeador.")
            resolvidos.grampeador = true
        } else {
            console.log("❌ Resposta incorreta. Tente novamente mais tarde.")
        }
        menuPrincipal()
    })
}

// papéis
function investigarPapeis(){
    if(resolvidos.papeis){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n📝 Um dos papéis diz: 'Qual palavra está sempre escrita errada no dicionário?' ", (resposta) => {
        if(resposta.trim().toLowerCase() === "errada") {
            console.log("🎉 Acertou! Você encontrou uma chave entre os papéis.")
            resolvidos.papeis = true
        } else {
            console.log("❌ Resposta errada. Pense melhor.")
        }
        menuPrincipal()
    })
}

// almofada (enigma modificado)
function investigarAlmofada(){
    if(resolvidos.almofada){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n🛋️ Dentro da almofada tem um bilhete: 'Tenho chaves mas não tranco nada. Tenho espaço mas não ocupo lugar. Quem sou eu?' ", (resposta) => {
        if(resposta.trim().toLowerCase().includes("teclado")) {
            console.log("🎉 Isso mesmo! Você achou uma chave escondida dentro da almofada.")
            resolvidos.almofada = true
        } else {
            console.log("❌ Hmm... não é isso. Tente de novo mais tarde.")
        }
        menuPrincipal()
    })
}

// livro
function investigarLivro(){
    if(resolvidos.livro){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n📖 O livro está aberto em uma página com a pergunta: 'Quanto mais você tira de mim, maior eu fico. O que sou?' ", (resposta) => {
        if(resposta.trim().toLowerCase().includes("buraco")) {
            console.log("🎉 Perfeito! Você encontra uma chave escondida entre as páginas.")
            resolvidos.livro = true
        } else {
            console.log("❌ Essa não é a resposta certa. Tente mais tarde.")
        }
        menuPrincipal()
    })
}

// janela
function investigarJanela(){
    if(resolvidos.janela){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n🪟 Escrito no vidro embaçado da janela: 'O que pode encher uma sala inteira sem ocupar espaço?' ", (resposta) => {
        if(resposta.trim().toLowerCase().includes("luz")) {
            console.log("💡 Boa! A janela destranca e revela uma chave escondida.")
            resolvidos.janela = true
        } else {
            console.log("❌ Ainda não é isso. Continue tentando.")
        }
        menuPrincipal()
    })
}

// armário
function investigarArmario(){
    if(resolvidos.armario){
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }
    rl.question("\n🗄️ O armário está trancado com uma senha. Um bilhete preso diz: 'Se dois é companhia e três é multidão, o que quatro é?' ", (resposta) => {
        if(resposta.trim().toLowerCase().includes("festa")) {
            console.log("🎊 Exato! O cadeado se abre e você pega a chave.")
            resolvidos.armario = true
        } else {
            console.log("❌ Não é isso. Guarde a dica para mais tarde.")
        }
        menuPrincipal()
    })
}

// saída final
function VerificarSaida(){
    const todasRespostas = Object.values(resolvidos).every(v => v)
    if(todasRespostas){
        console.log("🚪 Você usou todas as chaves e a porta se destranca com um clique suave.")
        console.log("🎉 Parabéns! Você escapou da sala! 🎉")
        rl.close()
    } else {
        console.log("🔒 A porta ainda está trancada. Parece que há mais enigmas a serem resolvidos.")
        menuPrincipal()
    }
}

menuPrincipal()
