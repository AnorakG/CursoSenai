const comecar = function(respostas){
    let p1 = document.getElementById("pergunta1")
    let p2 = document.getElementById("pergunta2")
    let p3 = document.getElementById("pergunta3")
    let p4 = document.getElementById("pergunta4")
    let p5 = document.getElementById("pergunta5")
    let comecar = document.getElementById("comecar")
    let e = document.getElementById("errou")
    let par = document.getElementById("parabens")

    comecar.style.display = "none"
    p1.style.display = "inline"

    switch(respostas){
        case"zeus":         
            p1.style.display= "none"
            p2.style.display= "inline"
            break
        case"artemis":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "inline"
            break
        case "hefesto":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "none"
            p4.style.display= "inline"
            break
        case "apolo":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "none"
            p4.style.display= "none"
            p5.style.display= "inline"            
            break
        case "fim":
            p1.style.display = "none"
            p2.style.display = "none"
            p3.style.display = "none"
            p4.style.display = "none"
            p5.style.display = "none"
            par.style.display = "inline"
            break
        case"errou":
            errou.style.display = "inline"
            p1.style.display = "none"
            p2.style.display = "none"
            p3.style.display = "none"
            p4.style.display = "none"
            p5.style.display = "none"
    }
}