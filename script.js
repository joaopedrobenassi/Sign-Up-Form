

const myButton = document.querySelector('button');
const firstName = document.getElementById('field_name')
const lastName = document.getElementById('field_last_name')
const emailAddress = document.getElementById('field_email')
const pass = document.getElementById('field_password')

console.log(firstName.value)

function enviar() {

    if(firstName.value == '' || lastName.value == '' || emailAddress.value == ''|| pass.value == ''){

        alert('Please fill in all fields!')

    } else {

        alert('Thanks! Hope you enjoy!')
    }

}

myButton.addEventListener('click', enviar)










