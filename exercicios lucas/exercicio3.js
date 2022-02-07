let numeros = [1,3,4,6,9]

function impares(value) {
    if(value%2 != 0){
        return value
    }
}

let impar = numeros.filter(impares)
let somatoria 

const soma = (valor1, valor2) => valor1 + valor2
console.log(impar)
console.log(impar.reduce(soma))
