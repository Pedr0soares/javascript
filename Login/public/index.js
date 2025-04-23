// Index.js

const express = require('express')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const porta = 3000

// Conexão com o banco de dados
const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'sistema_login'
})

banco.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar no mysql", erro)
        return;
    }
    console.log("Conectado ao mysql")
})

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized: true
}))

// Rotas de páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"))
})
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cadastro.html"))
})

// Rota de cadastro
app.post('/cadastro', async (req, res) => {
    const { nome, senha } = req.body
    const senhaCriptografada = await bcrypt.hash(senha, 10)

    banco.query(
        "INSERT INTO usuario (nome, senha) VALUES (?, ?)",
        [nome, senhaCriptografada],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao registrar usuário", erro)
                res.status(500).send("Erro ao cadastrar usuário")
                return
            }
            res.redirect('/login')
        }
    )
})

// Rota de login
app.post('/login', async (req, res) => {
    const { nome, senha } = req.body

    banco.query("SELECT * FROM usuario WHERE nome = ?", [nome], async (erro, resultado) => {
        if (erro) {
            console.error("Erro ao fazer login", erro)
            res.status(500).send("Erro no servidor")
            return
        }

        if (resultado.length === 0) {
            res.status(401).send("Usuário não encontrado")
            return
        }

        const usuario = resultado[0]
        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (senhaValida) {
            req.session.logado = true
            req.session.nome = nome
            res.redirect("/painel")
        } else {
            res.status(401).send("Senha incorreta")
        }
    })
})

// Rota de logout
app.get("/sair", (req, res) => {
    req.session.destroy()
    res.redirect("/login")
})


