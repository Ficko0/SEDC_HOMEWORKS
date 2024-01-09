const input  = document.querySelector('input');
const button = document.getElementById('addTask');
const list = document.getElementById('list');
const toDo = [];

function renderToDoList (toDoList) {
    list.innerHTML = '';
    for (let i = 0; i < toDoList.length; i++) {
        let toDo = toDoList[i];
        let listItem = document.createElement('li');
        let input = document.createElement('input');

        input.type = 'checkbox';
            input.checked = toDo.isCompleted;

        input.addEventListener('change', () => {
            toDo[i].isCompleted = !toDo[i].isCompleted;
            renderToDoList[i].isCompleted;
        })

        if (toDo.isCompleted) {
            listItem.style.textDecoration = 'line-through';
        }

        let toDoText = document.createTextNode(toDo.name);
        listItem.appendChild(input);
        listItem.appendChild(toDoText);

        list.appendChild(listItem);

        // list.innerHTML += `<li>${toDo.name}</li>`
    }
}

button.addEventListener('click', () => {

    let value = {
        name: input.value,
        isCompleted: false
    };

    toDo.push(value);
    renderToDoList(toDo);
    input.value = '';
})

