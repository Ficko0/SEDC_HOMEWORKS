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
const both = document.getElementById('both');
const horsePowerRange = document.getElementById('horsePowerRange');
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

async function fetchFilteredItems () {
    tableAddContent.innerHTML = '';
    const response = await fetch ('https://raw.githubusercontent.com/Ficko0/SEDC_HOMEWORKS/main/Advanced%20JS%20Homeworks/cars.json');
    const cars = await response.json()
    createTable();

    let filteredItems = cars.filter (car => (!selectorByType.value || car.type === selectorByType.value)
                                         && (!selectorByBrand.value || car.brand === selectorByBrand.value));

    const filterByDoors = selectorByDoors.value;
    if (filterByDoors !== '') {
        filteredItems = filteredItems.filter (car => car.doors == filterByDoors);
    }

    const filterByGasType = selectorByGasType.value;
    if (filterByGasType !== '') {
        filteredItems = filteredItems.filter (car => car.gasType == filterByGasType);
    }

    const filterByColor = selectorByColor.value;
    if (filterByColor !== '') {
        filteredItems = filteredItems.filter (car => car.color == filterByColor);
    }

    filteredItems = filteredItems.filter (car => {
        if (isNew.checked && car.isNew) {
            return true;
        }
        if (isOld.checked && !car.isNew) {
            return true;
        }
        if (!isNew.checked && !isOld.checked) {
            return true;
        }
    })

    const filterByHorsePower = horsePowerRange.value;
    if (filterByHorsePower !== '') {
        filteredItems = filteredItems.filter (car => car.horsepower == parseInt(filterByHorsePower));
    }

    filteredItems.map(car => createBody(car));
}

async function searchModel () {
    tableAddContent.innerHTML = '';
    return fetch ('https://raw.githubusercontent.com/Ficko0/SEDC_HOMEWORKS/main/Advanced%20JS%20Homeworks/cars.json')
        .then (data => data.json())
            .then (res => {
                let searchValue = searchBar.value;
                let searchInput = res.filter (car => car.model.toLowerCase() === searchValue.toLowerCase() || car.brand.toLowerCase() === searchValue.toLowerCase());

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

showCarsButton.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await fetchFilteredItems();
})

hideCarsButton.addEventListener('click', async () => {
    tableAddContent.innerHTML = '';
    tableAddContent.style.display = 'none';
    dangerDiv.style.display = 'none';
})

refreshPage.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await showCarsInTable();
})