function porcentagem(){
    let x = document.getElementById("x").value
    let y = x*0.27
    let resultado = parseFloat(x)+parseFloat(y)
    document.getElementById("resultado").value = resultado
}