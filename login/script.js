let users = []
let formCadastro = document.getElementById('formCadastro')
let senhaValidez = document.getElementById('senhaValidez')
let anuncioCadastro = document.getElementById('anuncioCadastro')

let login=document.getElementById('nomeUsuario')
let senhaUsuario=document.getElementById('senhaUsuario')

let nome = document.getElementById('nome')
let senha1 = document.getElementById('senha1')
let senha2 = document.getElementById('senha2')
let email = document.getElementById('email')
let dataNascimento = document.getElementById('dataNascimento')

let idade = 0
localStorage.setItem("users", JSON.stringify(users))
let contaConectada
let usuarios 

function cadastramento(){
    anuncioCadastro.style.display = "none";
    formCadastro.style.display = "inline";
    senhaValidez.style.display = "none";
    nome.value=""
    email.value=""
    senha1.value=""
    senha2.value=""
    dataNascimento.value=""
}
function validarSenha(){
    if(senha1.value == senha2.value){
        senhaValidez.style.display = "block"
        senhaValidez.style.color = "green"
        senhaValidez.innerHTML = "As senhas combinam =) <br> Termine seu cadastro"
    }else{
        senhaValidez.style.display = "block"
        senhaValidez.style.color = "red"
        senhaValidez.innerHTML = "As senhas não combinam =( <br> Confirme sua senha"
    }
}

function confirmarIdade(){
    const dataDeNascimento = new Date(dataNascimento.value)
    const hoje = new Date()

    idade = Math.floor((hoje-dataDeNascimento) / (365.25 * 24 * 60 * 60 * 1000))
    console.log(idade)
}

function cadastrar(){
    console.log("cadastrar");
    console.log(users);
    if(idade < 18){
        anuncioCadastro.style.display="block";
        anuncioCadastro.style.color = "red";
        anuncioCadastro.innerHTML = "Menores de Idade não podem se cadastrar.";
    }else if(users.find(confirmarNome)){
        anuncioCadastro.style.display="block";
        anuncioCadastro.style.color = "red";
        anuncioCadastro.innerHTML = "Nome de usuário já cadastrado <br> Tente outro";
    }else if(users.find(confirmarEmail)){
        anuncioCadastro.style.display="block";
        anuncioCadastro.style.color = "red";
        anuncioCadastro.innerHTML = "E-mail já cadastrado <br> Esqueceu sua senha?";
    }else{
        users.push({nome: nome.value, senha: senha2.value, email: email.value, idade: idade})
        localStorage.setItem("users", JSON.stringify(users))
        console.log(localStorage.getItem('users'))
        console.log("Cadastro feito =)")
        anuncioCadastro.style.display= "inline";
        anuncioCadastro.style.color = "green";
        anuncioCadastro.innerHTML = "Parabéns por se cadastrar! <br> Cadastro realizado =)"
        formCadastro.style.display = "none";
    }
}

function confirmarNome(users){
    return users.nome === nome.value
}
function confirmarEmail(users){
    return users.email === email.value
}

function buscarNome(usuarios){
    return usuarios.nome === login.value;
}
function buscarEmail(usuarios){
    return usuarios.email === login.value;
}

function confirmar(){
    usuarios = JSON.parse(localStorage.getItem('users'))
    console.log (usuarios)

    if(usuarios.find(buscarNome)){
        console.log('Nome encontrado!')
        console.log(usuarios.find(buscarNome))
        contaConectada = usuarios.find(buscarNome)
        confirmarSenha()
    }else if(usuarios.find(buscarEmail)){
        console.log('E-mail encontrado!')
        console.log(usuarios.find(buscarEmail))
        contaConectada = usuarios.find(buscarEmail)
        confirmarSenha()
    }else{
        alert("Cadastre-se por favor")
        anuncioCadastro.style.display = "none"
        formCadastro.style.display = "inline";        
    }
}

function confirmarSenha(){
    if(contaConectada.senha === senhaUsuario.value){
        alert('Você está logado')
        senhaUsuario.value = ""
        login.value = ""
    }else{
        alert('Senha ou usuário incorretas \nTente novamente ou cadastre-se por favor')
    }
}
