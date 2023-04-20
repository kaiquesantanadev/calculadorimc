const form = document.getElementById('form')
form.addEventListener('submit', enviar)

function enviar(e) {
    e.preventDefault()
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    if (!peso) { // !peso -> se o peso for falso
        callResultado('Peso inválido', false)
        return
    }
    if (!altura) { // !altura -> se a altura for falso
        callResultado('Altura inválida', false)
        return
    }

    const imc = calcImc(peso, altura)
    const valorImc = nivelImc(imc)

    const msg = `Seu IMC é de: ${imc} (${valorImc})`
    callResultado(msg, true)
}

function calcImc(peso, altura) {
    const imc = peso / altura **2
    return imc.toFixed(2)
}

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >=39.9) return nivel[5]
    if (imc >=34.9) return nivel[4]
    if (imc >=29.9) return nivel[3]
    if (imc >=24.9) return nivel[2]
    if (imc >=18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}


function callResultado(msg, isValid) {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = msg

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado') // --> insirando a clase paragrafo-resultado na class paragarafo
    } else {
        paragrafo.classList.add('erro') // --> insirando a clase paragrafo-resultado na class paragarafo
    }

    resultado.appendChild(paragrafo)
}