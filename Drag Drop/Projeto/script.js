const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".tarefas")

tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart",() => {
        tarefa.classList.add("arraastando")
    })
    tarefa.addEventListener("dragend", () => {
        tarefa.classList.remove("arrastando")
    })
})

colunas.forEach(coluna => {
    coluna.addEventListener("dragonver", (e) => {
        e.preventDefault()
        const tarefaArrastando = document.querySelectorAll(".arrastando")
        coluna.appendChild(tarefaArrastado)
    })
})