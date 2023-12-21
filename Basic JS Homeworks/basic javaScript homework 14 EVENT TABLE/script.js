let buttonForEvent = document.getElementById('createTable');

function createTable() {
    let rowInput = parseInt(prompt('How many rows would you like to create?'));
    let columnInput = parseInt(prompt('How many columns would you like to create?'));

    if (isNaN(rowInput) || isNaN(columnInput)) {
        alert ('Please enter a number');
        return;
    }

    let table = `<table>`;

    for (i = 0; i < rowInput; i++) {
        table += `<tr>`;

        for (j = 0; j < columnInput; j++) {
            table += `<td>Row: ` + (i + 1) + " " + `Column: ` + (j + 1) + `</td>`;
        }
        table += `</tr>`
    }

    table += `</table>`;

    document.body.innerHTML += table;

}

buttonForEvent.addEventListener('click', createTable)

