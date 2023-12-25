const user = {
    userName: 'Basho123',
    passWord: '123456',
    email: 'jamandilovski@gmail.com'
}

console.log(user);

const userToJson = JSON.stringify(user); //stringify e vgradena metoda sho pretvara objekt vo string sho gi sledi pravilata na json formatot
console.log(userToJson);

const userJsonToObject = JSON.parse(userToJson); //vgradena metoda shto konvertira string vo objekt !!!(mora da ima validen JSON string)!!!
console.log(userJsonToObject);

//Local Storage

// localStorage.setItem
// localStorage.getItem
// localStorage.clear

// Vaka se setira item vo local storage
localStorage.setItem('userBasho', userToJson);

// kako da se zeme itemot od local storage?

const userFromLocalStorage = JSON.parse(localStorage.getItem('userBasho'));
console.log(userFromLocalStorage);

//Session Storage

// sessionStorage.getItem
// sessionStorage.setItem

const user2 = {
    userName: 'fico123',
    password: '123123',
    email: 'ficozlatanovski@gmail.com'
}

sessionStorage.setItem('userFico', JSON.stringify(user2));

const user2FromSessionStorage = JSON.parse(sessionStorage.getItem('userFico'));
console.log(user2FromSessionStorage);
let mainContainer = document.getElementById('mainContainer');

fetch ('https://swapi.dev/api/people/1')

.then((data) => {
    data.json()
        .then(res => {
            console.log(res);
            mainContainer.innerHTML += `<h1>${res.name}</h1>`
        })
})

let buttonToPress = document.getElementById('api');

function fetchApi() {
    fetch ('https://swapi.dev/api/people/1')
    .then((data) => {
        data.json()
            .then(res => {
                mainContainer.innerHTML += `<h1>${res.name}</h1>`
            })
    })
}

buttonToPress.addEventListener('click', fetchApi)

//OVA DOLE E JSDOC

// /**
//  * 
//  * @param {HTMLElement} container a valid HTML container
//  * @param {Object} person a person from the swapi web page
//  */

// function printPerson (container, person) {
//     const name = person.name;
//     const age = person.birth_year;
//     const mass = person.mass;

//     container.innerHTML += `
//     <div class = "card">
//         <h2>Name: ${name}</h2>
//         <p>Birth Year: ${age}</p>
//         <p>Mass: ${mass}</p>
//     </div>
//     `
// }

// const printAllPeopleButton = document.getElementById('printAllPeople');

// printAllPeopleButton.addEventListener('click', () => (
//     fetch ('https://swapi.dev/api/people')
//         .then (data => data.json())
//             .then (res => {
//                 console.log(res.results);

//                 for (let i = 0; i < res.results.length; i++) {
//                     const result = res.results[i];
//                     printPerson(mainContainer, result)
//                 }
//             })
// ))

const secondContainer = document.getElementById('secondContainer');
const buttonToPress2 = document.getElementById('starship');

/**
 * 
 * @param {HTMLElement} container second container
 * @param {*Object} starship staship from web-page
 */

function printStarships(container ,starship) {
    const name = starship.name;
    const model = starship.model;
    const manufacturer = starship.manufacturer;
    const crew = starship.crew;

    container.innerHTML += `
    <div>
        <h2>Name of the starship: ${name}</h2>
        <h4>Name of the model of the starship: ${model}</h4>
        <h4>Manufacturer: ${manufacturer}</h4>
        <h4>Crew: ${crew}</h4>
    </div>
    `
}

buttonToPress2.addEventListener('click', () => {
    fetch ('https://swapi.dev/api/starships/')
        .then (data => data.json())
            .then (res => {
                console.log(res.results);

                for (let j = 0; j < res.results.length; j++) {
                    const result2 = res.results[j];
                    printStarships(secondContainer, result2)
                }
            })
})

