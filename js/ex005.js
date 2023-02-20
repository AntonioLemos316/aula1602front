function exibirNome(){
    let nome = (prompt("Digite seu nome "))

    console.log(nome)
    document.getElementById('titulo').innerHTML = "O seu nome é " + (nome)
}

exibirNome()