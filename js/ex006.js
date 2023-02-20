function operacoes(){
    num1 = parseFloat(prompt("Digite um número: "))
    num2 = parseFloat(prompt("Digite outro número: "))

    document.getElementById('operacao').innerHTML = `${num1} e ${num2}` 
    document.getElementById('somar').innerHTML = `A soma foi: ${num1 + num2}`
    document.getElementById('sub').innerHTML = `A subtração foi: ${num1 - num2}`
    document.getElementById('mult').innerHTML = `A multiplicação foi: ${num1 * num2}`
    document.getElementById('div').innerHTML = `A divisão foi: ${num1 / num2}`
}

operacoes()