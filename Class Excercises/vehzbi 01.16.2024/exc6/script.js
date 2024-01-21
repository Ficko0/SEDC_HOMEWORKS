const btn = document.querySelector('.btn');
const table = document.querySelector('.toCreate');
const h1Div = document.querySelector('.h1')
const forAllButton = document.querySelector('.forAll');
const table2 = document.querySelector('.create2');
const nextButton = document.querySelector('.next');

btn.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/1')
        .then(data => data.json())
        .then(res => {
            table.innerHTML += `
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Height</td>
                        <td>Mass</td>
                        <td>Eye color</td>
                        <td>Hair Color</td>
                        <td>Gender</td>
                        <td>Skin Color</td>
                    </tr>

                    <tr>
                        <td>${res.name}</td>
                        <td>${res.height}</td>
                        <td>${res.mass}</td>
                        <td>${res.eye_color}</td>
                        <td>${res.hair_color}</td>
                        <td>${res.gender}</td>
                        <td>${res.skin_color}</td>
                    </tr>
                </tbody>`
        })
})

forAllButton.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/')
        .then(data => data.json())
        .then(res => {
            table2.innerHTML += `
                <tbody>    
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Height</b></td>
                        <td><b>Mass</b></td>
                        <td><b>Eye color</b></td>
                        <td><b>Hair Color</b></td>
                        <td><b>Gender</b></td>
                        <td><b>Skin Color</b></td>
                    </tr>`
            for (let name of res.results) {
                table2.innerHTML += `
                    <tbody>

                    <tr>
                        <td>${name.name}</td>
                        <td>${name.height}</td>
                        <td>${name.mass}</td>
                        <td>${name.eye_color}</td>
                        <td>${name.hair_color}</td>
                        <td>${name.gender}</td>
                        <td>${name.skin_color}</td>
                    </tr>
                </tbody>`
            }
        })
})

const table3 = document.querySelector('.create3');
const errorDiv = document.querySelector('.error');

nextButton.addEventListener('click', () => {
    fetch ('https://swapi.dev/api/people/')
        .then (data => data.json())
            .then (result => {
                for (let i = 0; i < result.next; i++) {
                    if (result.next === null) {
                        errorDiv.innerHTML += `<h1>No more pages</h1>`
                    }
                    else {
                        create3.innerHTML += `
                        <tbody>
                            <tr>
                                <td>${result.results}</td>
                            </tr>
                        </tbody>
                        `
                    }
                }
            })
})