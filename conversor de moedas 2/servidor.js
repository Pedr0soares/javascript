const express = require("express")
const path = require("path")
const fetch = (...args) => import('node-fetch').then(({defualt: fetch}) => fetch(...args))
const app = express()
const porta = 3000


const API_KEY = "c8665a1369e4f68fc16c868a58e8f085"
// Middleware para arquivos estáticos
app.use(express.static("public"))

// Rota de conversão
app.get("/converter", async (req, res) => {
    try {
        const { valor, de, para } = req.query

        if (!valor || !de || !para) {
            return res.status(400).json({ erro: "Parâmetros 'valor', 'de' e 'para' são obrigatórios." })
        }

        const valorNumerico = parseFloat(valor)
        if (isNaN(valorNumerico)) {
            return res.status(400).json({ erro: "Valor informado não é numérico." })
        }

        console.log(`Requisição: ${de} -> ${para}, valor: ${valor}`)

        const url = `http://api.exchangerate.host/convert?access_key=${API_KEY}&from=${de}&to=${para}&amount=${valor}`
        console.log("URL da API:", url)

        const resposta = await fetch(url)
        const dados = await resposta.json()

        if (!dados.success) {
            throw new Error("Conversão falhou. Verifique as moedas informadas.")
        }

        res.json({
            valorConvertido: dados.result
        })
    } catch (erro) {
        console.error("Erro detalhado:", erro)
        res.status(500).json({
            erro: "Erro ao converter moeda",
            detalhes: erro.message
        })
    }
})

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})
