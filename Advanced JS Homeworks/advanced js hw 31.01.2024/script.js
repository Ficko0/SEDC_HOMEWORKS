const divToWrite = document.querySelector('.toWrite');

// async function getId () {
//     let fetchResponse = fetch ('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await fetchResponse.json();
//     divToWrite.innerHTML += `<p>ID: ${data.id}</p>
//     <p>Title: ${data.title}</p>`
//     console.log(await (data.completed));
// }

// getId();

async function getId () {
    fetch ('https://jsonplaceholder.typicode.com/todos/1')
        .then (data => data.json())
            .then (res => {
                divToWrite.innerHTML += `<p>ID: ${res.id}</p>
                <p>Title: ${res.title}</p>`
                console.log(res.completed);
            })
}

getId();