const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');

const paragraph = document.getElementById('firstParagraph');
const buttonToChnageTextColour = document.getElementById('changeColour');

function greet() {
    const name = nameInput.value;
    // if (name == 'Ivan') {
    //     buttonToChnageTextColour.removeEventListener('click',greet);
    // }
    alert (`Hello ${name}`);
}

greetButton.onclick = greet;


buttonToChnageTextColour.addEventListener('click', function() {
    paragraph.style.color = 'red';
})

buttonToChnageTextColour.addEventListener('click', greet);

buttonToChnageTextColour.removeEventListener('click',greet);

////////////////////////////////////////////////////////////////////////////////

const addNameFromInput = document.getElementById('addNameInput');
const buttonName = document.getElementById('addNameFromInput');
const divListOfInputs = document.getElementById('listOfAllNamesAdded');

buttonName.addEventListener('click', function() {
    if (!addNameFromInput.value) return;
    divListOfInputs.innerHTML = `<h3>${addNameFromInput.value}`
    addNameFromInput.value = '';
})

