const showCarsButton = document.querySelector('.showCars');
const hideCarsButton = document.querySelector('.hideCars');
const divToCreate = document.querySelector('.toCreate');
const organiseDiv = document.querySelector('.organise');
const refreshPage = document.querySelector('.refreshPage');
const tableAddContent = document.querySelector('.tableAddContent');
const optionSelectType = document.querySelector('.optionSelectType');
const optionSelectBrand = document.querySelector('.optionSelectBrand');
const filteredResultsBtn = document.querySelector('.showFilteredResults');
const selectorByType = document.getElementById('selectorByType');
const selectorByBrand = document.getElementById('selectorByBrand');
const selectorByGasType = document.getElementById('selectorByGasType');
const selectorByDoors = document.getElementById('selectorByDoors');
const selectorByColor = document.getElementById('selectorByColor');
const isNew = document.getElementById('isNew');
const isOld = document.getElementById('isOld');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const dangerDiv = document.querySelector('.displayNone');

function createTable() {
    tableAddContent.innerHTML += `
    <thead>
    <tr>
        <th scope="col">Type</th>
        <th scope="col">Brand</th>
        <th scope="col">Model</th>
        <th scope="col">Doors</th>
        <th scope="col">Gas Type</th>
        <th scope="col">Color</th>
        <th scope="col">isNew</th>
        <th scope="col">Horsepower</th>
    </tr>
    </thead>
<tbody>`
}

function createBody(car) {
    tableAddContent.innerHTML += `
    <tbody>
        <tr>
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.doors}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.isNew}</td>
            <td>${car.horsepower}</td>
        </tr>
    </tbody>`
}

async function showCarsInTable() {
    tableAddContent.innerHTML = '';
    return fetch('https://raw.githubusercontent.com/Ficko0/SEDC_HOMEWORKS/main/Advanced%20JS%20Homeworks/cars.json')
        .then(data => data.json())
        .then(res => {
            createTable();
            res.forEach(car => createBody(car));
        })
}

async function showFilteredItems() {
    tableAddContent.innerHTML = '';
    return fetch('https://raw.githubusercontent.com/Ficko0/SEDC_HOMEWORKS/main/Advanced%20JS%20Homeworks/cars.json')
        .then(data => data.json())
        .then(res => {
            let byType = res.filter(car => car.type === selectorByType.value);
            let byBrand = res.filter(car => car.brand === selectorByBrand.value);
            let byGas = res.filter(car => car.gasType === selectorByGasType.value);
            let byDoors = res.filter (car => car.doors.toString() === selectorByDoors.value);
            let byColor = res.filter (car => car.color === selectorByColor.value);
            let byAge;
            createTable();
            if (selectorByType.value === '' && selectorByBrand.value === '' && selectorByColor.value === '' && selectorByDoors.value === '' && selectorByGasType.value === '') {
                dangerDiv.style.display = 'block';
                tableAddContent.innerHTML = '';
            }

            if (selectorByType.value !== '') {
                byType.map (car => createBody(car));
            }

            if (selectorByBrand.value !== '') {
                byBrand.map (car => createBody(car));
            }

            if (selectorByGasType.value !== '') {
                byGas.map (car => createBody(car));
            }

            if (selectorByDoors.value !== '') {
                byDoors.map (car => createBody(car));
            }

            if (selectorByColor.value !== '') {
                byColor.map (car => createBody(car));
            }

            if (isNew.checked && isNew.value == true) {
                byAge.filter (car => car.isNew == isNew.value).map (car => createBody(car));
            }
            if (isOld.checked && isOld.value == false) {
                byAge.filter (car => car.isNew == isOld.value).map (car => createBody(car));
            }
        })
}

async function searchModel () {
    tableAddContent.innerHTML = '';
    return fetch ('https://raw.githubusercontent.com/Ficko0/SEDC_HOMEWORKS/main/Advanced%20JS%20Homeworks/cars.json')
        .then (data => data.json())
            .then (res => {
                let searchInput = res.filter (car => car.model.toLowerCase() === searchBar.value.toLowerCase() || car.brand.toLowerCase() === searchBar.value.toLowerCase());

                if (searchBar.value === '') {
                    dangerDiv.style.display = 'block';
                    tableAddContent.innerHTML = '';
                }
                else {
                    createTable();
                    searchInput.map (car => createBody(car));
                }
            })
}

searchBtn.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await searchModel();
})

filteredResultsBtn.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await showFilteredItems();
})

showCarsButton.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await showCarsInTable();
})

hideCarsButton.addEventListener('click', async () => {
    tableAddContent.innerHTML = '';
    tableAddContent.style.display = 'none';
    dangerDiv.style.display = 'none';
})

refreshPage.addEventListener('click', async () => {
    tableAddContent.innerHTML = '';
    tableAddContent.style.display = 'none';
    dangerDiv.style.display = 'none';
})