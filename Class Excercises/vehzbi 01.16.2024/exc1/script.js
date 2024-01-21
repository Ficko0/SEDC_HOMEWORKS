function changeColor () {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.innerHTML = `<h1>rgb: ${red}, ${green}, ${blue}</h1>`
    document.body.style.textAlign = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
}

changeColor();