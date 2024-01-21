const table = document.querySelector('.table');
const button = document.querySelector('.btn');
const divToCreate = document.querySelector('.toCreate');
const table2 = document.querySelector('.table2');
const nextBtn = document.querySelector('.nextBtn');
const divToCreate2 = document.querySelector('.toCreate2');
const previousBtn = document.querySelector('.previousBtn');

function fetchAPI() {
    fetch ('https://swapi.dev/api/planets/')
        .then (data => data.json())
            .then (res => {
                table.innerHTML += `
                <tbody>
                    <tr>
                        <td><b>Planet name</b></td>
                        <td><b>Population</b></td>
                        <td><b>Gravity</b></td>
                        <td><b>Climate</b></td>
                    </tr>`
                    for (let items of res.results) {
                    table.innerHTML +=
                    `<tr>
                        <td>${items.name}</td>
                        <td>${items.population}</td>
                        <td>${items.gravity}</td>
                        <td>${items.climate}</td>
                    </tr>
                </tbody>`
                    }
                
            })
}

button.addEventListener('click', () => {
    fetchAPI();
})

let counter = 1;

function printAll () {
    counter ++;
    fetch (`https://swapi.dev/api/planets/?page=${counter}`)
        .then (data => data.json())
            .then (res => {
                table2.innerHTML += `
                <tbody>
                    <tr>
                        <td><b>Planet name</b></td>
                        <td><b>Population</b></td>
                        <td><b>Gravity</b></td>
                        <td><b>Climate</b></td>
                    </tr>`
                    for (let item of res.results) {
                        table2.innerHTML += `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.population}</td>
                            <td>${item.gravity}</td>
                            <td>${item.climate}</td>
                        </tr>
                        </tbody>`
                    }
                    if (res.next === null) {
                        nextBtn.disabled = true;
                    }
            })
}

nextBtn.addEventListener('click', () => {
    printAll();
    table2.innerHTML = '';
})

let secondCounter = 6;

function previousItems () {
    secondCounter --;
    fetch (`https://swapi.dev/api/planets/?page=${secondCounter}`)
        .then (data => data.json())
            .then (res => {
                table2.innerHTML += `
                <tbody>
                    <tr>
                        <td><b>Planet name</b></td>
                        <td><b>Population</b></td>
                        <td><b>Gravity</b></td>
                        <td><b>Climate</b></td>
                    </tr>`
                for (result of res.results) {
                    table2.innerHTML += `
                    <tr>
                        <td>${result.name}</td>
                        <td>${result.population}</td>
                        <td>${result.gravity}</td>
                        <td>${result.climate}</td>
                    </tr>
                </tbody>`
                }
                if (res.previous === null) {
                    previousBtn.disabled = true;
                }
            })
}

previousBtn.addEventListener('click', () => {
    previousItems();
    table2.innerHTML = '';
})