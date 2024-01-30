let header = document.getElementById('header');
header.innerText = 'Weather App';

let greeting = document.getElementById('greeting');
greeting.innerText = 'Welcome to the weather App';

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
            console.log(this.searchInput.value);
        })
    }


}

navbarService.pageClickHandler();