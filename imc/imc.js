function imc() {
    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let res = document.querySelector('#resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        // imc = peso / (altura*altura)

        //toFixed para limitar casas decimais
        valorIMC = (peso / (altura * altura)).toFixed(2)

        let tipoIMC

        if (valorIMC < 18.5) {
            tipoIMC = 'Abaixo do peso'

        } else if (valorIMC >= 18.5 && valorIMC < 25) {
            tipoIMC = 'no peso ideal'
        } else if (valorIMC >= 25 && valorIMC < 30) {
            tipoIMC = 'um pouco acima do peso'
        } else if (valorIMC >= 30 && valorIMC < 35) {
            tipoIMC = 'com obesidade grau 1'
        } else if (valorIMC >= 35 && valorIMC < 40) {
            tipoIMC = ' com obesidade grau 2'
        } else {
            tipoIMC = 'com você é uma baleia'
        } 

        res.textContent= `Olá ${nome}, seu IMC é de ${valorIMC} você esta ${tipoIMC}`

    }else {
        res.textContent= `Dados invalidos, preencha os campos corretamente, altura e peso com numeros e nome com letras`
    }

}
