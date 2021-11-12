const comecar = function(respostas){
    let p1 = document.getElementById("pergunta1")
    let p2 = document.getElementById("pergunta2")
    let p3 = document.getElementById("pergunta3")
    let p4 = document.getElementById("pergunta4")
    let p5 = document.getElementById("pergunta5")
    let comecar = document.getElementById("comecar")
    let e = document.getElementById("errou")
    let par = document.getElementById("parabens")

    var w = new Audio('audio/ganhou.mp3');
    var l = new Audio('audio/perdeu.mp3'); 
    var a = new Audio('audio/acertou.mp3');
    var s = document.getElementById("soundtrack");

    comecar.style.display = "none"
    p1.style.display = "inline"
    s.play()
    s.volume = 0.1
    s.loop = true;    

    switch(respostas){
        case "reset":
            e.style.display = "none"  
            p1.style.display = "inline"
            s.play()
            s.volume = 0.1
            s.loop = true; 
            break
        case"zeus":       
            p1.style.display= "none"
            p2.style.display= "inline"
            a.play()
            break
        case"artemis":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "inline"
            a.play()
            break
        case "hefesto":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "none"
            p4.style.display= "inline"
            a.play()
            break
        case "apolo":
            p1.style.display= "none"
            p2.style.display= "none"
            p3.style.display= "none"
            p4.style.display= "none"
            p5.style.display= "inline"  
            a.play()          
            break
        case "fim":
            p1.style.display = "none"
            p2.style.display = "none"
            p3.style.display = "none"
            p4.style.display = "none"
            p5.style.display = "none"
            par.style.display = "inline"
            s.pause()
            w.play()
            w.volume = 0.1
            break
        case"errou":
            e.style.display = "inline"
            p1.style.display = "none"
            p2.style.display = "none"
            p3.style.display = "none"
            p4.style.display = "none"
            p5.style.display = "none"
            l.play()
            s.pause()
            s.currentTime = 0;
            break
    }
}