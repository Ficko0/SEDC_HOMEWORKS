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
            createTable();
            let test = res.filter(car => car.type === selectorByType.value && car.brand === selectorByBrand.value);
            let test1 = res.filter(car => car.type === selectorByType.value);
            let test2 = res.filter(car => car.brand === selectorByBrand.value);

            if (selectorByBrand.value !== '' && selectorByType.value !== '') {
                test.map(car => createBody(car));
            }
            else if (selectorByBrand.value !== '' && selectorByType.value === '') {
                test2.map(car => createBody(car));
            }
            else if (selectorByType.value !== '' && selectorByBrand.value === '') {
                test1.map(car => createBody(car));
            }
        })
}


filteredResultsBtn.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await showFilteredItems();
})

showCarsButton.addEventListener('click', async () => {
    tableAddContent.style.display = 'block';
    await showCarsInTable();
})

hideCarsButton.addEventListener('click', async () => {
    tableAddContent.style.display = 'none';
})

refreshPage.addEventListener('click', async () => {
    tableAddContent.style.display = 'none';
})