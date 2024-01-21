const input = document.querySelector('.input');
const button = document.querySelector('.btn');

const movieArray = ['Hunger Games', 'The Hobbit', 'Lord of the Rings', 'Cars 3', 'Cars 2', 'Cars'];
let isFound = false;


function movieRent(movieArray) {
    // for (let i = 0; i < movieArray.length; i++) {

    //     if (input.value === movieArray[i]) {
    //         document.body.innerHTML += `<h1>The movie can be rented.</h1>`;
    //         document.body.style.color = 'green';
    //         break;
    //     }
    //     else {
    //         document.body.innerHTML += `<h1>The movie can't be rented.</h1>`;
    //         document.body.style.color = 'red';
    //         break;
    //     }
    // }


    for (const movie of movieArray) {
        if (movie.toLowerCase() == input.value.toLowerCase()) {
            isFound = true;
        }
    }

    if (isFound) {
        document.body.innerHTML += `<h1>The movie can be rented.</h1>`;
        document.body.style.color = 'green';
    } else {
        document.body.innerHTML += `<h1>The movie can't be rented.</h1>`;
        document.body.style.color = 'red';
    }

}

button.addEventListener('click', () => {
    movieRent(movieArray);
})