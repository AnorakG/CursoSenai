//liquido= com imposto
//bruto= sem imposto
function imposto() {
    let h = document.getElementById("hora").value
    let c = document.getElementById("carga").value
    let calculo = parseFloat(h) * parseFloat(c)
    let imposto = ""
    let liquido = ""
    let bruto = "Seu salário bruto é R$ " + calculo
    console.log(calculo)
    if (calculo <= 1903.98) {
        imposto = "Você é isento."
        liquido = "Seu salário é R$ " + calculo
    }else if (calculo >= 1903.99 && calculo <= 2826.65) {
        imposto = "Foram descontados R$ " + (parseFloat(calculo) * 0.075).toFixed(2) + " do seu salário"
        liquido = "Seu salário é R$ " + (parseFloat(calculo) - (parseFloat(calculo) * 0.075)).toFixed(2)
    }else if (calculo >= 2826.66 && calculo <= 3751.05) {
        imposto = "Foram descontados R$ " + (parseFloat(calculo) * 0.15).toFixed(2) + " do seu salário"
        liquido = "Seu salário é R$ " + (parseFloat(calculo) - (parseFloat(calculo) * 0.15)).toFixed(2)
    }else if (calculo >= 3751.06 && calculo <= 4664.68) {
        imposto = "Foram descontados R$ " + (parseFloat(calculo) * 0.225).toFixed(2) + " do seu salário"
        liquido = "Seu salário é R$ " + (parseFloat(calculo) - (parseFloat(calculo) * 0.225)).toFixed(2)
    }else {
        imposto = "Foram descontados R$ " + (parseFloat(calculo) * 0.275).toFixed(2) + " do seu salário"
        liquido = "Seu salário é R$ " + (parseFloat(calculo) - (parseFloat(calculo) * 0.275)).toFixed(2)
    }

    document.getElementById("resultado1").value = liquido
    document.getElementById("resultado2").value = bruto
    document.getElementById("resultado3").value = imposto

}