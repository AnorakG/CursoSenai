let select = document.querySelector("select");
var p = document.querySelector("p");
var paragrafo2 = document.querySelector("nome");
var paragrafo3 = document.querySelector("descricao");
var paragrafo4 = document.querySelector("preco");
var paragrafo5 = document.querySelector("estoque");

select.addEventListener("change", detalhes);

function detalhes(){
    let op = select.value
    
    if(op === "v1"){
        p.textContent = 'Você selecionou o: Abajur.';
        nome.textContent = 'Abajur articulável';
        descricao.textContent = 'Abajur estilo pixar articulável.';
        preco.textContent = 'Preço: R$ 100,00';
        estoque.textContent = 'Estoque: 10';
    }else if(op === "v2"){
        p.textContent = 'Você selecionou o: Videogame.';
        nome.textContent = 'Videogame Playstation 5 Sony';
        descricao.textContent = 'O videogame Playstation 5 da Sony permite uma experiência de imersão nos jogos mais poderosa do que as versões anteriores.';
        preco.textContent = 'Preço: R$ 5000,00';
        estoque.textContent = 'Estoque: 0 ';
    }else if(op === "v3"){
        p.textContent = 'Você selecionou o: Celular.';
        nome.textContent = 'Celular Galaxy S20';
        descricao.textContent = 'O Smartphone Samsung Galaxy S20 Plus, oferece todas as tecnologias indispensáveis nomea o dia a dia.';
        preco.textContent = 'Preço: R$ 3000,00';
        estoque.textContent = 'Estoque: 10 ';
    }
}