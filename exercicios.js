//exercicio 1
console.log("")
console.log("Exercicio 1")

let cliente1= "Afonso"
let cliente2= "Claudio"
let cliente3= "João"
console.log(cliente1)
console.log(cliente2)
console.log(cliente3)

//exercicio 2
console.log("")
console.log("Exercicio 2")

let comida1= "Pizza"
let comida2= "Hamburguer"
let comida3= "Bolo" 
console.log(comida1)
console.log(comida2)
console.log(comida3)

//exercicio 3
console.log("")
console.log("Exercicio 3")
let nome= "Afonso"
let sobrenome= "dos Santos" 
let nome2= "Claudio"
let sobrenome2= "da Silva" 

console.log(nome,sobrenome);
console.log(nome2,sobrenome2);

//exercicio 4
console.log("")
console.log("Exercicio 4")
let a = 18;//quis brincar um pouco com Boolean pra entender como funcionava
let b = 04;
let isVerdadeiro = Boolean = true;
if(a <= b){
    isVerdadeiro = false;
    console.log(b, isVerdadeiro)
} else{
    isVerdadeiro = true;
    console.log(a, isVerdadeiro)
}

let variaveis = {
    isActive: false,
    isValid: true,
    isDoing: false,
    isEating: true,
    isAlive: false,
    isExisting: true,
}
console.log(variaveis)

//exercicio 5
console.log("")
console.log("Exercicio 5")

let s = 1
let t = 2
let u = 3
let v = 4
let w = 5
let x = 6
let y = 7
let z = 8

console.log("Variável 1:",s)
console.log("Variável 2:",t)
console.log("Variável 3:",u)
console.log("Variável 4:",v)
console.log("Variável 5:",w)
console.log("Variável 6:",x)
console.log("Variável 7:",y)
console.log("Variável 8:",z)

//exercicio 6
console.log("")
console.log("Exercicio 6")

const pi= Math.PI
const i = -1
const e = 2.71
const square2 = 1.41
const square3 = 1.73

console.log("Constante 1:","Pi:",pi)
console.log("Constante 2:","Número imaginário ao quadrado:", i)
console.log("Constante 3:","Euler:",e)
console.log("Constante 4:","Raiz quadrada de 2:", square2)
console.log("Constante 5:","Raiz quadrada de 3:", square3)

//exercicio 7
console.log("")
console.log("Exercicio 7")

let numero1 = Math.random()*10//definir as variáveis
let numero2 = Math.random()*10

console.log(numero1,numero2)

let variavelN1 = numero1.toFixed(0)//arredondar as variáveis
let variavelN2 = numero2.toFixed(0)

console.log(variavelN1,variavelN2)

console.log(variavelN1,"-",variavelN2)
console.log("Resultado:", variavelN1-variavelN2)

//exercicio 8
console.log("")
console.log("Exercicio 8")

let divisor1 = Math.random()*200
let divisor2 = Math.random()*40

console.log(divisor1,divisor2)

let dividendo = divisor1.toFixed(0)
let divisor = divisor2.toFixed(0)

console.log(dividendo,divisor)

let resultadoDivisao=(dividendo/divisor).toFixed(0)

console.log(dividendo,"/",divisor)
console.log("Quociente:", resultadoDivisao)


//exercicio 9
console.log("")
console.log("Exercicio 9")

let multiplicador1 = Math.random()*90
let multiplicador2 = Math.random()*25

console.log(multiplicador1,multiplicador2)

let multiplicando = multiplicador1.toFixed(0)
let multiplicador = multiplicador2.toFixed(0)

console.log(multiplicando,multiplicador)
produtoMultiplicacao = (multiplicando*multiplicador)

console.log(multiplicando,"*", multiplicador)
console.log("Produto:", produtoMultiplicacao)

//exercicio 10
console.log("")
console.log("Exercicio 10")

console.log(divisor1,divisor2)

console.log(dividendo,divisor)
console.log(dividendo,"/",divisor)

console.log("Resto:", dividendo%divisor)//usei os dados do exercicio 8

//exercicio 11
console.log("")
console.log("Exercicio 11")

let numeroUsuario = (Math.random()*100).toFixed(0)
console.log("Se o número do Usuário for:",numeroUsuario)

let porcentagemNU5= (numeroUsuario*0.05).toFixed(1)
console.log("5% desse número será aproximadamente:", porcentagemNU5)

//exercicio 12
console.log("")
console.log("Exercicio 12")

let produtosMercado = {
    produto1: "Cookies Bauducco",
    produto2: "Barra de Chocolate",
    produto3: "1KG de Maçã",
    produto4: "Refrigerante 2L",
    valor1: 4.00,
    valor2: 4.50,
    valor3: 6.00,
    valor4: 7.00,
}

let compras = 5*produtosMercado.valor1 + 2*produtosMercado.valor2 + 1.5*produtosMercado.valor3 + 2*produtosMercado.valor4

console.log("-----"+">Tabela de Preços<"+"-----")
console.log("Produtos","            ", "Preços")
console.log(produtosMercado.produto1,"    ","R$",produtosMercado.valor1)
console.log(produtosMercado.produto2,"  ","R$",produtosMercado.valor2)
console.log(produtosMercado.produto3,"         ","R$",produtosMercado.valor3)
console.log(produtosMercado.produto4,"     ","R$",produtosMercado.valor4)

console.log("")
console.log("-------------"+">Suas Compras<"+"-------------")
console.log("Quantidade","  ","Produtos","          ", "Preços")
console.log("5x","          ",produtosMercado.produto1,"  ","R$",produtosMercado.valor1)
console.log("2x","          ",produtosMercado.produto2,"","R$",produtosMercado.valor2)
console.log("1,5x","        ",produtosMercado.produto3,"       ","R$",produtosMercado.valor3)
console.log("2x","          ",produtosMercado.produto4,"   ","R$",produtosMercado.valor4)

console.log("")
console.log("        ","Total da sua compra: R$",compras)

//exercicio 13
console.log("")
console.log("Exercicio 13")

let S = "Serviço"
let E = " Nacional"
let N = " de"
let A = " Aprendizagem"
let I = " Industrial"

let somaCaracteres = S.length+E.length+N.length+A.length+I.length
console.log(S+E+N+A+I,"=",somaCaracteres)

//exercicio 14
console.log("")
console.log("Exercicio 14")

let base = 4
console.log(base,"= Base")

let expoente = parseInt(Math.random()*10)
console.log(expoente,"= Expoente")

for(;base**=expoente;){
    console.log(base,"= Potência")
    if( base >= 0) break;
}

//exercicio 15
console.log("")
console.log("Exercicio 15")

let radicando = parseInt(Math.random()*100)
console.log(radicando, "= Radicando")

let raiz = Math.sqrt(radicando)
console.log(raiz,"= raiz")