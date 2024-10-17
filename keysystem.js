
function checkPswd () {
    let confirmPass = "12345678"
    let password = document.querySelector('#pswd').value

    if (password == confirmPass) {
        window.location = "calculator.html";
    }
    else {
        alert('Kunci Salah')
    }
}