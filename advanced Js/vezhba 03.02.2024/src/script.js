const europeBtn = document.getElementById('europeBtn');
const asiaBtn = document.getElementById('asiaBtn');
const africaBtn = document.getElementById('africaBtn');
const nAmericaBtn = document.getElementById('nAmericaBtn');
const sAmericaBtn = document.getElementById('sAmericaBtn');
const australiaBtn = document.getElementById('australiaBtn');
const moreThan100MilBtn = document.getElementById('100milBtn');
const divToDisplay = document.querySelector('.toDisplay');
const searchBtn = document.getElementById('searchBtn');
const inputCountry = document.getElementById('inputCountry');
const refresh = document.querySelector('.refresh');
const showAllCountries = document.querySelector('#showAllCountries');

async function filterPrinter(countryName) {
    divToDisplay.innerHTML = ''
    return fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(res => {
            res.filter(country => country.region === countryName)
                .forEach(country => divToDisplay.innerHTML += `
                <div style="padding: 0.8rem;">
                    <div class="card" style="width: 18rem; padding: 0.8rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                        </div>
                    </div>
                </div>`)
        })
}

async function filter() {
    divToDisplay.innerHTML = '';
    return fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(res => {
            res.filter(countrySubregion => countrySubregion.subregion == 'North America' || countrySubregion.subregion == 'South America')
                .forEach(country => divToDisplay.innerHTML += `
                <div style="padding: 0.8rem;">
                    <div class="card" style="width: 18rem; padding: 1.2rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                        </div>
                    </div>
                </div>`)
        })
}

async function northAmerica() {
    divToDisplay.innerHTML = '';
    return fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(res => {
            res.filter(country => country.subregion === 'North America')
                .forEach(country => divToDisplay.innerHTML += `
                <div style="padding: 0.8rem;">
                    <div class="card" style="width: 18rem; padding: 0.8rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                        </div>
                    </div>
                </div>`)
        })
}

async function southAmerica() {
    divToDisplay.innerHTML = '';
    return fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(res => {
            res.filter(country => country.subregion === 'South America')
                .forEach(country => divToDisplay.innerHTML += `
            <div style="padding: 0.8rem;">
                <div class="card" style="width: 18rem; padding: 0.8rem;">
                    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                    </div>
                </div>
            </div>`)
        })
}

async function moreThan100Million() {
    divToDisplay.innerHTML = '';
    return fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(res => {
            res.filter(population => population.population >= 100000000)
                .forEach(country => divToDisplay.innerHTML += `
                <div style="padding: 0.8rem;">
                    <div class="card" style="width: 18rem; padding: 0.8rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                        </div>
                    </div>
                </div>`)
        })
}

europeBtn.addEventListener('click', async () => {
    await filterPrinter(europeBtn.textContent);
})

asiaBtn.addEventListener('click', async () => {
    await filterPrinter(asiaBtn.textContent);
})

africaBtn.addEventListener('click', async () => {
    await filterPrinter(africaBtn.textContent);
})

nAmericaBtn.addEventListener('click', async () => {
    await filter(nAmericaBtn.textContent);
})

sAmericaBtn.addEventListener('click', async () => {
    await filter(sAmericaBtn.textContent);
})

australiaBtn.addEventListener('click', async () => {
    await filterPrinter('Oceania');
})

moreThan100MilBtn.addEventListener('click', async () => {
    await moreThan100Million();
})

searchBtn.addEventListener('click', async () => {
    divToDisplay.innerHTML = '';
    return fetch(`https://restcountries.com/v3.1/name/${inputCountry.value}`)
        .then(data => data.json())
        .then(res => {
            res.forEach(country => divToDisplay.innerHTML += `
                <div style="padding: 0.8rem;">
                    <div class="card" style="width: 18rem; padding: 0.8rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${country.name.common}</h5>
                                <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital}</p>
                            </div>
                    </div>
                </div>`)
        })
})

refresh.addEventListener('click', async () => {
    divToDisplay.innerHTML = '';
    await checkForEmptyInput();
})
