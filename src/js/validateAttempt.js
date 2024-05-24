elementAppMain = document.getElementById('app-main')

function validateAttempt(shoot) {
    const number = +shoot

    if (validateNumber(number)) {
        elementShoot.innerHTML += `<div>Valor inválido: O valor não corresponde a um número. Tente novamente.</div>`
        return 
    }

    if (validateNumericRange(number)) {
        elementShoot.innerHTML += `<div>Valor inválido: O número secreto está entre ${lowerValue} e ${highestValue}. Tente novamente.</div>`
        return
    } else if (number > secretNumber) {
        elementShoot.innerHTML += `
            <div> O número secreto é menor! </div>
        `
    } else if (number < secretNumber) {
        elementShoot.innerHTML += `
        <div> O número secreto é maior! </div>
        `
    }

    if (number === secretNumber) {
        elementAppMain.innerHTML = `
        <h2 class="">Você acertou!</h2>
        <h3 class="">O número secreto era ${secretNumber}</h3>
        `
    }
}

function validateNumber(number) {
    return Number.isNaN(number)
}

function validateNumericRange(number) {
    return number > highestValue || number < lowerValue
} 