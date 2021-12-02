let tarefas = []
const list = () => {
    tarefas= JSON.parse(localStorage.getItem('tarefas'))
    let paragrafoTarefas = document.getElementById('tarefas')
    paragrafoTarefas.innerHTML = ""

    tarefas.forEach(tarefa => {
        paragrafoTarefas.innerHTML += tarefa[1] + " - " + tarefa[0] + "<br>"
    })
}

const add = () => {
    let data = document.getElementById('data')
    let tarefa = document.getElementById('tarefa')
    tarefas = JSON.parse(localStorage.getItem('tarefas'))
    
    tarefas.push([data.value,tarefa.value])
    console.log(tarefas)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    data.value = ""
    tarefa.value = ""
}