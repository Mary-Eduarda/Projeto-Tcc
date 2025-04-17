
let tcc = []

function adicionarTcc() {
const adicionarTcc = document.getElementById("adicionarTcc")
let tarefa = inputTarefa.value.trim()

const mensagem = document.getElementById("mensagem")

if (tarefa == "") {
    let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
    mensagem.textContent = mensagemErro
} else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!"
    mensagem.textContent = mensagemSucesso
    tarefas.push(tarefa)
    renderizarTarefas()
}

inputTarefa.value = ""
}

function renderizarTarefas() {
const listaTarefas = document.getElementById("listaTarefas")
listaTarefas.innerHTML = ""

for (let i = 0; i < tarefas.length; i++){
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]
    
    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)
    
    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    listaTarefas.appendChild(novaTarefa)
}
}

function removerTarefa(i) {
tarefas.splice(i, 1)
renderizarTarefas()
}   

function editarTarefa(i) {
let tarefaEditada = prompt("Edite a tarefa:")
if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefas()
}
}

// Nova função adicionada:
function verificareAlertar() {
if (tarefas.length === 0) {
    window.alert("Por favor, adicione um item à lista antes de tentar limpar.");
} 
else {
    limparLista();
}
}