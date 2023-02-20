function notas(){
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))
    media = (num1 + num2) /2

    if (media < 5){
        console.log(`A média foi ${media} e o aluno foi REPROVADO!`)
    } else if (media < 7) {
        console.log(`A média foi ${media} e o aluno esta em RECUPERAÇÃO!`)
    } else if (media >= 7){
        console.log(`A média foi ${media} e o aluno foi APROVADO!`)
    }
}

notas()