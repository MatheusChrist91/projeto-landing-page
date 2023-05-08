const cpfInput = document.querySelector('#cpfInput')

const emailInput = document.querySelector('#emailInput')

const telefoneInput = document.querySelector('#telefoneInput')

const buttonInput = document.querySelector('#button_form')

buttonInput.addEventListener('click', function(event) {
    event.preventDefault

    if (cpfInput.value === "") {
        alert('Você não digitou o CPF!')
    }
    if (emailInput.value === "") {
        alert('Você não digitou o e-mail!')
    }
    if (telefoneInput.value === "") {
        alert('Você não digitou o telefone!')
    } else {
        alert('Dados enviados com sucesso!')
    }

    cpfInput.value = ""
    emailInput.value = ""
    telefoneInput.value = ""
})

