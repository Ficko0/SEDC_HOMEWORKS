let header = document.getElementById('header');
header.innerText = 'Weather App';

let greeting = document.getElementById('greeting');
greeting.innerText = 'Welcome to the weather App';

let statsDiv = document.querySelector('#stats');
let tableForTemp = document.querySelector('.table');
let infoTable = document.querySelector('.infoTable');

let navbarService = {
    navigationLink: document.getElementsByClassName('nav-link'),
    pages: document.getElementsByClassName('page'),
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchBtn'),

    displayPage: function (index) {

        for (let page of this.pages) {
            page.style.display = 'none';
        }
        this.pages[index].style.display = 'block';
    },

    pageClickHandler: function () {

        for (let i = 0; i < this.navigationLink.length; i++) {
            this.navigationLink[i].addEventListener('click', () => {
                navbarService.displayPage(i);
            })
        }

        this.searchButton.addEventListener('click', () => {
            this.fetchApi();
        })
    },

    fetchApi: async function () {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.searchInput.value}&units=metric&APPID=f22e58ebef49fa008b2a638ddb1a7d3b`)
            .then(data => data.json())
            .then(res => {
                console.log(res);
                const empt = [];
                const empt2 = [];
                let maxTemp;
                let minTemp;
                let avgTempSum = 0;
                let avarage = 0;
                for (let max of res.list) {
                    empt.push(max.main.temp_max);
                    maxTemp = Math.max(...empt);
                }
                for (let min of res.list) {
                    empt2.push(min.main.temp_min);
                    minTemp = Math.min(...empt2);
                }
                for (let avg of res.list) {
                    avgTempSum += avg.main.temp;
                }
                infoTable.innerHTML = `
                <td>${Math.round(maxTemp)}°C / ${Math.round (minTemp)}°C / ${Math.round(avarage)}°C</td>`
            })
    }
}

navbarService.pageClickHandler();
