function salario(){
    let s = document.getElementById("salario").value
    let a = document.getElementById("A").value
    let b = document.getElementById("B").value
    let soma1= parseFloat(a)*50
    let soma2= parseFloat(b)*60
    let sobra= 10000-(parseFloat(soma1)+parseFloat(soma2))
    let p = (parseFloat(s)*0.2)+parseFloat(s)
    let resultado=""
    let faltou = ""

    if(parseFloat(soma1)+parseFloat(soma2)>=10000){
        resultado = "Seu salário é "+ p
        faltou = "Parabéns pelo seu bônus =)"
    }else{
        resultado = "Seu salário é "+ s
        faltou = "Faltam R$" + sobra + " para seu bônus"
    }
    document.getElementById("resultado1").value = resultado
    document.getElementById("resultado2").value = faltou

}