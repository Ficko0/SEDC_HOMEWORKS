const nameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    toBePrinted.innerHTML = `
    <h3><b>Congratulations ${nameInput.value} ${lastNameInput.value}!</b></h3>
    <p>You have been successfully registered!</p>
    `
})

