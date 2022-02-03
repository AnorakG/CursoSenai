let numeros = [1,3,4,6,9]
let value2=0
function impares(value) {
    if(value%2 != 0){
        return value
    }
    for(let i = 0;i<5;i++){
        value2 += value[i]  
    }
    console.log(value2)
}
console.log(numeros.filter(impares))