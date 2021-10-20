function desconto(){
    let a = document.getElementById("A").value
    let b = document.getElementById("B").value
    let idade = document.getElementById("idade").value

    let descontoAM = parseFloat(a)*0.05
    let maiorA = parseFloat(a)-parseFloat(descontoAM)
    let descontoBM = parseFloat(b)*0.05
    let maiorB = parseFloat(b)-parseFloat(descontoBM)

    let descontoAN = parseFloat(a)*0.10
    let menorA = parseFloat(a)-parseFloat(descontoAN)
    let descontoBN = parseFloat(b)*0.10
    let menorB = parseFloat(b)-parseFloat(descontoBN)

    if(idade >= 18){
        document.getElementById("resultado1").value = maiorA
        document.getElementById("resultado2").value = maiorB
    }else{
        document.getElementById("resultado1").value = menorA
        document.getElementById("resultado2").value = menorB
    }
}