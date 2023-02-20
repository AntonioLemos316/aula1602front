function anoNascimento(){
    let nascimento = (prompt("Digite seu ano de nascimento: "))
    let anoAtual = 2023
    var idade = anoAtual - nascimento

    if (idade < 18){
        console.log("Você é menor de Idade")
        alert("Você é menor de Idade")
    } else {
        console.log("Você é maior de Idade")
        alert("Você é maior de Idade")
    }
}

anoNascimento()