let numeros=[1,2,3,4,5,6,7,8,9,10]
let parte1 = numeros.slice(0,5)
let parte2 = numeros.slice(5,10)
let soma1 = 0;
let soma2 = 0;
for(let i = 0;i<5;i++){
    soma1 += parte1[i]  
    soma2 += parte2[i]
}
let resultado = soma1-soma2
console.log(resultado)