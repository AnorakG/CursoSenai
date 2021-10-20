function maiorMenor(){
    let x = document.getElementById("numero1").value 
    let y = document.getElementById("numero2").value
    let a = x*2
    let b = y*3
    if(a>=b){
        resultado = a + " é maior que " + b
    }else{
        resultado = b + " é maior que " + a
    }
    document.getElementById("resultado").value = resultado
}
