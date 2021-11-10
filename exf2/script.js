function check(){
    let c = document.getElementById("class").value
    var par = document.getElementById("result")

    switch(c){
        case "1":
            par.textContent = "Seu produto é da categoria: Alimento não perecível"
            break
        case "2":
            par.textContent = "Seu produto é da categoria: Alimento perecível"
            break
        case "3":
            par.textContent = "Seu produto é da categoria: Vestuário"
            break
        case "4":
            par.textContent = "Seu produto é da categoria: Higiene pessoal"
            break
        case "5":
            par.textContent = "Seu produto é da categoria: Limpeza e utensílios domésticos"             
    }
}