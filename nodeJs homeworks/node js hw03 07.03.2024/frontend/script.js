const div = document.querySelector('.toWrite');

function fetchAPI() {
    fetch('http://localhost:3000/api/trainers')
        .then(data => data.json())
        .then(res => {
            res.forEach(trainer => div.innerHTML += `
                <h1>${trainer.name} ${trainer.lastName}</h1>
                <h2>E-mail: ${trainer.email}</h2>
                <h2>Time Employed: ${trainer.timeEmployed}</h2>
                <h3>Trainer ID: ${trainer.id}</h3>`
            )
        })
}

fetchAPI();