
const containerProblemas = document.querySelector('#containerProblemas')
console.log(containerProblemas)
const problemas = [
    {
      titulo: "CRATERA NA MINHA RUA",
      data:"28/12/2003",
      fotoProblema:"img/cratera.jpg",
      endereco:"Avenida Luiz Boiteux Piazza",
      id:1
    }
]


    
problemas.forEach(problema => {
  console.log(problema)
  
    containerProblemas.innerHTML += `
    <div id=${problema.id}>
        <h2>${problema.titulo}</h2>
        <h4>Data do problema: ${problema.data}</h4>
        <img src="${problema.fotoProblema}" width="700" height="500">
        <p>Endereço: ${problema.endereco}</p>
        <button data-id="${problema.id}" data-action="edit">Edit</button>
        <button data-id="${problema.id}" data-action="delete">Delete</button>
    </div>`
})
const formProblemas = document.querySelector('#formProblemas')

const tituloProblema = formProblemas.querySelector('#titulo').value
const dataProblema = formProblemas.querySelector('#data').value
const fotoProblema = formProblemas.querySelector('#fotoProblema').value
const endereco = formProblemas.querySelector('#endereco').value

formProblemas.addEventListener('submit', (e) => {
  e.preventDefault()
  problemas.push({titulo: tituloProblema.value,data:dataProblema.value,fotoProblema:fotoProblema.value,endereco:endereco.value})
  problemas.forEach(problema => {
    containerProblemas.innerHTML += `
    <div id=${problema.id}>
        <h2>${problema.titulo}</h2>
        <h4>Data do problema: ${problema.data}</h4>
        <img src="${problema.fotoProblema}" width="700" height="500">
        <p>Endereço: ${problema.endereco}</p>
        <button data-id="${problema.id}" data-action="edit">Edit</button>
        <button data-id="${problema.id}" data-action="delete">Delete</button>
    </div>`
})

})