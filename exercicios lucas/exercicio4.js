let vetor1 = [1,2,3]
let vetor2 = [7,8,9]

function mostravetor(vetor) {
        console.log(vetor)
}
function intercalado(array1, array2) {
    var resultado = [];
    var total = array1.length;

    for (var i = 0; i < total; i++) {
      if (array1[i]) {
        resultado.push(array1[i]);
      }
      if (array2[i]) {
        resultado.push(array2[i]);
      }
    }
        console.log(resultado)
}
console.log("Primeiro Vetor:")
mostravetor(vetor1)

console.log("")

console.log("Segundo Vetor:")
mostravetor(vetor2)

console.log('')

console.log("Terceiro Vetor:")
intercalado(vetor1,vetor2)

