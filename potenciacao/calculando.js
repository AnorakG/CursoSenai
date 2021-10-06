

function calculo(){
    let base = document.getElementById("base").value
    let expoente = document.getElementById("expoente").value
    let potencia = Math.pow(base, expoente)
    alert("Sua Potência é:")
    alert(potencia)
}