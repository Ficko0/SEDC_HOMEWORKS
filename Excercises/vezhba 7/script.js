const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const button = document.getElementById('create');

function phoneBook () {
    let table = `<table>`;

    for (let i = 0; i < firstNameInput.value; i++) {
        table += `<tr>`;
        table += `<td>${firstNameInput.value}</td>`;
        table += `</tr>`;

        for (let j = 0; j < lastNameInput.value; j++) {
            table += `<tr>`;
            table += `<td>${lastNameInput.value}</td>`;
            table += `</tr>`;

            for (let k = 0; k < phoneNumberInput.value; k++) {
                table += `<tr>`;
                table += `<td>${phoneNumberInput.value}</td>`;
                table += `</tr>`;
            }
        }
    }
    table += `</table>`;
    document.body.innerHTML += table;
}

button.addEventListener('click', phoneBook);