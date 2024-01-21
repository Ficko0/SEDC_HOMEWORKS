const colorInput = document.querySelector('.colorInput');
const fontSizeInput = document.querySelector('.fontSizeInput');
const textInput = document.querySelector('.textInput');
const btn = document.querySelector('.submit');

function changeFontSize() {
    if (`${fontSizeInput.value}` == '' || `${fontSizeInput.value}` <= 0) {
        alert('Please enter a bigger number or type something in the field');
    }
    document.body.style.fontSize = `${fontSizeInput.value}px`;
}

function changeColor() {
    if (`${colorInput.value}` == '') {
        alert('Please type in something.');
    }
    document.body.style.color = colorInput.value;
}

function takeText() {
    if (`${textInput.value}` == '') {
        alert('Please type something.');
    }
    document.body.innerHTML = `<h1>${textInput.value}</h1>`
}

btn.addEventListener('click', () => {
    takeText();
    changeFontSize();
    changeColor();
})