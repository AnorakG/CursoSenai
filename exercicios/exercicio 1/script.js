function parImpar() {
    let i = document.getElementById("numero").value
    let impar = "Seu número é ímpar"
    let par = "Seu número é par"
    if (i % 2 === 0) {
        document.getElementById("resultado").value = par
    } else {
        document.getElementById("resultado").value = impar
    }
}